type stateType = {
    statusSnackbar: boolean
}

type actionType = {
    type: "setStatusSnackbar"
    statusSnackbar: boolean
}

const initialState  = {
    statusSnackbar: false
}

export const appReducer = (state: stateType = initialState, action: actionType) => {
    switch (action.type) {
        case "setStatusSnackbar":
            return {...state, statusSnackbar: action.statusSnackbar}

        default:
            return state
    }
}

export const setStatusSnackbarAC = (statusSnackbar: boolean): actionType => {
    return {type: "setStatusSnackbar", statusSnackbar}
}