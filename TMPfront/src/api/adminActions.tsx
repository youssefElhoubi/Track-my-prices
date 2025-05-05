import axiosConfig from "./axiosConfig";

export const deletProduct = async (id: number) => {
    try {
        const token = localStorage.getItem("token")
        const response = await axiosConfig.patch(`/admin/products/${id}`, { id }, {
            headers: {
                Authorization: token
            }
        });
        return await response.data;
    } catch (error) {
        console.log(error);
    }
}