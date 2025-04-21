import React from 'react';
import Navbar from '../../components/UserComponents/Nav';
import Allproducts from '../../components/UserComponents/Allproducts';

const UserHome: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="px-20">
            <Allproducts/>
            </div>
        </>
    )
}

export default UserHome