import {isValidInput} from "./helpers/validator";

function simulateEndpoint(input: any): Input | never {
    if (isValidInput(input)) return input

    throw new Error('Wrong API responce');
}

export default simulateEndpoint