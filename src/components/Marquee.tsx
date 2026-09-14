const ITEMS = [
    'Five-a-side ⚽︎',
    'Sales kickoff 📈',
    'Spin class 🚴',
    'Sunrise trek 🥾',
    'Product workshop 🛠️',
    'Trade expo 🏛️',
    'Speed dating 💛',
    'Team offsite 🏢',
    'Badminton ladder 🏸',
    'Hackathon 💻',
    'Book club 📚',
    'Yoga retreat 🧘'
];

/** Ticker of rooms, in brand red. Rendered twice so the loop is seamless. */
export const Marquee = () => (
    <div className="overflow-hidden bg-flare py-4">
        <div className="animate-ticker flex w-max">
            {[0, 1].map((copy) => (
                <ul key={copy} className="flex items-center" aria-hidden={copy === 1}>
                    {ITEMS.map((item) => (
                        <li
                            key={item}
                            className="flex items-center whitespace-nowrap px-6 text-[18px] font-extrabold tracking-[-0.02em] text-white sm:text-[22px]"
                        >
                            {item}
                            <span className="ml-6 text-white/40">✦</span>
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    </div>
);
