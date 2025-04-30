export type PageProducts = {
    success: boolean;
    message: string;
    data: Data;
};

export type Data = {
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

export type Daum = {
    id: number;
    url: string;
    name: string;
    curentPrice: string;
    platformName: string;
    productImage:string;
    user_id: number;
    created_at: string;
    updated_at: string;
    hestory: Hestory[];
};

export type Hestory = {
    id: number;
    product_id: number;
    CurrentPrice: string;
    priceDiff: number;
    created_at: string;
    updated_at: string;
};

export type Link = {
    url?: string;
    label: string;
    active: boolean;
};

export type ProductsStorType = {
    response: PageProducts | null;
    isloading: boolean;
    error: string | null;
    fetchProducts: (token: string) => Promise<void>;
};
