"use client";

import React, { forwardRef } from "react";
import { createPortal } from "react-dom";

type Props = React.HTMLProps<HTMLDialogElement> & {
  children: React.ReactNode;
};

// eslint-disable-next-line react/display-name
const Model = forwardRef<HTMLDialogElement, Props>(
  ({ children, ...props }, ref) => {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => setMounted(true), []);

    return mounted
      ? createPortal(
          <dialog {...props} ref={ref}>
            {children}
          </dialog>,
          document.getElementById("model")!,
        )
      : null;
  },
);

export default Model;
