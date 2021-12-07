import { MetaTags } from '@redwoodjs/web'
const AboutPage = () => (
  <>
    <MetaTags title="About" description="Async demo days for async teams." />
    <div className="max-w-xl">
      <h1 className="mb-6">About</h1>
      <h2>What is this?</h2>
      <p>
        "dokodemo" means "anywhere" in Japanese. No matter the team size, this
        app aims to help groups spread anywhere in any timezone come together
        for demo days and interact asynchronously.
      </p>
      <p>
        dokodemo is a project submission Loom's{' '}
        <a
          href="https://loomsdkholidayhack2021.devpost.com/"
          target="blank"
          rel="noopener noreferrer nofollower"
        >
          "loomSDK Holiday Hack"
        </a>
        , built with RedwoodJS.
      </p>
      <h2>Creator and code</h2>
      <a
        href="https://github.com/clairefro/dokodemo"
        target="_blank"
        rel="noreferrer nofollower noopener"
        className="underline"
      >
        View on Github
      </a>
    </div>
  </>
)

export default AboutPage
