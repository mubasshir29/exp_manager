import { createSlice } from "@reduxjs/toolkit";

export const expSlice = createSlice({
    name: "exp",
    initialState: {
        budget: 0,
        spent: 0,
        balance:0,
        transactions: []
    },
    reducers:{
        addBudget: (state,action)=>{
            state.budget += action.payload;
            state.balance+=action.payload
        },
        addSpent: (state,action)=>{
            state.spent += action.payload
            state.balance-=action.payload
        },
        addTransaction: (state,action)=>{
            state.transactions.push(action.payload)
        }
    }
});

export const {addBudget, addSpent, addTransaction} = expSlice.actions;

export default expSlice.reducer;