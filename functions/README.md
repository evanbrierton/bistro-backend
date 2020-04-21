# Web Design Project Report

> Evan Brierton - 19374423

> https://github.com/evanbrierton/bistro, https://github.com/evanbrierton/bistro-backend

## Design Decisions

For my project I decided to use a React-Firebase stack as this stack is very good for spinning up projects quickly, while also allowing them to scale if necessary with React’s highly maintainable MVC architecture and Firebase’s compatibility with the Google Cloud Platform.

Firebase specifically was chosen as a BaaS as it allowed me to manage hosting, database administration and backend functionality through NodeJS functions hosted at easily callable endpoints making building an internal API for my site’s booking system very convenient.

React allowed me to build flexible reusable components for the site which can be clearly seen in the form of Jumbotrons for text and other content as well as parallax scrolling image windows for aesthetics.

I also used Webpack to compile my application so it would run faster on deployment and used a service worker to cache static assets and make some portions of the site available offline.

---

## Design Process

From the outset I used the Airbnb JavaScript style guide so that my code was consistent and tidy, I also made sure throughout the design process to keep my site compliant with both Google Lighthouse recommendations and AxE accessibility requirements.

My initial goal was to split my site into five pages, Home, About, Book, Location and Menu, but unfortunately due to time constraints fell short of implementing the menu, the link remains on the navbar for symmetry but does not lead anywhere.

Although the site is technically split up into several distinct sections all of the content is present on the homepage, and links to the other pages are not visible on the mobile version. This is due to mobile interfaces providing less granular control, meaning it is beneficial to have as little clutter as possible when trying to use the site, especially when it can be done with no loss of availability of information.

The site is further divided into 12 components, half of which are dedicated to the booking form due to its disproportional requirements of both state and logic to the other parts of the site.

I attempted to follow Material Design guidelines as much as possible but was limited in terms of animations by my knowledge of CSS, this is something I would like to work on in the future.

---

### Sections

The about section is just two randomly generated paragraphs of text using the hipsum API.

The booking section includes a 3 page booking form with error-checking where the user inputs a date, time, name and email. This information is used to send them an email with a booking confirmation and also to make a database entry.

The location section contains a randomly generated paragraph of text alongside a Google Maps iframe targeting UCD.

---

### Extra Info

Every file is included in the submission except the `auth.json` file for the backend as it contains email credentials.

Access to the database can be granted on request.

Links to the GitHub repositories for both the front and back ends are provided above.

---

## Attributions

- React as a frontend framework.
- create-react-app for the service worker.
- Firebase for hosting and database.
- Nodemailer for mailing capabilities via node.
- react-day-picker for the calendar logic.
- The hipsum API for the randomly generated text.
- All images were sourced from Google Images under the “labelled for non-commercial reuse” usage policy with some edits applied by me using Pixelmator. (I know I should’ve been kept better track of the sources, it just got away from me.)