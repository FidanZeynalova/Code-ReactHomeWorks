import AddBook from "../pages/Admin/AddBook/AddBook";
import AdminRoot from "../pages/Admin/AdminRoot";
import AdminBookDetail from "../pages/Admin/BookDetail/AdminBookDetail";
import AdminBooks from "../pages/Admin/Books/AdminBooks";
import Dashboard from "../pages/Admin/Dasboard/Dashboard";
import EditBook from "../pages/Admin/EditBook/EditBook";
import Basket from "../pages/User/Basket/Basket";
import BookDetail from "../pages/User/BookDetail/BookDetail";
import Books from "../pages/User/Books/Books";
import Favorites from "../pages/User/Favorites/Favorites";
import Home from "../pages/User/Home/Home";
import NotFound from "../pages/User/NotFound/NotFound";
import UserRoot from "../pages/User/UserRoot";




const ROUTES = [
    {
        path: "/",
        element: <UserRoot />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/books",
                element: <Books />
            },
            {
                path: "/books/:id",
                element: <BookDetail />
            },
            {
                path: "/basket",
                element: <Basket />
            },
            {
                path: "/favorites",
                element: <Favorites />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminRoot />,
        children: [
            {
                path: "",
                element: <Dashboard />
            },
            {
                path: "books",
                element: <AdminBooks />
            },
            {
                path: "books/:id",
                element: <AdminBookDetail />
            },
            {
                path: "add",
                element: <AddBook />
            },
            {
                path: "edit/:id",
                element: <EditBook />
            }
        ]
    }
]

export default ROUTES