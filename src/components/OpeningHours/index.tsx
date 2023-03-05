import React, {FC, PropsWithChildren} from 'react'
import {Schedule} from "../Schedule";
import {convert} from "./converter";

type OpeningHoursProps = PropsWithChildren<{
    header?: string,
    rawInput: Input,
}>

const defaultHeader = 'Opening hours'
export const OpeningHours: FC<OpeningHoursProps> = ({header = defaultHeader, rawInput, children}) => {
    return (
        <Schedule
            header={header}
            items={convert(rawInput)}
            children={children}
        />
    );
}