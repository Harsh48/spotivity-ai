/**
 * The three screens shown inside the phone frames.
 *
 * Authored at the iPhone's real logical width (393pt) — the frame scales them
 * down — so type sizes here are the same numbers you would use in the app.
 */

const Avatar = ({ initials, color }: { initials: string; color: string }) => (
    <span
        className="flex h-[30px] w-[30px] items-center justify-center rounded-full border-2 border-white text-[11px] font-bold text-white"
        style={{ background: color }}
    >
        {initials}
    </span>
);

const TabBar = ({ active }: { active: 'rooms' | 'invite' | 'plan' }) => (
    <div className="absolute inset-x-0 bottom-0 border-t border-[#ececf0] bg-white/95 px-6 pb-8 pt-3 backdrop-blur">
        <div className="flex items-center justify-between">
            {[
                { id: 'rooms', label: 'Rooms', path: 'M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1v-9.5Z' },
                { id: 'invite', label: 'Invite', path: 'M16 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-9 2v-3H5v3H2v2h3v3h2v-3h3v-2H7Zm9 0c-3 0-6 1.5-6 4v3h12v-3c0-2.5-3-4-6-4Z' },
                { id: 'plan', label: 'Plan', path: 'M12 2.5 14.2 9l6.8.3-5.3 4.2 1.8 6.6L12 16.4 6.5 20.1l1.8-6.6L3 9.3 9.8 9 12 2.5Z' }
            ].map((tab) => (
                <span key={tab.id} className="flex flex-1 flex-col items-center gap-1">
                    <svg viewBox="0 0 24 24" className="h-[24px] w-[24px]" aria-hidden="true">
                        <path d={tab.path} fill={active === tab.id ? '#ff2e4d' : '#b9b9c2'} />
                    </svg>
                    <span
                        className={`text-[10px] font-semibold ${
                            active === tab.id ? 'text-[#ff2e4d]' : 'text-[#b9b9c2]'
                        }`}
                    >
                        {tab.label}
                    </span>
                </span>
            ))}
        </div>
    </div>
);

/** Screen 1 — the event room itself. */
export const RoomScreen = () => (
    <div className="relative h-full bg-[#f7f7f9]">
        {/* Cover */}
        <div className="relative h-[190px] overflow-hidden bg-[#ff2e4d]">
            <div
                className="absolute inset-0 opacity-90"
                style={{ background: 'linear-gradient(135deg,#ff2e4d 0%,#ff7a3d 55%,#ffc531 100%)' }}
            />
            <div className="absolute inset-0 opacity-25" style={{ background: 'radial-gradient(circle at 70% 20%, #fff, transparent 55%)' }} />
            <div className="relative flex h-full flex-col justify-end p-5">
                <span className="flex w-fit items-center gap-1.5 rounded-full bg-white/25 px-3 py-1 text-[12px] font-bold text-white backdrop-blur">
                    <span aria-hidden="true">⚽</span> <span>Sports</span>
                </span>
                <h2 className="mt-2 text-[30px] font-extrabold leading-[1.05] tracking-[-0.03em] text-white">
                    Saturday 5-a-side
                </h2>
                <p className="mt-1 text-[14px] font-medium text-white/85">Sat 9 Nov · 7:00 pm · Turf Park</p>
            </div>
        </div>

        <div className="-mt-4 rounded-t-[20px] bg-white px-5 pb-24 pt-5">
            <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                    <Avatar initials="RA" color="#7b5cff" />
                    <Avatar initials="MK" color="#00c2a8" />
                    <Avatar initials="JD" color="#2f80ff" />
                    <Avatar initials="SP" color="#ffc531" />
                    <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full border-2 border-white bg-[#ececf1] text-[10px] font-bold text-[#6a6a78]">
                        +8
                    </span>
                </div>
                <span className="text-[13px] font-semibold text-[#00b894]">12 going</span>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
                {[
                    ['Invited', '18'],
                    ['Spots left', '2'],
                    ['Per head', '₹180']
                ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl bg-[#f4f4f7] px-3 py-3">
                        <p className="text-[11px] font-semibold text-[#8a8a97]">{label}</p>
                        <p className="mt-0.5 text-[19px] font-extrabold tracking-[-0.02em] text-[#101013]">
                            {value}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-4 rounded-2xl border border-[#efe2ff] bg-[#f8f4ff] p-4">
                <span className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#7b5cff]">
                    ✦ Spotivity AI
                </span>
                <p className="mt-1.5 text-[13.5px] leading-[1.45] text-[#3b3b46]">
                    Rain at 7 pm. Indoor court on 7th is free — ₹40 more a head.
                </p>
                <div className="mt-3 flex gap-2">
                    <span className="rounded-full bg-[#7b5cff] px-3.5 py-1.5 text-[12.5px] font-bold text-white">
                        Move it
                    </span>
                    <span className="rounded-full border border-[#dcd2f5] px-3.5 py-1.5 text-[12.5px] font-bold text-[#7b5cff]">
                        Keep
                    </span>
                </div>
            </div>

            <div className="mt-4 rounded-full bg-[#ff2e4d] py-3.5 text-center text-[15px] font-bold text-white">
                I&apos;m in
            </div>

            <p className="mt-6 text-[13px] font-bold uppercase tracking-[0.06em] text-[#8a8a97]">
                Details
            </p>
            <div className="mt-3 space-y-3 pb-4">
                {[
                    ['📍', 'Turf Park, HSR Layout', 'Court 2 · 12 min from you'],
                    ['🎽', 'Bring a light and dark shirt', 'Bibs are ₹20 if you forget'],
                    ['💸', 'Pay after, not before', 'Split lands in the room at full time']
                ].map(([icon, title, note]) => (
                    <div key={title} className="flex items-start gap-3">
                        <span className="text-[17px] leading-none">{icon}</span>
                        <span>
                            <span className="block text-[14px] font-bold text-[#101013]">{title}</span>
                            <span className="block text-[12.5px] text-[#8a8a97]">{note}</span>
                        </span>
                    </div>
                ))}
            </div>
        </div>

        <TabBar active="rooms" />
    </div>
);

/** Screen 2 — sending invites out over three channels. */
export const InviteScreen = () => (
    <div className="relative h-full bg-white">
        <div className="px-5 pt-3">
            <p className="text-[13px] font-semibold text-[#8a8a97]">Saturday 5-a-side</p>
            <h2 className="mt-1 text-[28px] font-extrabold tracking-[-0.03em] text-[#101013]">
                Invite people
            </h2>

            <div className="mt-5 space-y-2.5">
                {[
                    { label: 'Email', note: '12 addresses', color: '#2f80ff', glyph: '✉' },
                    { label: 'Phone', note: 'SMS · 6 numbers', color: '#00c2a8', glyph: '☏' },
                    { label: 'WhatsApp', note: 'Share to group', color: '#25d366', glyph: '◍' }
                ].map((channel) => (
                    <div
                        key={channel.label}
                        className="flex items-center gap-3 rounded-2xl border border-[#ececf0] px-4 py-3.5"
                    >
                        <span
                            className="flex h-[38px] w-[38px] items-center justify-center rounded-full text-[17px] text-white"
                            style={{ background: channel.color }}
                        >
                            {channel.glyph}
                        </span>
                        <span className="flex-1">
                            <span className="block text-[15px] font-bold text-[#101013]">
                                {channel.label}
                            </span>
                            <span className="block text-[12.5px] text-[#8a8a97]">{channel.note}</span>
                        </span>
                        <span className="text-[20px] text-[#c9c9d2]">›</span>
                    </div>
                ))}
            </div>

            <p className="mt-6 text-[13px] font-semibold text-[#8a8a97]">Recently invited</p>
            <div className="mt-3 space-y-3">
                {[
                    ['RA', 'Rahul A.', 'Going', '#7b5cff', '#00b894'],
                    ['MK', 'Meera K.', 'Going', '#00c2a8', '#00b894'],
                    ['JD', 'Jai D.', 'Seen', '#2f80ff', '#8a8a97']
                ].map(([initials, name, state, color, stateColor]) => (
                    <div key={name} className="flex items-center gap-3">
                        <Avatar initials={initials} color={color} />
                        <span className="flex-1 text-[14.5px] font-semibold text-[#101013]">{name}</span>
                        <span className="text-[13px] font-bold" style={{ color: stateColor }}>
                            {state}
                        </span>
                    </div>
                ))}
            </div>

            <div className="mt-6 rounded-full bg-[#101013] py-3.5 text-center text-[15px] font-bold text-white">
                Send 18 invites
            </div>
        </div>

        <TabBar active="invite" />
    </div>
);

/** Screen 3 — the AI planner proposing a plan. */
export const PlanScreen = () => (
    <div className="relative h-full bg-[#101013]">
        <div className="px-5 pt-4">
            <span className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-[0.1em] text-[#a78bff]">
                ✦ Spotivity AI
            </span>
            <h2 className="mt-2 text-[27px] font-extrabold leading-[1.1] tracking-[-0.03em] text-white">
                Here&apos;s a plan for
                <br />
                the offsite.
            </h2>

            <div className="mt-5 space-y-2.5">
                {[
                    ['Fri 22 Nov, 10am', 'Loses the fewest people — 2 of 24', '#00c2a8'],
                    ['The Barn, Whitefield', '38 min median travel · fits 30', '#2f80ff'],
                    ['₹2,400 a head', 'Under your ₹2,800 budget', '#ffc531']
                ].map(([title, note, color]) => (
                    <div key={title} className="rounded-2xl bg-[#1b1b21] p-4">
                        <div className="flex items-start gap-3">
                            <span
                                className="mt-1 h-[10px] w-[10px] flex-none rounded-full"
                                style={{ background: color }}
                            />
                            <span>
                                <span className="block text-[15.5px] font-bold text-white">{title}</span>
                                <span className="mt-0.5 block text-[12.5px] text-[#9a9aa8]">{note}</span>
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-5 rounded-2xl border border-[#2a2a33] p-4">
                <p className="text-[12.5px] leading-[1.5] text-[#9a9aa8]">
                    I&apos;ll hold the venue for 24 hours and send invites on the channel each person
                    joined from.
                </p>
            </div>

            <div className="mt-5 flex gap-2.5">
                <div className="flex-1 rounded-full bg-[#ff2e4d] py-3.5 text-center text-[15px] font-bold text-white">
                    Approve plan
                </div>
                <div className="rounded-full border border-[#2a2a33] px-5 py-3.5 text-center text-[15px] font-bold text-[#9a9aa8]">
                    Edit
                </div>
            </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 border-t border-[#22222a] bg-[#101013]/95 px-6 pb-8 pt-3">
            <div className="flex items-center justify-between">
                {['Rooms', 'Invite', 'Plan'].map((label) => (
                    <span
                        key={label}
                        className={`flex-1 text-center text-[10px] font-semibold ${
                            label === 'Plan' ? 'text-[#ff2e4d]' : 'text-[#55555f]'
                        }`}
                    >
                        <span className="mx-auto mb-1 block h-[24px] w-[24px] rounded-md bg-current opacity-80" />
                        {label}
                    </span>
                ))}
            </div>
        </div>
    </div>
);
