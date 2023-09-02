import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
export const getAllProducts = createAsyncThunk('getAllProducts', async (id, thunkapi) => {
    const { rejectWithValue } = thunkapi;
    try {
        const response = await fetch('https://dummyjson.com/products')

        const data = await response.json();

        return data;
    }
    catch (error) {
        return rejectWithValue(error)
    }

})
export const getAllFurniture = createAsyncThunk('getAllFurniture', async (id, thunkapi) => {
    const { rejectWithValue } = thunkapi;
    try {
        const response = await fetch('https://dummyjson.com/products/category/furniture')

        const data = await response.json();

        return data;
    }
    catch (error) {
        return rejectWithValue(error)
    }

})
export const getAllTops = createAsyncThunk('getAllTops', async (id, thunkapi) => {
    const { rejectWithValue } = thunkapi;
    try {
        const response = await fetch('https://dummyjson.com/products/category/tops')

        const data = await response.json();

        return data;
    }
    catch (error) {
        return rejectWithValue(error)
    }

})
export const getAllWomenDress = createAsyncThunk('getAllWomenDress', async (id, thunkapi) => {
    const { rejectWithValue } = thunkapi;
    try {
        const response = await fetch('https://dummyjson.com/products/category/womens-dresses')

        const data = await response.json();

        return data;
    }
    catch (error) {
        return rejectWithValue(error)
    }

})    
export const getAllWomenShoes = createAsyncThunk('getAllWomenShoes', async (id, thunkapi) => {
    const { rejectWithValue } = thunkapi;
    try {
        const response = await fetch('https://dummyjson.com/products/category/womens-shoes')

        const data = await response.json();

        return data;
    }
    catch (error) {
        return rejectWithValue(error)
    }

})     
export const getAllMenShirts = createAsyncThunk('getAllMenShirts', async (id, thunkapi) => {
    const { rejectWithValue } = thunkapi;
    try {
        const response = await fetch('https://dummyjson.com/products/category/mens-shirts')

        const data = await response.json();

        return data;
    }
    catch (error) {
        return rejectWithValue(error)
    }

})  
export const getAllMenShoes = createAsyncThunk('getAllMenShoes', async (id, thunkapi) => {
    const { rejectWithValue } = thunkapi;
    try {
        const response = await fetch('https://dummyjson.com/products/category/mens-shoes')

        const data = await response.json();

        return data;
    }
    catch (error) {
        return rejectWithValue(error)
    }

})  
export const getAllAuotoMotivde = createAsyncThunk('getAllAuotoMotivde', async (id, thunkapi) => {
    const { rejectWithValue } = thunkapi;
    try {
        const response = await fetch('https://dummyjson.com/products/category/automotive')

        const data = await response.json();

        return data;
    }
    catch (error) {
        return rejectWithValue(error)
    }

})  
export const getAllMotor = createAsyncThunk('getAllMotor', async (id, thunkapi) => {
    const { rejectWithValue } = thunkapi;
    try {
        const response = await fetch('https://dummyjson.com/products/category/motorcycle')

        const data = await response.json();

        return data;
    }
    catch (error) {
        return rejectWithValue(error)
    }

})  
export const getAllWatches = createAsyncThunk('getAllWatches', async (id, thunkapi) => {
    const { rejectWithValue } = thunkapi;
    try {
        const response = await fetch('https://dummyjson.com/products/category/mens-watches')

        const data = await response.json();

        return data;
    }
    catch (error) {
        return rejectWithValue(error)
    }

})
export const getAllWomenWatches = createAsyncThunk('getAllWomenWatches', async (id, thunkapi) => {
    const { rejectWithValue } = thunkapi;
    try {
        const response = await fetch('https://dummyjson.com/products/category/womens-watches')

        const data = await response.json();

        return data;
    }
    catch (error) {
        return rejectWithValue(error)
    }

})
export const getAllWomenPages = createAsyncThunk('getAllWomenPages', async (id, thunkapi) => {
    const { rejectWithValue } = thunkapi;
    try {
        const response = await fetch('https://dummyjson.com/products/category/womens-bags')

        const data = await response.json();

        return data;
    }
    catch (error) {
        return rejectWithValue(error)
    }

})
export const getAllWomenJwellery = createAsyncThunk('getAllWomenJwellery', async (id, thunkapi) => {
    const { rejectWithValue } = thunkapi;
    try {
        const response = await fetch('https://dummyjson.com/products/category/womens-jewellery')

        const data = await response.json();

        return data;
    }
    catch (error) {
        return rejectWithValue(error)
    }

})
export const getAllWomenSunglasses = createAsyncThunk('getAllWomenSunglasses', async (id, thunkapi) => {
    const { rejectWithValue } = thunkapi;
    try {
        const response = await fetch('https://dummyjson.com/products/category/sunglasses')

        const data = await response.json();

        return data;
    }
    catch (error) {
        return rejectWithValue(error)
    }

})
export const getAllWomenLighting = createAsyncThunk('getAllWomenLighting', async (id, thunkapi) => {
    const { rejectWithValue } = thunkapi;
    try {
        const response = await fetch('https://dummyjson.com/products/category/lighting')

        const data = await response.json();

        return data;
    }
    catch (error) {
        return rejectWithValue(error)
    }

})
export const ProductSlice1 = createSlice({
    name: 'ahmed',
    initialState: {
        loading: false,

        productSmartPhons: [],
        productFurniture: [],
        productTops:[],
        productWomenDress:[],
        productWomenShoes:[],
        productMenShirts:[],
        productMenShoes:[],
        productMotive:[],
        productMotor:[],
        productMenWatch:[],
        productWomenWatch:[],
        productWomenPages:[],
        productWomenJwellery:[],
        productWomenSunglasses:[],
        productWomenLighting:[],





    },
    extraReducers: (builder) => {



        builder.addCase(getAllProducts.pending, (state, action) => {

            state.loading = true


        })
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.productSmartPhons = action.payload.products.filter((e) => {
                return e.id < 29
            })
            state.loading = false


        })
        builder.addCase(getAllProducts.rejected, (state, action) => {

            state.loading = false


        })
        builder.addCase(getAllFurniture.pending, (state, action) => {

            state.loading = true
            

        })
        builder.addCase(getAllFurniture.fulfilled, (state, action) => {
           
            state.productFurniture = action.payload.products
            state.loading = false


        })
        builder.addCase(getAllFurniture.rejected, (state, action) => {
           state.loading = false


        })
        builder.addCase(getAllTops.pending, (state, action) => {

            state.loading = true
            

        })
        builder.addCase(getAllTops.fulfilled, (state, action) => {
           
            state. productTops = action.payload.products
            state.loading = false


        })
        builder.addCase(getAllTops.rejected, (state, action) => {
           state.loading = false


        })
        builder.addCase(getAllWomenDress.pending, (state, action) => {

            state.loading = true
            

        })
        builder.addCase(getAllWomenDress.fulfilled, (state, action) => {
           
            state.productWomenDress = action.payload.products
            state.loading = false


        })
        builder.addCase(getAllWomenDress.rejected, (state, action) => {
           state.loading = false


        })
        builder.addCase(getAllWomenShoes.pending, (state, action) => {

            state.loading = true
            

        })
        builder.addCase(getAllWomenShoes.fulfilled, (state, action) => {
           
            state.productWomenShoes = action.payload.products
            state.loading = false


        })
        builder.addCase(getAllWomenShoes.rejected, (state, action) => {
           state.loading = false


        })
        builder.addCase(getAllMenShirts.pending, (state, action) => {

            state.loading = true
            

        })
        builder.addCase(getAllMenShirts.fulfilled, (state, action) => {
           
            state.productMenShirts = action.payload.products
            state.loading = false


        })
        builder.addCase(getAllMenShirts.rejected, (state, action) => {
           state.loading = false


        })
        builder.addCase(getAllMenShoes.pending, (state, action) => {

            state.loading = true
            

        })
        builder.addCase(getAllMenShoes.fulfilled, (state, action) => {
           
            state.productMenShoes = action.payload.products
            state.loading = false


        })
        builder.addCase(getAllMenShoes.rejected, (state, action) => {
           state.loading = false


        })
        builder.addCase(getAllAuotoMotivde.pending, (state, action) => {

            state.loading = true
            

        })
        builder.addCase(getAllAuotoMotivde.fulfilled, (state, action) => {
           
            state.productMotive = action.payload.products
            state.loading = false


        })
        builder.addCase(getAllAuotoMotivde.rejected, (state, action) => {
           state.loading = false


        })
        builder.addCase(getAllMotor.pending, (state, action) => {

            state.loading = true
            

        })
        builder.addCase(getAllMotor.fulfilled, (state, action) => {
           
            state.productMotor= action.payload.products
            state.loading = false


        })
        builder.addCase(getAllMotor.rejected, (state, action) => {
           state.loading = false


        })
        builder.addCase(getAllWatches.pending, (state, action) => {

            state.loading = true
            

        })
        builder.addCase(getAllWatches.fulfilled, (state, action) => {
          
            state.productMenWatch= action.payload.products
            state.loading = false


        })
        builder.addCase(getAllWatches.rejected, (state, action) => {
           state.loading = false


        })
        builder.addCase(getAllWomenWatches.pending, (state, action) => {

            state.loading = true
            

        })
        builder.addCase(getAllWomenWatches.fulfilled, (state, action) => {
          
            state.productWomenWatch= action.payload.products
            state.loading = false


        })
        builder.addCase(getAllWomenWatches.rejected, (state, action) => {
           state.loading = false


        })
        builder.addCase(getAllWomenPages.pending, (state, action) => {

            state.loading = true
            

        })
        builder.addCase(getAllWomenPages.fulfilled, (state, action) => {
           
            state.productWomenPages= action.payload.products
            state.loading = false


        })
        builder.addCase(getAllWomenPages.rejected, (state, action) => {
           state.loading = false


        })
        builder.addCase(getAllWomenJwellery.pending, (state, action) => {

            state.loading = true
            

        })
        builder.addCase(getAllWomenJwellery.fulfilled, (state, action) => {
         
            state.productWomenJwellery= action.payload.products
            state.loading = false


        })
        builder.addCase(getAllWomenJwellery.rejected, (state, action) => {
           state.loading = false


        })
        builder.addCase(getAllWomenSunglasses.pending, (state, action) => {

            state.loading = true
            

        })
        builder.addCase(getAllWomenSunglasses.fulfilled, (state, action) => {
           
            state.productWomenSunglasses= action.payload.products
            state.loading = false


        })
        builder.addCase(getAllWomenSunglasses.rejected, (state, action) => {
           state.loading = false


        })
        builder.addCase(getAllWomenLighting.pending, (state, action) => {

            state.loading = true
            

        })
        builder.addCase(getAllWomenLighting.fulfilled, (state, action) => {
          
            state.productWomenLighting= action.payload.products
            state.loading = false


        })
        builder.addCase(getAllWomenLighting.rejected, (state, action) => {
           state.loading = false


        })

        







    }




})
export const dataSlice = ProductSlice1.reducer