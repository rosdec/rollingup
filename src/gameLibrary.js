import * as numbers from "./numbersManipulation"
import * as strings from "./stringsManipulation"


export default function generateChallenge(num) {
    return strings.titleCase(strings.reverseString(numbers.convert(num)))
}