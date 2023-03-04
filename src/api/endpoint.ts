import {isValidInput} from "./helpers/validator";

function simulateEndpoint(input: any): Input | null {
  if ( isValidInput(input) ) return input

  return null
}

export default simulateEndpoint