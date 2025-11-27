"use client";

import { GetQuoteWidget } from "@/app/components";

export default function QuoteTestPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
          Get Quote Widget Test
        </h1>
        <GetQuoteWidget />
      </div>
    </div>
  );
}




