import LandingPage from '../pages/Home'
import Menu from '../pages/Menu'
import BookTable from '../pages/BookTable'



//public route
const publicRoutes = [
    { path: '/', component: LandingPage},
    { path: '/menu', component: Menu},
    { path: '/booktable', component: BookTable, layout: null},


]

const privateRoutes = []

export {publicRoutes, privateRoutes}