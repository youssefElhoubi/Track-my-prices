import { create } from "zustand";
import axiosConfig from "../api/axiosConfig";


type WatchlistState = {
    response: any;
    isLoading: boolean;
    error: any;
    fetchWatchLst: (token: string) => void
};

const userWatchlist = create<WatchlistState>((set) => ({
    response: null,
    isLoading: false,
    error: null,
    fetchWatchLst: async (token) => {
        set({ error: null, isLoading: true })
        try {
            const result = await axiosConfig.get("watchlist", {
                headers: {
                    Authorization: token
                }
            })
            set({ response: result.data, isLoading: false });
        } catch (error) {
            console.log(error);
        }
    }
}));
export default userWatchlist;