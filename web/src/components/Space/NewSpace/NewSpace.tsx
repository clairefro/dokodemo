import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import SpaceForm from 'src/components/Space/SpaceForm'
import FormContainer from '../../UI/blocks/forms/FormContainer'

const CREATE_SPACE_MUTATION = gql`
  mutation CreateSpaceMutation($input: CreateSpaceInput!) {
    createSpace(input: $input) {
      id
    }
  }
`

const NewSpace = () => {
  const [createSpace, { loading, error }] = useMutation(CREATE_SPACE_MUTATION, {
    onCompleted: () => {
      toast.success('Space created')
      navigate(routes.spaces())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createSpace({ variables: { input } })
  }

  return (
    <FormContainer formTitle="New Space">
      <SpaceForm onSave={onSave} loading={loading} error={error} />
    </FormContainer>
  )
}

export default NewSpace
