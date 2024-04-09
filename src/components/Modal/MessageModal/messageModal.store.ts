import { create } from 'zustand'

type MessageInfo = 'info' | 'success' | 'error' | 'warning'

type dataInfo = {
  message: string
  type: MessageInfo
  isShow: boolean
  btnLabel?: string
  callback?: () => void
}

type MessageModal = {
  message: string
  type: 'info' | 'success' | 'error' | 'warning'
  isShow: boolean
  setInfo: (value: dataInfo) => void
  onClose: () => void
  btnLabel?: string
  callback?: () => void
}

const initialState: dataInfo = {
  message: '',
  type: 'info',
  isShow: false,
}

export const useMessageModal = create<MessageModal>()(
    (set) => ({
      ...initialState,
      setInfo: (value) => {
        set({ ...value })
      },
      onClose: () => {
        set({ isShow: false })
      },
    }),
)
