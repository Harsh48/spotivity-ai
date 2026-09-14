import { Section, SectionHead } from './ui';

/** Grouped by what the room has to do differently, not by popularity. */
const GROUPS = [
    {
        heading: 'Sport & movement',
        items: [
            ['Five-a-side & pick-up games', 'Squads, pitches, per-head splits'],
            ['Tournaments & ladders', 'Brackets, fixtures, results'],
            ['Gym classes & challenges', 'Slots, capacity, streaks'],
            ['Runs, rides & marathon training', 'Routes, pace groups, meet points'],
            ['Trekking & the outdoors', 'Kit lists, weather calls, permits']
        ]
    },
    {
        heading: 'Work',
        items: [
            ['Corporate offsites', 'Travel, rooms, budget lines'],
            ['Town halls & launches', 'Agendas, AV, recordings'],
            ['Office socials & leaving dos', 'Kitty, dietary notes, venue'],
            ['Board & investor meetings', 'Papers, attendance, minutes'],
            ['Team sports & clubs', 'Recurring rooms, rotating hosts']
        ]
    },
    {
        heading: 'Gatherings',
        items: [
            ['Workshops & cohorts', 'Materials, prerequisites, sessions'],
            ['Conferences', 'Tracks, speakers, ticket tiers'],
            ['Expos & trade shows', 'Stands, badges, floor plans'],
            ['Dating & mixers', 'Caps, matching, safe check-in'],
            ['Meetups & book clubs', 'Open RSVP, recurring, venues']
        ]
    }
];

export const EventTypes = () => (
    <Section id="types" className="bg-paper-2">
        <SectionHead
            index="04"
            kicker="Events"
            title={
                <>
                    One room shape, bent
                    <br />
                    to whatever you run.
                </>
            }
            lead="A trek needs a kit list and a weather call. An expo needs badges and stand numbers. The room adapts to the type instead of making you force the event into a generic invite."
        />

        <div className="mt-14 grid gap-x-14 gap-y-12 md:grid-cols-3">
            {GROUPS.map((group) => (
                <div key={group.heading}>
                    <h3 className="kicker border-b border-ink pb-2 text-ink">{group.heading}</h3>
                    <ul className="mt-1">
                        {group.items.map(([name, note]) => (
                            <li key={name} className="border-b border-rule py-3">
                                <span className="block text-[15px] font-semibold text-ink">{name}</span>
                                <span className="mt-0.5 block text-[13.5px] text-muted">{note}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>

        <p className="mt-12 font-display text-[26px] leading-tight text-ink sm:text-[32px]">
            …and plenty more. If people have to be gathered somewhere, it belongs in a room.
        </p>
    </Section>
);
