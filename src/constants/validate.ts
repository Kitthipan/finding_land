export const VALIDATION_FORMAT = {
  text: {
    validate: /^([ก-๙a-zA-Z]+(?:\s[ก-๙a-zA-Z]+)*)$/,
    msg: 'รูปแบบข้อความไม่ถูกต้อง',
  },
  zipCode: {
    validate: /^\d{5}$/,
    msg: 'รูปแบบรหัสไปรษณีย์ไม่ถูกต้อง',
  },
  idCard: {
    validate: /^[0-9]{13}$/,
    msg: 'รูปแบบบัตรประชาชนไม่ถูกต้อง',
  },
  houseNumber: {
    validate: /^\d+(?:\/\d+)?$/,
    msg: 'รูปแบบบ้านเลขที่ไม่ถูกต้อง',
  },
  email: {
    validate: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    msg: 'รูปแบบอีเมลล์ไม่ถูกต้อง',
  },
  tel: {
    validate: /^\d{10}$/,
    msg: 'รูปแบบเบอร์โทรศัพท์ไม่ถูกต้อง',
  },
  number: {
    validate: /^\d+(\.\d{1,2})?$/,
    msg: 'กรุณากรอกแค่ตัวเลข (จุดทศนิยมไม่เกิน 2 หลัก)',
  },
  
}
