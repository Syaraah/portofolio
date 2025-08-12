import { Code, Server, Palette } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      name: "Frontend Development",
      icon: <Code className="text-blue-600 text-2xl" />,
      iconBg: "bg-blue-100",
      skills: [
        { name: "React.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
      ],
      color: "blue",
    },
    {
      name: "Backend Development",
      icon: <Server className="text-emerald-600 text-2xl" />,
      iconBg: "bg-emerald-100",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 82 },
        { name: "PostgreSQL", level: 80 },
      ],
      color: "emerald",
    },
    {
      name: "Design & Tools",
      icon: <Palette className="text-amber-600 text-2xl" />,
      iconBg: "bg-amber-100",
      skills: [
        { name: "Figma", level: 92 },
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
      ],
      color: "amber",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.name} className="bg-white p-8 rounded-xl shadow-sm card-hover">
              <div className="text-center mb-6">
                <div className={`w-16 h-16 ${category.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800">{category.name}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">{skill.name}</span>
                      <span className="text-sm text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className={`bg-${category.color}-600 h-2 rounded-full`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
