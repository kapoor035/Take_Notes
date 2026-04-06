"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Users, Cloud, Sparkles, ArrowRight, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export function LandingPage() {
  const { theme, setTheme } = useTheme();

  const [hoveredButton, setHoveredButton] = useState<null | string>(null);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/40 via-blue-50/20 to-indigo-50/40 dark:from-purple-950/10 dark:via-blue-950/5 dark:to-indigo-950/10" />

      {/* Floating blobs (lighter + smoother) */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Header */}
      <header className="relative z-10 container mx-auto px-6 py-6">
        <nav className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl gradient-purple-blue">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">TakeNote</span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">

            {/* Theme toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-4 w-4 transition-all dark:scale-0" />
              <Moon className="absolute h-4 w-4 transition-all scale-0 dark:scale-100" />
            </Button>

            {/* CTA */}
            <Button className="btn-gradient text-white px-5 py-2 rounded-xl" asChild>
              <Link href="/auth/signin">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

          </div>
        </nav>
      </header>

      {/* MAIN */}
      <main className="relative z-10 container mx-auto px-6 py-20 text-center">

        {/* HERO */}
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="gradient-text">Smart Notes</span>
            <br />
            <span className="text-foreground">Made Simple</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A minimal note-taking app with AI assistance and real-time collaboration.
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-10">

          <Button
            size="lg"
            className="btn-gradient text-white px-8 py-5 rounded-2xl"
            onMouseEnter={() => setHoveredButton("signin")}
            onMouseLeave={() => setHoveredButton(null)}
            asChild
          >
            <Link href="/auth/signin">
              Sign In
              <ArrowRight
                className={`ml-2 h-5 w-5 transition ${
                  hoveredButton === "signin" ? "translate-x-1" : ""
                }`}
              />
            </Link>
          </Button>

          <Button
            size="lg"
            className="btn-gradient text-white px-8 py-5 rounded-2xl"
            onMouseEnter={() => setHoveredButton("signup")}
            onMouseLeave={() => setHoveredButton(null)}
            asChild
          >
            <Link href="/auth/signup">
              Sign Up
              <ArrowRight
                className={`ml-2 h-5 w-5 transition ${
                  hoveredButton === "signup" ? "translate-x-1" : ""
                }`}
              />
            </Link>
          </Button>

        </div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-3 gap-8 pt-20">

          <FeatureCard
            icon={<Sparkles className="h-8 w-8 text-white" />}
            title="AI Powered"
            desc="Smart suggestions and assistance for faster note creation."
          />

          <FeatureCard
            icon={<Users className="h-8 w-8 text-white" />}
            title="Collaboration"
            desc="Work with others in real-time with shared editing."
          />

          <FeatureCard
            icon={<Cloud className="h-8 w-8 text-white" />}
            title="Cloud Sync"
            desc="Access your notes anytime across devices."
          />

        </div>
      </main>
    </div>
  );
}

/* 🔥 Reusable component (cleaner + better structure) */
function FeatureCard({ icon, title, desc }: any) {
  return (
    <div className="card-enhanced rounded-3xl p-8 text-center space-y-4 hover:scale-[1.02] transition">
      <div className="w-16 h-16 mx-auto rounded-2xl gradient-purple-blue flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-muted-foreground text-sm">{desc}</p>
    </div>
  );
}