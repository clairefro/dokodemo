import { FC } from 'react'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import DemoForm from 'src/components/Demo/DemoForm'
import FormContainer from '../../UI/blocks/forms/FormContainer'

const CREATE_DEMO_MUTATION = gql`
  mutation CreateDemoMutation($input: CreateDemoInput!) {
    createDemo(input: $input) {
      id
    }
  }
`
interface Props {
  spaceId: string
}

const NewDemo: FC<Props> = ({ spaceId }) => {
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
    <FormContainer formTitle="Add a Demo">
      <DemoForm
        onSave={onSave}
        loading={loading}
        error={error}
        spaceId={spaceId}
      />
    </FormContainer>
  )
}

export default NewDemo
