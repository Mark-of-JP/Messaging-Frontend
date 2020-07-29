
export default function filterByName(searchInput, rawValues, searchKey) {
    const regexInput = new RegExp('.*' + searchInput + ',*')

    let possibleOutputs = {}

    Object.keys(rawValues).forEach(valueID => {
        if (rawValues[valueID][searchKey].toLowerCase().match(regexInput))
            possibleOutputs[valueID] = rawValues[valueID]
    })

    return possibleOutputs
}