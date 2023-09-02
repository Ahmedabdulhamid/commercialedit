import {configureStore} from '@reduxjs/toolkit'
import { getProducts } from './productSlice'
import { dataSlice } from './allProducts'
import {allCategories} from './Categories'
import { searchSliceProduct } from './SearchSlice'

export const store=configureStore({
    reducer:{
        getProducts,
        dataSlice,
        allCategories,
        searchSliceProduct,
       

    }
})