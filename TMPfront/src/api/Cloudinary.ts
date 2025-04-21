import axios from "axios";

const UploadImage = async (file: any) => {
    const Data = new FormData();
    Data.append("file", file);
    Data.append("upload_preset", "Track_my_prices"); 

    const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dxbvwgxvf/image/upload", 
        Data
    );

    return response.data.secure_url;
};

export default UploadImage;
