import React, { FC, PropsWithChildren } from 'react'
import { Schedule } from '../Schedule'
import { convert } from './converter'

type OpeningHoursProps = PropsWithChildren<{
  header?: string
  rawInput?: Input
}>

const defaultHeader = 'Opening hours'
const mapGetDateToDays: Days[] = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
]

export const OpeningHours: FC<OpeningHoursProps> = ({
  header = defaultHeader,
  rawInput,
  children,
}) => {
  const localDay: Days = mapGetDateToDays[new Date().getDay()]
  const items: Item[] = rawInput ? convert(rawInput, localDay) : []

  return (
    <Schedule header={header} items={items}>
      {children}
    </Schedule>
  )
}
