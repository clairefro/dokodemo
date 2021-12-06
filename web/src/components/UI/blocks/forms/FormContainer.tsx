import { FC } from '@redwoodjs/testing/node_modules/@types/react'
import classd from 'classd'

interface Custom {
  className?: string
  formTitle?: string
}

type Props = Custom

const FormContainer: FC<Props> = ({ children, className, formTitle }) => {
  const classes = classd`
  rounded-lg max-w-xl mb-4
  ${className}
  `
  const Header = () => (
    <header className="p-4 bg-primary-500 text-primary-50 rounded-t-lg font-semibold">
      <h3>{formTitle}</h3>
    </header>
  )

  return (
    <div className={classes}>
      {formTitle && <Header />}
      <div className="rw-segment-main">{children}</div>
    </div>
  )
}

export default FormContainer
