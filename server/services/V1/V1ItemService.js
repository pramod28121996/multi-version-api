const { default: axios } = require("axios");

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
            "data": null
        }
        let json = await axios.get("https://jsonplaceholder.typicode.com/posts").catch((error) => {
            throw error
        });
        if (json?.data) {
            return { ...response, data: json.data.slice(0, 10) }
        }
        return response
    } catch (error) {
        throw error
    } finally {
        //Close connection
    }
}
const getItemById = async (id) => {
    try {
        let response = {
            "code": 0,
            "msgCode": 200,
            "msgType": "Operation-Successful",
            "msgLang": "EN",
            "shortMsg": "Item Fetch Successfully",
            "longMsg": "",
            "internalMsg": "",
            "enableAlert": "No",
            "displayMsgBy": "shortMsg",
            "data": null
        }
        let json = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).catch((error) => {
            throw error
        });
        if (json?.data) {
            return { ...response, data: json?.data }
        }
        return response
    } catch (error) {
        throw error
    } finally {
        //Close connection
    }
}

module.exports = {
    getAllItems,
    getItemById
}