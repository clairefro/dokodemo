import { Form, FormError, FieldError, Label, TextField } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import ButtonPrimary from '../../UI/blocks/buttons/ButtonPrimary'
// const formatDatetime = (value) => {
//   if (value) {
//     return value.replace(/:\d{2}\.\d{3}\w/, '')
//   }
// }

const SpaceForm = (props) => {
  const { currentUser } = useAuth()

  const onSubmit = (data) => {
    data = {
      ...data,
      userId: currentUser.id,
    }
    props.onSave(data, props?.space?.id)
  }

  return (
    <Form onSubmit={onSubmit} className="" error={props.error}>
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
        defaultValue={props.space?.title}
        className="rw-input"
        errorClassName="rw-input rw-input-error"
        validation={{ required: true }}
      />
      <FieldError name="title" className="rw-field-error" />

      <div className="rw-button-group">
        <ButtonPrimary type="submit" disabled={props.loading}>
          Save
        </ButtonPrimary>
      </div>
    </Form>
  )
}

export default SpaceForm
