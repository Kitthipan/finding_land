import React from 'react'
import Image from 'next/image'
import Logo from '/public/catLogo.png'
import { useForm } from 'react-hook-form'
import useLogin from '@/service/auth/auth'

type Props = {}

type LoginState = {
    username: string
    password: string
  }

const LoginPage = (props: Props) => {
    const { register, handleSubmit, watch } = useForm<LoginState>()

    const { error,data:userData, isSuccess, refetch, isError } = useLogin({
        username: watch('username'),
        password: watch('password'),
      })

    const handleLogin =(data:LoginState)=>{
        console.log("data: ",data)
        refetch()
    }

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

export default LoginPage