import { Link } from "react-router-dom"

function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
            <div className="space-y-6 max-w-md">
                <div className="flex justify-center">
                    <div className="rounded-full bg-gray-100 p-6">
                        {/* Custom FileQuestion icon as inline SVG */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="64"
                            height="64"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-gray-500"
                        >
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                            <path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2" />
                            <path d="M12 17h.01" />
                        </svg>
                    </div>
                </div>

                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Page not found</h1>

                <p className="text-gray-500 text-lg">
                    Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
                </p>

                <div className="flex justify-center gap-4">
                    {/* Custom button implementation */}
                    <Link
                        to="/"
                        className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                    >
                        Return Home
                    </Link>
                    <Link
                        to="/contact"
                        className="px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-md font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
                    >
                        Contact Support
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound
