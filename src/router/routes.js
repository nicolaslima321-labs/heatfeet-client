
const routes = [
  {
    path: '/',
    component: () => import('layouts/PanelLayout.vue'),
    children: [
      { name: 'main', path: 'main', component: () => import('pages/MainPanel.vue') }
    ]
  },
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
