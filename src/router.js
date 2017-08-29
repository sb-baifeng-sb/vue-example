const routers = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: function (resolve) {
            require(['./views/main/login.vue'], resolve);
        }
    },
    {
        path: '/register',
        component: function (resolve) {
            require(['./views/main/register.vue'], resolve);
        }
    },
    {
        path: '/forgot-password',
        component: function (resolve) {
            require(['./views/main/forgot-password.vue'], resolve);
        }
    }
];
export default routers;