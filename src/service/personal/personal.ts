import React from 'react'
import { apiClient } from "@/utils/api";
import { personalData } from './personal.type';
import { useMutation ,useQuery} from "@tanstack/react-query";

interface tokenAuth {
  token : string | undefined;
} 

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

interface UpdateProfileProps {
  data: personalInputForm;
}


export const  usePersonal = (token :tokenAuth) => {
    return useQuery({
        queryKey: ['get-personal-info'],
        queryFn: (): Promise<personalData> => {
          return apiClient.post('/hk-register/api/personalInfo',token)
        },
        enabled:false
      })
}

export const useUpdateProfile = () => {
  return useMutation({
    mutationFn: ({ data }: UpdateProfileProps): Promise<personalData> => {
      return apiClient.post(`/save`, data);
    },
  });
};
