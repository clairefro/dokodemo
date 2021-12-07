// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route, Private } from '@redwoodjs/router'
import GlobalLayout from './layouts/GlobalLayout'
import PageLayout from 'src/layouts/PageLayout'
import AuthLayout from './layouts/AuthLayout'
import FullwidthLayout from './layouts/FullwidthLayout'
import FormPageLayout from './layouts/FormPageLayout'

const Routes = () => {
  return (
    <Router>
      <GlobalLayout>
        <Set wrap={FullwidthLayout}>
          <Route path="/" page={HomePage} name="home" />
          <Private unauthenticated="login">
            <Route path="/demos/{id}" page={DemoDemoPage} name="demo" />
          </Private>
        </Set>
        <Set private unauthenticated="login" wrap={FormPageLayout}>
          <Route path="/spaces/new" page={SpaceNewSpacePage} name="newSpace" />
          <Route path="/spaces/{id}/edit" page={SpaceEditSpacePage} name="editSpace" />
          <Route path="/demos/new" page={DemoNewDemoPage} name="newDemo" />
          <Route path="/demos/{id}/edit" page={DemoEditDemoPage} name="editDemo" />
        </Set>
        <Set wrap={PageLayout}>
          <Route path="/about" page={AboutPage} name="about" />
          <Private unauthenticated="login">
            <Route path="/demos" page={DemoDemosPage} name="demos" />

            <Route path="/spaces/{id}" page={SpaceSpacePage} name="space" />
            <Route path="/spaces" page={SpaceSpacesPage} name="spaces" />
          </Private>
        </Set>

        <Set wrap={AuthLayout}>
          <Route path="/login" page={LoginPage} name="login" />
          <Route path="/signup" page={SignupPage} name="signup" />
          <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
          <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
        </Set>
        <Route notfound page={NotFoundPage} />
      </GlobalLayout>
    </Router>
  )
}

export default Routes
