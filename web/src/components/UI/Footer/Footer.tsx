import { Link } from '@redwoodjs/router'

const Footer = () => {
  return (
    <footer className="py-6 px-4 bg-primary-500 text-primary-50">
      <div className="grid md:grid-cols-8 gap-4 mb-4 ">
        <Link to="/about">About</Link>
        <a
          href="https://www.loom.com/"
          target="_blank"
          rel="noreferrer noopener nofollower"
        >
          Get Loom
        </a>
      </div>
      <p>Copyright {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer
