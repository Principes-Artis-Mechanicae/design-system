import React, { forwardRef } from "react";

import { CheckBoxElement, CheckBoxLabel } from "./CheckBox.style";

export interface CheckBoxProps extends React.ComponentProps<"input"> {
    width: string;
    height: string;
    children?: React.ReactNode;
}

export const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(({ children, ...props }, ref) => {
    return (
        <CheckBoxLabel>
            <CheckBoxElement ref={ref} type="checkbox" {...props}></CheckBoxElement>
            {children}
        </CheckBoxLabel>
    );
});
