import React, {FC, PropsWithChildren} from 'react'
import {Schedule} from "../Schedule";
import {convert} from "./converter";

type OpeningHoursProps = PropsWithChildren<{
    header?: string,
    rawInput?: Input,
}>

const defaultHeader = 'Opening hours'
export const OpeningHours: FC<OpeningHoursProps> = ({header = defaultHeader, rawInput, children}) => {
    const items = rawInput
        ? convert(rawInput)
        : []
    return (
        <Schedule
            header={header}
            items={items}
            children={children}
        />
    );
}