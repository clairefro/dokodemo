import { FC } from 'react'
import classd from 'classd'

interface Props {
  className?: string
}

const Section: FC<Props> = ({ className, children, ...rest }) => {
  const classes = classd`
  max-w-6xl px-4 my-6
  ${className}
  `
  return (
    <div className="flex justify-center">
      <div {...rest} className={classes}>
        {children}
      </div>
    </div>
  )
}

export default Section
