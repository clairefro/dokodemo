import type { FindDemoById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Demo from 'src/components/Demo/Demo'

export const QUERY = gql`
  query FindDemoById($id: String!) {
    demo: demo(id: $id) {
      id
      spaceId
      userId
      user {
        username
      }
      title
      url
      createdAt
    }
    watched: watchedDemosByUserId(id: $id) {
      id
    }
  }
`

export const Loading = () => <div className="p-4">Loading...</div>

export const Empty = () => <div className="p-4">Demo not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ demo }: CellSuccessProps<FindDemoById>) => {
  return <Demo demo={demo} />
}
