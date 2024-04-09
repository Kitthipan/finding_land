import Icons from '@/components/Icons'
import cn from 'classnames'
import {
  ComponentPropsWithoutRef,
  ReactElement,
  forwardRef,
  useState,
} from 'react'
import { FieldError } from 'react-hook-form'

interface InputTextProps extends ComponentPropsWithoutRef<'input'> {
  label?: string | JSX.Element
  error?: FieldError | undefined
  require?: boolean
}

const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  ({ className, id, error, label, type, require, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(type)
    const handleClickShowPassword = () => {
      setShowPassword((pre) => (pre === 'password' ? 'text' : 'password'))
    }

    return (
      <div className={cn('mt-4 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-700 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm', className)}>
        <fieldset className='space-y-[4px] flex flex-col'>
          {label && (
            <label
              htmlFor={id}
              className='font-[500] text-[16px] text-gray-700 text-sm font-medium text-orange-900 px'
            >
              {label} {require && <span className='text-red-500'>*</span>}
            </label>
          )}
          <div className='relative flex items-center'>
            <input
              ref={ref}
              type={showPassword}
              className={cn(
                'block w-full py-4 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-5 pr-11 focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40 disabled:bg-gray-100',
                {
                  'border-red-500': Boolean(error),
                }
              )}
              {...props}
            />
            {type === 'password' && (
              <button
                type='button'
                className='absolute right-5 focus:outline-none bg-transparent'
                onClick={handleClickShowPassword}
              >
                <Icons name={showPassword === 'password' ? 'Eye' : 'EyeOff'} />
              </button>
            )}
          </div>
        </fieldset>
        {Boolean(error) && (
          <div className='text-red-500 text-[12px] mt-1 ml-1'>
            {error?.message}
          </div>
        )}
      </div>
    )
  }
)

InputText.displayName = 'InputText'

export default InputText
