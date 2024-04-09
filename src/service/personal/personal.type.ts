
export interface personalData {
    result: Result;
    data: Data;
}

export interface Result {
    code: string;
    msg: string;
}

export interface Data {
    bigcard: string;
    cardStatus: string;
    idCard: string;
    idCardRef: string;
    idCardType: number;
    isVerifyIdCard: string;
    verifyIdCardDate: string;
    mobilePhone: string;
    isVerifyMobilePhone: string;
    verifyMobilePhoneDate: string;
    email: string;
    isVerifyEmail: string;
    verifyEmailDate: string;
    isOnlineRegister: string;
    onlineRegisterDate: string;
    isEWallet: string;
    ewalletId: string;
    ewalletRegisterDate: string;
    title: string;
    tname: string;
    tlastName: string;
    eName: string;
    eLastName: string;
    gender: string;
    birthDate: string;
    birthDateType: string;
    nationality: number;
    nationalityOther: string;
    familySize: number;
    contactPermission: number;
    contactPreference: number;
    language: string;
    occupation: string;
    welfareId: any;
    displayWelfareId: any;
    isVerifyDopa: string;
    district: string,
    sub_district: string,
    add1: string, 
    add2: string,
    add3: string,
    contactPreferences: ContactPreference[];
}

interface ContactPreference {
    channel: string;
    status: string | null;
}
