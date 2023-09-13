function checkDataBody(dataAllowed, dataSent) {
    let dataNotAllowed = []
    dataNotAllowed = Object.keys(dataSent).filter(key => (!dataAllowed.includes(key)));
    if (dataNotAllowed.length > 0) {
        return true
    }
    return false
}

module.exports = { checkDataBody }