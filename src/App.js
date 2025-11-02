import React, { useState } from 'react';
import { Menu, X, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const caseStudies = [
    {
      id: 'h200',
      title: 'H200 GPU Supercluster Global Rollout',
      subtitle: 'Accelerating AI/ML Workloads at Cloud Scale',
      company: 'Oracle Cloud Infrastructure',
      metrics: [
        { value: '76%', label: 'Memory Bandwidth Increase' },
        { value: '1.9X', label: 'LLM Performance Improvement' },
        { value: 'Global', label: 'Commercial Region Deployment' }
      ],
      challenge: 'Deploy next-generation NVIDIA H200 Tensor Core GPUs across OCI commercial regions to meet explosive demand for AI/ML infrastructure, while ensuring reliability, performance, and seamless integration with existing cloud compute platforms.',
      approach: 'Led cross-functional engineering teams through complex hardware rollout, coordinating with data center operations, supply chain partners, and product teams. Established deployment frameworks and validation protocols to ensure production readiness across multiple regions.',
      impact: 'Successfully delivered infrastructure supporting large language model training and inference workloads with significant performance gains. The 76% increase in memory bandwidth and 1.9X LLM performance improvement positioned OCI as a competitive platform for enterprise AI workloads.',
      skills: ['GPU Compute Clusters', 'Infrastructure Scaling', 'Cross-Functional Leadership', 'Capacity Planning', 'Vendor Management']
    },
    {
      id: 'e5',
      title: 'OCI E5 Compute Instance Launch',
      subtitle: 'Next-Gen AMD Infrastructure for Enterprise HPC',
      company: 'Oracle Cloud Infrastructure',
      metrics: [
        { value: '33%', label: 'Performance per Core Increase' },
        { value: '50%', label: 'Storage Capacity Improvement' },
        { value: '20%', label: 'Deployment Timeline Reduction' }
      ],
      challenge: 'Deploy 4th generation AMD EPYC processor-based E5 compute instances across OCI commercial regions, optimizing for enterprise and high-performance computing workloads while ensuring operational excellence and customer readiness.',
      approach: 'Managed end-to-end deployment program across multiple OCI regions, coordinating with infrastructure engineering, testing, and operations teams. Established deployment frameworks, validation protocols, and performance benchmarks. Streamlined execution processes to accelerate regional rollout timelines.',
      impact: 'Successfully delivered E5 compute instances to commercial regions, enabling customers to run compute-intensive workloads with 33% better performance per core and 50% increased storage capacity. Reduced deployment timelines by 20% through process improvements, accelerating customer access to next-generation infrastructure.',
      skills: ['Regional Deployment', 'HPC Workloads', 'Performance Validation', 'Infrastructure Coordination', 'Process Optimization']
    },
    {
      id: 'x11m',
      title: 'X11M Exadata Market Delivery',
      subtitle: 'Next-Generation Database Platform for AI & Analytics',
      company: 'Oracle Cloud Infrastructure',
      metrics: [
        { value: '55%', label: 'Faster AI Vector Search' },
        { value: '2.2X', label: 'Analytics Scan Throughput' },
        { value: '25%', label: 'Faster Transaction Processing' }
      ],
      challenge: 'Deliver Oracle Exadata X11M platform to market across public cloud, multicloud (AWS, Azure, Google Cloud), and on-premises deployments simultaneously. Enable customers to achieve significant performance gains for AI, analytics, and OLTP workloads while maintaining price parity with the previous generation and supporting sustainability goals.',
      approach: 'Led cross-functional program coordination across hardware engineering, product management, cloud operations, and go-to-market teams. Managed deployment readiness across multiple cloud providers and on-premises infrastructure. Established testing frameworks and validation criteria for performance benchmarks including vector search, transaction processing, and analytics throughput. Coordinated with AMD for 4th gen EPYC processor optimization.',
      impact: 'Successfully launched Exadata X11M simultaneously across OCI, AWS, Google Cloud, and Microsoft Azure, delivering 55% faster AI vector searches, 2.2X analytics performance improvement, and 25% faster transaction processing at the same price point. Enabled customers to consolidate workloads on fewer systems, reducing infrastructure costs and supporting energy efficiency goals through intelligent power management capabilities.',
      skills: ['Product Delivery', 'Multi-Cloud Strategy', 'Hardware/Software Integration', 'Performance Optimization', 'Cross-Platform Coordination']
    },
    {
      id: 'xbox',
      title: 'Xbox Certification Pipeline Optimization',
      subtitle: 'Accelerating Game Time-to-Market',
      company: 'Microsoft',
      metrics: [
        { value: '15%', label: 'Reduction in Certification Time' },
        { value: '65M+', label: 'Monthly Active Users on Platform' },
        { value: '60%', label: 'Improved Certification Pass Rate' }
      ],
      challenge: 'Optimize global game certification and ingestion pipeline for a platform serving 65+ million monthly active users, reducing bottlenecks while maintaining quality standards for disc-based and digital game releases.',
      approach: 'Led engineering team to redesign certification workflows, implement automated testing tools, and establish standardized ingestion processes across multi-region deployments. Partnered with major game publishers to improve submission quality and reduce iteration cycles.',
      impact: 'Reduced certification time by 15%, directly accelerating game time-to-market while improving overall certification pass rates by 60%. Enhanced pipeline reliability and performance, enabling faster content delivery to millions of players and improving publisher satisfaction.',
      skills: ['Process Optimization', 'Automation', 'Quality Assurance', 'Publisher Relations', 'Pipeline Engineering']
    }
  ];

  const testimonials = [
    {
      name: 'Rodney Koch',
      title: 'Sr. Principal Technical Program Manager',
      company: 'Oracle Cloud Infrastructure',
      credentials: 'CDCDP, MCSE, MCSA',
      text: 'Chris worked across teams to understand the challenges and potential impacts to schedules. He is very meticulous in his approach to meeting schedules. He took the time to understand every step along the way, from test hardware delivery, development, and delivery to customers. This has allowed him to better understand the technology and further refine new product delivery schedules.'
    },
    {
      name: 'Brent Forman',
      title: 'Principal Program Manager Lead',
      company: 'Microsoft',
      text: 'Chris exemplified accountability and an emphasis on execution. He led his team by example and with compassion and support. He managed expectations upward with the best of them and kept the success of his team foremost. Chris\' long experience in operations, enterprise management, quality, cloud, and entertainment publishing is an incredible testament to his breadth of interest and passion for technology, as well as his commitment to embrace vision and drive for results.'
    },
    {
      name: 'Maria Little',
      title: 'Human Resources Specialist (Awards Lead)',
      company: 'Microsoft',
      text: 'As my manager, Chris shared his technical knowledge and vision to help me become a better Release Manager. His genuine interest and support of my career development helped me move forward purposefully. Chris\' fantastic instincts and strategic thinking made him an amazing manager and mentor. His commitment to building consensus and excellence throughout our Program Manager/Release team made a lasting impact.'
    },
    {
      name: 'Mike Middleton',
      title: 'Senior Software Developer',
      company: 'Microsoft',
      text: 'His style of management is effective, collaborative, and always open to feedback. He keeps himself and his team focused on the important deliverables while keeping a close eye on the big picture and balancing design consequences. He\'s extremely helpful and knowledgeable in the broad technologies.'
    }
  ];

  const skills = {
   leadership: ['Program Leadership', 'Cross-Functional Teams', 'Risk Mitigation', 'Agile Execution', 'Budget Management'],
    technical: ['OCI', 'GPU Compute Clusters', 'CI/CD Pipelines', 'Data Centers', 'Infrastructure Scaling', 'NVIDIA Hardware', 'SDLC', 'Jira/JQL', 'Grafana'],
    domain: ['Cloud Computing', 'AI/ML Infrastructure', 'HPC Workloads', 'Capacity Planning', 'Disaster Recovery', 'Block Storage', 'Bare Metal', 'Networking', 'Change Management']
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button onClick={() => scrollToSection('home')} className="text-xl font-bold text-slate-900 hover:text-teal-600 transition">
              Chris Kirsten
            </button>
            
            <div className="flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-slate-600 hover:text-teal-600 transition font-medium">Home</button>
              <button onClick={() => scrollToSection('case-studies')} className="text-slate-600 hover:text-teal-600 transition font-medium">Work</button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-600 hover:text-teal-600 transition font-medium">Projects</button>
              <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-teal-600 transition font-medium">About</button>
              <button onClick={() => scrollToSection('blog')} className="text-slate-600 hover:text-teal-600 transition font-medium">Writing</button>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-teal-600 transition font-medium">Resume</a>
              <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-teal-600 transition font-medium">Contact</button>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="hidden text-slate-900">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-4 py-3 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left text-slate-600 hover:text-slate-900">Home</button>
              <button onClick={() => scrollToSection('case-studies')} className="block w-full text-left text-slate-600 hover:text-slate-900">Work</button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-600 hover:text-teal-600 transition font-medium">Projects</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-slate-600 hover:text-slate-900">About</button>
              <button onClick={() => scrollToSection('blog')} className="block w-full text-left text-slate-600 hover:text-slate-900">Writing</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-slate-600 hover:text-slate-900">Contact</button>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700 py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-400/30 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-slate-500/50 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white">
                Cloud & AI Program Management Leader
              </h1>
              <p className="text-xl text-slate-200 mb-4">
                I deliver enterprise-scale cloud solutions that enable global AI adoption and measurable business outcomes.
              </p>
              <p className="text-lg text-slate-300 italic mb-8">
                Leading cross-functional teams to transform ambitious ideas into scalable reality.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://linkedin.com/in/chris-kirsten/" target="_blank" rel="noopener noreferrer" className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition flex items-center gap-2">
                  <Linkedin size={20} />
                  LinkedIn
                </a>
                <a href="mailto:chriskir@gmail.com" className="bg-white hover:bg-slate-50 text-slate-900 px-6 py-3 rounded-lg font-medium transition flex items-center gap-2 border border-slate-200">
                  <Mail size={20} />
                  Email Me
                </a>
                <a href="/resume.pdf" download className="bg-white hover:bg-slate-50 text-slate-900 px-6 py-3 rounded-lg font-medium transition flex items-center gap-2 border border-slate-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Resume
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-teal-400/20 rounded-2xl blur-3xl"></div>
                <div className="relative rounded-2xl shadow-2xl w-full max-w-md border-4 border-white overflow-hidden">
                  <img 
                    src="/headshot.jpg"
                    alt="Chris Kirsten"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="case-studies" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Featured Work</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Strategic programs that transformed cloud infrastructure and accelerated enterprise AI adoption
            </p>
          </div>

          <div className="grid gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition border border-slate-200">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-sm text-teal-600 font-medium mb-2">{study.company}</div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{study.title}</h3>
                    <p className="text-slate-600">{study.subtitle}</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="bg-white rounded-lg p-4 border border-slate-200">
                      <div className="text-3xl font-bold text-teal-600 mb-1">{metric.value}</div>
                      <div className="text-sm text-slate-600">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Challenge</h4>
                    <p className="text-slate-700">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Approach</h4>
                    <p className="text-slate-700">{study.approach}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Impact</h4>
                    <p className="text-slate-700">{study.impact}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Skills Applied</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.skills.map((skill, i) => (
                        <span key={i} className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm border border-teal-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
          {/* Technical Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Technical Projects</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Interactive demonstrations of cloud infrastructure and cost optimization expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cloud Cost Optimizer Card */}
            <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition border border-slate-200">
              <div className="mb-6">
                <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Cloud Cost Optimizer</h3>
                <p className="text-slate-600 mb-4">
                  AI-powered multi-cloud cost analysis tool with workload-specific recommendations based on enterprise-scale deployments at Oracle and Microsoft.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium text-slate-700 mb-2">Key Features</div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Multi-cloud support (OCI, AWS, Azure, GCP)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>GPU/AI workload optimization (H100/H200)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Real-world insights from 65M+ MAU infrastructure</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="text-sm font-medium text-slate-700 mb-2">Tech Stack</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-xs border border-teal-200">React</span>
                    <span className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-xs border border-teal-200">Tailwind CSS</span>
                    <span className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-xs border border-teal-200">Multi-Cloud</span>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <a 
                    href="https://cloud-cost-optimizer.netlify.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-medium transition text-center text-sm flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Try Demo
                  </a>
                  <a 
                    href="https://github.com/chriskirsten/cloud-cost-optimizer" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-white hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-lg font-medium transition text-center text-sm border border-slate-200 flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* Placeholder for future projects */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-dashed border-slate-300 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-slate-200 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-600 mb-2">More Projects Coming Soon</h3>
              <p className="text-sm text-slate-500">
                Additional interactive demos showcasing technical expertise
              </p>
            </div>
          </div>
        </div>
      </section>
      
      
      
      
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Kind Words from Colleagues</h2>
            <p className="text-xl text-slate-600">What teammates and partners say about working together</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-slate-200">
                <div className="mb-4">
                  <svg className="w-10 h-10 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">{testimonial.text}</p>
                <div className="pt-4 border-t border-slate-200">
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  {testimonial.credentials && (
                    <div className="text-sm text-slate-500">{testimonial.credentials}</div>
                  )}
                  <div className="text-sm text-slate-600">{testimonial.title}</div>
                  <div className="text-sm text-slate-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a href="https://linkedin.com/in/chris-kirsten/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium">
              View all recommendations on LinkedIn
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">About Me</h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  I specialize in the hardest infrastructure problems—the kind where hardware meets software at cloud scale, where a single program decision impacts millions of users, and where technical depth must translate to business velocity. I thrive at the intersection of deep technical execution and strategic leadership, building high-performing teams that turn ambitious ideas into production reality.
                </p>
                <p>
                  My approach is simple: understand the technology deeply, align cross-functional stakeholders relentlessly, and ship programs that move the business forward. I believe the best infrastructure is invisible to users but transformational for the business.
                </p>
                <p className="text-slate-600 italic border-l-4 border-teal-500 pl-4">
                  When I'm not architecting cloud infrastructure, you'll find me enjoying the Pacific Northwest with my twin boys—camping, hiking, playing video games, and staying current on the latest technology trends.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Skills & Expertise</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Leadership & Strategy</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.leadership.map((skill, i) => (
                      <span key={i} className="bg-slate-100 text-slate-700 px-3 py-2 rounded-lg text-sm border border-slate-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Technical</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.technical.map((skill, i) => (
                      <span key={i} className="bg-teal-50 text-teal-700 px-3 py-2 rounded-lg text-sm border border-teal-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Domain Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.domain.map((skill, i) => (
                      <span key={i} className="bg-slate-100 text-slate-700 px-3 py-2 rounded-lg text-sm border border-slate-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl border border-teal-100">
                <h4 className="font-semibold text-slate-900 mb-4">Career Snapshot</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Total Experience</span>
                    <span className="font-semibold text-slate-900">20+ years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Team Size Managed</span>
                    <span className="font-semibold text-slate-900">40+ engineers</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Budget Scope</span>
                    <span className="font-semibold text-slate-900">$1M-$4M+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Companies</span>
                    <span className="font-semibold text-slate-900">Oracle, Microsoft</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Writing & Insights</h2>
            <p className="text-xl text-slate-600">Thoughts on infrastructure, AI, and product leadership</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Content Coming Soon</h3>
              <p className="text-slate-600 text-lg">
                I'm planning on bringing new content about my projects and lessons learned. Stay tuned!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Let's Connect</h2>
            <p className="text-xl text-slate-600">
              Interested in discussing infrastructure strategy or product leadership opportunities? I'd love to hear from you.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            {formSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Received!</h3>
                <p className="text-slate-600">Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition">
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div className="mt-8 flex justify-center gap-6">
            <a href="mailto:chriskir@gmail.com" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition">
              <Mail size={20} />
              <span>chriskir@gmail.com</span>
            </a>
            <a href="https://linkedin.com/in/chris-kirsten/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">Chris Kirsten</div>
            <p className="text-slate-400 mb-6">
              Infrastructure visionary architecting the compute foundation for tomorrow's AI
            </p>
            <div className="flex justify-center gap-6 mb-6">
              <a href="https://linkedin.com/in/chris-kirsten/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition">
                <Linkedin size={24} />
              </a>
              <a href="mailto:chriskir@gmail.com" className="text-slate-400 hover:text-white transition">
                <Mail size={24} />
              </a>
            </div>
            <div className="text-sm text-slate-500">
              © 2025 Chris Kirsten. Built for impact.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
