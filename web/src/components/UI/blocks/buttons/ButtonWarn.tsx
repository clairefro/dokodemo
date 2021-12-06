import ButtonBase from './base/ButtonBase'
import classd from 'classd'

interface Custom {
  className?: string
}

type Props = Custom & React.HTMLProps<HTMLButtonElement>

const ButtonSecondary = ({ children, className, ...rest }: Props) => {
  const classes = classd`
  bg-transparent text-red-500 border-red-500
  ${className}
  `
  return (
    <ButtonBase {...rest} className={classes}>
      {children}
    </ButtonBase>
  )
}

export default ButtonSecondary
