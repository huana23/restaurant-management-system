import LandingPage from '../pages/Home'
import Menu from '../pages/Menu'
import BookTable from '../pages/BookTable'
import About from '../pages/About'
import Login from '../pages/Login'





//public route
const publicRoutes = [
    { path: '/', component: LandingPage},
    { path: '/menu', component: Menu},
    { path: '/about', component: About},
    { path: '/booktable', component: BookTable, layout: null},
    { path: '/login', component: Login, layout: null},



]

const privateRoutes = []

export {publicRoutes, privateRoutes}