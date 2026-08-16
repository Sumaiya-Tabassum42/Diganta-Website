"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { X, Pencil, Search, ExternalLink, CheckCircle, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ZentixPreviewModalProps {
  isOpen: boolean
  onClose: () => void
}

const screenshots = [
  { id: "dashboard", name: "Dashboard", component: <ZentixDashboard /> },
  { id: "studio", name: "Studio Workspace", component: <ZentixStudio /> },
]

export function ZentixPreviewModal({ isOpen, onClose }: ZentixPreviewModalProps) {
  const [activeScreenshotId, setActiveScreenshotId] = useState("dashboard")
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
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-red-600 font-bold">Z</div>
            <div>
              <h2 className="text-lg font-bold">Zentix</h2>
              <p className="text-xs text-slate-400">Enterprise AI Intelligence Platform</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://zentix.baherdesh.com/" target="_blank" rel="noopener noreferrer">
              <Button size="sm">
                Launch Zentix App <ExternalLink className="ml-2 h-4 w-4" />
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
          {/* Left: Screenshot Gallery */}
          <div className="relative flex flex-col md:col-span-2">
            <div className="relative flex-1 overflow-hidden rounded-lg bg-slate-900 ring-1 ring-slate-800">
              {ActiveComponent}
              {showSignIn && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/80 backdrop-blur-sm">
                  <div className="rounded-lg bg-[#0F172A] p-8 text-center shadow-xl ring-1 ring-slate-700">
                    <Lock className="mx-auto mb-4 h-8 w-8 text-blue-400" />
                    <h3 className="mb-2 text-lg font-semibold">Sign in to access your Zentix workspace</h3>
                    <p className="mb-6 text-sm text-slate-400">Continue to the live application to get started.</p>
                    <a href="https://zentix.baherdesh.com/" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full">Continue to Zentix</Button>
                    </a>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-4 flex shrink-0 items-center justify-center gap-3">
              {screenshots.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveScreenshotId(s.id)}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                    activeScreenshotId === s.id ? "bg-blue-600 text-white" : "bg-slate-700 hover:bg-slate-600"
                  }`}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right: How It Works */}
          <div className="flex flex-col overflow-y-auto rounded-lg bg-slate-900 p-4 ring-1 ring-slate-800">
            <h3 className="mb-4 font-semibold">How It Works</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold">1</div>
                <p className="text-slate-300">
                  <span className="font-medium text-white">Connect Data:</span> Link your news sources or paste text directly into the studio.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold">2</div>
                <p className="text-slate-300">
                  <span className="font-medium text-white">Configure AI Model:</span> Adjust parameters for content generation or fact-checking.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold">3</div>
                <p className="text-slate-300">
                  <span className="font-medium text-white">Automate Insights:</span> Generate social media cards or verification reports with a single click.
                </p>
              </div>
            </div>
            <div className="mt-auto pt-6">
              <Button onClick={() => setShowSignIn(true)} className="w-full">
                Try Live Demo
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

// Mock Zentix Dashboard UI
function ZentixDashboard() {
  return (
    <div className="relative h-full w-full bg-slate-100 p-8 text-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/hero/hero-grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <h1 className="relative text-center text-5xl font-bold">Contemporary</h1>
      <div className="relative mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-xl bg-[#0F172A] p-6 text-white shadow-lg">
          <Pencil className="mb-3 h-6 w-6 text-blue-400" />
          <h3 className="text-lg font-semibold">Content Generator</h3>
          <p className="text-sm text-slate-400">Craft high-quality cards from your sources.</p>
        </div>
        <div className="rounded-xl bg-[#0F172A] p-6 text-white shadow-lg">
          <Search className="mb-3 h-6 w-6 text-blue-400" />
          <h3 className="text-lg font-semibold">Fact Checker</h3>
          <p className="text-sm text-slate-400">Verify claims with trusted sources.</p>
        </div>
      </div>
      <footer className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-slate-500">
        © 2026 Contemporary.
      </footer>
    </div>
  )
}

// Mock Zentix Studio UI
function ZentixStudio() {
  const [headline, setHeadline] = useState("আপনার শিরোনাম এখানে আসবে")
  const [bgOpacity, setBgOpacity] = useState(30)
  const [bgBrightness, setBgBrightness] = useState(100)
  const [headlineAlign, setHeadlineAlign] = useState<"left" | "center" | "right">("center")

  return (
    <div className="flex h-full w-full bg-slate-100 text-slate-900">
      {/* Left Panel */}
      <div className="w-1/3 shrink-0 space-y-4 overflow-y-auto border-r border-slate-200 bg-white p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Controls</h3>
          <span className="rounded-full bg-slate-200 px-2 py-0.5 text-xs">Remaining: 3 / 3</span>
        </div>
        <div>
          <label className="text-xs font-medium">Source Article</label>
          <input
            type="text"
            placeholder="Paste URL or text..."
            className="mt-1 w-full rounded-md border border-slate-300 bg-slate-50 p-2 text-sm"
          />
        </div>
        <Button className="w-full bg-orange-500 hover:bg-orange-600">✨ Generate From Article</Button>
        <div className="space-y-2 border-t border-slate-200 pt-4">
          <h4 className="text-sm font-medium">Image Adjustments</h4>
          <div>
            <label className="text-xs">Headline</label>
            <input
              type="text"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              className="mt-1 w-full rounded-md border border-slate-300 bg-slate-50 p-2 text-sm"
            />
          </div>
          <div>
            <label className="text-xs">BG Opacity</label>
            <Slider value={[bgOpacity]} onValueChange={(v) => setBgOpacity(v[0])} max={100} step={1} />
          </div>
          <div>
            <label className="text-xs">BG Brightness</label>
            <Slider value={[bgBrightness]} onValueChange={(v) => setBgBrightness(v[0])} max={200} step={1} />
          </div>
        </div>
        <div className="space-y-2 border-t border-slate-200 pt-4">
          <h4 className="text-sm font-medium">Alignment</h4>
          <Select value={headlineAlign} onValueChange={(v: "left" | "center" | "right") => setHeadlineAlign(v)}>
            <SelectTrigger className="w-full text-xs">
              <SelectValue placeholder="Headline Alignment" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="left">Left</SelectItem>
              <SelectItem value="center">Center</SelectItem>
              <SelectItem value="right">Right</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 overflow-hidden bg-slate-200 p-6">
        <div
          className="relative mx-auto h-full max-w-md rounded-lg bg-red-700 bg-[url('/hero/hero-texture.png')] bg-cover shadow-2xl"
          style={{ filter: `brightness(${bgBrightness}%)` }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: `rgba(0, 0, 0, ${bgOpacity / 100})` }}></div>
          <div className="relative flex h-full flex-col p-6 text-white">
            <div className="flex items-center justify-between">
              <span className="text-xs">১৩ আগস্ট ২০২৬</span>
              <span className="font-bold">DEFACTO</span>
            </div>
            <div className={`flex-1 flex items-center justify-${headlineAlign}`}>
              <h2 className={`text-2xl font-bold text-${headlineAlign}`}>{headline}</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-md bg-black/30 p-3">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-red-500 p-1"><X className="h-3 w-3" /></div>
                  <h4 className="text-sm font-semibold">Rumor</h4>
                </div>
                <p className="mt-2 text-xs text-slate-300">The initial claim or rumor text appears here for comparison.</p>
              </div>
              <div className="rounded-md bg-black/30 p-3">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-green-500 p-1"><CheckCircle className="h-3 w-3" /></div>
                  <h4 className="text-sm font-semibold">Fact</h4>
                </div>
                <p className="mt-2 text-xs text-slate-300">The verified fact or corrected information is displayed here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}