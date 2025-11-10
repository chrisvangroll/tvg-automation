export function ShowPhoneWidget() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 w-full border border-gray-200 dark:border-gray-700">
      <div className="flex flex-col gap-6">
        {/* Company Description */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 rounded-lg p-6 border border-green-100 dark:border-green-900">
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3 text-center">
            Industrial, Manufacturing & Gas Automation
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            TVG Automation specializes in flow monitoring and gas detection monitoring services while providing end-to-end automation solutions for toxic gas detection and much more.
          </p>
        </div>
        
        {/* Phone Number */}
        <div className="flex items-center gap-4 justify-center">
          <svg
            className="w-6 h-6 text-green-600 dark:text-green-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <a
            href="tel:920-366-6512"
            className="text-2xl font-semibold text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-500 transition-colors"
          >
            920-366-6512
          </a>
        </div>
      </div>
    </div>
  );
}

