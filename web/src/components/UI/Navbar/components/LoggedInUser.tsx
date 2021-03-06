import { PrivateUser } from 'types/graphql'
import { useAuth } from '@redwoodjs/auth'
import ButtonSecondary from '../../blocks/buttons/ButtonSecondary'
interface Props {
  user: PrivateUser
}

const LoggedInUser = ({ user }: Props) => {
  const { logOut } = useAuth()
  const Logout = () => {
    return <ButtonSecondary onClick={logOut}>Logout</ButtonSecondary>
  }

  return (
    <div className="flex items-center">
      <span className="mr-2 font-semibold">{user.username}</span>
      <Logout />
    </div>
  )
}

export default LoggedInUser
