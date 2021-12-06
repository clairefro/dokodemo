import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import DemoCard from './components/DemoCard'

import { QUERY } from 'src/components/Demo/DemosCell'

const DELETE_DEMO_MUTATION = gql`
  mutation DeleteDemoMutation($id: String!) {
    deleteDemo(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const DemosList = ({ demos }) => {
  console.log({ demos })
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
    <>
      <h2>Demos</h2>
      <div className="grid md:grid-cols-2 gap-4 max-w-7xl">
        {demos.map((d) => (
          <DemoCard demo={d} key={d.id} />
        ))}
      </div>
    </>
  )
}

export default DemosList
