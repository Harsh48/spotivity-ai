const ROWS = [
    { label: 'Invited', value: '18' },
    { label: 'Confirmed', value: '12' },
    { label: 'Waiting on', value: '06' },
    { label: 'Per head', value: '₹180' }
];

/**
 * The app, drawn flat. No drop shadow, no glow — it sits on the page like a
 * printed product shot rather than a floating SaaS mockup.
 */
export const PhoneMock = () => (
    <div className="relative mx-auto w-[286px]">
        <div className="rounded-[36px] border-[7px] border-ink bg-ink p-0">
            <div className="overflow-hidden rounded-[28px] bg-paper">
                {/* Status bar */}
                <div className="flex items-center justify-between border-b border-rule px-5 py-2.5">
                    <span className="tnum text-[11px] font-semibold text-ink">19:04</span>
                    <span className="kicker text-[9px] text-muted">Spotivity</span>
                </div>

                <div className="px-5 py-5">
                    <span className="kicker text-signal">Sports · Room 4128</span>
                    <h3 className="mt-2 font-display text-[26px] leading-[1.05] text-ink">
                        Saturday 5-a-side
                    </h3>
                    <p className="mt-1.5 text-[12.5px] text-muted">Sat 9 Nov · 19:00 · Turf Park, HSR</p>

                    <dl className="mt-5 border-t border-rule">
                        {ROWS.map((row) => (
                            <div
                                key={row.label}
                                className="flex items-baseline justify-between border-b border-rule py-2"
                            >
                                <dt className="text-[12.5px] text-muted">{row.label}</dt>
                                <dd className="tnum text-[13.5px] font-semibold text-ink">{row.value}</dd>
                            </div>
                        ))}
                    </dl>

                    <div className="mt-5 border-l-2 border-signal pl-3.5">
                        <span className="kicker text-signal">Spotivity AI</span>
                        <p className="mt-1.5 text-[12.5px] leading-[1.5] text-ink">
                            Rain at 19:00. Indoor court on 7th is free — ₹40 more a head. Move the room?
                        </p>
                        <div className="mt-3 flex gap-2">
                            <span className="bg-ink px-3 py-1.5 text-[11.5px] font-semibold text-paper">
                                Move it
                            </span>
                            <span className="border border-rule px-3 py-1.5 text-[11.5px] font-semibold text-muted">
                                Keep
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <p className="mt-4 text-center text-[12px] text-muted">
            The room, on the phone everyone already has.
        </p>
    </div>
);
