import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

//pages
import Home from '../pages/Home'
import About from '../pages/About'
import Leasing from '../pages/Leasing'
import Error404 from '../components/Error/Error404'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/leasing" element={<Leasing />} />
      <Route path="*" element={<Error404 />} />
    </Route>
  )
)

function Routing() {
  return <RouterProvider router={router} />
}

export default Routing
