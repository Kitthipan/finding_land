
import { useAuth } from '@/store/auth';
import React, { useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form';
import { DateValueType } from "react-tailwindcss-datepicker";
import { useMessageModal } from '../Modal/MessageModal';
import { useUpdateProfile } from '@/service/personal/personal';

export interface personalInputForm {
    firstName:string;
    lastName:string;
    gender:string;
    // dateOfBirth: DateValueType & (string | number | readonly string[] | undefined);
    mobileNumber:string;
    email:string;
    district:string;
    subDistrict:string;
    add1: string; 
    add2: string; 
    add3: string;
  }

type Props = {
    personaldata: personalInputForm
}

export const useFromRegister = ({personaldata}: Props) => {
    const mutateRegister = useUpdateProfile();
    const { setInfo: setInfoAlert } = useMessageModal();
    const defaultValue = useMemo(() => {
        if (personaldata) {
          return {...personaldata}
        }
      }, [personaldata]);

      
  useEffect(() => {
    reset(defaultValue)
  }, [defaultValue])

    const {
        register,
        formState: { errors },
        handleSubmit,
        control,
        watch,
        setValue,
        reset,
      } = useForm<personalInputForm>({
        defaultValues: defaultValue,
      });

      const handleSubmitForm = (value: personalInputForm) => {
        const profileData = {
            firstName:value.firstName,
            lastName:value.lastName,
            gender:value.gender,
            mobileNumber:value.mobileNumber,
            email:value.email,
            district:value.district,
            subDistrict:value.subDistrict,
            add1: value.add1,
            add2: value.add2,
            add3: value.add3,
        //   id: id,
        //   branchCode: String(value.store_code.value),
        //   receiptNumber: value.receipt_number,
        //   phoneNumber: value.phone_number,
        //   price: value.price,
        //   createUser: value.createUser ? value.createUser: user?.username||'' ,
        //   updateUser: user?.username ||'',
        //   status:"P"
        };
        mutateRegister.mutateAsync(
          { data: profileData },
          {
            onSuccess: (value) => {
              setInfoAlert({
                isShow: true,
                message: "บันทึกเรียบร้อย",
                type: "success",
                btnLabel: "OK",
                callback: () => {
                  console.log("success");
                },
              });
            //   router.push(ROUTE.HOME)
            },
            onError: (error) => {
              setInfoAlert({
                isShow: true,
                message: error.message,
                type: "error",
                btnLabel: "close",
              });
            //   router.push(ROUTE.HOME)
            },
            // onSettled: () => {
            //    onClose()
            // },
          }
        );
      };


      const form = {
        firstName: register("firstName"),
        lastName:register("lastName"),
        mobileNumber:register("mobileNumber"),
        email:register("email"),
        district:register("district"),
        subDistrict:register("subDistrict"),
        gender:register("gender"),
        add1:register("add1"),
        add2:register("add2"),
        add3:register("add3"),
        submit: handleSubmit(handleSubmitForm),
      };

      return {
        form,
        errors,
        control,
        register,
        watch,
        setValue,
      };
}

export default useFromRegister