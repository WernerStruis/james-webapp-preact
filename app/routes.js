import AppRoot from 'modules/AppRoot';
import Home from 'views/home';
import StoreList from 'views/storeList';
import StoreHome from 'views/storeHome';
export default [{
    component: AppRoot,
    routes: [
        {
            path: '/',
            exact: true,
            component: Home
        },
        {
            path: '/restaurants',
            exact: true,
            component: StoreList
        },
        {
            path: '/restaurants/:slug',
            component: StoreHome
        }
    ]
}]