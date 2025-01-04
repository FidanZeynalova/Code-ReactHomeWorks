import NotFound from "../components/Admin/NotFound/NotFound";
import NotPage from "../components/User/NotPage/NotPage";
import Add from "../pages/admin/Add/Add";
import AdminDetail from "../pages/admin/AdminDetail/AdminDetail";
import AdminHome from "../pages/admin/AdminHome/AdminHome";
import AdminRoot from "../pages/admin/AdminRoot";
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import Edit from "../pages/admin/Edit/Edit";
import Basket from "../pages/user/Basket/Basket";
import Detail from "../pages/user/Detail/Detail";
import Favorites from "../pages/user/Favorites/Favorites";
import Home from "../pages/user/Home/Home";
import UserRoot from "../pages/user/UserRoot";



const ROUTES = [
    {
        path: "/",
        element: <UserRoot />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: "/favorites",
                element: <Favorites />
            },
            {
                path: "/basket",
                element: <Basket />
            },
            {
                path: "/:id",
                element: <Detail />
            },
            {
                path: "*",
                element: <NotPage />
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminRoot />,
        children: [
            {
                path: 'add',
                element: <Add />
            },
            {
                path: ':id',
                element: <AdminDetail />
            },
            {
                path: '',
                element: <AdminHome />
            },
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'edit/:id',
                element: <Edit />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
]


export default ROUTES