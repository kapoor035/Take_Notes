"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Users, Cloud, Sparkles, ArrowRight, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export function HomePage() {
  const { theme, setTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-indigo-50/50 dark:from-purple-950/20 dark:via-blue-950/10 dark:to-indigo-950/20" />

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/10 rounded-full blur-3xl animate-pulse-gradient" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl animate-pulse-gradient"
        style={{ animationDelay: "1s" }}
      />

      {/* Header */}
      <header className="relative z-10 container mx-auto px-6 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl gradient-purple-blue">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">TakeNote</span>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-9 w-9 p-0"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            <Button
              className="btn-gradient text-white px-6 py-2 rounded-xl font-medium"
              asChild
            >
              <Link href="/auth/signin">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </nav>
      </header>

      {/* Main content */}
      <main className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Hero section */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="gradient-text">Smart Notes</span>
              <br />
              <span className="text-foreground">Made Simple</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A beautiful, minimal note-taking app with AI-powered and Real Time Collaboration features.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              className="btn-gradient text-white px-8 py-6 text-lg font-medium rounded-2xl"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              asChild
            >
              <Link href="/auth/signin">
                Sign In
                <ArrowRight
                  className={`ml-2 h-5 w-5 transition-transform ${
                    isHovered ? "translate-x-1" : ""
                  }`}
                />
              </Link>
            </Button>

            <Button
              size="lg"
              className="btn-gradient text-white px-8 py-6 text-lg font-medium rounded-2xl"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              asChild
            >
              <Link href="/auth/signup">
                Sign Up
                <ArrowRight
                  className={`ml-2 h-5 w-5 transition-transform ${
                    isHovered ? "translate-x-1" : ""
                  }`}
                />
              </Link>
            </Button>

          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 pt-20">
            <div className="card-enhanced rounded-3xl p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl gradient-purple-blue flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">AI-Powered</h3>
              <p className="text-muted-foreground">
                Smart features to enhance your note-taking experience
              </p>
            </div>

            <div className="card-enhanced rounded-3xl p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl gradient-purple-blue flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Collaborate</h3>
              <p className="text-muted-foreground">
                Work together in real-time, share notes, and boost productivity with your team
              </p>
            </div>

            <div className="card-enhanced rounded-3xl p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl gradient-purple-blue flex items-center justify-center">
                <Cloud className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Cloud Sync</h3>
              <p className="text-muted-foreground">
                Access your notes anytime, anywhere with seamless cloud synchronization
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
