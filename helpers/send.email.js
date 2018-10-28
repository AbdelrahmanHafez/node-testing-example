const request = require('superagent');
const { notificationsServerIP } = process.env;

async function sendEmail ({ message, recepient }) {
  await request.post(`${notificationsServerIP}/send-email`).send({ message, recepient });
}

module.exports = sendEmail;