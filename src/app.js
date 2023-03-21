/* eslint-disable no-console */
'use strict';

const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);

  const parts = normalizedURL.pathname.slice(1).split('/');
  const query = Object.fromEntries(normalizedURL.searchParams.entries());

  res.statusCode = 200;
  res.statusMessage = 'OK';

  const responseData = JSON.stringify({
    parts,
    query,
  });

  res.end(responseData);
});

server.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
