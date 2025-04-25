import { create } from "zustand";
import axiosConfig from "../api/axiosConfig";

type PageProducts = {
    success: boolean;
    message: string;
    data: Data;
};

type Data = {
    current_page: number;
    data: Daum[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Link[];
    next_page_url: any;
    path: string;
    per_page: number;
    prev_page_url: any;
    to: number;
    total: number;
};

type Daum = {
    id: number;
    url: string;
    name: string;
    curentPrice: string;
    platformName: string;
    user_id: number;
    created_at: string;
    updated_at: string;
    hestory: Hestory[];
};

type Hestory = {
    id: number;
    product_id: number;
    CurrentPrice: string;
    priceDiff: number;
    created_at: string;
    updated_at: string;
};

type Link = {
    url?: string;
    label: string;
    active: boolean;
};

type ProductsStorType = {
    response: PageProducts | null;
    loading: boolean;
    error: string | null;
    fetchProducts: () => Promise<void>;
};

export const ProductsStor = create<ProductsStorType>((set) => ({
    response: null,
    loading: false,
    error: null,
    fetchProducts: async () => {
        set({ loading: true, error: null });
        try {
            const res = await axiosConfig.get("/products");
            set({
                response: res.data,
                loading: false,
            });
        } catch (err) {
            set({
                error: "Failed to fetch products",
                loading: false,
            });
        }
    },
}));