import { FC } from 'react'
import classd from 'classd'

interface Props {
  className?: string
}

const Section: FC<Props> = ({ className, children, ...rest }) => {
  const classes = classd`
  max-w-5xl px-4 my-4 md:my-8
  ${className}
  `
  return (
    <div className="flex justify-center">
      <section {...rest} className={classes}>
        {children}
      </section>
    </div>
  )
}

export default Section
