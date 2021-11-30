import { Link } from '@redwoodjs/router'

const Footer = () => {
  return (
    <footer className="py-6 px-4 bg-primary-500 text-primary-50">
      <Link to="/about">About</Link>
    </footer>
  )
}

export default Footer
