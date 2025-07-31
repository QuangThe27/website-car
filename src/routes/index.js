import Home from '../pages/users/Home/Home';
import Login from '../pages/users/Login/Login';
import UsersManage from '../pages/manages/UsersManage/UsersManage';

export const UserRoutes = [
    {
        path: '/',
        page: Home,
        isShowHeader: true,
        isShowFooter: true,
    },
    {
        path: '/login',
        page: Login,
        isShowHeader: false,
        isShowFooter: false,
    }
]

export const ManageRoutes = [
    {
        path: '/admin/users',
        page: UsersManage,
        isManageRoute: true,
    }
]

export const routes = [
    ...UserRoutes,
    ...ManageRoutes,
    {
        path: '*',
        // page: NotFoundPage
        isShowHeader: false,
        isShowFooter: false,
    }
];