import type { Stock } from "../types/Stock.ts";

type StockReducer =
    | { type: "ADD"; payload: Stock }
    | { type: "DELETE"; payload: number }
    | { type: "UPDATE"; payload: Stock };

const reducer: (state: Stock[], action: StockReducer) => Stock[] = (
    state: Stock[],
    action: StockReducer
) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload];

        case "UPDATE":
            return state.map(stock =>
                stock.id === action.payload.id ? { ...action.payload } : stock
            );

        case "DELETE":
            return state.filter(stock => stock.id !== action.payload);

        default:
            return state;
    }
};

export default reducer;
