import { isInput } from '../helpers/typeguards'

const inputFileUrl = './input.json'

export const loadInput = async (): Promise<Input> => {
  const response = await fetch(inputFileUrl)
  if (!response.ok) {
    throw new Error(`An error has occured: ${response.status}`)
  }
  const json = await response.json()

  if (!isInput(json)) {
    throw new Error('API response is not valid')
  }
  return json
}
