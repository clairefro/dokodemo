import EditSpaceCell from 'src/components/Space/EditSpaceCell'

type SpacePageProps = {
  id: string
}

const EditSpacePage = ({ id }: SpacePageProps) => {
  return <EditSpaceCell id={id} />
}

export default EditSpacePage
