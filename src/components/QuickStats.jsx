import React from 'react';
import { BookOpen, Clock, CheckCircle, Calendar } from 'lucide-react';

const items = [
  {
    label: 'GPA',
    value: '3.87',
    sub: 'This term',
    icon: BookOpen,
    hue: 'from-cyan-400 to-blue-500',
  },
  {
    label: 'Study Hours',
    value: '42h',
    sub: 'Past 7 days',
    icon: Clock,
    hue: 'from-emerald-400 to-lime-500',
  },
  {
    label: 'Completed',
    value: '18',
    sub: 'Modules',
    icon: CheckCircle,
    hue: 'from-violet-400 to-fuchsia-500',
  },
  {
    label: 'Upcoming',
    value: '5',
    sub: 'Deadlines',
    icon: Calendar,
    hue: 'from-rose-400 to-orange-500',
  },
];

export default function QuickStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((it) => (
        <article
          key={it.label}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4"
        >
          <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${it.hue} opacity-20 blur-2xl`} />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-white/60">{it.label}</p>
              <p className="mt-1 text-2xl font-semibold">{it.value}</p>
              <p className="text-xs text-white/50">{it.sub}</p>
            </div>
            <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
              <it.icon className="h-5 w-5" />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
