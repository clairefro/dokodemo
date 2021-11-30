import DemoCell from 'src/components/Demo/DemoCell'

type DemoPageProps = {
  id: string
}

const DemoPage = ({ id }: DemoPageProps) => {
  return <DemoCell id={id} />
}

export default DemoPage
