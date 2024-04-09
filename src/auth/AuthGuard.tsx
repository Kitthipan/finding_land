// ** React Imports
import { ReactElement, ReactNode, useEffect } from 'react'

// ** Next Import
import { useAuth } from '@/store/auth'
import { useRouter } from 'next/router'

import { AUTH_CREDENTIAL } from '@/constants/auth'
import { getCookie } from 'cookies-next'

interface AuthGuardProps {
  children: ReactNode
  fallback: ReactElement | null
}

const AuthGuard = (props: AuthGuardProps) => {
  const { children, fallback } = props
  const { loading, user } = useAuth()
  const router = useRouter()

  useEffect(
    () => {
      if (!router.isReady) {
        return
      }
      if (user === null && !getCookie(AUTH_CREDENTIAL)) {
        if (router.asPath !== '/') {
          router.replace({
            pathname: '/login',
            query: { returnUrl: router.asPath },
          })
        } else {
          router.replace('/login')
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.route]
  )

  if (loading || user === null) {
    return fallback
  }

  return <>{children}</>
}

export default AuthGuard
