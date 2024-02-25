import React from "react";

interface ModalComponentProps {
    modalRef: React.RefObject<HTMLDivElement>;
    title: string | undefined;
    children: any | undefined;
}

const Modal: React.FC<ModalComponentProps> = ({ modalRef, title, children }) => {
    return(
        <div id="modal" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-10 ">
            <div ref={modalRef} className="bg-white py-10 px-10 h-4/6 w-12/12 xl:w-4/12 lg:w-6/12 md:w-8/12 rounded-lg  overflow-auto">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3 className="text-lg font-semibold leading-6 text-gray-900 text-left">
                        {title}
                    </h3>
                    <div className="mt-2">
                        <p className="text-sm text-gray-500 text-left">
                            { children }
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Modal;