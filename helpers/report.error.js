const OperationalError = require('./operational.error');
const sendEmail = require('./send.email');

async function reportError (err, req, res) {
  if (res) res.json({ code: 0, message: err.message });

  if (err instanceof OperationalError) return;

  let parsedRequest;
  if (req) parsedRequest = parseRequest(req);

  await sendEmail({ message: parsedRequest, recepient: 'geeks@ourcompany.com' });
}

function parseRequest (req) {
  const { url, params, body, user } = req;

  return JSON.stringify({ url, params, body, user, timestamp: Date.now() });
}