export const reducer = (state, action) => {
    if(action.type  === "REMOVE_ITEM") {
        return{
            ...state,
            item: state.item.filter((curElem) => {
                return curElem.id !== action.payload
            } )
        }
    }
    if(action.type === "CLEAR_CART") {
        return{...state, item: [] }

    }
    if(action.type === "INCREMENT") {
        let updataedCart = state.item.map((curElem) => {
            if(curElem.id === action.payload) {
                return{...curElem, quantity: curElem.quantity + 1}  
            }
            return curElem;
        })
        return {...state, item: updataedCart}
    }
    if(action.type === "DECREMENT") {
        const updataedCart = state.item.map((curElem) => {
            if(curElem.id === action.payload) {
                return{...curElem, quantity: curElem.quantity - 1}  
            }
            return curElem;
        }).filter((curElem) => {
            return curElem.quantity !== 0;
        })
        return {...state, item: updataedCart}
    }

    return state;
}