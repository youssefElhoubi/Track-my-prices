import axiosConfig from "./axiosConfig";


export const ProductInfo = async (Id:string|undefined,token:string)=>{
    try {
        const response = await axiosConfig.get(`http://tmpback.test/api/product/${Id}`,{
            headers:{
                Authorization:token
            }
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}