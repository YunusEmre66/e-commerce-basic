import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    products: [],
    selectedProduct: {}, //! seçilmiş olan ürün
    loading: false
}

const BASE_URL = "https://fakestoreapi.com";


//! export edildi productları productliste de getAllProducts fonksiyonu kullanarak getireceğiz
export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
})


export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {  //! yukarıya istek atıldığında loading true olacak , pending backenden gelen veriyi bekleme süresi
            state.loading = true;  //! loading true olacak , yani yükleniyor durumu olacak
        })
        builder.addCase(getAllProducts.fulfilled, (state, action) => { //! yukarıya istek atıldığında loading false olacak ve products a gelecek olan data action.payload olacak
            state.loading = false;  //! ürünü aldık bitti
            state.products = action.payload; //! ürünleri aldık //yukardan response.data ->action-> action.payload -> state.products
        })
    }
})

export const { setSelectedProduct } = productSlice.actions  //! dışarıya açıyoruz

export default productSlice.reducer //! slice içindeki fonksiyonları dışarı açıyoruz

//! 