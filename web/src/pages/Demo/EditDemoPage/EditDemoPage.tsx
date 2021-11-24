import EditDemoCell from 'src/components/Demo/EditDemoCell'

type DemoPageProps = {
  id: string
}

const EditDemoPage = ({ id }: DemoPageProps) => {
  return <EditDemoCell id={id} />
}

export default EditDemoPage
