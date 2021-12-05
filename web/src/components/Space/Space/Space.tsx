import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { routes, navigate } from '@redwoodjs/router'
import ButtonSecondary from '../../UI/blocks/buttons/ButtonSecondary'
import ButtonPrimary from '../../UI/blocks/buttons/ButtonPrimary'

const DELETE_SPACE_MUTATION = gql`
  mutation DeleteSpaceMutation($id: String!) {
    deleteSpace(id: $id) {
      id
    }
  }
`

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Space = ({ space }) => {
  const [deleteSpace] = useMutation(DELETE_SPACE_MUTATION, {
    onCompleted: () => {
      toast.success('Space deleted')
      navigate(routes.spaces())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete space ' + id + '?')) {
      deleteSpace({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Space {space.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{space.id}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{space.userId}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{space.title}</td>
            </tr>
            <tr>
              <th>Accepting</th>
              <td>{checkboxInputTag(space.accepting)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(space.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <ButtonPrimary
          onClick={() => navigate(routes.editSpace({ id: space.id }))}
        >
          Edit
        </ButtonPrimary>
        <ButtonSecondary onClick={() => onDeleteClick(space.id)}>
          Delete
        </ButtonSecondary>
      </nav>
    </>
  )
}

export default Space
