import { actions } from "./actions"

const INITIAL_STATE = {
    sidedrawer: false
}

export const reducer = (state=INITIAL_STATE, action) => {

    switch(action.type){
        case actions.TOGGLE_SIDEDRAWER:
            return {
                ...state,
                sidedrawer: !state.sidedrawer
            }

        default:
            return {
                ...state
            }
    }
}
