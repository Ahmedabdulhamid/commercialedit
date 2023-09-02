import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const searchProducts=createAsyncThunk('searchProducts',async(id,thunkapi)=>{
    const {rejectWithValue}=thunkapi;
    try{
        const response=await fetch(`https://dummyjson.com/products/search?q=${id}`)
        const data=await response.json()
        return data
    }
    catch(error){
        return rejectWithValue(error)
    }
})

const searchSlice=createSlice({
    name:'ahmed',
    initialState:{
        loading:false,
        arr:[],
        users:[],
        objInfo:[]
    },
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder.addCase(searchProducts.pending,(state,action)=>{
           
            state.loading=true
        })
        builder.addCase(searchProducts.fulfilled,(state,action)=>{
           
            state.loading=false
            state.arr=action.payload.products

        })
        builder.addCase(searchProducts.rejected,(state,action)=>{
            state.loading=false
            
        })
       


    }
})
export const searchSliceProduct=searchSlice.reducer
