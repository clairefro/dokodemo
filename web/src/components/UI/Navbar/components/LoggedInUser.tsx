import { PrivateUser } from 'types/graphql'
import { useAuth } from '@redwoodjs/auth'

interface Props {
  user: PrivateUser
}

const LoggedInUser = ({ user }: Props) => {
  const { logOut } = useAuth()
  const Logout = () => {
    return <button onClick={logOut}>Logout</button>
  }

  return (
    <div>
      <p>{user.username}</p>
      <Logout />
    </div>
  )
}

export default LoggedInUser
