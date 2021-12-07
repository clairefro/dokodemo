import { routes, navigate } from '@redwoodjs/router'
import ButtonSecondary from '../blocks/buttons/ButtonSecondary'

const ExampleBanner = ({ spaceId }) => {
  return (
    <div className="text-primary-50 bg-primary-500 w-full px-6 py-10 text-center transform skew-y-2 my-12">
      <div className="transform -skew-y-2">
        <p className="text-2xl font-semibold mb-4">
          {'👀'} Check out an example demo space!
        </p>
        <ButtonSecondary
          onClick={() => navigate(routes.space({ id: spaceId }))}
        >
          Take me there!
        </ButtonSecondary>
      </div>
    </div>
  )
}

export default ExampleBanner
