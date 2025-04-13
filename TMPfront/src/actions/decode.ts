import axiosConfig from "../api/axiosConfig"
const decode = async (token: string) => {
    try {
        const decodeToken = await axiosConfig.post("/decode", null, {
            headers: {
                Authorization: token
            }
        });
        return decodeToken.data;
    } catch (error) {
        console.log(error);
    }
}
export default decode;