import { Toaster } from '@redwoodjs/web/toast'
import Navbar from '../../components/UI/Navbar/Navbar'
import Footer from '../../components/UI/Footer/Footer'

type Props = {
  children: React.ReactNode
}

const GlobalLayout = ({ children }: Props) => {
  return (
    <>
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <Navbar />
      <main style={{ minHeight: 'calc(100vh - 90px)' }} className="p-4">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default GlobalLayout
