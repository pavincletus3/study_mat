"use client";
import {
  Notebook,
  Users,
  ZapIcon,
  Edit,
  FileText,
  MessageSquare,
  Upload,
  Bot,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Navbar */}
      {/* <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Notebook className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                NoteCollab
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#how-it-works">How It Works</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
            </div>

            <div className="flex items-center space-x-4">
              <button className="hidden md:inline-flex px-4 py-2 rounded-md text-blue-600 border border-blue-200 hover:border-blue-400 transition-colors">
                Log in
              </button>
              <button className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-90 transition-opacity shadow-lg shadow-blue-200">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_70%,rgba(220,230,255,0.4),transparent_70%)]"></div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-indigo-100 rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 mb-6">
              <span className="text-blue-700 text-sm font-medium">
                StudyMat The Place to Study, Enjoy and Collaborate
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900">
              Create, Collaborate, Communicate
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              A powerful collaborative editor with live cursor tracking, AI
              assistant, and document chat capabilities. Edit together in
              real-time and interact with your documents like never before.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <button className="px-8 py-4 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
                Start Collaborating <ArrowRight className="h-4 w-4" />
              </button>
              <button className="px-8 py-4 rounded-md bg-white text-gray-700 border border-gray-200 font-medium hover:border-gray-400 transition-colors flex items-center justify-center gap-2">
                Watch Demo <ExternalLink className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Preview Window */}
          <div className="max-w-5xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 transform rotate-1 rounded-xl blur opacity-10"></div>
            <div className="relative bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-gray-100 to-gray-50 px-4 py-3 flex items-center border-b border-gray-200">
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="w-full max-w-md mx-auto bg-white rounded-md px-3 py-1 text-sm text-gray-600 border border-gray-200">
                  studymat.com/doc/sathyabamanotes
                </div>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4 bg-gray-50 min-h-[300px]">
                <div className="md:col-span-3 bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Blockchain</h3>
                  <div className="h-40 border-l-2 border-blue-400 pl-3 mb-4">
                    <p className="text-gray-700">
                      Blockchain is a distributed ledger technology (DLT) that
                      uses a distributed database to record and verify
                      transactions between users. It is a decentralized system
                      that ensures...
                    </p>
                    <div className="mt-2 text-xs text-blue-600">
                      Pavin is typing...
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-500">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white text-xs">
                        P
                      </div>
                      <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-white text-xs">
                        S
                      </div>
                      <div className="w-6 h-6 rounded-full bg-purple-500 border-2 border-white flex items-center justify-center text-white text-xs">
                        A
                      </div>
                    </div>
                    <span>3 collaborators</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                  <div className="mb-3 pb-3 border-b border-gray-100">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">
                      Chat
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <div className="w-6 h-6 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-white text-xs">
                          P
                        </div>
                        <div className="bg-gray-100 p-2 rounded-lg text-xs text-gray-700">
                          Can you summarize the key points?
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-6 h-6 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center text-gray-700 text-xs">
                          AI
                        </div>
                        <div className="bg-indigo-50 p-2 rounded-lg text-xs text-gray-700">
                          The main point is blockchain has been discontinued by
                          sathyabama as it is losers technology...
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full rounded-full border border-gray-200 pl-3 pr-8 py-1 text-xs"
                      placeholder="Ask a question..."
                    />
                    <button className="absolute right-2 top-1 text-blue-500">
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats underneath preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="text-blue-500 mb-1">
                  <Users className="h-5 w-5" />
                </div>
                <div className="text-2xl font-bold">10,000+</div>
                <div className="text-gray-500 text-sm">Active Users</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="text-blue-500 mb-1">
                  <Edit className="h-5 w-5" />
                </div>
                <div className="text-2xl font-bold">250K+</div>
                <div className="text-gray-500 text-sm">Documents Created</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="text-blue-500 mb-1">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div className="text-2xl font-bold">5M+</div>
                <div className="text-gray-500 text-sm">AI Interactions</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="text-blue-500 mb-1">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="text-2xl font-bold">98%</div>
                <div className="text-gray-500 text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 mb-4">
            <span className="text-blue-700 text-sm font-medium">
              Powerful Features
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Everything You Need for Seamless Collaboration
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform combines real-time editing capabilities with advanced
            AI features to transform how teams work together on documents.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Users className="h-8 w-8 text-white" />}
            title="Real-time Collaboration"
            description="See who's editing what with live cursors and text tracking. Multiple users can edit the same document simultaneously without conflicts."
            gradient="from-blue-500 to-indigo-500"
          />
          <FeatureCard
            icon={<Bot className="h-8 w-8 text-white" />}
            title="AI-Powered Assistant"
            description="Chat directly with your notes. Ask questions, get summaries, and receive smart suggestions as you write."
            gradient="from-indigo-500 to-purple-600"
          />
          <FeatureCard
            icon={<Upload className="h-8 w-8 text-white" />}
            title="Document Upload & Chat"
            description="Upload PDFs and other files, then chat with them alongside your team. Extract insights and collaborate on analysis."
            gradient="from-purple-600 to-pink-600"
          />
          <FeatureCard
            icon={<MessageSquare className="h-8 w-8 text-white" />}
            title="Team Chat Integration"
            description="Discuss documents in real-time with integrated chat. Keep conversations in context with your content."
            gradient="from-pink-600 to-red-500"
          />
          <FeatureCard
            icon={<ZapIcon className="h-8 w-8 text-white" />}
            title="Instant Summarization"
            description="Generate concise summaries of long documents with one click. Save time and extract key insights automatically."
            gradient="from-red-500 to-orange-500"
          />
          <FeatureCard
            icon={<FileText className="h-8 w-8 text-white" />}
            title="Secure Authentication"
            description="Enterprise-grade security with Clerk authentication. Control who has access to your documents and conversations."
            gradient="from-orange-500 to-yellow-500"
          />
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 mb-4">
                <span className="text-indigo-700 text-sm font-medium">
                  Interactive Experience
                </span>
              </div>
              <h2 className="text-4xl font-bold mb-6">See How It Works</h2>
              <p className="text-xl text-gray-600 mb-8">
                Experience the power of real-time collaboration with AI
                assistance. Our platform makes document editing and team
                communication seamless.
              </p>

              <div className="space-y-6">
                <Feature
                  number="01"
                  title="Create or Upload Documents"
                  description="Start with a blank canvas or upload existing files to continue working where you left off."
                />
                <Feature
                  number="02"
                  title="Invite Team Members"
                  description="Add collaborators with just an email. They'll join instantly with live cursor tracking."
                />
                <Feature
                  number="03"
                  title="Edit Together in Real-time"
                  description="See changes as they happen. No more waiting for saves or refreshes."
                />
                <Feature
                  number="04"
                  title="Chat with Your Document"
                  description="Ask questions, request summaries, or get clarifications directly from your content."
                />
                <Feature
                  number="05"
                  title="AI-Powered Assistant"
                  description="Chat with your notes, get summaries, and receive smart suggestions as you write."
                />
                <Feature
                  number="06"
                  title="Secure Authentication"
                  description="Control who has access to your documents and conversations. Enterprise-grade security with Clerk authentication."
                />
              </div>

              <button className="mt-10 px-6 py-3 rounded-md bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
                Try It Yourself <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 transform -rotate-2 rounded-xl blur opacity-10"></div>
              <div className="relative bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-gray-100 to-gray-50 px-4 py-3 flex items-center border-b border-gray-200">
                  <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-sm font-medium text-gray-700">
                    Live Demo
                  </div>
                </div>
                <div className="p-6 min-h-[400px] flex flex-col">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <Upload className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Upload a PDF</h4>
                      <p className="text-sm text-gray-500">
                        Drag and drop or click to upload
                      </p>
                    </div>
                  </div>

                  <div className="border-2 border-dashed border-gray-200 rounded-lg flex-grow flex items-center justify-center p-10">
                    <div className="text-center">
                      <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                        <FileText className="h-8 w-8 text-blue-500" />
                      </div>
                      <p className="text-gray-500 mb-4">
                        Drop your file here or click to browse
                      </p>
                      <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-md text-sm font-medium">
                        Select File
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center space-x-4">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <Bot className="h-4 w-4 text-gray-500" />
                    </div>
                    <div className="flex-grow bg-gray-100 rounded-lg p-3">
                      <p className="text-sm text-gray-600">
                        Upload a document to start collaborating with AI and
                        your team...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 mb-4">
              <span className="text-green-700 text-sm font-medium">
                What Users Say
              </span>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Loved by Teams Worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how NoteCollab is transforming how teams collaborate on
              documents and share knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Testimonial
              quote="The real-time collaboration has completely changed how our team works. We can finally edit documents together without version control nightmares."
              name="Sarah Johnson"
              title="Product Manager at TechCorp"
              bgColor="bg-blue-50"
              accentColor="text-blue-600"
            />
            <Testimonial
              quote="Being able to chat with our documents and get instant summaries has saved us countless hours in meetings. The AI assistant feels like having another team member."
              name="Michael Chen"
              title="Research Lead at InnoLabs"
              bgColor="bg-indigo-50"
              accentColor="text-indigo-600"
            />
            <Testimonial
              quote="The PDF chat feature is a game-changer. We can upload research papers and instantly discuss findings with our global team. It's like magic!"
              name="Elena Rodriguez"
              title="Academic Researcher"
              bgColor="bg-purple-50"
              accentColor="text-purple-600"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="py-20 px-4 bg-gradient-to-br from-white to-blue-50"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 mb-4">
              <span className="text-blue-700 text-sm font-medium">
                Simple Pricing
              </span>
            </div>
            <h2 className="text-4xl font-bold mb-6">Choose Your Plan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're an individual or a large team, we have the perfect
              plan for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Free"
              price="$0"
              description="Perfect for individuals just getting started"
              features={[
                "Up to 5 documents",
                "3 collaborators per document",
                "Basic AI summaries",
                "7-day history",
              ]}
              buttonText="Get Started"
              isPrimary={false}
            />
            <PricingCard
              title="Pro"
              price="$12"
              description="For professionals and small teams"
              features={[
                "Unlimited documents",
                "10 collaborators per document",
                "Advanced AI features",
                "PDF uploads & chat",
                "30-day history",
                "Priority support",
              ]}
              buttonText="Try Pro Free"
              isPrimary={true}
              badge="Popular"
            />
            <PricingCard
              title="Enterprise"
              price="Custom"
              description="For large organizations with advanced needs"
              features={[
                "Unlimited everything",
                "Custom integrations",
                "Advanced security",
                "Admin controls",
                "Dedicated support",
                "Training & onboarding",
              ]}
              buttonText="Contact Sales"
              isPrimary={false}
            />
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Created by</h2>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gray-200 mb-4">
            <img
              src="/pavin.jpg"
              alt="Pavin Cletus"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h3 className="text-xl font-medium">Pavin Cletus</h3>
          <p className="text-gray-500">Full Stack Developer</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-gray-700">
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-700">
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-700">
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-20 pb-10 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Notebook className="h-6 w-6 text-blue-600" />
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                  Studymat
                </span>
              </div>
              <p className="text-gray-500 mb-4 max-w-xs">
                Transforming how teams collaborate on documents with real-time
                editing and AI assistance.
              </p>
              <div className="flex space-x-4">
                <SocialLink
                  icon={
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.39 4.49A13.98 13.98 0 011.67 3.15a4.917 4.917 0 001.523 6.574 4.88 4.88 0 01-2.23-.616v.061a4.917 4.917 0 003.95 4.82 4.912 4.912 0 01-2.224.084 4.917 4.917 0 004.6 3.42 9.862 9.862 0 01-6.114 2.107c-.398 0-.79-.023-1.175-.068a13.92 13.92 0 007.548 2.212c9.057 0 14.009-7.503 14.009-14.01 0-.213-.005-.425-.014-.636A9.935 9.935 0 0024 4.557z" />
                    </svg>
                  }
                />
                <SocialLink
                  icon={
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                />
                <SocialLink
                  icon={
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-3">
                <li>
                  <FooterLink href="#">Features</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Pricing</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Security</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Enterprise</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Roadmap</FooterLink>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <FooterLink href="#">Documentation</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">API Reference</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Tutorials</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Blog</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Community</FooterLink>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <FooterLink href="#">About Us</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Careers</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Press</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Contact</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Partners</FooterLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} NoteCollab. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <FooterLink href="#">Terms</FooterLink>
              <FooterLink href="#">Privacy</FooterLink>
              <FooterLink href="#">Cookies</FooterLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper Components
function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
    >
      {children}
    </Link>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-gray-500 hover:text-blue-600 transition-colors"
    >
      {children}
    </Link>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

function FeatureCard({ icon, title, description, gradient }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className={`h-2 bg-gradient-to-r ${gradient}`}></div>
      <div className="p-6">
        <div
          className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r ${gradient}`}
        >
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

interface FeatureProps {
  number: string;
  title: string;
  description: string;
}

function Feature({ number, title, description }: FeatureProps) {
  return (
    <div className="flex items-start">
      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold mr-4 flex-shrink-0">
        {number}
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-1">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  bgColor: string;
  accentColor: string;
}

function Testimonial({
  quote,
  name,
  title,
  bgColor,
  accentColor,
}: TestimonialProps) {
  return (
    <div className={`${bgColor} rounded-xl p-8 relative overflow-hidden`}>
      <div className="absolute top-2 left-2 text-4xl opacity-20 font-serif">
        <span className={accentColor}>"</span>
      </div>
      <p className="text-gray-700 mb-6 relative z-10">{quote}</p>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
    </div>
  );
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  isPrimary: boolean;
  badge?: string;
}

function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  isPrimary,
  badge,
}: PricingCardProps) {
  return (
    <div
      className={`rounded-xl p-8 ${
        isPrimary
          ? "bg-gradient-to-b from-blue-500 to-indigo-600 text-white shadow-xl"
          : "bg-white border border-gray-200"
      } relative`}
    >
      {badge && (
        <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold">
          {badge}
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="flex items-baseline mb-4">
        <span className="text-3xl font-bold">{price}</span>
        {price !== "Custom" && (
          <span
            className={`${isPrimary ? "text-blue-100" : "text-gray-500"} ml-2`}
          >
            /month
          </span>
        )}
      </div>
      <p className={`${isPrimary ? "text-blue-100" : "text-gray-600"} mb-6`}>
        {description}
      </p>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg
              className={`h-5 w-5 ${
                isPrimary ? "text-blue-300" : "text-blue-500"
              } mr-2`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className={isPrimary ? "text-white" : "text-gray-600"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 rounded-md font-medium ${
          isPrimary
            ? "bg-white text-indigo-600 hover:bg-blue-50 shadow-md"
            : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-90 shadow-md shadow-blue-200"
        } transition-colors`}
      >
        {buttonText}
      </button>
    </div>
  );
}

function SocialLink({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
      {icon}
    </a>
  );
}
