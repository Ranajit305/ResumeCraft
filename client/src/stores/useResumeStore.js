import { create } from 'zustand'
import axiosUrl from '../utils/axiosUrl';
import toast from 'react-hot-toast';

const useResumeStore = create((set) => ({
    resumes: [],
    loading: false,

    getAllResume: async () => {
        set({ loading: true });
        try {
            const res = await axiosUrl.get('/resume');
            if (res.data.success) {
                set({ resumes: res.data.resumes });
            }
        } catch (error) {
            console.log(`Err in fetching resumes: ${error.response.data.message}`);
        } finally {
            set({ loading: false });
        }
    },

    createResume: async (title) => {
        set({ loading: true });
        try {
            const res = await axiosUrl.post('/resume', { title });
            if (res.data.success) {
                set((state) => ({
                    resumes: [...state.resumes, res.data.resume]
                }))
            }
            return res.data.resume._id;
        } catch (error) {
            console.log(`Err in creating Resume: ${error.response.data.message}`);
        } finally {
            set({ loading: false });
        }
    },

    updateResume: async (resumeId, updates) => {
        set({ loading: true });
        try {
            const res = await axiosUrl.put(`/resume/${resumeId}`, updates);
            if (res.data.success) {
                const updatedResume = res.data.resume;

                set((state) => ({
                    resumes: state.resumes.map((r) =>
                    r._id === updates._id ? updatedResume : r
                    ),
                }));

                toast.success('Resume Updated');
            }
        } catch (error) {
            console.error("Error updating resume:", error.response.data.message);
        } finally {
            set({ loading: false });
        }
    },

    deleteResume: async (resumeId) => {
        set({ loading: true });
        try {
            const res = await axiosUrl.delete(`/resume/${resumeId}`);
            if (res.data.success) {
                set((state) => ({
                    resumes: state.resumes.filter((resume) => resume._id !== resumeId),
                }));
                toast.success('Resume Deleted');
            }
        } catch (error) {
            console.log(`Err in deleting resume: ${error.response.data.message}`);
        } finally {
            set({ loading: false });
        }
    }
}));

export default useResumeStore