import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import React, { useEffect } from 'react'

import Loom from '../../components/Loom/Loom'
import SpaceNavigator from '../../components/UI/SpaceNavigator'
import ExampleBanner from '../../components/UI/ExampleBanner/ExampleBanner'
import PoweredByLoom from './components/PoweredByLoom'
import Section from '../../components/UI/blocks/sections/Section'

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

      <Section className="grid md:grid-cols-3 gap-6">
        <div className="col-span-2">
          <h2>Async demo days for async teams</h2>
          <p>
            Let your group know what you{"'"}ve been up to, in not-so-real-time
          </p>
        </div>
        <PoweredByLoom />
      </Section>

      <div className="flex justify-center px-4">
        <SpaceNavigator />
      </div>
      <ExampleBanner spaceId="ckwid5f6o0023aph5u7gl2utp" />
      <Section>
        <h2>Perfect for</h2>
        <ul>
          <li>Internal company demo days</li>
          <li>Public expos</li>
        </ul>
      </Section>
      <Section>
        <h2>Features</h2>
      </Section>
      <Loom
        className="mx-auto"
        src="https://www.loom.com/share/9dbb9879c0d34fc3a55f6673e50b1bd9"
      />
    </>
  )
}

export default HomePage
