// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import DemosLayout from 'src/layouts/DemosLayout'
import SpacesLayout from 'src/layouts/SpacesLayout'

const Routes = () => {
  return (
    <Router>
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
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
