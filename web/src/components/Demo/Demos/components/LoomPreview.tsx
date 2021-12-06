import { OEmbedInterface } from '@loomhq/loom-embed/dist/.types/oembed'
import { FC } from 'react'

interface Props {
  embed: OEmbedInterface
}

const humanize = (secs) => {
  let str = ''
  const mins = Math.floor(secs / 60)
  if (!mins) {
    str += `${secs}s`
    return str
  }
  str += `${mins}m`
  const remainSecs = Math.floor(secs % 60)
  if (remainSecs) {
    str += `${remainSecs}s`
  }
  return str
}
const Placeholder = () => (
  <div className="w-full bg-primary-400" style={{ height: '148px' }}></div>
)
const LoomPreview: FC<Props> = ({ embed }) => {
  return (
    <div className="flex h-full">
      <span className="block text-sm mr-2">
        {embed ? humanize(embed.duration) : '...'}
      </span>
      {embed ? (
        <div>
          <img src={embed.thumbnail_url} alt={embed.title} className="w-full" />
        </div>
      ) : (
        <Placeholder />
      )}
    </div>
  )
}

export default LoomPreview
