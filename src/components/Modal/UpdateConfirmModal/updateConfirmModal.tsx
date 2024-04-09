import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useUpdateConfirmModal } from "./updateConfirmModal.store";
import Icon from "@/components/Icons";

export default function UpdateConfirmModal() {
  const { isShow, onClose, title, description, callback } =
    useUpdateConfirmModal();

  function closeModal() {
    onClose();
  }

  function handleConfirm() {
    callback?.();
    onClose();
  }

  const IconName = {
    error: "XCircle",
    success: "CheckCircle2",
    info: "Info",
    warning: "AlertCircle",
  };

  return (
    <Transition appear show={isShow} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <button className="float-right outline-none" onClick={closeModal}>
                <Icon name="X" size={20} className="m-auto hover:stroke-blue-900" />
                </button>
                <div className="my-8 text-center">
                  <Icon name="BadgeCheck" size={80} className="m-auto stroke-blue-900" />
                  <h4 className="text-xl text-[#333] font-semibold mt-4">{title}</h4>
                  <p className="text-sm text-gray-400 mt-2">{description}</p>
                </div>
                <div className="text-center">
                  <button
                    data-modal-hide="popup-modal"
                    type="button"
                    onClick={handleConfirm}
                    className="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                  >
                    ISSUE DONE
                  </button>
                  <button
                    data-modal-hide="popup-modal"
                    type="button"
                    onClick={closeModal}
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                  >
                    CANCEL
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
