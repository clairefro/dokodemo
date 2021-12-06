import { Toaster } from '@redwoodjs/web/toast'
import Navbar from '../../components/UI/Navbar/Navbar'
import Footer from '../../components/UI/Footer/Footer'
import NavbarSpacer from '../../components/UI/Navbar/NavbarSpacer'

type Props = {
  children: React.ReactNode
}

const GlobalLayout = ({ children }: Props) => {
  return (
    <>
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <Navbar />
      <NavbarSpacer />
      <main style={{ minHeight: 'calc(100vh - 90px)' }} className="py-4 my-6">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default GlobalLayout
