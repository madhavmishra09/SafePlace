export default function SignUp() {
    return (
        <>
            <section className="flex items-center justify-center min-h-[60vh] px-6 font-robotomono">
                <div className="w-full max-w-md bg-slate-800 border border-slate-700 rounded-2xl p-8 text-slate-100 shadow-md">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Create Account</h2>

                    <form className="flex flex-col gap-4">
                        <div>
                            <label className="text-sm text-slate-300 block mb-1" htmlFor="name">Full Name</label>
                            <input id="name" type="text" required className="w-full bg-slate-700 text-slate-100 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                        </div>

                        <div>
                            <label className="text-sm text-slate-300 block mb-1" htmlFor="email">Email</label>
                            <input id="email" type="email" required className="w-full bg-slate-700 text-slate-100 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                        </div>

                        <div>
                            <label className="text-sm text-slate-300 block mb-1" htmlFor="password">Password</label>
                            <input id="password" type="password" required className="w-full bg-slate-700 text-slate-100 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                        </div>

                        <div>
                            <label className="text-sm text-slate-300 block mb-1" htmlFor="confirm">Confirm Password</label>
                            <input id="confirm" type="password" required className="w-full bg-slate-700 text-slate-100 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                        </div>

                        <button className="mt-2 border border-indigo-400 text-indigo-400 px-4 py-2 rounded-[30px] font-medium hover:bg-indigo-400 hover:text-slate-900 transition">Sign Up</button>

                        <p className="text-sm text-slate-400 text-center mt-3">Already have an account? <a href="/login" className="text-indigo-400 hover:underline">Login</a></p>
                    </form>
                </div>
            </section>
        </>
    )
}
