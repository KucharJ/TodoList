export function setState(state) {
    return {
        type: 'SET_STATE',
        state
    }
}

export function deleteEntry(entry) {
    return {
        type: 'DELETE_ENTRY',
        entry
    }
}

export function addEntry(entry) {
    return {
        type: 'ADD_ENTRY',
        entry
    }    
}

export function toggleEntry(entry) {
    return {
        type: 'TOGGLE_ENTRY',
        entry
    }
}