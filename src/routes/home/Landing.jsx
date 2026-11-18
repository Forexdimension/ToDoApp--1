function Landing() {
    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-8 font-sans text-gray-800 leading-relaxed">
            {/* Hero Section */}
            <header className="text-center py-16 px-4 bg-gradient-to-br from-slate-100 to-indigo-50 rounded-2xl mb-12 shadow-sm">
                <div className="max-w-2xl mx-auto">
                    <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1.5 text-xs font-semibold rounded-full mb-4 shadow-sm">
                        Simple & Efficient
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                        Organize Your Tasks with <span className="text-indigo-600">TodoApp</span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        The minimalist way to stay on top of your daily goals, boost your productivity, 
                        and achieve more without the clutter.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="/about">
                        <button className="bg-white hover:bg-gray-50 text-gray-700 font-semibold px-7 py-3 rounded-xl border border-gray-300 transition duration-200 shadow-sm hover:shadow cursor-pointer">
                            Learn More
                        </button>
                       </a>
                        <a href="/task">
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-7 py-3 rounded-xl transition duration-200 shadow-md hover:shadow-lg cursor-pointer">
                            Get Started
                        </button>
                        </a>
                    </div>
                </div>
            </header>

            {/* Features Section */}
            <section className="text-center py-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
                    Why Choose TodoApp?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
                        <div className="text-4xl mb-4">⚡</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Lightning Fast</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Quickly add, edit, and complete tasks with zero friction.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
                        <div className="text-4xl mb-4">🎯</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Stay Focused</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Keep your daily priorities front and center so nothing falls through the cracks.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
                        <div className="text-4xl mb-4">📱</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Fully Responsive</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Access your tasks seamlessly across your desktop, tablet, and mobile devices.
                        </p>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}

export default Landing
