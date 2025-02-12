
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/invitation/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/invitation/invitacion",
    "route": "/invitation"
  },
  {
    "renderMode": 2,
    "route": "/invitation/invitacion"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1862, hash: '042667b0194c95972118e9e85646c43eb8fed76056d77d76e3d5b63c1bd05d32', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2375, hash: '41c1fbf726f3539f430470316f5a045cd6b39f36b96d50cdc0562b9d1f36e10b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'invitacion/index.html': {size: 7837, hash: 'a018fbbb35a5a6cf755604351540331dd99d03c49478db29007021d68ebd9b1b', text: () => import('./assets-chunks/invitacion_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
