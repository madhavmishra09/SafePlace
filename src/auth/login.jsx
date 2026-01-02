export default function LoginPage() {
    return (
        <>
            <section className="flex items-center justify-center min-h-[60vh] px-6 font-robotomono">
                <div className="w-full max-w-md bg-slate-800 border border-slate-700 rounded-2xl p-8 text-slate-100 shadow-md">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

                    <form className="flex flex-col gap-4">
                        <div>
                            <label className="text-sm text-slate-300 block mb-1" htmlFor="username">Username / Phone</label>
                            <input id="username" type="text" required className="w-full bg-slate-700 text-slate-100 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                        </div>

                        <div>
                            <label className="text-sm text-slate-300 block mb-1" htmlFor="password">Password</label>
                            <input id="password" type="password" required className="w-full bg-slate-700 text-slate-100 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                        </div>

                        <button className="mt-2 bg-indigo-400 text-slate-900 px-4 py-2 rounded-[30px] font-medium hover:bg-indigo-300 transition">Login</button>

                        <p className="text-sm text-slate-400 text-center mt-3">Don't have an account? <a href="/signup" className="text-indigo-400 hover:underline">Sign up</a></p>
                    </form>
                </div>
            </section>
        </>
    )
}