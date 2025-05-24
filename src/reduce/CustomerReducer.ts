import type {Customer} from "../types/Customer.ts";

type CustomerReducer =
    {type: "ADD", payload: Customer}
|    {type: "DELETE", payload: number}
 |   {type: "UPDATE", payload: Customer}

const reducer: (state: Customer[], action: CustomerReducer) => (Customer[]) =(
    state: Customer[],
    action: CustomerReducer
)=> {
    switch (action.type){
        case "ADD":
            return[...state,action.payload]
        case "UPDATE":
            return state.map(stock =>
                stock.id === action.payload.id ? { ...action.payload } : stock
            );

        case "DELETE":
            return state.filter(stock => stock.id !== action.payload);

        default:
            return state;
    }
}
export default reducer;