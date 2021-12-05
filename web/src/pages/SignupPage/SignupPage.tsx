import { Link, navigate, routes } from '@redwoodjs/router'
import { useRef } from 'react'
import {
  Form,
  Label,
  TextField,
  PasswordField,
  EmailField,
  FieldError,
} from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { useEffect } from 'react'
import ButtonPrimary from '../../components/UI/blocks/buttons/ButtonPrimary'
import FormContainer from '../../components/UI/blocks/forms/FormContainer'

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
    console.log({ isAuthenticated })
  }, [isAuthenticated])

  // focus on email box on page load
  const usernameRef = useRef<HTMLInputElement>()
  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await signUp({ ...data })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
    }
  }

  return (
    <>
      <MetaTags title="Signup" />

      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />

      <FormContainer formTitle="Signup">
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
          <Label
            name="email"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Email
          </Label>
          <EmailField
            name="email"
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{
              required: {
                value: true,
                message: 'Email is required',
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
          <FieldError name="password" className="rw-field-error" />

          <div className="rw-button-group">
            <ButtonPrimary type="submit">Sign Up</ButtonPrimary>
          </div>
        </Form>
      </FormContainer>

      <div className="rw-login-link">
        <span>Already have an account?</span>{' '}
        <Link to={routes.login()} className="rw-link">
          Log in!
        </Link>
      </div>
    </>
  )
}

export default SignupPage
