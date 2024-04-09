import cn from 'classnames'
import { ComponentPropsWithoutRef, forwardRef } from 'react'
import Datepicker, { DatepickerType } from 'react-tailwindcss-datepicker'

const DatePicker = forwardRef(
  (
    {
      label,
      id,
      value,
      error,
      require,
      ...props
    }: DatepickerType &
      ComponentPropsWithoutRef<'input'> & {
        label?: string | JSX.Element
        error?: boolean
        require?: boolean
      },
    ref
  ) => {
    return (
      <fieldset className='custom-date-input space-y-[4px]'>
        <label htmlFor={id} className='font-[500] text-[16px] text-gray-700 text-sm font-medium text-orange-900'>
          {label} {require && <span className='text-red-500'>*</span>}
        </label>
        <Datepicker
          value={value ? value : { startDate: null, endDate: null }}
          inputId={id}
          inputClassName={cn(
            'disabled:bg-gray-100 relative w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-5 pr-11 focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40',
            {
              'border-red-500': error,
            }
          )}
          primaryColor='green'
          {...props}
        />
      </fieldset>
    )
  }
)

DatePicker.displayName = 'DatePicker'

export default DatePicker
