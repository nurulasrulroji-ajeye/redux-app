import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk("products/getProduct", async () => {
  const response = await axios.get("http://localhost:3004/products");
  return response.data;
});

export const saveProduct = createAsyncThunk("products/saveProduct", async ({ title, price }) => {
  const response = await axios.post("http://localhost:3004/products", {
    id: Math.random().toString(36).slice(2),
    title,
    price
  });
  return response.data;
});

export const deleteProduct = createAsyncThunk("products/deleteProduct", async (id) => {
  await axios.delete(`http://localhost:3004/products/${id}`);
  return id;
});

export const updateProduct = createAsyncThunk("products/updateProduct", async ({ id, title, price }) => {
  const response = await axios.patch(`http://localhost:3004/products/${id}`, {
    title,
    price
  });
  return response.data;
});

const productEntity = createEntityAdapter({
  selectId: (product) => product.id
})

const productSlice = createSlice({
  name: "product",
  initialState: productEntity.getInitialState(),
  extraReducers: {
    [getProduct.fulfilled]: (state, action) => {
      productEntity.setAll(state, action.payload);
    },
    [saveProduct.fulfilled]: (state, action) => {
      productEntity.addOne(state, action.payload);
    },
    [deleteProduct.fulfilled]: (state, action) => {
      productEntity.removeOne(state, action.payload);
    },
    [updateProduct.fulfilled]: (state, action) => {
      productEntity.updateOne(state, { id: action.payload.id, updates: action.payload });
    },
  }
});

export const productSelector = productEntity.getSelectors(state => state.product);
export default productSlice.reducer