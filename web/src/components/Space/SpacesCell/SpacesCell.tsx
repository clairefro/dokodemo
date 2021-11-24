import type { FindSpaces } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Spaces from 'src/components/Space/Spaces'

export const QUERY = gql`
  query FindSpaces {
    spaces {
      id
      title
      accepting
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No spaces yet. '}
      <Link
        to={routes.newSpace()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ spaces }: CellSuccessProps<FindSpaces>) => {
  return <Spaces spaces={spaces} />
}
