import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type DemoLayoutProps = {
  children: React.ReactNode
}

const DemosLayout = ({ children }: DemoLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.demos()}
            className="rw-link"
          >
            Demos
          </Link>
        </h1>
        <Link
          to={routes.newDemo()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Demo
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default DemosLayout
