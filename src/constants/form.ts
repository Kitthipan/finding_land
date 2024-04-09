export const TYPEFORM = [
  'ข้อมูลส่วนตัว',
  'ข้อมูลทั่วไป',
  'ข้อมูลร้านค้าพื้นฐาน',
  'ข้อมูลร้านค้าเพิ่มเติม',
] // TAB FORM
export const PREFIX = [
  { value: 'นาย', label: 'นาย' },
  { value: 'นาง', label: 'นาง' },
  { value: 'นางสาว', label: 'นางสาว' },
  { value: '4', label: 'อื่นๆ' },
] // PREFIX

export const SIZE_STORE = [
  { value: 'A', label: 'A' },
  { value: 'B', label: 'B' },
  { value: 'C', label: 'C' },
  { value: 'D', label: 'D' },
] 

export const ANSWER_STORE_BRAND = [
  { value: 'b001', label: 'เนลเล่' },
  { value: 'b002', label: 'มิงโก้' },
]

export const ANSWER_STORE_OWNER = [
  { value: 'Y', label: 'เจ้าของดูแลร้านเอง' },
  { value: 'N', label: 'ลูกจ้างดูแลร้าน' },
]

export const ANSWER_STORE_TYPE_1 = [
  { value: 'Y', label: 'Yes' },
  { value: 'N', label: 'No' },
]

export const ANSWER_SCORE = [
  { value: 1, label: 'น้อย' },
  { value: 2, label: 'กลาง' },
  { value: 3, label: 'มาก' },
]

export const ANSWER_COMMU_CARPACITY = [
  { value: 1, label: '> 100 หลัง' },
  { value: 2, label: '> 200 หลัง' },
  { value: 3, label: '> 300 หลัง' },
]

export const ANSWER_COMMU_ACTIVITY = [
  { value: 1, label: '> 1 จุด' },
  { value: 2, label: '> 2 จุด' },
  { value: 3, label: '> 3 จุด' },
]

export const ANSWER_CUST_WALKINOUT = [
  { value: 1, label: '> 5 คน' },
  { value: 2, label: '> 10 คน' },
  { value: 3, label: '> 15 คน' },
]

export const ANSWER_SELL_POINT_XS = [
  { value: 1, label: '> 2,500 บาท/วัน' },
  { value: 2, label: '> 3,300 บาท/วัน' },
  { value: 3, label: '> 4,000 บาท/วัน' },
]

export const ANSWER_SELL_POINT_S = [
  { value: 1, label: '> 4,000 บาท/วัน' },
  { value: 2, label: '> 5,200 บาท/วัน' },
  { value: 3, label: '> 6,400 บาท/วัน' },
]

export const ANSWER_SELL_POINT_L = [
  { value: 1, label: '> 14,000 บาท/วัน' },
  { value: 2, label: '> 16,500 บาท/วัน' },
  { value: 3, label: '> 19,000 บาท/วัน' },
]

export const ANSWER_SELL_POINT_M = [
  { value: 1, label: '> 8,600 บาท/วัน' },
  { value: 2, label: '> 9,500 บาท/วัน' },
  { value: 3, label: '> 10,500 บาท/วัน' },
]

export const ANSWER_STORE_YEAR = [
  { value: 1, label: '> 1 ปี' },
  { value: 2, label: '> 2 ปี' },
  { value: 3, label: '> 3 ปี' },
]


export const ANSWER_STORE_BASIC = [
  { value: 1, label: 'พอใช้' },
  { value: 2, label: 'ดี' },
  { value: 3, label: 'ดีมาก' },
]


export const ANSWER_AROUND_KG = [
  { value: 1, label: '< 2 ร้าน' },
  { value: 2, label: '> 3 ร้าน' },
  { value: 3, label: '> 5 ร้าน' },
]

export const ANSWER_STORE_MONTH = [
  { value: "1", label: "มกราคม", key: "JAN" },
  { value: "2", label: "กุมภาพันธ์", key: "FEB" },
  { value: "3", label: "มีนาคม", key: "MAR" },
  { value: "4", label: "เมษายน", key: "APRIL" },
  { value: "5", label: "พฤษภาคม", key: "MAY" },
  { value: "6", label: "มิถุนายน", key: "JUN" },
  { value: "7", label: "กรกฎาคม", key: "JUL" },
  { value: "8", label: "สิงหาคม", key: "AUG" },
  { value: "9", label: "กันยายน", key: "SEP" },
  { value: "10", label: "ตุลาคม", key: "OCT" },
  { value: "11", label: "พฤษจิกายน", key: "NOV" },
  { value: "12", label: "ธันวาคม", key: "DEC" }
]

export const INITIAL_LABEL = {
  storeName: 'ชื่อร้านค้า',
  storeHouseNumber: 'เลขที่',
  storeVillageNumber: 'หมู่',
  storeRoad: 'ถนน',
  zipCode: 'รหัสไปรษณีย์',
  storeAreaWidth: 'ขนาดพื้นที่กว้าง เมตร',
  storeAreaLength: 'ขนาดพื้นที่ยาว เมตร',
  storeArea: 'พื้นที่ ตารางเมตร',
  storeDate: 'วันที่',
  storeSalesArea: 'ขนาดพื้นที่ (พื้นที่ขาย)',
  storePresentArea: 'ขนาดพื้นที่นำเสนอ',
  contractPeriod: 'ระยะสัญญา (ปี)',
  serviceMonthCost: 'ค่าบริการเดือนละ (บาท)',
  storeOwnerFlag: 'ความเป็นเจ้าของ',
  avgCustomerPerDay: 'ปริมาณลูกค้าโดยเฉลี่ย / วัน',
  rent:'ค่าเช่าต่อเดือน (บาท)',
  avgSalesPerDay: 'ยอดขายเฉลี่ยต่อวัน (บาท)',
}


export const PERSONAL_LABEL = {
  prefix: 'คำนำหน้า',
  firstName: 'ชื่อ',
  lastName: 'ชื่อสกุล',
  birthDate: 'วัน/เดือน/ปี(พ.ศ.)เกิด',
  nationality: 'สัญชาติ',
  educationId: 'การศึกษา',
  idCard: 'บัตรประชาชนเลขที่',
  villageName: 'ชื่อหมู่บ้าน/อาคารชุด',
  houseNumber: 'เลขที่ห้อง/บ้านเลขที่',
  villageNumber: 'หมู่',
  lane: 'ซอย',
  road: 'ถนน',
  subdistrict: 'แขวง/ตำบล',
  district: 'เขต/อำเภอ',
  province: 'จังหวัด',
  zipCode: 'รหัสไปรษณีย์',
  homePhoneNumber: 'โทรศัพท์ (บ้าน)',
  phoneNumber: 'โทรศัพท์ (มือถือ)',
  email: 'อีเมล์',
}

export const GENERAL_LABELS = {
  jobId: 'ลักษณะอาชีพ',
  jobDetailId: 'อาชีพ',
  workplaceName: 'ชื่อสถานที่ทำงาน',
  workplaceCondominium: 'ชื่อหมู่บ้าน/อาคารชุด',
  workplaceFloor: 'ชั้น',
  workplaceDepartment: 'ฝ่าย/แผนก',
  workplaceHouseNumber: 'เลขที่',
  workplaceVillageNumber: 'หมู่',
  workplaceLane: 'ซอย',
  workplaceRoad: 'ถนน',
  subdistrict: 'แขวง/ตำบล',
  district: 'เขต/อำเภอ',
  province: 'จังหวัด',
  zipCode: 'รหัสไปรษณีย์',
  workplacePhoneNumber: 'โทรศัพท์',
  workplacePosition: 'ตำแหน่ง',
  workplaceYearsExp: 'อายุงาน (ปี)',
  employeeFlag: 'ด้านบุคลากร',
  investmentBudgetFlag: 'ด้านเงินลงทุน',
  openFlag: 'ด้านความพร้อม',
}

export const STORE_LABELS = {

  storeName: 'ชื่อร้านค้า',
  storeHouseNumber: 'เลขที่',
  storeVillageNumber: 'หมู่',
  storeRoad: 'ถนน',
  zipCode: 'รหัสไปรษณีย์',
  storeAreaWidth: 'ขนาดพื้นที่กว้าง เมตร',
  storeAreaLength: 'ขนาดพื้นที่ยาว เมตร',
  storeArea: 'พื้นที่ ตารางเมตร',
  sizeStorePresent: 'ขนาดพื้นที่นำเสนอ / Size S M L',
  currentSells: 'ยอดขายปัจจุบัน',
  amtProductList: 'จำนวนรายการสินค้า',
  storeQuestionTitle1:'1. ร้านค้าอนุญาตให้ทำการตรวจสอบรายการสินค้าที่วางขายในร้านเพื่อกำหนดสินค้าให้เหมาะสมกับร้านค้า',
  storeQuestionTitle2:'2. ร้านค้าได้ทำการเลือกสินค้าตามในลิสต์ Asortment  ตามขนาดของร้านค้า ',
  storeQuestionTitle3:'3. ร้านค้ามีควาประสงค์ยื่นกู้สินเชื่อกับธนาคารหรือไม่',
  storeQuestionTitle4:'4. ให้ร้านค้าระบุ ตู้ไอศกรีมที่ต้องการ ',
  storeQuestionTitle5:'5. เจ้าของร้านดูแลร้านเอง หรือลูกจ้างเฝ้าร้าน',
  storeQuestionTitle6:'6. ระบุข้อมูลสถานะเงินทุน หมุนเวียนย้อนหลัง 3 เดือน ในช่องหมายเหตุ',
  storeQuestionTitle7:'7. ยอดซื้อสินค้ามาจำหน่ายภายในร้านในปัจจุบันต่อเดือน ในทุกช่องทาง',
  storeQuestionTitle8:'8. อาชีพปัจจุบันของเจ้าของร้าน',
  storeQuestionTitle9:'9. ประเมิณยอดขายของร้านค้าเฉลี่ยต่อวัน ประเมินโดย MDJ/CMS',
  storeQuestionTitle10:'10. เป็นร้านค้าที่ได้ทดลองซื้อขายกับโดนใจก่อน ในระยะเวลา 3 เดือนก่อนหน้าหรือไม่',
  storeQuestionTitle11:'บอกเล่า ทัศนคติ ลักษณะนิสัย ความกระตือรือร้น ความคิดในการค้าขาย ของเจ้าของร้านพอสังเขป',
  storeQuestionAlert1:'(เลือก Yes / No ในช่องโปรดเลือก)',
  storeQuestionAlert2:'(ระบุ 1 แบรนด์เท่านั้น) ',
  storeQuestionAlert3:'(ลงยอดแยกเดือน เช่น ก.ค 100,000 บาท/ ส.ค 200,000 บาท / ก.ย 300,000 บาท)',
  storeQuestionAlert4:'(ระบุยอด พร้อมแนบเอกสารใบเสร็จ)',
  storeQuestionAlert5:'(ระบุยอด พร้อมแนบเอกสารใบเสร็จ)',
  storeQuestionAlert6:'(ถ้าใช่ระบุยอดซื้อย้อนหลังต่อเดือน)',
  markQuestion: 'หมายเหตุ',
  estimateMDJ:'MDJ ประเมิน (บาท/วัน)',
  estimateCMS:'CMs ประเมิน (บาท/วัน)',
  month:'เดือน',
  monthUnit:'บาท/เดือน',
  avgCustomerPerDay: 'ปริมาณลูกค้าโดยเฉลี่ย / วัน',
  rent:'ค่าเช่าต่อเดือน (บาท)',
  avgSalesPerDay: 'ยอดขายเฉลี่ยต่อวัน (บาท)',
  storeOwnerFlag: 'ความเป็นเจ้าของ',
  surroundRetailStore: 'ร้านค้าปลีก โปรดระบุชื่อ (มากสุด 3)',
  surroundMall: 'ห้างสรรพสินค้า โปรดระบุชื่อ (มากสุด 3)',
  surroundGroceryStore: 'ร้านจำหน่ายสินค้าเบ็ดเตล็ด โปรดระบุชื่อ (มากสุด 3)',
  surroundCommunity: 'ชุมชนหรือตลาด โปรดระบุชื่อ (มากสุด 3)',
  surroundOffice: 'สำนักงาน โปรดระบุชื่อ (มากสุด 3)',
  surroundPublicTransport: 'สถานีรถไฟฟ้า รถใต้ดิน หรือป้ายรถเมล โปรดระบุชื่อ (มากสุด 3)',
  surroundStation:
    'เส้นทางลัด หรือจุดแวะพัก โปรดระบุชื่อ ร้านกาแฟ โปรดระบุชื่อ (มากสุด 3)',
  surroundResidence: 'คอนโด อพาร์ทเม้นท์ หรือพักอาศัยอื่นๆ โปรดระบุชื่อ (มากสุด 3)',
  surroundAcademy: 'สถานศึกษา เชน โรงเรียน มหาวิทยาลัย โปรดระบุชื่อ (มากสุด 3)',
  surroundOther: 'อื่นๆ โปรดระบุ (มากสุด 3)',
  assetPicture: 'รูปทรัพย์สิน (มากสุด 2 รูป)',
  fontStorePicture: '1.ภาพบรรยากาศหน้าร้านและด้านข้างของร้าน',
  OverviewInStorePicture:'2.ภาพรวม Assortment ภายในร้าน',
  ceilingStorePicture:'3.ภาพฝ้าของร้าน',
  wallStorePicture:'4.ภาพฝาผนังของร้าน',
  floorStorePicture:'5.ภาพพื้นของร้าน',
  latitude: 'ละติจูด',
  longitude : 'ลองติจูด',
  locationStyle1:'1.สถานที่ตั้งสามารถมองเห็นเด่นชัด อยู่ในทำเลที่ตั้งที่ดี',
  locationStyle2:'2.สถานที่ตั้งอยู่ในแหล่งชุมชนที่มีความหนาแน่นกี่หลังคาเรือน',
  locationStyle3:'3.สถานที่ตั้งติดกับจุดกิจกรรมโปรดระบุชื่อ และจำนวนในหมายเหตุ เช่น ตลาด, ธนาคาร, ATM หรือ สถานที่ราชการ โรงเรียน โรงงาน วัด ฯลฯ',
  locationStyle4:'4.สถานที่ตั้งเป็นเส้นทางหลักที่ใช้ในการสัญจรของชุมชนในพื้นที่ ',
  locationStyle5:'5.สถานที่ตั้งสามารถจอดรถด้านหน้าได้',
  locationStyle6:'6.ในพื้นที่ให้บริการรอบรัศมี 1 ก.ม. มีคู่แข่งที่เป็นร้านค้าปลีกเยอะหรือไม่ โปรดระบุชื่อ-จำนวน คู่แข่งในหมายเหตุ',
  locationStyle7:'7.ในพื้นที่ให้บริการรอบรัศมี 1 ก.ม. มีคู่แข่งที่เป็นร้านสะดวกซื้อ หรือไม่ เช่น ถูกดี, 7/11, Lotus',
  locationStyleAlert2:'(จำนวนบ้าน >100 หลัง = 1 คะแนน ,  > 200 หลัง = 2 คะแนน, >300 หลัง = 3 คะแนน)',
  locationStyleAlert3:'(จำนวนจุดกิจกรรม >1 จุด = 1 คะแนน,  >2 จุด = 2 คะแนน,  >3 จุด = 3 คะแนน )',
  locationStyleAlert4:'(ถนนเส้นหลักของชุมชน)',
  locationStyleAlert5:'(รถยนต์,รถมอเตอร์ไซค์ )',
  locationStyleAlert6:'(โปรดระบุชื่อ-จำนวน คู่แข่งในหมายเหตุ)',
  featureStore1:'1.ภายในร้านค้ามีความหลากหลายของสินค้าทั้งกลุ่มสินค้า อุปโภค, บริโภค',
  featureStore2:'2.ร้านค้ามีตู้ Kiosk ต่างๆ เช่น ตู้น้ำดื่มหยอดเหรียญ  ตู้เติมเงินโทรศัพท์ ตู้เติมน้ำมัน เป็นต้น ',
  featureStore3:'3.เป็นร้านค้าที่ขายสินค้าที่เน้นการขายปลีก  ร้านขายส่งไม่ต้องใส่คะแนน',
  featureStore4:'4.เป็นร้านที่มีป้ายโฆษณาสินค้าต่างๆ จากแบรนด์ชั้นนำ ติดที่หน้าร้าน',
  featureStore5:'5.เป็นร้านค้าที่เข้าร่วมโครงการของทางภาครัฐ เช่น ร้านค้าสวัสิดการแห่งรัฐ, ร้านธงฟ้า, โครงการคนละครึ่ง เป็นต้น',
  featureStore6:'6.เป็นร้านค้าที่มีลูกค้าเดินเข้าออกอยู่ตลอดเวลา (สังเกตุจากช่วงเวลาประมาณ 1 ชั่วโมง โปรดระบุมีลูกค้ากี่คน  โดยระบุช่วงเวลาด้วย)',
  featureStore7:'7.ร้านค้ามียอดขายเฉลี่ยเท่าไหร่ต่อวันในขนาดร้านปัจจุบัน ยอดต่ำกว่าเกณฑ์ที่ระบุไม่ต้องใส่คะแนน (ข้อมูลจากการแจ้งของร้านค้า)',
  featureStore8:'8.ร้านค้าควรเปิดมาแล้วอย่างน้อย 3 ปี หรือถ้าเป็นร้านใหม่ต้องมีร้านเก่าที่เปิดมาแล้วอย่างน้อย 3 ปี',
  featureStore9:'9.เจ้าของร้านมีทัศนคติกับดีหรือไม่ ทัศนคติไม่ดีไม่ต้องใส่คะแนน',
  featureStoreAlert1:'โปรดระบุจำนวนสินค้า.................SKU',
  featureStoreAlert2:'(จำนวน 1 ตู้ = 1 คะแนน,  จำนวน 2 ตู้ = 2 คะแนน ,  จำนวน 3 ตู้ = 3 คะแนน )',
  featureStoreAlert3:'(ขายส่งบ้าง 2 คะแนน , ขายปลีกอย่างเดียว = 3 คะแนน )',
  featureStoreAlert4:'(จำนวนน้อย = 1 คะแนน,  ปานกลาง = 2 คะแนน ,  จำนวนมาก = 3 คะแนน )',
  featureStoreAlert5:'(จำนวนน้อย = 1 คะแนน,  ปานกลาง = 2 คะแนน ,  จำนวนมาก = 3 คะแนน )',
  featureStoreAlert6:'(จำนวน >5 คน = 1 คะแนน,  >10 คน = 2 คะแนน ,  >15 คน = 3 คะแนน ) ',
  featureStoreAlert7n1:'ขนาดร้าน  XS เกณฑ์ยอดขาย 4,450 บาท/วัน  (ยอดขายต่อวัน    >2,500 = 1 คะแนน,  >3,300 = 2 คะแนน,  >4,000 = 3 คะแนน )',
  featureStoreAlert7n2:'ขนาดร้าน  S เกณฑ์ยอดขาย   7,400 บาท/วัน  (ยอดขายต่อวัน   >4,000 = 1 คะแนน,   >5,200 = 2 คะแนน,  >6,400 = 3 คะแนน )',
  featureStoreAlert7n3:'ขนาดร้าน M เกณฑ์ยอดขาย   10,500 บาท/วัน  (ยอดขายต่อวัน   >8,600 = 1 คะแนน,  9,500 = 2 คะแนน, >10,500 = 3 คะแนน )',
  featureStoreAlert7n4:'ขนาดร้าน  L  เกณฑ์ยอดขาย   15,400 บาท/วัน (ยอดขายต่อวัน   >14,000 = 1 คะแนน,  >16,500 = 2 คะแนน, >19,000 = 3 คะแนน )',
  featureStoreAlert8:'(<1 ปี = 1 คะแนน,  >2 ปี = 2 คะแนน , >3 ปี = 3 คะแนน )',
  featureStoreAlert9:'(พอใช้ = 1 คะแนน,  ดี = 2 คะแนน , ดีมาก = 3 คะแนน )',

}

export const KEY_FORM = {
  initialForm: 'InitialForm',
  personalForm: 'PersonalForm',
  generalForm: 'GeneralForm',
  storeForm: 'StoreForm',
}

export const STATUS_D = 'Save Draft';
export const STATUS_AM = 'Waiting for AM to Review';
export const STATUS_AD = 'Waiting for Admin to Review';
export const STATUS_CO = 'Waiting for Committee to Review';
export const STATUS_A = 'Committee Approve';
export const STATUS_R = 'Committee Reject';

export const STATUS_P = 'Pending';
export const STATUS_C = 'Complete';

export const SURROUND_LIST = {
  surroundRetailStore: 'RS',
  surroundMall: 'M',
  surroundGroceryStore: 'GS',
  surroundCommunity: 'C',
  surroundOffice: 'O',
  surroundPublicTransport: 'PT',
  surroundStation: 'S',
  surroundResidence: 'R',
  surroundAcademy: 'A',
  surroundOther: 'OTHER',
}
