// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import GlobalLayout from './layouts/GlobalLayout/GlobalLayout'
import DemosLayout from 'src/layouts/DemosLayout'
import AuthLayout from './layouts/AuthLayout/AuthLayout'

const Routes = () => {
  return (
    <Router>
      <GlobalLayout>
        <Route path="/" page={HomePage} name="home" />
        <Set wrap={DemosLayout}>
          <Route path="/demos/new" page={DemoNewDemoPage} name="newDemo" />
          <Route path="/demos/{id}/edit" page={DemoEditDemoPage} name="editDemo" />
          <Route path="/demos/{id}" page={DemoDemoPage} name="demo" />
          <Route path="/demos" page={DemoDemosPage} name="demos" />
        </Set>

        <Route path="/spaces/new" page={SpaceNewSpacePage} name="newSpace" />
        <Route path="/spaces/{id}/edit" page={SpaceEditSpacePage} name="editSpace" />
        <Route path="/spaces/{id}" page={SpaceSpacePage} name="space" />
        <Route path="/spaces" page={SpaceSpacesPage} name="spaces" />

        <Set wrap={AuthLayout}>
          <Route path="/login" page={LoginPage} name="login" />
          <Route path="/signup" page={SignupPage} name="signup" />
          <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        </Set>
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
        <Route notfound page={NotFoundPage} />
      </GlobalLayout>
    </Router>
  )
}

export default Routes
