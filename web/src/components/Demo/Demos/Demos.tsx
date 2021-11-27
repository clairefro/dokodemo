import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Demo/DemosCell'

const DELETE_DEMO_MUTATION = gql`
  mutation DeleteDemoMutation($id: String!) {
    deleteDemo(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const DemosList = ({ demos }) => {
  const [deleteDemo] = useMutation(DELETE_DEMO_MUTATION, {
    onCompleted: () => {
      toast.success('Demo deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete demo ' + id + '?')) {
      deleteDemo({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Space id</th>
            <th>User id</th>
            <th>Title</th>
            <th>Url</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {demos.map((demo) => (
            <tr key={demo.id}>
              <td>{truncate(demo.id)}</td>
              <td>{truncate(demo.spaceId)}</td>
              <td>{truncate(demo.userId)}</td>
              <td>{truncate(demo.title)}</td>
              <td>{truncate(demo.url)}</td>
              <td>{timeTag(demo.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.demo({ id: demo.id })}
                    title={'Show demo ' + demo.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editDemo({ id: demo.id })}
                    title={'Edit demo ' + demo.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete demo ' + demo.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(demo.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DemosList
