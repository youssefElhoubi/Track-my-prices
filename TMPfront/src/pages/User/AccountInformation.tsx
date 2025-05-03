import React, { useState, useEffect } from 'react';
import axiosConfig from '../../api/axiosConfig';
import WrappedPremiumPaymentForm from '../../components/common/WrappedPremiumPaymentForm';


const AccountInformation: React.FC = () => {
    const [UserInfo, setUserInfo] = useState();
    const [premium, setPremium] = useState(false);
    useEffect(() => {
        const fetchuser = async () => {
            const token = localStorage.getItem("token");
            const response = await axiosConfig.get("user/info", {
                headers: {
                    Authorization: token
                }
            });
            // console.log(response.data.totaleProdcuts);

            setUserInfo(response.data);
        }
        fetchuser();
    }, []);
    // console.log(UserInfo?.totaleProdcuts);

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-md w-full max-w-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Account Information</h2>

                <div className="space-y-4">
                    <div className="flex items-center">
                        <div className="text-gray-500 w-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <span className="ml-3 text-gray-700">{UserInfo?.data.name}</span>
                    </div>

                    <div className="flex items-center">
                        <div className="text-gray-500 w-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </div>
                        <span className="ml-3 text-gray-700">{UserInfo?.data.email}</span>
                    </div>

                    <div className="flex items-center">
                        <div className="text-gray-500 w-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                        <span className="ml-3 text-gray-700">Account Status: {UserInfo?.data.tier}</span>
                    </div>

                    <div className="flex items-center">
                        <div className="text-gray-500 w-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
                                <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                            </svg>
                        </div>
                        <span className="ml-3 text-gray-700">Tracked Products: {UserInfo?.totaleProdcuts}/{UserInfo?.tier == "Free" ? 5 : 50}</span>
                    </div>
                </div>

                <button
                    onClick={() => {
                        setPremium(!premium);
                    }}
                    className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md flex items-center justify-center transition duration-200"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                    Upgrade to Premium
                </button>
            </div>

            {premium && <div className='absolute'>
                <WrappedPremiumPaymentForm />
            </div>}
        </div>
    );
};

export default AccountInformation;