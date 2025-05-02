import { create } from "zustand";
import axiosConfig from "../api/axiosConfig";
import { ProductsStorType, } from "../types/ProductStor"



const ProductsStor = create<ProductsStorType>((set) => ({
    response: null,
    isloading: false,
    error: null,
    fetchProducts: async (token: string) => {
        set({ isloading: true, error: null });
        try {
            const res = await axiosConfig.get("product/all", {
                headers: {
                    Authorization: token
                }
            });
            set({
                response: res.data,
                isloading: false,
            });
        } catch (err) {
            set({
                error: "Failed to fetch products",
                isloading: false,
            });
        }
    },
    fetchCurentPageProducts: async (token: string, PageNumber: number) => {
        set({ isloading: true, error: null });
        try {
            const res = await axiosConfig.get(`product/all?page=${PageNumber}`, {
                headers: {
                    Authorization: token
                }
            });
            set({
                response: res.data,
                isloading: false,
            });
        } catch (err) {
            set({
                error: "Failed to fetch products",
                isloading: false,
            });
        }
    },
}));
export default ProductsStor