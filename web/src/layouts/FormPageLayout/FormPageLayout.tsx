import { FC } from 'react'

const FormPageLayout: FC = ({ children }) => {
  return (
    <div className="px-4 mx-auto">
      <div>{children}</div>
    </div>
  )
}

export default FormPageLayout
