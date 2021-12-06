import { FC } from 'react'
import classd from 'classd'
import { useLoomOembed } from '../../hooks/useLoomOembed'

interface Props {
  src: string
  className?: string
}

const Loom: FC<Props> = ({ src, className }) => {
  const { html } = useLoomOembed(src)
  const classes = classd`
  w-full h-full
  ${className}
  `
  return (
    <div
      className={classes}
      style={{ maxWidth: 'calc(100vh + 100px)' }}
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  )
}

export default Loom
