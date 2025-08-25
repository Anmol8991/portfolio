import configData from "../data/config.json";
import skillsData from "../data/skills.json";
import projectsData from "../data/projects.json";
import experienceData from "../data/experience.json";
import blogData from "../data/blog.json";
import profileBannerContent from "../data/profileBannerContent.json";
import imageConfig from "../data/image.json";
import musicData from "../data/music.json";

class DataService {
  // Main portfolio data
  getMainInfo() {
    return configData.main;
  }

  getSocials() {
    return configData.socials;
  }

  getSkills() {
    return skillsData;
  }

  getEducation() {
    return configData.education;
  }

  getContact() {
    return configData.contact;
  }

  getFooter() {
    return configData.footer;
  }

  getWorkPermit() {
    return configData.workPermit || null;
  }

  getBlogs() {
    return blogData.blogs || [];
  }

  getProfileBanner() {
    return configData.profileBanner;
  }

  getProfileBannerContent() {
    return profileBannerContent;
  }

  getImageConfig() {
    return imageConfig;
  }

  getMusic() {
    return musicData;
  }

  // Projects data
  getAllProjects() {
    return projectsData.projects;
  }

  getFeaturedProjects() {
    return projectsData.projects.filter((project) => project.featured);
  }

  getProjectsByCategory(category) {
    return projectsData.projects.filter(
      (project) => project.category === category
    );
  }

  getProjectById(id) {
    return projectsData.projects.find((project) => project.id === parseInt(id));
  }

  // Experience data
  getAllExperience() {
    return experienceData.experience;
  }

  getInternships() {
    return experienceData.experience.filter((exp) => exp.type === "Internship");
  }

  getFullTimeExperience() {
    return experienceData.experience.filter((exp) => exp.type === "Full-time");
  }

  getExperienceById(id) {
    return experienceData.experience.find((exp) => exp.id === parseInt(id));
  }

  // Utility methods
  getProjectCategories() {
    const categories = [
      ...new Set(projectsData.projects.map((project) => project.category)),
    ];
    return categories;
  }

  getTechnologies() {
    const allTechs = projectsData.projects.flatMap(
      (project) => project.technologies
    );
    const uniqueTechs = [...new Set(allTechs)];
    return uniqueTechs;
  }

  getCertifications() {
    return projectsData.certifications || [];
  }

  // Search functionality
  searchProjects(query) {
    const lowercaseQuery = query.toLowerCase();
    return projectsData.projects.filter(
      (project) =>
        project.title.toLowerCase().includes(lowercaseQuery) ||
        project.description.toLowerCase().includes(lowercaseQuery) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(lowercaseQuery)
        )
    );
  }

  searchExperience(query) {
    const lowercaseQuery = query.toLowerCase();
    return experienceData.experience.filter(
      (exp) =>
        exp.company.toLowerCase().includes(lowercaseQuery) ||
        exp.position.toLowerCase().includes(lowercaseQuery) ||
        exp.description.toLowerCase().includes(lowercaseQuery)
    );
  }
}

// Create and export a singleton instance
const dataService = new DataService();
export default dataService;
