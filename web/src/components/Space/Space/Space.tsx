import { MetaTags } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { routes, navigate } from '@redwoodjs/router'
import ButtonWarn from '../../UI/blocks/buttons/ButtonWarn'
import ButtonSecondary from '../../UI/blocks/buttons/ButtonSecondary'
import CopyClipboard from '../../UI/CopyClipboard/CopySpaceId'
import { useAuth } from '@redwoodjs/auth'
import Demos from '../../Demo/Demos'
import NewDemo from '../../Demo/NewDemo'

const DELETE_SPACE_MUTATION = gql`
  mutation DeleteSpaceMutation($id: String!) {
    deleteSpace(id: $id) {
      id
    }
  }
`

const Space = ({ space }) => {
  const { currentUser } = useAuth()
  const isOwner = currentUser.id === space.userId

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
    if (confirm(`Are you sure you want to delete space "${space.title}"?`)) {
      deleteSpace({ variables: { id } })
    }
  }
  const OwnerControls = () => {
    if (!isOwner) return null
    return (
      <div className="grid md:grid-cols-2 gap-2 max-w-xs ml-4">
        <ButtonSecondary
          onClick={() => navigate(routes.editSpace({ id: space.id }))}
        >
          Edit
        </ButtonSecondary>
        <ButtonWarn onClick={() => onDeleteClick(space.id)}>Delete</ButtonWarn>
      </div>
    )
  }

  return (
    <>
      <MetaTags
        title={space.title}
        description="Async demo days for async teams."
      />
      <div>
        <div className="mb-4 flex">
          <h1>{space.title}</h1>
          <div>
            <OwnerControls />
          </div>
        </div>
        <div className="mb-6">
          <CopyClipboard
            title="Share space code"
            displayText={space.id}
            value={space.id}
          />
        </div>
      </div>
      <NewDemo spaceId={space.id} />

      <Demos demos={space.demos} />
    </>
  )
}

export default Space
