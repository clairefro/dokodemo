import { useState, useEffect } from 'react'
import { oembed } from '@loomhq/loom-embed'
import { OEmbedInterface } from '@loomhq/loom-embed/dist/.types/oembed'

export const useLoomOembed = (src) => {
  const [embed, setEmbed] = useState<null | OEmbedInterface>(null)
  const [html, setHtml] = useState<null | string>(null)
  useEffect(() => {
    const getOembed = async () => {
      const data = await oembed(src)
      setEmbed(data)
      setHtml(data.html)
    }
    getOembed()
  }, [src])

  return { embed, html }
}
