import { PropsWithChildren, useMemo, useState } from "react";
import Icon from "../icons/Icon";

interface IAlertProps extends PropsWithChildren {
  colour?: "red";
}

export default function Alert({ colour = "red", children }: IAlertProps) {
  const [open, setOpen] = useState(true);

  const colourClass = useMemo(() => {
    switch (colour) {
      case "red":
        return "bg-red-400 border-red-600/20";
    }
  }, [colour]);

  return (
    open && (
      <div className={`${colourClass} p-4 rounded text-center border relative`}>
        <button
          className="absolute top-0 right-0 pl-3 pb-3 p-0.5"
          type="button"
          title="Close"
          onClick={() => setOpen(false)}
        >
          <Icon icon="close" />
        </button>

        {children}
      </div>
    )
  );
}
