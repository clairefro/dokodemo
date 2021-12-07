import { Link, routes } from '@redwoodjs/router'
import { useRef } from 'react'
import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
} from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { useEffect } from 'react'
import FormContainer from '../../components/UI/blocks/forms/FormContainer'
import ButtonPrimary from '../../components/UI/blocks/buttons/ButtonPrimary'
import { useAuthWithRedirectTo } from '../../hooks/useAuthWithRedirectTo'
const LoginPage = () => {
  // const { isAuthenticated, logIn } = useAuth()
  const { redirectTo, logIn } = useAuthWithRedirectTo()

  const usernameRef = useRef<HTMLInputElement>()
  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await logIn({ ...data })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <MetaTags title="Login" />

      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <FormContainer formTitle="Login">
        <Form onSubmit={onSubmit} className="rw-form-wrapper">
          <Label
            name="username"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Username
          </Label>
          <TextField
            name="username"
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            ref={usernameRef}
            validation={{
              required: {
                value: true,
                message: 'Username is required',
              },
            }}
          />

          <FieldError name="username" className="rw-field-error" />

          <Label
            name="password"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Password
          </Label>
          <PasswordField
            name="password"
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            autoComplete="current-password"
            validation={{
              required: {
                value: true,
                message: 'Password is required',
              },
            }}
          />

          <div className="text-sm text-right">
            <Link to={routes.forgotPassword()} className="rw-forgot-link">
              Forgot Password?
            </Link>
          </div>

          <FieldError name="password" className="rw-field-error" />

          <div className="rw-button-group">
            <ButtonPrimary type="submit">Login</ButtonPrimary>
          </div>
        </Form>

        <div className="rw-login-link">
          <span>Don&apos;t have an account?</span>{' '}
          <Link to={routes.signup(redirectTo ? { redirectTo } : undefined)}>
            Sign up instantly!
          </Link>
        </div>
      </FormContainer>
    </>
  )
}

export default LoginPage
