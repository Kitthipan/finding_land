import {
    AUTH_CREDENTIAL,
    AUTH_CREDENTIAL_EXPIRE,
    USER_CREDENTIAL,
  } from '@/constants/auth'
  import { ROUTE } from '@/constants/routes'
  import { deleteCookie, setCookie } from 'cookies-next'
  import dayjs from 'dayjs'
  import Router from 'next/router'
  import { create } from 'zustand'
  
  export type UserInfo = {
    bigcard: string
    idCard: string 
    mobilePhone: string 
    isOnlineRegister:string
    isEWallet:string
    authToken:string
  }
  type LoginData = {
    token: string, 
    redirectUri?: string, 
    remember: boolean
  }
  
  type UseAuth = {
    hasAuth: boolean
    login: (data: LoginData, user: UserInfo) => void
    logout: (data?: {redirectUri?: string}) => void
    loading: boolean
    setLoading: (value: boolean) => void
    user: UserInfo | null
    setUser: (value: UserInfo & { token: string }) => void
    token: string | null
  }
  
  const initialState = {
    hasAuth: false,
    loading: false,
    user: null,
    token: null,
  }
  
  const setAuthCookie = (key: string, value: string, expires?: number) => {
    setCookie(
      key,
      value,
      expires ? { expires: dayjs().add(expires, 'minute').toDate() } : undefined
    )
  }
  
  export const useAuth = create<UseAuth>()(
   
      (set) => ({
        ...initialState,
        login: ({ token, redirectUri, remember }, user) => {
          setAuthCookie(
            AUTH_CREDENTIAL,
            token,
            remember ? AUTH_CREDENTIAL_EXPIRE : undefined
          )
          setAuthCookie(
            USER_CREDENTIAL,
            JSON.stringify(user),
            remember ? AUTH_CREDENTIAL_EXPIRE : undefined
          )
          set({ hasAuth: false, loading: false, token: token, user: user })
          if (redirectUri) {
            void Router.push(redirectUri)
          }
        },
        setLoading: (value) => {
          set({ loading: value })
        },
        setUser: (value) => {
          set({ loading: false, user: value, token: value.token })
        },
        logout: ({ redirectUri } = {}) => {
          deleteCookie(AUTH_CREDENTIAL)
          deleteCookie(USER_CREDENTIAL)
          set({ user: null, hasAuth: false, token: null })
          void Router.push(redirectUri || ROUTE.LOGIN)
        },
      }),
   
  )
  