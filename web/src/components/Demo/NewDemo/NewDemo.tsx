import { FC } from 'react'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import DemoForm from 'src/components/Demo/DemoForm'
import FormContainer from '../../UI/blocks/forms/FormContainer'
import ButtonSecondary from '../../UI/blocks/buttons/ButtonSecondary'

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
      navigate(routes.space({ id: spaceId }))
      window.location.reload()
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createDemo({ variables: { input } })
  }

  return (
    <div className="scale-50">
      <FormContainer className="" formTitle="Add your Demo">
        <ButtonSecondary
          onClick={() => window.open('https://www.loom.com/', '_blank')}
        >
          Record a demo on Loom ⇗
        </ButtonSecondary>
        <DemoForm
          onSave={onSave}
          loading={loading}
          error={error}
          spaceId={spaceId}
        />
      </FormContainer>
    </div>
  )
}

export default NewDemo
