"use client";

import { useState } from "react";
import { GetQuoteWidget, ShowPhoneWidget, DefaultWidget } from "../components";

type WidgetType = "default" | "get_quote" | "show_phone_number";

export default function TestPage() {
  const [activeWidget, setActiveWidget] = useState<WidgetType>("default");

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Test Controls */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 mb-8 border border-gray-200 dark:border-gray-700">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Widget Test Page
          </h1>

          {/* Widget Selector */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Select Widget:
            </label>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setActiveWidget("default")}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  activeWidget === "default"
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                Default Widget
              </button>
              <button
                onClick={() => setActiveWidget("get_quote")}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  activeWidget === "get_quote"
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                Get Quote Widget
              </button>
              <button
                onClick={() => setActiveWidget("show_phone_number")}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  activeWidget === "show_phone_number"
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                Show Phone Widget
              </button>
            </div>
          </div>

        </div>

        {/* Widget Preview */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Preview:
          </h2>
          
          {/* Company Header (same as main page) */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <svg
              className="w-10 h-10 text-green-600 dark:text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 tracking-wide">
              TVG AUTOMATION
            </h1>
            <svg
              className="w-10 h-10 text-green-600 dark:text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Widget Display */}
          <div className="max-w-2xl mx-auto">
            {activeWidget === "default" && <DefaultWidget />}
            {activeWidget === "get_quote" && <GetQuoteWidget />}
            {activeWidget === "show_phone_number" && (
              <ShowPhoneWidget />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

