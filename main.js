const { createServer } = require('http');
const { parse } = require('url');
const path = require('path');
const next = require('next');

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV === 'development';

// Automatically locate project root whether main.js is in root, .next, or dist
const projectDir =
  __dirname.endsWith('.next') || __dirname.endsWith('dist')
    ? path.resolve(__dirname, '..')
    : __dirname;

const app = next({ dev, dir: projectDir });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
}).catch((err) => {
  console.error('Error starting Next.js server:', err);
  process.exit(1);
});
