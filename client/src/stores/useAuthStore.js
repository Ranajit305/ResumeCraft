import { create } from 'zustand'
import axiosUrl from '../utils/axiosUrl';
import toast from 'react-hot-toast';

const useAuthStore = create((set) => ({
    user: null,
    loading: false,

    checkAuth: async () => {
        set({ loading: true });
        try {
            const res = await axiosUrl.get('/user/check-auth');
            if (res.data.success) {
                set({ user: res.data.user });
            }
        } catch (error) {
            console.log(`Auth Error: ${error.response.data.message}`);
        } finally {
            set({ loading: false });
        }
    },

    register: async (name, email, password) => {
        try {
            const res = axiosUrl.post('/user/register', { name, email, password });
            if (res.data.success) {
                set({ user: res.data.user });
                toast.success(res.data.message);
            }
        } catch (error) {
            toast.dismiss();
            toast.error(error.response.data.message);
        }
    },

    login: async (email, password) => {
        try {
            const res = await axiosUrl.post('/user/login', { email, password });
            console.log(res);
            if (res.data.success) {
                set({ user: res.data.user });
                toast.success(res.data.message);
                return true;
            }
        } catch (error) {
            toast.dismiss();
            toast.error(error.response.data.message);
            return false;
        }
    },

    logout: async () => {
        try {
            const res = await axiosUrl.post('/user/logout');
            if (res.data.success) {
                set({ user: null });
                toast.success('Logged Out Successfully');
            }
        } catch (error) {
            console.log(`Logout err: ${error.response.data.message}`);
        }
    }
}));

export default useAuthStore