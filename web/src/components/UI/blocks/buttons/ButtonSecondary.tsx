import ButtonBase from './base/ButtonBase'
import classd from 'classd'

interface Custom {
  className?: string
}

type Props = Custom & React.HTMLProps<HTMLButtonElement>

const ButtonPrimary = ({ children, className, ...rest }: Props) => {
  const classes = classd`
  bg-transparent text-primary-500
  ${className}
  `
  return (
    <ButtonBase {...rest} className={classes}>
      {children}
    </ButtonBase>
  )
}

export default ButtonPrimary
