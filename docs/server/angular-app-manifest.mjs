
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/invitacion",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/invitacion"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1852, hash: 'ac148c75b6f7199af9268b539ac43b1e574683c2a708a71c1351e6638a279738', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2365, hash: 'bed99bbb86357d36bec54aed1cf0d32db9a49790da03a62030e5bee9d31594b7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'invitacion/index.html': {size: 7827, hash: '7774fa074a38ba987dd2e14674637a6efff625ab976daac6e5a1e0a560300f72', text: () => import('./assets-chunks/invitacion_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
