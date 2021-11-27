import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_DEMO_MUTATION = gql`
  mutation DeleteDemoMutation($id: String!) {
    deleteDemo(id: $id) {
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

const Demo = ({ demo }) => {
  const [deleteDemo] = useMutation(DELETE_DEMO_MUTATION, {
    onCompleted: () => {
      toast.success('Demo deleted')
      navigate(routes.demos())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete demo ' + id + '?')) {
      deleteDemo({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Demo {demo.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{demo.id}</td>
            </tr><tr>
              <th>Space id</th>
              <td>{demo.spaceId}</td>
            </tr><tr>
              <th>User id</th>
              <td>{demo.userId}</td>
            </tr><tr>
              <th>Title</th>
              <td>{demo.title}</td>
            </tr><tr>
              <th>Url</th>
              <td>{demo.url}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(demo.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editDemo({ id: demo.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(demo.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Demo
