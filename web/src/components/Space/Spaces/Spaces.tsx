import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Space/SpacesCell'

const DELETE_SPACE_MUTATION = gql`
  mutation DeleteSpaceMutation($id: String!) {
    deleteSpace(id: $id) {
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

const SpacesList = ({ spaces }) => {
  const [deleteSpace] = useMutation(DELETE_SPACE_MUTATION, {
    onCompleted: () => {
      toast.success('Space deleted')
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
    if (confirm('Are you sure you want to delete space ' + id + '?')) {
      deleteSpace({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User id</th>
            <th>Title</th>
            <th>Accepting</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {spaces.map((space) => (
            <tr key={space.id}>
              <td>{truncate(space.id)}</td>
              <td>{truncate(space.userId)}</td>
              <td>{truncate(space.title)}</td>
              <td>{checkboxInputTag(space.accepting)}</td>
              <td>{timeTag(space.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.space({ id: space.id })}
                    title={'Show space ' + space.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editSpace({ id: space.id })}
                    title={'Edit space ' + space.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete space ' + space.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(space.id)}
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

export default SpacesList
