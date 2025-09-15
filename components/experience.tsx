import { Briefcase, GraduationCap } from 'lucide-react'
import { Card } from "@/components/ui/card"

const experiences = [
  {
    title: "TatvaSoft",
    subtitle: "Summer Internship",
    date: "JUN 2024 - JUL 2024",
    description: "Enhanced skills in .NET, PostgreSQL, and Angular during my summer internship, applying knowledge in practical scenarios and advancing technical abilities.",
  },
  {
    title: "IBM SkillsBuild Summer GTU Internship",
    subtitle: "Data Analytics",
    date: "JUN 2024 - JUL 2024",
    description: "Gained experience in data analytics using SQL for database management and Excel for data analysis. Also used Power BI to create visual reports and insights.",
  },
]

const education = [
  {
    title: "Bachelor's in Information Technology",
    institution: "L.D. College of Engineering, Ahmedabad",
    date: "2021 - 2025",
    grade: "89.9%",
  },
  {
    title: "Higher Secondary Education",
    institution: "Divine Public School, Navsari",
    date: "2020-2021",
    grade: "91.84%",
  },
  {
    title: "Secondary Education",
    institution: "Divine Public School, Navsari",
    date: "2018-2019",
    grade: "91.33%",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="section-title animate-title">
          Experience & Education
        </h2>
        
        <div className="space-y-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6 animate-fade-in">
              <div className="p-2 bg-purple-100 rounded-full hover:bg-purple-200 transition-colors">
                <Briefcase className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Experience</h3>
            </div>
            <div className="grid gap-6">
              {experiences.map((exp, index) => (
                <Card 
                  key={index}
                  className="p-6 hover-lift border-l-4 border-l-purple-600 animate-fade-in"
                >
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-purple-600">{exp.title}</h4>
                    <p className="text-gray-600 font-medium">{exp.subtitle}</p>
                    <p className="text-sm text-purple-500">{exp.date}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6 animate-fade-in">
              <div className="p-2 bg-purple-100 rounded-full hover:bg-purple-200 transition-colors">
                <GraduationCap className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="grid gap-6">
              {education.map((edu, index) => (
                <Card 
                  key={index}
                  className="p-6 hover-lift border-l-4 border-l-purple-600 animate-fade-in"
                >
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-purple-600">{edu.title}</h4>
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-sm text-purple-500">{edu.date}</p>
                    <div className="mt-2 inline-block bg-purple-100 px-3 py-1 rounded-full hover:bg-purple-200 transition-colors">
                      <p className="text-sm text-purple-600">
                        <span className="font-medium">Grade:</span> {edu.grade}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

