import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
export const getAllCategories=createAsyncThunk('getAllCategories',async(id,thunkapi)=>{
    const {rejectWithValue}=thunkapi;
    try{
        const respnse=await fetch('https://dummyjson.com/products/categories')
        const data=respnse.json()
        return data
    }
    catch(error){
        return rejectWithValue(error)
    }

})
export const getProductCategory=createAsyncThunk('getProductCategory',async(id,thunkapi)=>{
    const {rejectWithValue}=thunkapi;
    try{
        const respnse=await fetch(`https://dummyjson.com/products/category/${id}`)
        
        const data=respnse.json()
        return data
    }
    catch(error){
        return rejectWithValue(error)
    }

})
export const getProductById=createAsyncThunk('getProductById',async(id,thunkapi)=>{
    const {rejectWithValue}=thunkapi;
    try{
        const respnse=await fetch(`https://dummyjson.com/products/${id}`)
        console.log(id);
        const data=respnse.json()
        return data
    }
    catch(error){
        return rejectWithValue(error)
    }

})
const categories=createSlice({
    name:'ahmed',
    initialState:{
        loading:false,
        data:[],
        dataSlice:[],
        productSlice:[],
       dataImage:'',
        detailsImages:[],
        count:1,
        dataobj:{},
        array:[],
        newprice:1,
   

        

    },
    reducers:{
    //فانكشن incrementاللي بتزود object
       increment:(state,action)=>{
       let check=state.array.some((e)=>{
        return e.id===state.dataobj.id
       })
      
       if (check) {
        let newArray=state.array.map((e)=>{
            if (e.id===state.dataobj.id) {
                e.count+=1
                state.dataobj.count+=1
            }
            return e

        })
        state.array=[...newArray]
        
       }
       else{
        state.dataobj.count+=1

       }

       },
         //فانكشن decrement  اللي بتنقصobject
       decrement:(state,action)=>{
        let check=state.array.some((e)=>{
            return e.id===state.dataobj.id
           })
          
           if (check) {
            let newArray=state.array.map((e)=>{
                if (e.id===state.dataobj.id &&state.dataobj.count>1) {
                    e.count-=1
                    state.dataobj.count-=1
                }
                return e
    
            })
            state.array=[...newArray]
            
           }
           else{
            if (state.dataobj.count>1) {
                state.dataobj.count-=1
            }
            
    
           }

       },
       addToCart:(state,action)=>{
        if (localStorage.login) {
            const check=state.array.some((e)=>{
                return action.payload.id===e.id
               })
              
             
              if (check ) {
               
               let newArray=state.array.map((e)=>{
                if (e.id===action.payload.id) {
                  
                   e=state.dataobj
                   e.count+=1
                    
                }
                return e
               })
               
               state.array=[...newArray]
               Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `you have ${state.dataobj.count} items of ${state.dataobj.title}`,
                showConfirmButton: false,
                timer: 1500
              })
              
              }
              else{
                let newarray=state.array.map((e)=>{
                    return e
                })
               state.array=[state.dataobj,...newarray]
               Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your item  has been added',
                showConfirmButton: false,
                timer: 1500
              })
              }
              
              
            
        }
        else{
            Swal.fire('you must create account')
           
           
        }
      
      
       },
             //فانكشن incrementاللي بتزود array
       increment1:(state,action)=>{
      
        let newarray=state.array.map((e)=>{
            if (e.id===action.payload.id) {
               
             e.count+=1
                
            }
        return e

        })
       state.array=[...newarray]
       

       },
        //فانكشن decrement  اللي بتنقصarray-
       decrement1:(state,action)=>{
       let newArray=state.array.map((e)=>{
        if (e.id===action.payload.id && e.count>1) {
            e.count-=1
            
        }
        return e
       })
       state.array=[...newArray]
       
       
      

       },
       deleteBtn:(state,action)=>{
        
        let newArray=state.array.filter((e)=>{
            return e.id !==action.payload.id
        })
        state.array=[...newArray]

       },
       clear:(state,action)=>{
        state.array=[]

       },
       funcImage:(state,action)=>{
        console.log(action.payload);
        state.dataImage=action.payload
        

       },
       logout:(state)=>{
        state.array=[]
       
        localStorage.clear()
        state.dataobj.count=1
        
        
       }

   
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllCategories.pending,(state,action)=>{
            state.loading=true
            
        })
        builder.addCase(getAllCategories.fulfilled,(state,action)=>{
            state.loading=false
            console.log(action);
             state.data=action.payload
             state.dataSlice=action.payload.filter((e,x)=>{
                return x<8
             })
        })
        builder.addCase(getAllCategories.rejected,(state,action)=>{
            state.loading=false
           
        })
        builder.addCase(getProductCategory.pending,(state,action)=>{
            state.loading=true
           
        })
        builder.addCase(getProductCategory.fulfilled,(state,action)=>{
            state.loading=false
            state.productSlice=action.payload.products.filter((e)=>{
                if (e.category==='home-decoration') {
                    return e.id <29

                    
                }
                else{
                    return e
                }
            })
            
           
        })
        builder.addCase(getProductCategory.rejected,(state,action)=>{
            state.loading=false
           
        })
        builder.addCase(getProductById.pending,(state,action)=>{
            state.loading=true
           
            
        })
        //فانكشن اللي حطيت count في object
        builder.addCase(getProductById.fulfilled,(state,action)=>{
            let check=state.array.some((e)=>{
                return e.id===action.payload.id
            })
         if (check) {
          state.array.map((e)=>{
                if (e.id===action.payload.id) {
                    state.dataobj={...action.payload,count:e.count}
                    
                }
            })
            
         }



         else{
            state.dataobj={...action.payload,count:state.count}
                    
         }
           
            state.loading=false
         
          state.detailsImages=action.payload.images
            
            state.dataImage=state.dataobj.images[0]
         
         
         
        })
    }

})
export const allCategories=categories.reducer
export const {increment,decrement,addToCart,increment1,decrement1,deleteBtn,clear, funcImage, logout}=categories.actions;

