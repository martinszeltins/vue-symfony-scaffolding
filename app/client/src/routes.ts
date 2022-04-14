import auth from '@/middleware/auth'
import AdminLayout from '@/views/layouts/Admin.vue'
import AuthLayout from '@/views/layouts/Auth.vue'
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: '/',
        component: AdminLayout,

        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import('@/views/Dashboard.vue'),
            },
        ],

        meta: {
            middleware: [ auth ],
        },
    },

    {
        path: '/login',
        component: AuthLayout,

        children: [
            {
                path: '',
                name: 'login',
                component: () => import('@/views/auth/Login.vue'),
            }
        ],
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


/**
 * Route Middleware
 */

function nextFactory(context, middleware, index)
{
    const subsequentMiddleware = middleware[index]

    if (!subsequentMiddleware) return context.next

    return (...parameters) => {
        context.next(...parameters)
        const nextMiddleware = nextFactory(context, middleware, index + 1)
        subsequentMiddleware({ ...context, next: nextMiddleware })
    }
}

router.beforeEach((to, from, next) => {

    // Middleware
    if (to.meta.middleware)
    {
        const middleware = Array.isArray(to.meta.middleware)
            ? to.meta.middleware
            : [to.meta.middleware]

        const context = { from, next, router, to }
        const nextMiddleware = nextFactory(context, middleware, 1)

        return middleware[0]({ ...context, next: nextMiddleware })
    }

    return next();
})

export default router