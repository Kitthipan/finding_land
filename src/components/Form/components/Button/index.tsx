'use client'
import cn from 'classnames'
import { ComponentPropsWithoutRef } from 'react'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'light' | 'error' | 'waring'
}

const Button = ({
  className,
  children,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(className, {
        'text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none':
          variant === 'primary',
        'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5':
          variant === 'light',
        'focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5':
          variant === 'error',
        'focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5':
          variant === 'waring',
      })}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
