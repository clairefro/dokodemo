import { useEffect } from 'react'
import { navigate, routes, useLocation } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

export const useAuthWithRedirectTo = () => {
  const { search } = useLocation()
  const { isAuthenticated, ...rest } = useAuth()

  const hasRedirectTo = /redirectTo/.test(search)
  const redirectTo = search
    .replace('?redirectTo=', '')
    .replace(/&\S+=\S[&^]/g, '') // get rid of any other query params

  useEffect(() => {
    if (isAuthenticated) {
      if (hasRedirectTo) {
        navigate(redirectTo)
      } else {
        navigate(routes.home())
      }
    }
  }, [isAuthenticated, hasRedirectTo, redirectTo, search])
  return { ...rest, isAuthenticated, redirectTo }
}
