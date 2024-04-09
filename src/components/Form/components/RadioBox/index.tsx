import cn from 'classnames'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

interface InputTextProps extends ComponentPropsWithoutRef<'input'> {
  label?: string | JSX.Element
}

const RadioBox = forwardRef<HTMLInputElement, InputTextProps>(
  ({ className, id, label, type, name, ...props }, ref) => {
    return (
      <div className={cn('', className)}>
        <fieldset className='flex items-center'>
          <input
            id={id}
            ref={ref}
            type='radio'
            name={name}
            className={
              'w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 focus:ring-orange-500 '
            }
            {...props}
          />
          {label && (
            <label
              htmlFor={id}
              className='ml-2 text-sm font-medium text-gray-900'
            >
              {label}
            </label>
          )}
        </fieldset>
      </div>
    )
  }
)

RadioBox.displayName = 'RadioBox'

export default RadioBox
