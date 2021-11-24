import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import DemoForm from 'src/components/Demo/DemoForm'

const CREATE_DEMO_MUTATION = gql`
  mutation CreateDemoMutation($input: CreateDemoInput!) {
    createDemo(input: $input) {
      id
    }
  }
`

const NewDemo = () => {
  const [createDemo, { loading, error }] = useMutation(CREATE_DEMO_MUTATION, {
    onCompleted: () => {
      toast.success('Demo created')
      navigate(routes.demos())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createDemo({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Demo</h2>
      </header>
      <div className="rw-segment-main">
        <DemoForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewDemo
