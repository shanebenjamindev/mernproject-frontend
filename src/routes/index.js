import { Route } from 'react-router-dom';
import { lazy } from 'react';

const routes = [
    {
        path: "",
        element: lazy(() => import("../components/DefaultComponent/DefaultComponent")),
        nested: [
            {
                path: "/",
                element: lazy(() => import("../pages/Home")),
            },
            {
                path: "/order",
                element: lazy(() => import("../pages/Order")),
            },
            {
                path: "/account",
                element: lazy(() => import("../pages/Account")),
            },
        ]
    },
]

const renderRoutes = () => {
    return routes.map((route) => {
        if (route.nested) {
            return (
                <Route key={route.path} path={route.path} element={<route.element />}>
                    {route.nested.map((item) => {
                        return <Route key={item.path} path={item.path} element={< item.element />} />
                    })}
                </Route>
            )
        } else {
            return <Route key={route.path} path={route.path} element={< route.element />} />
        }
    })
}
export default renderRoutes;