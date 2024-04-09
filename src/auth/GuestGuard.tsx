// ** React Imports
import { ReactElement, ReactNode, useEffect } from 'react'

// ** Next Import
import { useAuth } from '@/store/auth'
import { useRouter } from 'next/router'

//Third party Import
import { getCookie } from 'cookies-next'

// ** Local Import
import { AUTH_CREDENTIAL } from '@/constants/auth'
import { ROUTE } from '@/constants/routes'

interface GuestGuardProps {
  children: ReactNode
  fallback: ReactElement | null
}

const GuestGuard = (props: GuestGuardProps) => {
  const { children, fallback } = props
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) {
      return
    }

    if (getCookie(AUTH_CREDENTIAL)) {
      router.replace(ROUTE.HOME)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.route])

  if (loading || (!loading && user !== null)) {
    return fallback
  }

  return <>{children}</>
}

export default GuestGuard
