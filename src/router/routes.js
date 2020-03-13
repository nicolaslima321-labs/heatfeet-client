
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'login', path: '', component: () => import('pages/Login.vue') },
      { name: 'sign-up', path: 'sign-up', component: () => import('pages/Signup.vue') }
    ]
  },
  {
    path: '/panel',
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
