/**
 * Filters the raw values so that only values matching the search input are left
 * @param {string} searchInput The regex of the current search
 * @param {{}} rawValues All the values that need to be filtered
 * @param {string} searchKey The key of the value that will be used for filtering
 * @returns {{}} An object that contains all values that contain searchKey values that match the searchInput
 */
export default function filterByName(searchInput, rawValues, searchKey) {
    const regexInput = new RegExp('.*' + searchInput + ',*')

    let possibleOutputs = {}

    Object.keys(rawValues).forEach(valueID => {
        if (rawValues[valueID][searchKey].toLowerCase().match(regexInput))
            possibleOutputs[valueID] = rawValues[valueID]
    })

    return possibleOutputs
}