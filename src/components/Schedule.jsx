import React from 'react';
import { Calendar, Clock, CheckCircle } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'ML Assignment 2',
    course: 'Foundations of Machine Learning',
    due: 'Today, 5:00 PM',
    type: 'assignment',
  },
  {
    id: 2,
    title: 'Sustainability Quiz',
    course: 'Sustainable Environments',
    due: 'Tomorrow, 10:00 AM',
    type: 'quiz',
  },
  {
    id: 3,
    title: 'CS101 Live Session',
    course: 'Intro to Computer Science',
    due: 'Fri, 2:00 PM',
    type: 'live',
  },
];

function TypeIcon({ type }) {
  if (type === 'assignment') return <CheckCircle className="h-4 w-4 text-emerald-400" />;
  if (type === 'quiz') return <Calendar className="h-4 w-4 text-cyan-400" />;
  return <Clock className="h-4 w-4 text-violet-400" />;
}

export default function Schedule() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <h2 className="text-lg font-semibold mb-4">Upcoming Schedule</h2>
      <div className="space-y-3">
        {events.map((e) => (
          <div key={e.id} className="flex items-start gap-3 rounded-xl border border-white/10 bg-neutral-900/60 p-3">
            <div className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center">
              <TypeIcon type={e.type} />
            </div>
            <div className="flex-1">
              <p className="font-medium leading-tight">{e.title}</p>
              <p className="text-xs text-white/60">{e.course}</p>
              <p className="text-xs text-white/60 mt-1">{e.due}</p>
            </div>
            <button className="text-xs rounded-md border border-white/10 bg-white/5 px-2 py-1 hover:bg-white/10">Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}
