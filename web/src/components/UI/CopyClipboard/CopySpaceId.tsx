import { FC, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

interface Props {
  title?: string
  displayText?: string
  value: string
}

const CopyClipboard: FC<Props> = ({ title, displayText, value }) => {
  const [copied, setCopied] = useState<boolean>(false)
  return (
    <>
      {title && <span className="mr-4">{title}</span>}
      {displayText && (
        <span className="mx-2 font-mono p-2 rounded-lg bg-gray-200">
          {displayText}
        </span>
      )}
      <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
        <button>{copied ? '✓' : '📋'}</button>
      </CopyToClipboard>
    </>
  )
}

export default CopyClipboard
