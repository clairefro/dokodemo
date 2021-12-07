import { FC } from 'react'
import { Form, FormError, FieldError, Label, TextField } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import ButtonPrimary from '../../UI/blocks/buttons/ButtonPrimary'
import { Demo } from 'types/graphql'

interface Props {
  spaceId: string
  demo?: Demo
  loading?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSave: (input: any, id?: string) => void
}

const DemoForm: FC<Props> = (props) => {
  const { spaceId } = props
  const { currentUser } = useAuth()

  const onSubmit = (data) => {
    data = {
      ...data,
      spaceId,
      userId: currentUser.id,
    }
    props.onSave(data, props?.demo?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>
        <TextField
          name="title"
          defaultValue={props.demo?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="title" className="rw-field-error" />

        <Label
          name="url"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Loom Url
        </Label>
        <TextField
          name="url"
          defaultValue={props.demo?.url}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          placeholder="https://www.loom.com/share/abcxyz"
          validation={{
            required: true,
            pattern: {
              value: /^https:\/\/www.loom.com\/share\//,
              message: 'Please enter a loom video URL',
            },
          }}
        />
        <FieldError name="url" className="rw-field-error" />

        <div className="rw-button-group">
          <ButtonPrimary type="submit" disabled={props.loading}>
            Submit
          </ButtonPrimary>
        </div>
      </Form>
    </div>
  )
}

export default DemoForm
