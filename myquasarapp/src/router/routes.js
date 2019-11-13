
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/login', component: () => import('components/login/Login.vue'), meta: {  } },
      { path: '/register', component: () => import('components/register/Register.vue'), meta: { } },
      { path: '/index', component: () => import('pages/Index.vue'), meta: { requiresAuth: true } }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
