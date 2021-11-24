import type { FindSpaceById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Space from 'src/components/Space/Space'

export const QUERY = gql`
  query FindSpaceById($id: String!) {
    space: space(id: $id) {
      id
      title
      accepting
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Space not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ space }: CellSuccessProps<FindSpaceById>) => {
  return <Space space={space} />
}
