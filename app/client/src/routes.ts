import auth from '@/middleware/auth'
import AuthLayout from '@/views/layouts/Auth.vue'
import AdminLayout from '@/views/layouts/Admin.vue'
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: '/',

        redirect: {
            name: 'admin-dashboard'
        },

        meta: {
            middleware: [ auth ],
        },
    },

    {
        path: '/admin',
        component: AdminLayout,

        children: [
            {
                path: 'dashboard',
                name: 'admin-dashboard',
                component: () => import('@/views/admin/Dashboard.vue'),
            },

            {
                path: 'sessions',
                name: 'admin-sessions',
                component: () => import('@/views/admin/Sessions.vue'),
            },
        ],

        meta: {
            middleware: [ auth ],
        },
    },

    {
        path: '/auth',
        component: AuthLayout,

        children: [
            {
                path: 'login',
                name: 'auth-login',
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
