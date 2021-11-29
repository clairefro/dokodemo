import classd from 'classd'

interface Custom {
  className?: string
}

type Props = Custom & React.HTMLAttributes<HTMLButtonElement>

const ButtonBase = ({ children, className, ...rest }: Props) => {
  const classes = classd`
  py-2 px-4 font-semibold border-2 border-primary-500 rounded-xl hover:opacity-90
  ${className}
  `
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  )
}

export default ButtonBase
