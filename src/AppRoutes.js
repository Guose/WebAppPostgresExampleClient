import { Counter } from './components/Counter'
import { Users } from './components/Users'
import { Home } from './components/Home'

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/counter',
        element: <Counter />
    },
    {
        path: '/user-data',
        element: <Users />
    }
]

export default AppRoutes