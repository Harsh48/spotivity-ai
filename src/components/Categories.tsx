import { Display, Section, Tag } from './ui';

const TILES = [
    { label: 'Sports & matches', note: 'Squads, pitches, per-head splits', color: '#ff2e4d', emoji: '⚽︎' },
    { label: 'Corporate & offsites', note: 'Travel, rooms, budget lines', color: '#2f80ff', emoji: '🏢' },
    { label: 'Office events', note: 'Socials, birthdays, leaving dos', color: '#7b5cff', emoji: '🎉' },
    { label: 'Gym & fitness', note: 'Classes, challenges, PT slots', color: '#00c2a8', emoji: '🏋️' },
    { label: 'Workshops', note: 'Cohorts, materials, sessions', color: '#ff7a3d', emoji: '🛠️' },
    { label: 'Expos & conferences', note: 'Stands, badges, ticket tiers', color: '#101013', emoji: '🏛️' },
    { label: 'Dating & mixers', note: 'Caps, matching, safe check-in', color: '#ff2e7a', emoji: '💛' },
    { label: 'Trekking & outdoors', note: 'Routes, kit lists, weather', color: '#1f9d55', emoji: '🥾' }
];

export const Categories = () => (
    <Section id="types">
        <div className="max-w-2xl">
            <Tag>Every kind of event</Tag>
            <Display className="mt-5">
                If people show up,
                <br />
                it gets a room.
            </Display>
            <p className="mt-5 text-[17.5px] leading-[1.55] font-medium text-body">
                A trek needs a kit list and a weather call. An expo needs badges and stand numbers. The
                room bends to the event instead of forcing it into a generic invite.
            </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TILES.map((tile) => (
                <div
                    key={tile.label}
                    className="group relative overflow-hidden rounded-[26px] p-6 text-white transition-transform hover:-translate-y-1"
                    style={{ background: tile.color }}
                >
                    <span className="text-[34px] leading-none">{tile.emoji}</span>
                    <h3 className="mt-5 text-[21px] font-extrabold leading-[1.15] tracking-[-0.025em]">
                        {tile.label}
                    </h3>
                    <p className="mt-1.5 text-[14px] font-medium text-white/80">{tile.note}</p>
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-white/10"
                    />
                </div>
            ))}
        </div>
    </Section>
);
