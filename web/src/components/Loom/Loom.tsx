import { FC, useEffect, useState } from 'react'
import classd from 'classd'
import { oembed } from '@loomhq/loom-embed'

interface Props {
  src: string
  className?: string
}

const Loom: FC<Props> = ({ src, className }) => {
  const [html, setHtml] = useState<string | null>(null)
  useEffect(() => {
    const getOembed = async () => {
      const res = await oembed(src)
      setHtml(res.html)
    }
    getOembed()
  }, [src])
  const classes = classd`
  w-full h-full
  ${className}
  `
  return (
    <div className={classes} dangerouslySetInnerHTML={{ __html: html }}></div>
  )
}

export default Loom
