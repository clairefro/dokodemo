import SpaceCell from 'src/components/Space/SpaceCell'

type SpacePageProps = {
  id: string
}

const SpacePage = ({ id }: SpacePageProps) => {
  return <SpaceCell id={id} />
}

export default SpacePage
