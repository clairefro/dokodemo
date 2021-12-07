import { FC } from 'react'
import ButtonBase from './base/ButtonBase'
import classd from 'classd'

interface Custom {
  className?: string
}

type Props = Custom & React.HTMLProps<HTMLButtonElement>

const ButtonSecondary: FC<Props> = ({ children, className, ...rest }) => {
  const classes = classd`
  bg-transparent text-primary-500 border-primary-500 bg-white
  ${className}
  `
  return (
    <ButtonBase {...rest} className={classes}>
      {children}
    </ButtonBase>
  )
}

export default ButtonSecondary
