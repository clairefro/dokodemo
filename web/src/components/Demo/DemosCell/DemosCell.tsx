import type { FindDemos } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Demos from 'src/components/Demo/Demos'

export const QUERY = gql`
  query FindDemosBySpaceId($id: String!) {
    space(id: $id) {
      demos {
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
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No demos yet. '}
      <Link to={routes.newDemo()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ demos }: CellSuccessProps<FindDemos>) => {
  return <Demos demos={demos} />
}
