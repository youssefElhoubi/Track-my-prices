import React, { useState, useEffect } from "react";
import Sidebar from "../../components/AdmineComponents/sidebar";
import Header from "../../components/AdmineComponents/Header";
import StatisticsCard from "../../components/AdmineComponents/statistics-card";
import { Package, Users, TrendingDown } from "lucide-react";
import axiosConfig from "../../api/axiosConfig";
import getTimeSinceCreation from "../../api/createdAt";

const Dashboard: React.FC = () => {
  const [statistics, setStatistics] = useState({
    total_products: 197,
    total_users: 22,
    totale_priceDrope: 6,
  })
  const [lastUser, setLastuser] = useState();

  const [recentSignups] = useState([
    {
      email: "user123@example.com",
      timeAgo: "30 minutes ago",
    },
  ])
  useEffect(() => {
    const getStatiostics = async () => {
      try {
        const token = localStorage.getItem("token");
        const result = await axiosConfig.get("/admin/statistect", {
          headers: {
            Authorization: token
          }
        })
        setStatistics(result.data)
      } catch (error) {
        console.log(error);
      }
    }
    const getLastUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const result = await axiosConfig.get("/admin/users/last", {
          headers: {
            Authorization: token
          }
        })
        console.log(result.data);
        setLastuser(result.data)
      } catch (error) {
        console.log(error);
      }
    }
    getStatiostics();
    getLastUser();
  }, [])

  return (
    <>
      <Header />
      <div className="flex h-screen bg-white">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">

          {/* Dashboard Content */}
          <main className="flex-1 p-4 bg-white">
            {/* Platform Statistics */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <h2 className="text-2xl font-bold mb-6">Platform Statistics</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Total Products */}
                <StatisticsCard
                  icon={<Package className="h-6 w-6" />}
                  title="Total number of products"
                  value={statistics.total_products}
                  viewAllLink="#"
                  bgColor="bg-green-100"
                  linkColor="text-green-500"
                />

                {/* Total Users */}
                <StatisticsCard
                  icon={<Users className="h-6 w-6" />}
                  title="Total number of users"
                  value={statistics.total_users}
                  viewAllLink="#"
                  bgColor="bg-red-100"
                  linkColor="text-red-500"
                />

                {/* Price Drops */}
                <StatisticsCard
                  icon={<TrendingDown className="h-6 w-6" />}
                  title="Total price Drops this mount"
                  value={statistics.totale_priceDrope}
                  bgColor="bg-indigo-100"
                />
              </div>
            </div>

            {/* Recent Signups */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-2xl font-bold mb-4">Recent Signups</h2>

              <div className="space-y-2">
                {recentSignups.map((signup, index) => (
                  <div key={index} className="bg-gray-200 rounded-lg p-4">
                    <p className="font-medium">{signup.email}</p>
                    <p className="text-sm text-gray-600">{signup.timeAgo}</p>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
export default Dashboard
