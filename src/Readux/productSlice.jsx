import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const getAllSmartPhons=createAsyncThunk('getAllSmartPhons',async(id,thunkapi)=>{
    const {rejectWithValue}=thunkapi;
    try{
        const response=await fetch('https://dummyjson.com/products')
        const data = await response.json();
        
        return data;
    }
    catch (error){
        return rejectWithValue(error)
    }

})
export const getAllLaptops=createAsyncThunk('getAllLaptops',async(id,thunkapi)=>{
    const {rejectWithValue}=thunkapi;
    try{
        const response=await fetch('https://dummyjson.com/products')
        const data = await response.json();
        
        return data;
    }
    catch (error){
        return rejectWithValue(error)
    }

})
export const getAllFragrances=createAsyncThunk('getAllFragrances',async(id,thunkapi)=>{
    const {rejectWithValue}=thunkapi;
    try{
        const response=await fetch('https://dummyjson.com/products')
        const data = await response.json();
        
        return data;
    }
    catch (error){
        return rejectWithValue(error)
    }

})
export const getAllSkinCare=createAsyncThunk('getAllSkinCare',async(id,thunkapi)=>{
    const {rejectWithValue}=thunkapi;
    try{
        const response=await fetch('https://dummyjson.com/products')
        const data = await response.json();
        
        return data;
    }
    catch (error){
        return rejectWithValue(error)
    }

})
export const getAllGroceries=createAsyncThunk('getAllGroceries',async(id,thunkapi)=>{
    const {rejectWithValue}=thunkapi;
    try{
        const response=await fetch('https://dummyjson.com/products')
        const data = await response.json();
        
        return data;
    }
    catch (error){
        return rejectWithValue(error)
    }

})
export const getAllHomeDecoration=createAsyncThunk('getAllHomeDecoration',async(id,thunkapi)=>{
    const {rejectWithValue}=thunkapi;
    try{
        const response=await fetch('https://dummyjson.com/products')
        const data = await response.json();
        
        return data;
    }
    catch (error){
        return rejectWithValue(error)
    }

})
export const ProductSlice=createSlice({
    name:'ahmed',
    initialState:{
        loading:false,
        products:[],
        productSmartPhons:[],
        productLaptops:[],
        productFrangces:[],
        productSkinCare:[],
        productGroceries:[],
        productHomeDecoration:[],

    },
    extraReducers:(builder)=>{
    
    
   
        builder.addCase(getAllSmartPhons.pending,(state,action)=>{
            
            state.loading=true


        })
        builder.addCase(getAllSmartPhons.fulfilled,(state,action)=>{
          state. productSmartPhons=action.payload.products.filter((e)=>{
            return e.category==='smartphones'
          }
          )

            state.loading=false
            

        })
        builder.addCase(getAllSmartPhons.rejected,(state,action)=>{
           
            state.loading=false
            

        })
        builder.addCase(getAllLaptops.pending,(state,action)=>{
         
            state.loading=true
        })
        builder.addCase(getAllLaptops.fulfilled,(state,action)=>{
          state. productLaptops=action.payload.products.filter((e)=>{
            return e.category==='laptops'
          }
          )
            state.loading=false
        })
        builder.addCase(getAllLaptops.rejected,(state,action)=>{
           
            state.loading=false
            

        })
        builder.addCase(getAllFragrances.pending,(state,action)=>{
            
            state.loading=true
        })
        builder.addCase(getAllFragrances.fulfilled,(state,action)=>{
          state. productFrangces=action.payload.products.filter((e)=>{
            return e.category==='fragrances'
          }
          )
            state.loading=false
        })
        builder.addCase(getAllFragrances.rejected,(state,action)=>{
          
            state.loading=false
            

        })
        builder.addCase(getAllSkinCare.pending,(state,action)=>{
             state.loading=true
        })
        builder.addCase(getAllSkinCare.fulfilled,(state,action)=>{
          state. productSkinCare=action.payload.products.filter((e)=>{
            return e.category==='skincare'
          }
          )
            state.loading=false
        })
        builder.addCase(getAllSkinCare.rejected,(state,action)=>{
            
            state.loading=false
            

        })
        builder.addCase(getAllGroceries.pending,(state,action)=>{
      
            state.loading=true
        })
        builder.addCase(getAllGroceries.fulfilled,(state,action)=>{
          state. productGroceries=action.payload.products.filter((e)=>{
            return e.category==='groceries'
          }
          )
            state.loading=false
        })
        builder.addCase(getAllGroceries.rejected,(state,action)=>{
           
            state.loading=false
            

        })
        builder.addCase(getAllHomeDecoration.pending,(state,action)=>{
            
            state.loading=true
        })
        builder.addCase(getAllHomeDecoration.fulfilled,(state,action)=>{
          state.productHomeDecoration =action.payload.products.filter((e)=>{
            return e.category==='home-decoration' 
          }
          )
            state.loading=false
        })
        builder.addCase(getAllHomeDecoration.rejected,(state,action)=>{
           
            state.loading=false
            

        })




    }
})
export const getProducts =ProductSlice.reducer