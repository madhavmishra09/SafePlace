export default function Navbar() {
    return (
        <div className="w-full flex justify-center">
            <nav
                className="
          font-robotomono
          w-full max-w-[1200px]
          h-[90px]
          mt-4 px-10
          flex items-center justify-between
          rounded-[30px]
          bg-slate-900
          text-slate-100
        "
            >
                {/* Logo / Brand */}
                <h1 className="text-[36px] font-bold tracking-wide">
                    SafePlace
                </h1>

                {/* Actions */}
                <ul className="flex gap-4">
                    <li>
                        <a
                            href="/login"
                            className="
                px-6 py-2
                rounded-[30px]
                text-[18px] font-medium
                bg-indigo-400 text-slate-900
                hover:bg-indigo-300
                transition
              "
                        >
                            Login
                        </a>
                    </li>

                    <li>
                        <a
                            href="/signup"
                            className="
                px-6 py-2
                rounded-[30px]
                text-[18px] font-medium
                border border-indigo-400
                text-indigo-400
                hover:bg-indigo-400 hover:text-slate-900
                transition
              "
                        >
                            Sign Up
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
