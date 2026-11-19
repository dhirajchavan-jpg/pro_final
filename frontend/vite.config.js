import { defineConfig } from 'vite';

const pages = {
  workbench: { title: 'Tenderabl · Bid Evaluation', html: 'bid_workbench', js: 'bid-workbench', css: 'workbench-theme' },
  admin: { title: 'Tenderabl · Operations dashboard', html: 'admin_dashboard', js: 'admin-dashboard', css: 'admin-dashboard' },
};

function documentFor(page, script, stylesheet = '') {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${page.title}</title>${stylesheet}</head><body><div id="root"></div><script type="module" src="${script}"></script></body></html>`;
}

export default defineConfig(({ mode }) => {
  const name = mode === 'admin' ? 'admin' : 'workbench';
  const page = pages[name];
  const target = process.env.BACKEND_URL || 'http://127.0.0.1:8000';
  return {
    server: { host: '127.0.0.1', proxy: { '/v1': target, '/workbench': target, '/assets': target, '/health': target, '/ready': target } },
    plugins: [{
      name: 'workbench-pages',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          const path = (req.url || '/').split('?')[0];
          if (req.method !== 'GET' || !/^\/(?:$|workbench(?:\/(?:login|admin|ui\/[^/]+\/(?:tender|ledger|compliance|contract|bids|evaluate|results|report)))?\/?$)/.test(path)) return next();
          const entry = path === '/workbench/admin' ? 'admin' : 'workbench';
          try {
            if (entry === 'admin') {
              const check = await fetch(target + path, { headers: { cookie: req.headers.cookie || '', authorization: req.headers.authorization || '' }, redirect: 'manual' });
              if (!check.ok) { res.statusCode = check.status; res.end('Administrator access required.'); return; }
            }
            const html = await server.transformIndexHtml(path, documentFor(pages[entry], '/src/' + entry + '.jsx'));
            res.setHeader('Content-Type', 'text/html; charset=utf-8'); res.end(html);
          } catch (err) { next(err); }
        });
      },
      generateBundle() {
        this.emitFile({ type: 'asset', fileName: page.html + '.html', source: documentFor(page, '/assets/' + page.js + '.js', '<link rel="stylesheet" href="/assets/' + page.css + '.css">') });
      },
    }],
    build: {
      outDir: 'dist', emptyOutDir: false,
      lib: { entry: 'src/' + name + '.jsx', name: 'Tenderabl', formats: ['iife'], fileName: () => page.html + '.js', cssFileName: name === 'admin' ? 'admin_dashboard' : 'workbench_theme' },
    },
    define: { 'process.env.NODE_ENV': JSON.stringify(mode === 'development' ? 'development' : 'production') },
  };
});
