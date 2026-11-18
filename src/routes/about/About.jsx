function About() {
    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-12 font-sans text-gray-800 leading-relaxed">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1.5 text-xs font-semibold rounded-full mb-4 shadow-sm">
                    Our Mission
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                    Built to Simplify Your <span className="text-indigo-600">Daily Life</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                    TodoApp was created out of a simple frustration: task managers were becoming too complicated, bloated with unnecessary features, and getting in the way of actual work. We wanted to build something clean, fast, and delightful to use.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="text-3xl mb-4">🚀</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        We believe that productivity shouldn't feel like a chore. By stripping away distractions, TodoApp helps you focus purely on what matters most—getting things done efficiently and with peace of mind.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="text-3xl mb-4">💡</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Why We Do It</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Your time is your most valuable asset. Whether you are managing professional projects, grocery lists, or personal bucket lists, our goal is to give you a reliable, seamless digital space to organize your thoughts.
                    </p>
                </div>
            </div>
            <div className="bg-gradient-to-br from-slate-100 to-indigo-50 rounded-2xl p-8 sm:p-12 text-center shadow-sm">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    Ready to take control of your tasks?
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto mb-8 text-sm sm:text-base">
                    Join thousands of users who have streamlined their day with TodoApp. Jump into your tasks right now.
                </p>
                <a 
                    href="/task" 
                    className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl transition duration-200 shadow-md hover:shadow-lg"
                >
                    View Your Tasks
                </a>
            </div>
        </div>
        </>
    )
}

export default About
