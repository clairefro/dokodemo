import { routes, navigate } from '@redwoodjs/router'
import ButtonPrimary from '../../blocks/buttons/ButtonPrimary'

const CreateSpace = () => {
  return (
    <div className="p-4">
      <ButtonPrimary onClick={() => navigate(routes.newSpace())}>
        Make a new space
      </ButtonPrimary>
    </div>
  )
}

export default CreateSpace
