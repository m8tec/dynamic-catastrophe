import Link from "next/link";

interface LoadingErrorProps {
  title?: string;
  message: string;
  showHomeButton?: boolean;
}

export default function LoadingError({
  title = "Szenario nicht gefunden",
  message,
  showHomeButton = true,
}: LoadingErrorProps) {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#121212] text-neutral-300 p-6 text-center selection:bg-red-900 selection:text-white">
      <div className="max-w-md flex flex-col items-center gap-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-16 h-16 text-red-900/80"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>

        <div>
          <h1 className="text-2xl font-vesper text-white uppercase tracking-widest mb-3">
            {title}
          </h1>
          <p className="text-neutral-400 text-sm leading-relaxed">
            {message}
          </p>
        </div>

        {showHomeButton && (
          <Link
            href="/"
            className="mt-4 px-6 py-3 border border-neutral-700 hover:border-red-900/60 hover:bg-red-900/10 text-neutral-400 hover:text-white transition-all duration-300 rounded-md text-xs uppercase tracking-widest font-bold flex items-center gap-2 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Flucht zur Startseite
          </Link>
        )}
      </div>
    </div>
  );
}