// ** React Imports
import { ReactNode, useEffect } from 'react'


import { UserInfo, useAuth } from '@/store/auth'
import { getCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { AUTH_CREDENTIAL, USER_CREDENTIAL } from '@/constants/auth'

type Props = {
  children: ReactNode
  checkAuth: boolean
}

const AuthProvider = ({ children, checkAuth }: Props) => {
  // ** States
  const { setUser, logout } = useAuth()
  const router = useRouter()
  // const mutateProfile = useUserDetail()

  useEffect(() => {
    console.log('router.route')
    const initAuth = async (): Promise<void> => {
      const storedToken = getCookie(AUTH_CREDENTIAL)
      const userData = getCookie(USER_CREDENTIAL)
      if (storedToken && userData) {
        const user: UserInfo = JSON.parse(userData)
        setUser({
          bigcard: user.bigcard,
          idCard: user.idCard,
          mobilePhone: user.mobilePhone,
          isOnlineRegister: user.isOnlineRegister,
          isEWallet: user.isEWallet,
          token: storedToken,
          authToken: user.authToken,
        })
      } else if (checkAuth) {
        logout()
      }
    }
    initAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.route])

  return <>{children}</>
}

export default AuthProvider
