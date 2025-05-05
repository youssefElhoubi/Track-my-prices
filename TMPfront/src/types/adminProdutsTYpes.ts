export type AdminProduts = {
    success: boolean
    data: Product[]
}

export type Product = {
    id: number
    url: string
    name: string
    curentPrice: string
    platformName: string
    user_id: number
    created_at: string
    updated_at: string
    productImage: string
    owner: Owner
}

export type Owner = {
    id: number
    name: string
    email: string
    password: string
    role: string
    tier: string
    created_at: string
    updated_at: string
    accountStatus: string
    exparation_date: any
    Image_url: string
}
