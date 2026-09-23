
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-[#0d0f12] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-3xl text-center">

        {/* 404 */}
        <div className="relative mb-8">
          <h1 className="text-[120px] sm:text-[180px] md:text-[220px] leading-none font-black tracking-tighter text-[#16191e]">
            404
          </h1>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[#ccff00] text-5xl sm:text-7xl md:text-8xl font-black tracking-tight">
              404
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <p className="text-[#ccff00] text-xs sm:text-sm font-bold tracking-[0.3em] uppercase">
            WORKOUT NOT FOUND
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
            Looks like this set is missing.
          </h2>

          <p className="mx-auto max-w-lg text-gray-400 text-sm sm:text-base leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or may have
            been moved. Let&apos;s get you back to your workout library.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#ccff00] px-6 py-3.5 text-sm font-black uppercase tracking-wider text-black transition hover:bg-[#b3e600]"
          >
            Back to Workouts

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </Link>

          <Link
            href="/my-plan"
            className="inline-flex items-center justify-center rounded-lg border border-gray-700 bg-[#14161d] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-gray-300 transition hover:border-gray-500 hover:text-white"
          >
            My Plan
          </Link>
        </div>

        {/* Bottom decoration */}
        <div className="mt-14 flex items-center justify-center gap-2">
          <span className="h-1 w-8 rounded-full bg-[#ccff00]" />
          <span className="h-1 w-2 rounded-full bg-gray-700" />
          <span className="h-1 w-2 rounded-full bg-gray-700" />
        </div>
      </div>
    </main>
  );
};

export default NotFound;
