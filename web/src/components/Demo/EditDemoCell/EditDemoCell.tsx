import type { EditDemoById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import DemoForm from 'src/components/Demo/DemoForm'

export const QUERY = gql`
  query EditDemoById($id: String!) {
    demo: demo(id: $id) {
      id
      spaceId
      title
      url
      creator
      createdAt
    }
  }
`
const UPDATE_DEMO_MUTATION = gql`
  mutation UpdateDemoMutation($id: String!, $input: UpdateDemoInput!) {
    updateDemo(id: $id, input: $input) {
      id
      spaceId
      title
      url
      creator
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ demo }: CellSuccessProps<EditDemoById>) => {
  const [updateDemo, { loading, error }] = useMutation(UPDATE_DEMO_MUTATION, {
    onCompleted: () => {
      toast.success('Demo updated')
      navigate(routes.demos())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateDemo({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Demo {demo.id}</h2>
      </header>
      <div className="rw-segment-main">
        <DemoForm demo={demo} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
