import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import LoggedInUser from './components/LoggedInUser'
import AuthOptions from './components/AuthOptions'

const Navbar = () => {
  const { currentUser } = useAuth()
  return (
    <nav>
      <div className="flex justify-between bg-red-600">
        <Link to={routes.home()}>dokodemo</Link>
        {currentUser ? <LoggedInUser user={currentUser} /> : <AuthOptions />}
      </div>
    </nav>
  )
}

export default Navbar
