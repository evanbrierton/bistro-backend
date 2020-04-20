const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const auth = require('./auth.json');

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

exports.email = functions.https.onCall(({ name, email, date }) => {
  const dateString = `${months[new Date(date).getMonth()]} ${new Date(date).getDate()}`;
  const timeString = new Date(date).toLocaleTimeString().substr(0, 5);

  const html = `
    <h1>The Bistro</h1>
    <p>
      Dear <strong>${name}</strong> we look forward to seeing you for a delicious meal at <strong>The Bistro</strong>
      on ${dateString} at ${timeString}. Directions to find your way here are attached below!
    </p>
    <br />
    <h2>You can find us <a href="https://webdesign-bistro.web.app/location" target="_blank" rel="noopener noreferrer">here.</a></h2>
    <h2>For any more information visit our website <a href="https://webdesign-bistro.web.app" target="_blank" rel="noopener noreferrer">here.</a></h2>
  `;

  const text = `
    Dear ${name} we look forward to seeing you for a delicious meal at The Bistro on ${dateString} at ${timeString}.
    Instructions on where to find us can be found on our website at https://webdesign-bistro.web.app/location.
  `;

  const transporter = nodemailer.createTransport({ service: 'gmail', auth });

  const options = {
    to: email,
    from: auth.user,
    subject: `Booking confirmation for ${dateString} at The Bistro`,
    text,
    html,
  };

  transporter.sendMail(
    options, (error, data) => (error ? console.log(error) : console.log(data)),
  );
});
