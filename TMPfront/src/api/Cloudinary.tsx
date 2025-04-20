import axios from "axios";

const UploadImage = async (file:any)=>{
    const Data= new FormData()
    Data.append("file",file);
    Data.append("upload_presets","Track_my_prices");
    Data.append("cloud_name","dxbvwgxvf");
    const response = await axios.post("https://api.cloudinary.com/v1_1/Track_my_pricesimage/upload",Data);
    return response.data.secure_url
}
export default UploadImage;