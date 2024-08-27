import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

interface IModalProps extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
}

export default function Modal({ open, children, onClose }: IModalProps) {
  const component = open && (
    <div className="fixed inset-0 overflow-auto bg-sky-900/90 z-20">
      <div className="relative z-10 p-4 inset-0 min-h-full flex justify-center items-center">
        <div
          className="cursor-pointer absolute inset-0 -z-10"
          title="Close"
          onClick={onClose}
        ></div>

        {children}
      </div>
    </div>
  );

  return createPortal(component, document.querySelector("main")!);
}
