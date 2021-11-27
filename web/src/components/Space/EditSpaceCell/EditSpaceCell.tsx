import type { EditSpaceById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import SpaceForm from 'src/components/Space/SpaceForm'

export const QUERY = gql`
  query EditSpaceById($id: String!) {
    space: space(id: $id) {
      id
      userId
      title
      accepting
      createdAt
    }
  }
`
const UPDATE_SPACE_MUTATION = gql`
  mutation UpdateSpaceMutation($id: String!, $input: UpdateSpaceInput!) {
    updateSpace(id: $id, input: $input) {
      id
      userId
      title
      accepting
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ space }: CellSuccessProps<EditSpaceById>) => {
  const [updateSpace, { loading, error }] = useMutation(UPDATE_SPACE_MUTATION, {
    onCompleted: () => {
      toast.success('Space updated')
      navigate(routes.spaces())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateSpace({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Space {space.id}</h2>
      </header>
      <div className="rw-segment-main">
        <SpaceForm space={space} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
