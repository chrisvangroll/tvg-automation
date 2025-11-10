export function GetQuoteWidget() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 w-full border border-gray-200 dark:border-gray-700">
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 text-center">
          Request a Quote
        </h2>

        {/* Company Description */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 rounded-lg p-6 border border-green-100 dark:border-green-900">
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3 text-center">
            Industrial, Manufacturing & Gas Automation
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            TVG Automation specializes in flow monitoring and gas detection monitoring services while providing end-to-end automation solutions for toxic gas detection and much more.
          </p>
        </div>
        

        {/* Request Quote Button */}
        <a
          href="https://www.tvgautomation.com/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-4 px-8 rounded-lg transition-colors shadow-md hover:shadow-lg text-center block cursor-pointer"
        >
          Get a Quote
        </a>

        {/* Or call */}
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Or call us directly</p>
          <a
            href="tel:920-366-6512"
            className="text-lg font-semibold text-green-600 dark:text-green-500 hover:text-green-700 dark:hover:text-green-400 transition-colors"
          >
            920-366-6512
          </a>
        </div>
      </div>
    </div>
  );
}

