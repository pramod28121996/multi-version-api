const getAllItems = async () => {
    try {
        let response = {
            "code": 0,
            "msgCode": 200,
            "msgType": "Operation-Successful",
            "msgLang": "EN",
            "shortMsg": "Items Fetch Successfully",
            "longMsg": "",
            "internalMsg": "",
            "enableAlert": "No",
            "displayMsgBy": "shortMsg",
            "data": [{ version: "V1" }]
        }
        return response
    } catch (error) {
        throw error
    } finally {
        //Close connection
    }
}

module.exports = {
    getAllItems
}