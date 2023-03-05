import {isValidInput} from "./helpers/validator";

function simulateEndpoint(input: any): Input | undefined {
    if (isValidInput(input)) return input

    console.error('Wrong API input'); // log error
    return undefined
}

export default simulateEndpoint