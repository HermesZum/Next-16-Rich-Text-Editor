import React from "react";

export default function Home(): React.JSX.Element {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">
          Modern WYSIWYG Editor with TipTap 3
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Built with Next.js 16, React 19, Tailwind CSS 4, and Shadcn UI
        </p>

        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 bg-white dark:bg-gray-900">
          <h2 className="text-2xl font-semibold mb-4">
            Coming Soon: Rich Text Editor
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            The TipTap editor will be implemented in the next steps.
          </p>
        </div>
      </div>
    </main>
  );
}
