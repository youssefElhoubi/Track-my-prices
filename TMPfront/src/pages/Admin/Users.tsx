import React, { useState, useEffect } from 'react'
import UserCard from '../../components/AdmineComponents/UserCard'
import axiosConfig from '../../api/axiosConfig'
import Sidebar from '../../components/AdmineComponents/sidebar'
import Header from '../../components/AdmineComponents/Header'

const Users: React.FC = () => {
    type users = {
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
    const [Users, setUsers] = useState<users[]>()
    useEffect(() => {
        const getallusers = async () => {
            try {
                const token = localStorage.getItem("token");
                const result = await axiosConfig.get("/admin/users", {
                    headers: {
                        Authorization: token
                    }
                })
                setUsers(result.data.data)
                console.log(result.data);
            } catch (error) {
                console.log(error);
            }
        }
        getallusers();
    }, [])
    console.log(Users);

    const users = [
        {
            id: "1",
            name: "Alex Johnson",
            email: "alex.johnson@example.com",
            role: "Administrator",
            status: "active" as const,
            joinDate: "Jan 15, 2023",
        },
        {
            id: "2",
            name: "Sarah Williams",
            email: "sarah.w@example.com",
            role: "Editor",
            status: "active" as const,
            avatarUrl: "/placeholder.svg?height=100&width=100",
            joinDate: "Mar 22, 2023",
        },
        {
            id: "3",
            name: "Michael Brown",
            email: "m.brown@example.com",
            role: "Viewer",
            status: "inactive" as const,
            joinDate: "Nov 5, 2023",
        },
    ]

    return (
        <>
            <Header />
            <div className="flex h-screen bg-white">
                {/* Sidebar */}
                <Sidebar />
                <div className="p-6 max-w-4xl mx-auto space-y-4">
                    <h2 className="text-2xl font-bold mb-6">Users</h2>
                    {Users?.map((ele) => (
                        // ""
                        <UserCard key={ele.id} id={ele.id} name={ele.name} email={ele.email} password={""} role={ele.role} tier={ele.tier} created_at={ele.created_at} accountStatus={ele.status} exparation_date={undefined} Image_url={ele.Image_url} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Users