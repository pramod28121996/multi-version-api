const { default: axios } = require("axios");

const getAllPosts = async () => {
    try {
        let response = {
            "code": 0,
            "msgCode": 200,
            "msgType": "Operation-Successful",
            "msgLang": "EN",
            "shortMsg": "posts Fetch Successfully",
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
const getPostById = async (id) => {
    try {
        let response = {
            "code": 0,
            "msgCode": 200,
            "msgType": "Operation-Successful",
            "msgLang": "EN",
            "shortMsg": "Post Fetch Successfully",
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

const getPostCommentById = async (id) => {
    try {
        let response = {
            "code": 0,
            "msgCode": 200,
            "msgType": "Operation-Successful",
            "msgLang": "EN",
            "shortMsg": "Post Comments Fetch Successfully",
            "longMsg": "",
            "internalMsg": "",
            "enableAlert": "No",
            "displayMsgBy": "shortMsg",
            "data": null
        }
        let json = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).catch((error) => {
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
    getAllPosts,
    getPostById,
    getPostCommentById
}