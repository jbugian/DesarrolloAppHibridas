
const routes = [
  {
    path: '/',
    redirect: '/index',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/login', component: () => import('components/login/Login.vue'), meta: {  } },
      { path: '/register', component: () => import('components/register/Register.vue'), meta: { } },
      { path: '/index', component: () => import('pages/Index.vue'), meta: { requiresAuth: true } },
      { path: '/games', component: () => import('components/games/Games.vue'), meta: { requiresAuth: true } },
      { path: '/addGame', component: () => import('components/games/AddGame.vue'), meta: { requiresAuth: true } },
      { path: '/users', component: () => import('components/users/Users.vue'), meta: { requiresAuth: true } }
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
