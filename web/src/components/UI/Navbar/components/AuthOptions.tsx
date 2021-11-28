import { Link, routes } from '@redwoodjs/router'

const AuthOptions = () => {
  return (
    <div>
      <Link to={routes.signup()}>Signup</Link>
      <Link to={routes.login()}>Login</Link>
    </div>
  )
}

export default AuthOptions
