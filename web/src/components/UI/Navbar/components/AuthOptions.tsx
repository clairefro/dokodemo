import { routes, navigate } from '@redwoodjs/router'
import ButtonPrimary from '../../blocks/buttons/ButtonPrimary'
import ButtonSecondary from '../../blocks/buttons/ButtonSecondary'

const AuthOptions = () => {
  return (
    <div>
      <ButtonSecondary
        className="mr-2"
        onClick={() => navigate(routes.login())}
      >
        Login
      </ButtonSecondary>
      <ButtonPrimary onClick={() => navigate(routes.signup())}>
        Signup
      </ButtonPrimary>
    </div>
  )
}

export default AuthOptions
