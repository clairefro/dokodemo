import loomLogo from '../../../assets/loom-logo.png'

const PoweredByLoom = () => {
  return (
    <div className="">
      <p className="font-semibold">Powered by </p>
      <a
        href="https://www.loom.com/"
        target="_blank"
        rel="nofollower noopener noreferrer"
      >
        <div className="max-w-xs m-1">
          <img src={loomLogo} alt="Loom logo" className="w-full" />
        </div>
      </a>
    </div>
  )
}

export default PoweredByLoom
