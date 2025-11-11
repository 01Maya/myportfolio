import { Code2, Database, Palette, BarChart, Brain, MessageSquare } from 'lucide-react'

const skillCategories = [
  {
    title: "Web Development",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["SQL"],
  },
  {
    title: "Design",
    icon: Palette,
    skills: ["Figma"],
  },
  {
    title: "Analytics",
    icon: BarChart,
    skills: ["Power BI"],
  },
  {
    title: "Soft Skills",
    icon: MessageSquare,
    skills: ["Communication", "Problem-solving", "Time management"],
  },
  {
    title: "Others",
    icon: Brain,
    skills: ["Decision Making", "Goal Oriented"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-purple-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="section-title animate-title">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div key={index} className="space-y-4 animate-fade-in">
                <div className="flex items-center gap-2 text-purple-600">
                  <Icon className="w-5 h-5" />
                  <h3 className="font-medium text-sm">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="px-3 py-1 rounded-full border border-purple-200 text-sm text-gray-600 hover:border-purple-400 hover:bg-purple-50 transition-colors hover-lift"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

