import React, { useEffect } from 'react'
import Image from 'next/image'
import Logo from '/public/catLogo.png'
import { useForm } from 'react-hook-form'
import useLogin from '@/service/auth/auth'
import { useAuth } from '@/service/store/auth'
import { ROUTE } from '@/constants/routes'

type Props = {}

type LoginState = {
    username: string
    password: string
  }

const LoginPage = (props: Props) => {
    const { register, handleSubmit, watch } = useForm<LoginState>()
    const { login } = useAuth()

    const { error,data:userData, isSuccess, refetch, isError } = useLogin({
        username: watch('username'),
        password: watch('password'),
      })

    const handleLogin =(data:LoginState)=>{
        console.log("data: ",data)
        refetch()
    }

    useEffect(() => {
        if (isSuccess && userData) {
          if(userData.resultCode === "0000"){
            login(
              {
                token: userData.token,
                remember: true,
                redirectUri: ROUTE.HOME,
              },
              {
                username: userData.username,
                firstName: userData.firstName,
                lastName: userData.lastName,
                employeeCode: '',
                storeBuddyCode: '',
                role: userData.role,
                storeCode: userData.storeCode,
              }
            )
          }else{
            alert("Incorrect Username and Password")
          }
        }
        if (isError) {
          alert("Incorrect Username and Password")
        }
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [isError, userData, isSuccess])



    return (
        <div>
            <div className='flex  items-center justify-center  min-h-screen'>
                <div className='bg-white p-6 rounded-lg shadow-lg w-full sm:w-96'>
                    <div className='flex justify-center'>
                        <Image
                            src={Logo}
                            alt='Logo'
                            width='90'
                            height='90'
                            className='cursor-pointer mb-4'
                            priority
                        />
                    </div>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className='flex gap-4 p-1 mb-4'>
                            <label htmlFor='username' className='block text-gray-700'>
                                Username
                            </label>
                            <input
                                type='text'
                                id='username'
                                className='w-full border rounded-md p-2'
                                autoComplete='off'
                                {...register('username')}
                            />
                        </div>
                        <div className='flex gap-4  p-1 mb-4'>
                            <label htmlFor='password' className='block text-gray-700'>
                                password
                            </label>
                            <input
                                type='password'
                                id='password'
                                className='w-full border rounded-md p-2'
                                autoComplete='off'
                                {...register('password')}
                            />
                        </div>
                        <button type='submit' className='border w-full rounded bg-gray-600' >login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

LoginPage.authGuard = true

export default LoginPage
