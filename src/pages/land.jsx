export default function Landing() {
    return (
        <>
            <section className="flex flex-col items-center text-center mt-24 px-6 font-robotomono">
                <h1 className="text-5xl font-bold text-slate-100 mb-4">Your mental health matters.</h1>
                <p className="text-slate-300 max-w-xl mb-8">A safe, anonymous space designed to support students through stress, anxiety, and emotional challenges.</p>
                <div className="flex gap-4">
                    <a href="/self-check" className="bg-indigo-400 text-slate-900 px-8 py-3 rounded-[30px] text-[18px] font-medium hover:bg-indigo-300 transition">Take a self-check</a>
                    <a href="/support" className="border border-indigo-400 text-indigo-400 px-8 py-3 rounded-[30px] text-[18px] font-medium hover:bg-indigo-400 hover:text-slate-900 transition">Get Support</a>
                </div>
            </section>
            <section className="">
                <div className="bg-slate-100 w-[300px] min-h-[180px] rounded-2xl p-6">
                    <h1>Hello</h1>
                    <p></p>
                </div>
                <div className="bg-slate-100 w-[300px] min-h-[180px] rounded-2xl p-6">Hello</div>
                <div className="bg-slate-100 w-[300px] min-h-[180px] rounded-2xl p-6">Hello</div>
            </section>
        </>
    )
}