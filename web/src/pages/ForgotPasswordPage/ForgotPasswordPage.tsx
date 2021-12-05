import { useEffect, useRef } from 'react'
import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { Form, Label, TextField, FieldError } from '@redwoodjs/forms'
import FormContainer from '../../components/UI/blocks/forms/FormContainer'
import ButtonPrimary from '../../components/UI/blocks/buttons/ButtonPrimary'

const ForgotPasswordPage = () => {
  const { isAuthenticated, forgotPassword } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const usernameRef = useRef<HTMLInputElement>()
  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await forgotPassword(data.username)

    console.log({ response })

    if (response.error) {
      toast.error(response.error)
    } else {
      // The function `forgotPassword.handler` in api/src/functions/auth.js has
      // been invoked, let the user know how to get the link to reset their
      // password (sent in email, perhaps?)
      toast.success(
        'A link to reset your password was sent to ' + response.email
      )
      navigate(routes.login())
    }
  }

  return (
    <>
      <MetaTags title="Forgot Password" />

      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <FormContainer formTitle="Forgot Password">
        <Form onSubmit={onSubmit} className="rw-form-wrapper">
          <div className="text-left">
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
                required: true,
              }}
            />

            <FieldError name="username" className="rw-field-error" />
          </div>

          <div className="rw-button-group">
            <ButtonPrimary type="submit">Submit</ButtonPrimary>
          </div>
        </Form>
      </FormContainer>
    </>
  )
}

export default ForgotPasswordPage
