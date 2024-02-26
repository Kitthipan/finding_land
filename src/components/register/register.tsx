import React from 'react'
import InputText from '../Form/components/InputText'
import { Disclosure } from '@headlessui/react'
import Icon from '../Form/components/Icons'
import RadioBox from '../Form/components/RadioBox'
import useFromRegister, { personalInputForm } from './register.hook'

type Props = {
  personaldata: personalInputForm
}
const Register = ({personaldata}: Props) => {
  const { form, errors, control } = useFromRegister({ personaldata });
    
  return (
    <div>
      <form onSubmit={form.submit}>
                <div className='pb-10'>
                    <Disclosure defaultOpen>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="p-5  flex w-full justify-between rounded-lg bg-slate-300 px-4 py-5 text-left text-sm font-medium text-black hover:bg-slate-400 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/75">
                                    <span>Personal Details</span>
                                    <Icon name='ChevronDownIcon'
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-black`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className=" px-4 w-full pt-1 text-sm text-gray-500">
                                    <InputText {...form.firstName} name="firstName" autoFocus required placeholder="firstName" />
                                    <InputText {...form.lastName} name="lastName" autoFocus required placeholder="lastName" />
                                    <div className="flex justify-center gap-9 p-5 mt-4 placeholder:italic placeholder:text-slate-400 bg-white w-full border border-slate-700 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm">
                                        <label>Gender</label>
                                        <RadioBox {...form.gender} label='Male' value='M' />
                                        <RadioBox {...form.gender} label='Female' value='F' />
                                    </div>
                                    <InputText {...form.mobileNumber} name="mobileNumber" autoFocus required placeholder="mobileNumber" />
                                    <InputText {...form.email} name="email" autoFocus required placeholder="email" />

                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>

                    {/* <div className="mt-4 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-700 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm">
                <Controller
                    name="dateOfBirth"
                    control={control}
                    render={({ field }) => (
                    <DatePicker
                        id="dateOfBirth"
                        value={field.value}
                        onChange={field.onChange}
                        error={false}
                        //require={false}
                        useRange={false}
                        asSingle={true}
                        placeholder="dateOfbirth"
                    />
                    )}
                />
                </div> */}
                    <div className='pt-5'>
                        <Disclosure defaultOpen>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="p-5  flex w-full justify-between rounded-lg bg-slate-300 px-4 py-5 text-left text-sm font-medium text-black hover:bg-slate-400 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/75"> 
                                        <span>Address Details</span>
                                        <Icon name='ChevronDownIcon'
                                            className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className=" px-4 w-full pb-2 pt-1 text-sm text-gray-500">
                                        <InputText {...form.district} name="district" autoFocus required placeholder="district" />
                                        <InputText {...form.subDistrict} name="subDistrict" autoFocus required placeholder="subDistrict" />
                                        <InputText {...form.add1} autoFocus placeholder="Address1" />
                                        <InputText {...form.add2} autoFocus placeholder="Address2" />
                                        <InputText {...form.add3} autoFocus placeholder="Address3" />

                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                </div>
            </form>
    </div>
  )
}

export default Register