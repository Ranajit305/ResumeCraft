import Resume from "../models/resume.model.js";

export const getAllResume = async (req, res) => {
    try {
        const userId = req.user._id;
        const resumes = await Resume.find({ userId });
        
        res.status(200).json({ success: true, resumes });
    } catch (error) {
       res.status(500).json({ success: false, message: error.message }); 
    }
}

export const getResumeById = async (req, res) => {
    try {
        const userId = req.user._id;
        const { resumeId } = req.params;
        const resume = await Resume.findById(resumeId);

        if (!resume) {
            return res.status(404).json({ success: false, message: 'Resume not found' });
        }

        if (!resume.userId.equals(userId)) {
            return res.status(400).json({ success: false, message: 'Access Denied' });
        }

        res.status(200).json({ success: true, resume });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export const createResume = async (req, res) => {
    try {
        const userId = req.user._id;
        const { title } = req.body;
        if (!title) {
            return res.status(400).json({ success: false, message: 'Title required' });
        }

        const newResume = await Resume.create({
            userId,
            title
        });
        res.status(201).json({ success: true, resume: newResume, message: 'Resume Created' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export const updateResume = async (req, res) => {
  try {
    const userId = req.user._id;
    const { resumeId } = req.params;

    const updates = req.body;
    const { version, ...restUpdates } = updates;

    const resume = await Resume.findById(resumeId);
    if (!resume) {
        return res.status(404).json({ success: false, message: 'Resume not Found' });
    }

    if (!userId.equals(resume.userId)) {
        return res.status(400).json({ success: false, message: 'Access Denied' });
    }

    const updatedResume = await Resume.findByIdAndUpdate(
        resumeId,
        {
            $set: restUpdates,
            $inc: { version: 1 },
        },
        { new: true, runValidators: true }
    );

    res.status(200).json({ success: true, resume: updatedResume });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteResume = async (req, res) => {
    try {
        const userId = req.user._id;
        const { resumeId } = req.params;
        if (!resumeId) {
            return res.status(400).json({ success: false, message: 'Resume id required' });
        }

        const resume = await Resume.findById(resumeId);
        if (!resume) {
            return res.status(404).json({ success: false, message: 'Resume not found' });
        }

        if (!userId.equals(resume.userId)) {
            return res.status(400).json({ success: false, message: 'Access Denied' });
        }

        await Resume.findByIdAndDelete(resumeId);
        res.status(200).json({ success: true, message: 'Resume Deleted' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}