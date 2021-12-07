import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import { useLoomOembed } from '../../../../hooks/useLoomOembed'
import LoomPreview from './LoomPreview'

const DemoCard = ({ demo }) => {
  const { currentUser } = useAuth()
  const { embed } = useLoomOembed(demo.url)
  const isOwner = currentUser.id === demo.user.id

  return (
    <>
      <button
        className="text-left"
        onClick={() => navigate(routes.demo({ id: demo.id }))}
      >
        <div className="w-full grid grid-cols-2 gap-4 justify-between my-2 shadow-md">
          <div className="p-4">
            <p className="font-semibold text-primary-500">{demo.title}</p>
            <p>{isOwner ? 'me' : demo.user.username}</p>
          </div>
          <div className="max-w-xs">
            <LoomPreview embed={embed} />
          </div>
        </div>
      </button>
    </>
  )
}

export default DemoCard
