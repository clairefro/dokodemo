import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useEffect } from 'react'
import ButtonPrimary from '../../components/UI/blocks/buttons/ButtonPrimary'
import ButtonSecondary from '../../components/UI/blocks/buttons/ButtonSecondary'

const links = [
  { route: routes.newDemo(), name: 'newDemo' },
  { route: routes.demos(), name: 'demos' },
  { route: routes.newSpace(), name: 'newSpace' },
  { route: routes.spaces(), name: 'spaces' },
]

const HomePage = () => {
  const { currentUser } = useAuth()

  useEffect(() => {
    console.log({ currentUser })
  }, [currentUser])

  return (
    <>
      <MetaTags
        title="Home"
        // description="Home description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <br />
      <ButtonPrimary>Primary</ButtonPrimary>
      <ButtonSecondary>Secondary</ButtonSecondary>

      {links.map((l) => (
        <div key={l.name}>
          <Link to={l.route}>{l.name}</Link>
          <br />
        </div>
      ))}
    </>
  )
}

export default HomePage
{
  /* <Route path="/" page={HomePage} name="home" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={DemosLayout}>
        <Route path="/demos/new" page={DemoNewDemoPage} name="newDemo" />
        <Route path="/demos/{id}/edit" page={DemoEditDemoPage} name="editDemo" />
        <Route path="/demos/{id}" page={DemoDemoPage} name="demo" />
        <Route path="/demos" page={DemoDemosPage} name="demos" />
      </Set>
      <Set wrap={SpacesLayout}>
        <Route path="/spaces/new" page={SpaceNewSpacePage} name="newSpace" />
        <Route path="/spaces/{id}/edit" page={SpaceEditSpacePage} name="editSpace" />
        <Route path="/spaces/{id}" page={SpaceSpacePage} name="space" />
        <Route path="/spaces" page={SpaceSpacesPage} name="spaces" />
      </Set>
      <Route notfound page={NotFoundPage} /> */
}
