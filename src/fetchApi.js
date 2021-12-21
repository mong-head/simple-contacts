// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // "Access-Control-Allow-Headers": "Content-Type",
        // "Access-Control-Allow-Origin": `${process.env.REACT_APP_SERVER}`,
        // "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
    }

    const checkSystemError = (response) => {
        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
    }

    const checkJsonError = (json) => {
        if (json.result !== 'success') {
            throw json.message;
        }
    }

    const fetchAction = async (namespace, method, body) => {
        try {
            const jsonData = {
                method: method,
                headers: headers
            }
            const url = namespace ?  `${process.env.REACT_APP_SERVER}/contacts/${namespace}/` :  `${process.env.REACT_APP_SERVER}/contacts`
            
            body !== null && (jsonData.body = body);

            const response = await fetch(url,jsonData);

            checkSystemError(response);

            const json = await response.json();
            //checkJsonError(json);

            return json;
        } catch (err) {
            console.error(err);
        }
    }

    return {
        getAll: async function () { 
            return await fetchAction(null,'get', null);
        },
        getContact: async function (id) {
            return await fetchAction(id,'get', null);
        },
        addContact: async function (contact) {
            const body = JSON.stringify(contact);
            return await fetchAction(null,'post', body);
        },
        deleteContact: async function (id) {
            return await fetchAction(id,'delete', null);
        }
    }
}