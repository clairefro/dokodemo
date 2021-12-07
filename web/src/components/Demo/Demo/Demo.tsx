import React, { FC } from 'react'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'
import { Demo as DemoI } from 'types/graphql'
import { useAuth } from '@redwoodjs/auth'
import ButtonPrimary from '../../UI/blocks/buttons/ButtonPrimary'
import ButtonSecondary from '../../UI/blocks/buttons/ButtonSecondary'
import ButtonWarn from '../../UI/blocks/buttons/ButtonWarn'
import Loom from '../../Loom'

const DELETE_DEMO_MUTATION = gql`
  mutation DeleteDemoMutation($id: String!) {
    deleteDemo(id: $id) {
      id
    }
  }
`

interface Props {
  demo: DemoI
}
const Demo: FC<Props> = ({ demo }) => {
  console.log({ demo })
  const { currentUser } = useAuth()

  const isOwner = currentUser.id === demo.userId

  const [deleteDemo] = useMutation(DELETE_DEMO_MUTATION, {
    onCompleted: () => {
      toast.success('Demo deleted')
      navigate(routes.space({ id: demo.spaceId }))
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (
      confirm(
        `Are you sure you want to delete demo "${demo.title}" from this space?\n\nYour video will still be visible on Loom. See the Privacy notes in the footer if you want to fully delete this video.`
      )
    ) {
      deleteDemo({ variables: { id } })
    }
  }
  const buttonGroupClasses = `grid ${
    isOwner ? 'md:grid-cols-3' : 'md:grid-cols-1'
  } gap-2 justify-center`

  const SubmittedBy = () => {
    return (
      <p className="mb-2 text-center">
        submitted by{' '}
        <span className="font-semibold text-primary-500">
          {isOwner ? 'me' : demo.user.username}
        </span>
      </p>
    )
  }

  return (
    <>
      <Loom className="mx-auto mb-4" src={demo.url} />
      <h1 className="text-center">{demo.title}</h1>
      <div className="max-w-2xl mx-auto">
        <SubmittedBy />
        <div className={buttonGroupClasses}>
          <ButtonPrimary
            onClick={() => navigate(routes.space({ id: demo.spaceId }))}
          >
            {'<'} Back to space
          </ButtonPrimary>
          {isOwner && (
            <>
              <ButtonSecondary
                onClick={() => navigate(routes.editDemo({ id: demo.id }))}
              >
                Edit
              </ButtonSecondary>
              <ButtonWarn onClick={() => onDeleteClick(demo.id)}>
                Delete
              </ButtonWarn>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Demo
