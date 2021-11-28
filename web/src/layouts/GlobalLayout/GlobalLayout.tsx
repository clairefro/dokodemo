import { Toaster } from '@redwoodjs/web/toast'
import Navbar from '../../components/UI/Navbar/Navbar'

type Props = {
  children: React.ReactNode
}

const GlobalLayout = ({ children }: Props) => {
  return (
    <>
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default GlobalLayout
