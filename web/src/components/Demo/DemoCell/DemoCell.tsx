import type { FindDemoById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Demo from 'src/components/Demo/Demo'

export const QUERY = gql`
  query FindDemoById($id: String!) {
    demo: demo(id: $id) {
      id
      spaceId
      title
      url
      creator
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Demo not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ demo }: CellSuccessProps<FindDemoById>) => {
  return <Demo demo={demo} />
}
