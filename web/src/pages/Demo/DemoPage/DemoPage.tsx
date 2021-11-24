import DemoCell from 'src/components/Demo/DemoCell'

type DemoPageProps = {
  id: String
}

const DemoPage = ({ id }: DemoPageProps) => {
  return <DemoCell id={id} />
}

export default DemoPage
