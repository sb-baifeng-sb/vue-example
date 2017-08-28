const routers = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: function (resolve) {
            require(['./views/login.vue'], resolve);
        }
    },
    {
        path: '/register',
        component: function (resolve) {
            require(['./views/register.vue'], resolve);
        }
    },
    {
        path: '/forgot-password',
        component: function (resolve) {
            require(['./views/forgot-password.vue'], resolve);
        }
    }
];
export default routers;