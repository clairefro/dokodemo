import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import SpaceForm from 'src/components/Space/SpaceForm'

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
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Space</h2>
      </header>
      <div className="rw-segment-main">
        <SpaceForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewSpace
