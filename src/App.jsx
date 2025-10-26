import React from 'react';
import Hero from './components/Hero';
import QuickStats from './components/QuickStats';
import CourseCards from './components/CourseCards';
import Schedule from './components/Schedule';
import { Bell, User } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-500" />
            <span className="font-semibold tracking-tight">EduSphere</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10">
              <Bell className="h-4 w-4" />
              Alerts
            </button>
            <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center">
              <User className="h-5 w-5" />
            </div>
          </div>
        </div>
      </header>

      <main>
        <Hero />

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-28 relative z-10">
          <QuickStats />
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <CourseCards />
          </div>
          <div className="lg:col-span-1">
            <Schedule />
          </div>
        </section>
      </main>

      <footer className="mt-16 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-white/60">
          © {new Date().getFullYear()} EduSphere. Learn brighter.
        </div>
      </footer>
    </div>
  );
}
