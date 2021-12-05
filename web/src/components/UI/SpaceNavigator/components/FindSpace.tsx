import React, { useState } from 'react'
import { routes, navigate } from '@redwoodjs/router'
import ButtonSecondary from '../../blocks/buttons/ButtonSecondary'

const SpaceNavigator = () => {
  const [id, setId] = useState<string | null>(null)

  const onClick = () => {
    navigate(routes.space({ id }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value)
  }

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Join a space with a code"
        onChange={handleChange}
        value={id}
      />
      <ButtonSecondary
        disabled={!id}
        className={id ? 'block' : 'hidden'}
        onClick={onClick}
      >
        Join space
      </ButtonSecondary>
    </div>
  )
}

export default SpaceNavigator
