import {isInput} from "./validator";

const inputFileUrl = './input.json'

export const loadInput = async (): Promise<Input | null> => {
    const response = await fetch(inputFileUrl);
    if (!response.ok) {
        throw new Error(`An error has occured: ${response.status}`);
    }
    const json = await response.json();

    if (!isInput(json)) return null
    return json;
}