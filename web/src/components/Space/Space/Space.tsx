import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_SPACE_MUTATION = gql`
  mutation DeleteSpaceMutation($id: String!) {
    deleteSpace(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

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
          <h2 className="rw-heading rw-heading-secondary">Space {space.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{space.id}</td>
            </tr><tr>
              <th>User id</th>
              <td>{space.userId}</td>
            </tr><tr>
              <th>Title</th>
              <td>{space.title}</td>
            </tr><tr>
              <th>Accepting</th>
              <td>{checkboxInputTag(space.accepting)}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(space.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editSpace({ id: space.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(space.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Space
