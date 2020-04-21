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

/* Function to format info provided by user into an email and
send the email using the bistro email account */
exports.email = functions.https.onCall(({ name, email, date }) => {
  // Format date and time with regard to weird timezone issues
  const adjustedDate = new Date(date);
  adjustedDate.setTime(adjustedDate.getTime() + adjustedDate.getTimezoneOffset() * 60 * 1000);
  const dateString = `${months[adjustedDate.getMonth()]} ${adjustedDate.getDate()}`;
  const timeString = adjustedDate.toTimeString().substr(0, 5);

  // Format email
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

  // Initialise transporter
  const transporter = nodemailer.createTransport({ service: 'gmail', auth });

  // Set transporter options
  const options = {
    to: email,
    from: auth.user,
    subject: `Booking confirmation for ${dateString} at The Bistro`,
    text,
    html,
  };

  // Send email
  transporter.sendMail(
    options, (error, data) => (error ? console.log(error) : console.log(data)),
  );
});
