'use client'

import Image from 'next/image'
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
} from 'lucide-react'

export function PortfolioComponent() {
  return (
    <div className="bg-[#0A192F] min-h-screen text-[#CCD6F6] font-sans">
      {/* Header */}
      <header className="bg-[#FFC300] text-[#0A192F] p-8 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-bold tracking-tight">OMKAR REVANKAR</h1>
          <p className="text-xl font-semibold">Frontend Developer</p>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-[#112240]">
        <div className="container mx-auto px-4">
          <h2 className="text-8xl font-bold mb-12 text-center text-[#FFC300]">
            about
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <p className="text-xl mb-6 leading-relaxed">
                Frontend Developer with 2+ years of specialized experience in
                building high-performance web applications using React.js
                ecosystem. Demonstrated expertise in reducing application load
                times by 60% through advanced optimization techniques and
                efficient state management.
              </p>
              <p className="text-xl leading-relaxed">
                Successfully delivered healthcare applications serving 10000+
                patients with focus on accessibility, performance, and user
                experience. Proven track record in implementing responsive
                designs, optimizing web vitals, and mentoring junior developers.
              </p>
            </div>
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* <div className="absolute inset-0 bg-[#FFC300] rounded-full animate-pulse"></div> */}
              <Image
                src="/mybg2.png"
                alt="Omkar Revankar"
                width={320}
                height={320}
                className="rounded-full relative z-10"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-sm text-center max-w-[200px] text-[#0A192F] font-bold">
                  FRONTEND DEV BY REACT BY NEXT BY TYPESCRIPT
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-8xl font-bold mb-12 text-center text-[#FFC300]">
            works
          </h2>
          <div className="space-y-12">
            {[
              {
                year: '2024',
                title: 'Optimind Troy - Healthcare Management System',
                description:
                  'Architected and developed a modern healthcare dashboard serving 10,000+ patients using React.js and TypeScript',
                details: [
                  'Built responsive data visualization dashboards using Recharts with 98% browser compatibility',
                  'Developed dynamic form builder using React Hook Form with real-time validation',
                  'Achieved 95+ Lighthouse score through code splitting and lazy loading',
                  'Reduced bundle size by 45% using dynamic imports',
                  'Technologies: React.js, TypeScript, Redux Toolkit, Material UI, TanStack Query, Recharts',
                ],
              },
              {
                year: '2023',
                title: 'eCareHealth - Medical Practice Management',
                description:
                  'Developed a comprehensive practice management solution designed for healthcare providers',
                details: [
                  'Developed drag-and-drop form builder using React DnD',
                  'Implemented real-time updates using WebSocket',
                  'Created custom calendar component with complex scheduling logic',
                  'Built responsive layouts supporting multiple screen sizes and orientations',
                  'Implemented infinite scrolling for large datasets',
                  'Reduced API calls by 50% through efficient caching',
                  'Technologies: React.js, TanStack Query, Redux, Material UI',
                ],
              },
              {
                year: '2022',
                title: 'FastKey - Document Verification System',
                description:
                  'Built modern document verification platform with emphasis on security and user experience',
                details: [
                  'Implemented secure file upload with preview and validation',
                  'Created multi-step verification workflow with progress persistence',
                  'Developed responsive dashboard with real-time status updates',
                  'Integrated multiple third-party APIs with elegant error handling',
                  'Added file compression and optimization',
                  'Built offline-first architecture using service workers',
                  'Integrated third-party identity verification services such as Yoti, Persona, and Zoho, ensuring seamless and secure authentication processes.',
                  'Technologies: Next.js, TypeScript, Tailwind CSS, Redux Toolkit',
                ],
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-[#112240] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <h3 className="text-3xl font-bold mb-2 md:mb-0">
                    {project.title}
                  </h3>
                  <span className="text-xl font-semibold bg-[#FFC300] text-[#0A192F] px-4 py-1 rounded-full">
                    {project.year}
                  </span>
                </div>
                <p className="text-xl mb-4">{project.description}</p>
                <ul className="list-disc list-inside space-y-2">
                  {project.details.map((detail, i) => (
                    <li key={i} className="text-lg">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-[#112240]">
        <div className="container mx-auto px-4">
          <h2 className="text-8xl font-bold mb-12 text-center text-[#FFC300]">
            skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-[#0A192F] p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold mb-6 text-[#FFC300]">
                Frontend
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#FFC300] mr-2">▹</span>
                  <span>
                    <strong>Languages:</strong> JavaScript, TypeScript, HTML,
                    CSS
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC300] mr-2">▹</span>
                  <span>
                    <strong>Frameworks/Libraries:</strong> React.js, Next.js,
                    React Native, Redux, Tailwind CSS, Material UI, TanStack
                    Query, React Hook Form
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC300] mr-2">▹</span>
                  <span>
                    <strong>Tools:</strong> Webpack, Vite, Babel, ESLint,
                    Prettier, NX
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC300] mr-2">▹</span>
                  <span>
                    <strong>Testing:</strong> Jest
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-[#0A192F] p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold mb-6 text-[#FFC300]">
                Backend
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#FFC300] mr-2">▹</span>
                  <span>
                    <strong>Languages:</strong> JavaScript, TypeScript
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC300] mr-2">▹</span>
                  <span>
                    <strong>Runtime Environment:</strong> Node.js
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC300] mr-2">▹</span>
                  <span>
                    <strong>Frameworks:</strong> Express.js
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC300] mr-2">▹</span>
                  <span>
                    <strong>Databases:</strong> MongoDB, MySQL
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC300] mr-2">▹</span>
                  <span>
                    <strong>Tools:</strong> Mirth Connect, REST APIs, JWT, OAuth
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFC300] mr-2">▹</span>
                  <span>
                    <strong>Integration:</strong> Third-party APIs (Klaviyo,
                    Zoho, Yoti)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#FFC300] text-[#0A192F] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-12">CONTACT ME</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <a
              href="mailto:Omkar395@gmail.com"
              className="flex flex-col items-center group"
            >
              <Mail className="w-12 h-12 mb-4 group-hover:text-[#112240] transition-colors duration-300" />
              <span className="text-xl font-semibold group-hover:underline">
                Omkar395@gmail.com
              </span>
            </a>
            <a
              href="tel:9764767680"
              className="flex flex-col items-center group"
            >
              <Phone className="w-12 h-12 mb-4 group-hover:text-[#112240] transition-colors duration-300" />
              <span className="text-xl font-semibold group-hover:underline">
                9764767680
              </span>
            </a>
            <div className="flex flex-col items-center">
              <MapPin className="w-12 h-12 mb-4" />
              <span className="text-xl font-semibold">Pune, India</span>
            </div>
          </div>
          <div className="flex justify-center space-x-12">
            <a
              href="https://github.com/OmkarRevankar76"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Github className="w-12 h-12 group-hover:text-[#112240] transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/omkar-revankar-6930521b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Linkedin className="w-12 h-12 group-hover:text-[#112240] transition-colors duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A192F] text-[#CCD6F6] py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-2">OMKAR REVANKAR</h2>
          <p className="text-xl">Frontend Developer</p>
          <p className="mt-4 text-sm">
            © 2024 Omkar Revankar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
