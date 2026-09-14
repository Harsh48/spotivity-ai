const ITEMS = [
    'Five-a-side football',
    'Sales kickoff',
    'Hackathon',
    'Spin class',
    'Product workshop',
    'Trade expo',
    'Speed dating',
    'Sunrise trek',
    'Team offsite',
    'Badminton ladder',
    'Book club',
    'Quarterly board meeting',
    'Yoga retreat',
    'Gaming night',
    'Founder meetup',
    'Marathon training'
];

/** Rooms opened this week, as a printed ticker. Rendered twice so it loops. */
export const Marquee = () => (
    <div className="overflow-hidden border-y border-rule bg-paper-2 py-3">
        <div className="animate-ticker flex w-max">
            {[0, 1].map((copy) => (
                <ul key={copy} className="flex" aria-hidden={copy === 1}>
                    {ITEMS.map((item) => (
                        <li
                            key={item}
                            className="flex items-center whitespace-nowrap px-5 text-[13px] font-medium text-muted"
                        >
                            <span className="mr-5 text-signal">—</span>
                            {item}
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    </div>
);
