import { actions } from "./actions"

const INITIAL_STATE = {
    sidedrawer: false,
    nestedNavDisplay: false,
    products: [],
    category: 'all'
}

export const reducer = (state=INITIAL_STATE, action) => {

    switch(action.type){
        case actions.TOGGLE_SIDEDRAWER:
            return {
                ...state,
                sidedrawer: !state.sidedrawer
            }

        case actions.TOGGLE_NESTED_NAV_DISPLAY:
            return {
                ...state,
                nestedNavDisplay: !state.nestedNavDisplay
            }

        case actions.STORE_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }

        case actions.TOOGLE_PRODUCT_CATEGORY:
            return {
                ...state,
                category: action.payload
            }

        default:
            return {
                ...state
            }
    }
}
