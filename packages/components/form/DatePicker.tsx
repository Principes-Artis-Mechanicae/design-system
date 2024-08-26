import { forwardRef } from "react";
import { DatePickerElement } from "./DatePicker.style";

export interface DatePickerProps extends React.ComponentProps<"input"> {
    width: string;
    height: string;
}

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(({ width, height }, ref) => {
    return <DatePickerElement ref={ref} type="date" width={width} height={height}></DatePickerElement>;
});
