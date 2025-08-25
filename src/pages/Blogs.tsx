import React from 'react';
import './Blogs.css';
import { FaMedium, FaDev } from 'react-icons/fa';
import dataService from '../services/dataService';

const iconMap: Record<string, JSX.Element> = {
  medium: <FaMedium />,
  devto: <FaDev />,
};

const Blogs: React.FC = () => {
  const blogs = dataService.getBlogs();
  const hasRealBlog = blogs.some(
    (blog: any) => blog.title || blog.platform || blog.icon || blog.link || blog.description
  );

  if (!hasRealBlog) {
    return (
      <div className="blogs-container" style={{ textAlign: 'center', padding: '60px 0' }}>
        <h2 className="blogs-title">✍️ My Blog Posts</h2>
        <p className="blogs-intro">A collection of my thoughts and tutorials on software development.</p>
        <div style={{ fontSize: '2rem', color: '#e50914', marginTop: 40 }}>
          🚧 Coming Soon!
        </div>
        <div style={{ fontSize: '1.1rem', color: '#888', marginTop: 16 }}>
          Stay tuned for my upcoming blog posts.
        </div>
      </div>
    );
  }

  return (
    <div className="blogs-container">
      <h2 className="blogs-title">✍️ My Blog Posts</h2>
      <p className="blogs-intro">A collection of my thoughts and tutorials on software development.</p>
      <div className="blogs-grid">
        {blogs.map((blog: any, index: number) => (
          <a href={blog.link} key={index} target="_blank" rel="noopener noreferrer" className="blog-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="blog-icon animated-icon">{iconMap[blog.icon] || null}</div>
            <div className="blog-info animated-text">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <span className="blog-platform">{blog.platform}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

// Sample values
// {
//   "title": "Make Your Rails Console Look Better",
//   "platform": "Medium",
//   "icon": "medium",
//   "link": "https://medium.com/@chintusamala96/make-your-rails-console-look-better-510988d40566",
//   "description": "Learn tips to customize your Rails console for a better experience."
// },
// {
//   "title": "Docker Fundas - My Version",
//   "platform": "Medium",
//   "icon": "medium",
//   "link": "https://medium.com/@chintusamala96/docker-fundas-my-version-7b9262bd90d4",
//   "description": "An introductory guide to Docker fundamentals from my perspective."
// },
// {
//   "title": "Grape Gem in Ruby on Rails: Handling User Model and API Endpoint",
//   "platform": "Dev.to",
//   "icon": "devto",
//   "link": "https://dev.to/samalaAnmol0262/grape-gem-in-ruby-on-rails-handling-user-model-and-api-endpoint-g6d",
//   "description": "A guide to using the Grape gem for API development in Ruby on Rails."
// },