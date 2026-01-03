import brain from "../assets/brainstorm.png";
import chat from "../assets/messenger.png";
import book from "../assets/stack-of-books.png";

export default function Landing() {
    return (
        <>
            {/* HERO SECTION */}
            <section className="flex flex-col items-center text-center mt-24 px-6 font-robotomono">
                <h1 className="text-5xl font-bold text-slate-100 mb-4">
                    Your mental health matters.
                </h1>

                <p className="text-slate-300 max-w-xl mb-8">
                    A safe, anonymous space designed to support students through stress,
                    anxiety, and emotional challenges.
                </p>

                <div className="flex gap-6">
                    <a
                        href="/self-check"
                        className="bg-indigo-400 text-slate-900 px-8 py-3 rounded-[30px] text-[18px] font-medium hover:bg-indigo-300 transition"
                    >
                        Take a self-check
                    </a>

                    <a
                        href="/support"
                        className="border border-indigo-400 text-indigo-400 px-8 py-3 rounded-[30px] text-[18px] font-medium hover:bg-indigo-400 hover:text-slate-900 transition"
                    >
                        Get Support
                    </a>
                    <a
                        href="/chat"
                        className="bg-green-400 text-slate-900 px-8 py-3 rounded-[30px] text-[18px] font-medium hover:bg-green-300 transition"
                    >
                    Start Chat</a>
                </div>
            </section>

            {/* CARDS SECTION */}
            <section className="mt-24 px-6 font-robotomono">
                <div className="flex flex-col gap-6 md:flex-row md:justify-center">

                    {/* Card 1 */}
                    <div className="w-full max-w-[320px] min-h-[200px] bg-slate-800 border border-slate-700 rounded-2xl p-6 flex flex-col gap-3 text-center transition-transform duration-300 ease-out
hover:scale-[1.03]">
                        <img src={brain} alt="Self Assessment" className="w-12 h-12 mx-auto" />
                        <h3 className="text-xl font-semibold text-slate-100">
                            Self Assessment
                        </h3>
                        <p className="text-slate-300 text-sm">
                            Take a quick, confidential check to understand your stress and emotional state.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="w-full max-w-[320px] min-h-[200px] bg-slate-800 border border-slate-700 rounded-2xl p-6 flex flex-col gap-3 text-center transition-transform duration-300 ease-out
hover:scale-[1.03]">
                        <img src={chat} alt="Anonymous Support" className="w-12 h-12 mx-auto" />
                        <h3 className="text-xl font-semibold text-slate-100">
                            Anonymous Support
                        </h3>
                        <p className="text-slate-300 text-sm">
                            Access guidance and support without fear of judgment or exposure.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="w-full max-w-[320px] min-h-[200px] bg-slate-800 border border-slate-700 rounded-2xl p-6 flex flex-col gap-3 text-center transition-transform duration-300 ease-out
hover:scale-[1.03]">
                        <img src={book} alt="Resources" className="w-12 h-12 mx-auto" />
                        <h3 className="text-xl font-semibold text-slate-100">
                            Resources & Guidance
                        </h3>
                        <p className="text-slate-300 text-sm">
                            Explore curated content to help manage stress, anxiety, and academic pressure.
                        </p>
                    </div>

                </div>
            </section>
        </>
    );
}
