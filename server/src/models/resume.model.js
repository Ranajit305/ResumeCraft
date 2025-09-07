import mongoose from 'mongoose'

const resumeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    personalInfo: {
    name: { type: String, default: "" },
    designation: { type: String, default: "" },
    summary: { type: String, default: "" },
    },
    contactInfo: {
      email: { type: String, default: "" },
      phone: { type: String, default: "" },
      linkedin: { type: String, default: "" },
      github: { type: String, default: "" },
    },
    skills: { type: [String], default: [] },
    education: [
      {
        institution: { type: String, default: "" },
        degree: { type: String, default: "" },
        fieldOfStudy: { type: String, default: "" },
        startDate: { type: Date, default: null },
        endDate: { type: Date, default: null },
        grade: { type: String, default: "" },
      },
    ],
    experience: [
      {
        company: { type: String, default: "" },
        position: { type: String, default: "" },
        startDate: { type: Date, default: null },
        endDate: { type: Date, default: null },
        description: { type: String, default: "" },
      },
    ],
    projects: [
      {
        name: { type: String, default: "" },
        description: { type: String, default: "" },
        link: { type: String, default: "" },
        technologies: { type: [String], default: [] },
      },
    ],
    certifications: [
      {
        name: { type: String, default: "" },
        issuer: { type: String, default: "" },
        date: { type: Date, default: null },
        link: { type: String, default: "" },
      },
    ],
    languages: { type: [String], default: [] },
    hobbies: { type: [String], default: [] },
    version: { type: Number, default: 0 }
}, { timestamps: true });

resumeSchema.virtual("completion").get(function () {
  let score = 0;

  // Personal Info (20%)
  if (this.personalInfo.name) score += 5;
  if (this.personalInfo.designation) score += 5;
  if (this.personalInfo.summary) score += 10;

  // Contact Info (20%)
  if (this.contactInfo.email) score += 10;
  if (this.contactInfo.phone) score += 5;
  if (this.contactInfo.linkedin || this.contactInfo.github) score += 5;

  // Skills (10%)
  if (this.skills.length > 0) score += 10;

  // Education (15%)
  if (this.education.length > 0 && this.education[0].institution) score += 15;

  // Experience (15%)
  if (this.experience.length > 0 && this.experience[0].company) score += 15;

  // Projects (10%)
  if (this.projects.length > 0 && this.projects[0].name) score += 10;

  // Certifications (5%)
  if (this.certifications.length > 0 && this.certifications[0].name) score += 5;

  // Languages/Hobbies (5%)
  if (this.languages.length > 0 || this.hobbies.length > 0) score += 5;

  return Math.min(score, 100);
});

resumeSchema.set("toJSON", { virtuals: true });
resumeSchema.set("toObject", { virtuals: true });

const Resume = mongoose.models.Resume || mongoose.model('Resume', resumeSchema);
export default Resume