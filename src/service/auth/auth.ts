import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { LoginResponse } from './auth.type';
import { apiClient } from '@/utils/api';

export const useLogin = ({
    username,
    password
}: {
    username: string,
    password: string
}) => {
    const requestData = {
        username: username,
        password: password
    };
    return useQuery({
        queryKey: ['authenticate'],
        queryFn: async (): Promise<LoginResponse> => {
            return apiClient.post("/authenticate", requestData);
        },
        enabled: false,
        retry: 0
    });
}

export default useLogin