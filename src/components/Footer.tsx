import React from 'react';
export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-stone-200/60 text-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-stone-500">
          © {new Date().getFullYear()} Okith Hettihewa. All rights reserved.
        </p>
        <p className="font-mono text-xs text-stone-500">
          Designed with intention. Built with React & Tailwind.
        </p>
      </div>
    </footer>);

}