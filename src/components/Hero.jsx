import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-40 lg:pb-44">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <Star className="h-3.5 w-3.5 text-yellow-400" />
              Technology • Interactive • Education • Environment
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
              Your Student Dashboard
            </h1>
            <p className="mt-4 text-white/70 max-w-xl">
              Track progress, explore courses, and stay on schedule in a futuristic, interactive space tailored for your learning journey.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-500 px-4 py-2.5 text-sm font-medium text-neutral-950 shadow hover:opacity-90">
                <Rocket className="h-4 w-4" />
                Continue Learning
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm hover:bg-white/10">
                View Achievements
              </button>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden border border-white/10 bg-black/40">
            <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[60vh] bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.12),transparent_60%)]" />
    </section>
  );
}
