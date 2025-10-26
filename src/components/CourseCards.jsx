import React from 'react';
import { BookOpen, Star } from 'lucide-react';

const courses = [
  {
    id: 'cs101',
    title: 'Introduction to Computer Science',
    instructor: 'Dr. Lin',
    progress: 72,
    color: 'from-cyan-400 to-blue-500',
  },
  {
    id: 'env204',
    title: 'Sustainable Environments',
    instructor: 'Prof. Gomez',
    progress: 45,
    color: 'from-emerald-400 to-lime-500',
  },
  {
    id: 'ai305',
    title: 'Foundations of Machine Learning',
    instructor: 'Dr. Rao',
    progress: 88,
    color: 'from-violet-400 to-fuchsia-500',
  },
];

export default function CourseCards() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Your Courses</h2>
        <button className="text-sm text-white/80 hover:text-white inline-flex items-center gap-1">
          <Star className="h-4 w-4 text-yellow-400" />
          Recommended
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courses.map((c) => (
          <article key={c.id} className="rounded-xl border border-white/10 bg-neutral-900/60 p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center text-neutral-950 font-semibold`}> 
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium leading-tight">{c.title}</h3>
                  <p className="text-xs text-white/60">{c.instructor}</p>
                </div>
              </div>
              <button className="text-xs rounded-md border border-white/10 bg-white/5 px-2 py-1 hover:bg-white/10">
                Continue
              </button>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>Progress</span>
                <span>{c.progress}%</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${c.color}`}
                  style={{ width: `${c.progress}%` }}
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
