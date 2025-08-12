import { ExternalLink, Github } from "lucide-react";

export default function PortfolioSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      tech: ["React", "Node.js", "MongoDB"],
      techColors: ["blue", "emerald", "purple"],
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates, team chat, and progress tracking.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      tech: ["Vue.js", "Express", "Socket.io"],
      techColors: ["blue", "emerald", "orange"],
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed analytics.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      tech: ["React", "API", "D3.js"],
      techColors: ["blue", "yellow", "green"],
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A showcase of my recent work and the technologies I've used to solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 bg-${project.techColors[index]}-100 text-${project.techColors[index]}-800 text-sm rounded-full`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                  <a
                    href="#"
                    className="text-slate-600 hover:text-slate-700 font-medium flex items-center"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Projects
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
