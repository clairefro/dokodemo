import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import LoggedInUser from './components/LoggedInUser'
import AuthOptions from './components/AuthOptions'

const Navbar = () => {
  const { currentUser } = useAuth()
  return (
    <nav className="shadow-xl w-full fixed z-50 bg-white">
      <div className="py-2 px-4 flex justify-between text-primary-500">
        <div className="flex items-center font-semibold text-xl">
          <Link to={routes.home()}>dokodemo</Link>
        </div>
        {currentUser ? <LoggedInUser user={currentUser} /> : <AuthOptions />}
      </div>
    </nav>
  )
}

export default Navbar
