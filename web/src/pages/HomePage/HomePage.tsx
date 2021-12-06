import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import React, { useEffect } from 'react'

import Loom from '../../components/Loom/Loom'
import SpaceNavigator from '../../components/UI/SpaceNavigator/SpaceNavigator'
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

      {links.map((l) => (
        <div key={l.name}>
          <Link to={l.route}>{l.name}</Link>
          <br />
        </div>
      ))}
      <Link to={'/spaces/ckwid5f6o0023aph5u7gl2utp'}>EXAMPLE SPACE</Link>

      <SpaceNavigator />

      <Loom
        className="mx-auto"
        src="https://www.loom.com/share/9dbb9879c0d34fc3a55f6673e50b1bd9"
      />
    </>
  )
}

export default HomePage
