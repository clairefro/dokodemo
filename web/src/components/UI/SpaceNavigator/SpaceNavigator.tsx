import CreateSpace from './components/CreateSpace'
import FindSpace from './components/FindSpace'

const SpaceNavigator = () => {
  return (
    <div className="p-4 w-full flex justify-between items-center max-w-2xl ">
      <FindSpace />
      <p>OR</p>
      <CreateSpace />
    </div>
  )
}

export default SpaceNavigator
