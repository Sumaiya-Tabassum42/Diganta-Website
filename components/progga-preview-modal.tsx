"use client"

import { useEffect, useState } from "react"
import { 
  X, 
  ExternalLink, 
  Lock, 
  MessageSquare, 
  Image as ImageIcon, 
  FileText, 
  Palette, 
  Wand2, 
  BarChart3, 
  Users, 
  Building2, 
  Settings, 
  LogOut, 
  Send, 
  Paperclip, 
  Home, 
  Plus 
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProggaPreviewModalProps {
  isOpen: boolean
  onClose: () => void
}

const screenshots = [
  { id: "landing", name: "Landing Page", component: <ProggaLanding /> },
  { id: "user-dashboard", name: "AI Workspace", component: <ProggaUserDashboard /> },
  { id: "ai-assistant", name: "AI Chat Assistant", component: <ProggaAIAssistant /> },
  { id: "admin-dashboard", name: "Admin Portal", component: <ProggaAdminDashboard /> },
  { id: "admin-users", name: "User Management", component: <ProggaAdminUsers /> },
]

export function ProggaPreviewModal({ isOpen, onClose }: ProggaPreviewModalProps) {
  const [activeScreenshotId, setActiveScreenshotId] = useState("landing")
  const [showSignIn, setShowSignIn] = useState(false)
  const ActiveComponent = screenshots.find((s) => s.id === activeScreenshotId)?.component

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative flex h-[90vh] w-[90vw] max-w-7xl flex-col rounded-2xl bg-[#0F172A] text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <header className="flex shrink-0 items-center justify-between border-b border-slate-700/80 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-600 font-bold text-white">
              P
            </div>
            <div>
              <h2 className="text-lg font-bold">Progga (Pragya)</h2>
              <p className="text-xs text-slate-400">Unified Government AI Service Platform</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://all-ai.baherdesh.com/" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                Launch Progga App <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <button
              onClick={onClose}
              className="rounded-full p-1.5 text-slate-400 transition-colors hover:bg-slate-700"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="grid flex-1 grid-cols-1 gap-6 overflow-hidden p-6 md:grid-cols-3">
          {/* Left: Interactive Preview Screen */}
          <div className="relative flex flex-col md:col-span-2">
            <div className="relative flex-1 overflow-hidden rounded-lg bg-slate-900 ring-1 ring-slate-800">
              {ActiveComponent}
              {showSignIn && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/80 backdrop-blur-sm">
                  <div className="rounded-lg bg-[#0F172A] p-8 text-center shadow-xl ring-1 ring-slate-700 max-w-sm w-full">
                    <Lock className="mx-auto mb-4 h-8 w-8 text-emerald-400" />
                    <h3 className="mb-2 text-lg font-semibold">Sign in to Progga Workspace</h3>
                    <p className="mb-6 text-sm text-slate-400">Access unified AI tools and government workflow portals.</p>
                    <a href="https://all-ai.baherdesh.com/" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Continue to Live App</Button>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Screen Toggles */}
            <div className="mt-4 flex shrink-0 items-center justify-center gap-2 flex-wrap">
              {screenshots.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveScreenshotId(s.id)}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                    activeScreenshotId === s.id ? "bg-emerald-600 text-white" : "bg-slate-700 hover:bg-slate-600 text-slate-300"
                  }`}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right: How It Works */}
          <div className="flex flex-col overflow-y-auto rounded-lg bg-slate-900 p-5 ring-1 ring-slate-800">
            <h3 className="mb-4 text-base font-semibold text-white">How Progga Works</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">1</div>
                <p className="text-slate-300">
                  <span className="font-semibold text-white">Select AI Tool:</span> Choose from Chat Assistant, Image Creator, Document Writer, UI Designer, or Data Analysis.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">2</div>
                <p className="text-slate-300">
                  <span className="font-semibold text-white">Departmental Control:</span> Admin dashboard manages tokens, organizational departments, and user permissions.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">3</div>
                <p className="text-slate-300">
                  <span className="font-semibold text-white">Secure Workspace:</span> Encrypted AI execution tailored for enterprise and public sector workflows.
                </p>
              </div>
            </div>

            <div className="mt-auto pt-6">
              <Button onClick={() => setShowSignIn(true)} className="w-full bg-emerald-600 hover:bg-emerald-700">
                Try Live Workspace
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

// 1. Progga Landing Page Screen
function ProggaLanding() {
  return (
    <div className="h-full w-full bg-white p-6 text-slate-900 overflow-y-auto">
      <nav className="flex items-center justify-between pb-6 border-b border-slate-200/60">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded bg-emerald-800 font-bold text-white text-xs">P</div>
          <span className="font-extrabold text-slate-900">Progga <span className="text-[10px] font-medium text-emerald-700 uppercase">AI Platform</span></span>
        </div>
        <div className="flex items-center gap-4 text-xs font-semibold text-slate-600">
          <span>Services</span>
          <span>Features</span>
          <Button size="sm" className="bg-emerald-800 hover:bg-emerald-900 text-white text-xs h-7">Get Started</Button>
        </div>
      </nav>

      <div className="text-center my-10 space-y-3">
        <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-full">
          ✨ One workspace. Powerful AI.
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900">
          AI that works <span className="text-emerald-700">with you.</span>
        </h1>
        <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
          Progga brings powerful AI services into one intelligent workspace, helping individuals and organizations create, analyze, and work smarter.
        </p>
        <div className="flex justify-center gap-3 pt-2">
          <Button size="sm" className="bg-emerald-800 hover:bg-emerald-900 text-white text-xs">Get Started →</Button>
          <Button size="sm" variant="outline" className="text-xs">Explore Services</Button>
        </div>
      </div>
    </div>
  )
}

// 2. Progga User Dashboard Screen
function ProggaUserDashboard() {
  return (
    <div className="h-full w-full bg-slate-50 text-slate-900 flex flex-col p-6 overflow-y-auto">
      <div className="flex justify-between items-center border-b pb-4">
        <span className="font-bold text-emerald-800 text-sm">Pragya</span>
        <div className="text-right">
          <p className="text-[10px] font-bold text-slate-500">Credit Usage: 0 / 0</p>
        </div>
      </div>

      <div className="text-center my-8">
        <h2 className="text-xl font-bold text-slate-900 mb-2">
          প্রজ্ঞা (Pragya) An Unified AI Service Platform for the Government of Bangladesh
        </h2>
        <p className="text-xs text-slate-600 max-w-lg mx-auto">
          Explore a variety of AI tools designed to enhance productivity and creativity. Select a service below to get started.
        </p>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mt-8">
          {[
            { icon: MessageSquare, name: "Chat Service" },
            { icon: ImageIcon, name: "Image Creator" },
            { icon: FileText, name: "Document Writer" },
            { icon: Palette, name: "UI Designer" },
            { icon: Wand2, name: "Presentation" },
            { icon: BarChart3, name: "Data Analysis" },
          ].map((s, idx) => (
            <div key={idx} className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs flex flex-col items-center gap-2 hover:border-emerald-500 transition-colors">
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700">
                <s.icon className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-semibold text-slate-800">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// 3. Progga AI Chat Assistant Workspace
function ProggaAIAssistant() {
  return (
    <div className="h-full w-full bg-white text-slate-900 flex">
      {/* Sidebar */}
      <div className="w-1/3 border-r border-slate-200 p-3 flex flex-col bg-slate-50">
        <div className="font-bold text-xs text-slate-800 mb-3">AI Assistant</div>
        <Button size="sm" className="bg-emerald-800 text-white w-full text-xs justify-start gap-2 mb-4">
          <Plus className="w-3.5 h-3.5" /> New Chat
        </Button>
        <div className="space-y-1 text-xs text-slate-600 font-medium">
          <div className="p-2 rounded bg-emerald-100/60 text-emerald-900 font-bold truncate">Draft a professional email...</div>
          <div className="p-2 rounded hover:bg-slate-100 truncate">I have a tiger name Bengol...</div>
          <div className="p-2 rounded hover:bg-slate-100 truncate">Tell me something about Cape...</div>
        </div>
      </div>

      {/* Main Chat */}
      <div className="flex-1 flex flex-col p-4 bg-slate-50/50 relative">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h4 className="font-bold text-xs">AI Assistant</h4>
          <span className="text-[10px] text-slate-500">Credit Usage: 5,000 / 20,000</span>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 space-y-3 overflow-y-auto text-xs">
          <div className="bg-emerald-800 text-white p-3 rounded-xl ml-auto max-w-md">
            Make this email 350 words instead of 150, adding more detail and context...
          </div>
          <div className="bg-white border border-slate-200 p-3 rounded-xl max-w-lg text-slate-800">
            <strong>Subject: Important Update Regarding Project Timeline</strong><br />
            Dear Client, I am writing to provide you with a transparent update regarding the schedule...
          </div>
        </div>

        {/* Chat Input */}
        <div className="mt-3 relative flex items-center">
          <input
            type="text"
            placeholder="Ask anything..."
            className="w-full p-2.5 pl-8 text-xs bg-white border border-slate-300 rounded-xl outline-none"
          />
          <Paperclip className="w-3.5 h-3.5 text-slate-400 absolute left-2.5" />
          <Button size="icon" className="h-7 w-7 bg-emerald-800 text-white absolute right-1.5 rounded-lg">
            <Send className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>
    </div>
  )
}

// 4. Progga Admin Portal Dashboard
function ProggaAdminDashboard() {
  return (
    <div className="h-full w-full bg-slate-100 flex text-slate-900">
      <div className="w-1/4 bg-emerald-900 text-white p-4 space-y-3">
        <div className="font-bold text-sm">AI Portal Admin</div>
        <div className="space-y-1 text-xs font-semibold pt-4">
          <div className="bg-white/10 p-2 rounded flex items-center gap-2"><BarChart3 className="w-3.5 h-3.5" /> Admin Dashboard</div>
          <div className="p-2 rounded hover:bg-white/5 flex items-center gap-2"><Users className="w-3.5 h-3.5" /> Users</div>
          <div className="p-2 rounded hover:bg-white/5 flex items-center gap-2"><Building2 className="w-3.5 h-3.5" /> Departments</div>
        </div>
      </div>

      <div className="flex-1 p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-slate-900 mb-1">Admin Dashboard</h2>
        <p className="text-xs text-slate-500 mb-6">Monitor users, departments and AI activity.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Total Users", val: "8" },
            { label: "Departments", val: "6" },
            { label: "Remaining Tokens", val: "8,141,100" },
            { label: "Conversations", val: "45" },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-3 rounded-xl border border-slate-200">
              <span className="text-[10px] font-semibold text-slate-500">{stat.label}</span>
              <p className="text-lg font-bold text-slate-900 mt-1">{stat.val}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// 5. Progga Admin User Creation Screen
function ProggaAdminUsers() {
  return (
    <div className="h-full w-full bg-slate-100 flex text-slate-900">
      <div className="w-1/4 bg-emerald-900 text-white p-4 space-y-3">
        <div className="font-bold text-sm">AI Portal Admin</div>
        <div className="space-y-1 text-xs font-semibold pt-4">
          <div className="p-2 rounded hover:bg-white/5 flex items-center gap-2"><BarChart3 className="w-3.5 h-3.5" /> Admin Dashboard</div>
          <div className="bg-white/10 p-2 rounded flex items-center gap-2"><Users className="w-3.5 h-3.5" /> Users</div>
        </div>
      </div>

      <div className="flex-1 p-6 overflow-y-auto bg-slate-50">
        <h2 className="text-xl font-bold text-slate-900 mb-1">Create User</h2>
        <p className="text-xs text-slate-500 mb-4">Add a new user and assign AI access.</p>

        <div className="bg-white p-5 rounded-xl border border-slate-200 max-w-md space-y-3 text-xs">
          <div>
            <label className="font-semibold text-slate-700 block mb-1">Full Name</label>
            <input type="text" className="w-full p-2 border rounded bg-slate-50" placeholder="User" />
          </div>
          <div>
            <label className="font-semibold text-slate-700 block mb-1">Email</label>
            <input type="email" className="w-full p-2 border rounded bg-slate-50" defaultValue="user@gmail.com" />
          </div>
        </div>
      </div>
    </div>
  )
}