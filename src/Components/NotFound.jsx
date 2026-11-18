import { NavLink } from "react-router"

function NotFound() {
    return (
        <>
            <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center font-sans">
                {/* 404 Error Code Badge */}
                <span className="bg-indigo-100 text-indigo-700 px-4 py-1.5 text-xs font-bold rounded-full mb-4 shadow-sm tracking-wider uppercase">
                    Error 404
                </span>

                {/* Big Heading */}
                <h1 className="text-6xl sm:text-8xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    Page Not <span className="text-indigo-600">Found</span>
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto mb-8 leading-relaxed">
                    Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                {/* Navigation Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <NavLink 
                        to="/" 
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-7 py-3 rounded-xl transition duration-200 shadow-md hover:shadow-lg text-center"
                    >
                        Back to Home
                    </NavLink>
                    <NavLink 
                        to="/task" 
                        className="bg-white hover:bg-gray-50 text-gray-700 font-semibold px-7 py-3 rounded-xl border border-gray-300 transition duration-200 shadow-sm hover:shadow text-center"
                    >
                        View Tasks
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default NotFound