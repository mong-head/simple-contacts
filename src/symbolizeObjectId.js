
const id = Symbol('id')

const symbolizeObjectId = object => {
    const {'id': deletedKey, ...otherKeys} = object;
    return {[id]: deletedKey, ...otherKeys }
}

export {id, symbolizeObjectId}