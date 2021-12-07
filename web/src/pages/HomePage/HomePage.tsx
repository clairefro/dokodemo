import { MetaTags } from '@redwoodjs/web'
import Loom from '../../components/Loom/Loom'
import SpaceNavigator from '../../components/UI/SpaceNavigator'
import ExampleBanner from '../../components/UI/ExampleBanner/ExampleBanner'
import PoweredByLoom from './components/PoweredByLoom'
import Section from '../../components/UI/blocks/sections/Section'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Async demo days for async teams." />

      <Section className="grid md:grid-cols-3 gap-6">
        <div className="col-span-2">
          <h2>Async demo days for async teams</h2>
          <p className="max-w-md">
            Virtual show and tell spaces to connect with team members, no matter
            where they are or when they're awake
          </p>
        </div>
        <PoweredByLoom />
      </Section>

      <div className="flex justify-center px-4">
        <SpaceNavigator />
      </div>
      <ExampleBanner spaceId={process.env.REDWOOD_ENV_EXAMPLE_SPACE_ID} />
      <Section className="grid md:grid-cols-2 gap-6">
        <p className="mr-4">
          <span className="text-primary-500 font-semibold">dokodemo</span> is a
          not-so-real-time watering hole for groups to organize virtual
          asynchronous demo days. Demo spaces can be shared with the group so
          everyone can get up to speed on their own time while still getting to
          connect with one another with kudos, jokes and questions - right
          inside the demos.
        </p>
        <div>
          <h2>Perfect for</h2>
          <ul>
            <li>Internal company demo days</li>
            <li>External company demo days</li>
            <li>Public expos</li>
          </ul>
        </div>
      </Section>
      <Section className="w-full grid md:grid-cols-2 gap-6">
        <div>
          <h2>Features</h2>
          <ul>
            <li>Create demo spaces and invite team members</li>
            <li>Add comments, reactions, and video replies to demos</li>
            <li>Keep it human - see people's faces when they present</li>
          </ul>
        </div>
        <div>
          <h2>Coming soon...</h2>
          <ul>
            <li>Organization level sign-on (SSO)</li>
            <li>View and search archived demo spaces</li>
            <li>Analytics reports for space organizers</li>
          </ul>
        </div>
      </Section>
      <Loom
        className="mx-auto"
        src="https://www.loom.com/share/9dbb9879c0d34fc3a55f6673e50b1bd9"
      />
    </>
  )
}

export default HomePage
