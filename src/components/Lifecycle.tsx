import { Section, SectionHead } from './ui';

const STAGES = [
    {
        n: '01',
        title: 'Set it up',
        body: 'Type, date window, place. The room takes shape from a handful of details.',
        out: 'A room'
    },
    {
        n: '02',
        title: 'Invite and fill',
        body: 'Send by email, phone or WhatsApp. Watch RSVPs land, nudge the quiet ones, hold a waitlist.',
        out: 'A guest list'
    },
    {
        n: '03',
        title: 'Sort logistics',
        body: 'Venue, kit, tickets, agenda, dietary notes, who brings what — tracked against that list.',
        out: 'A run sheet'
    },
    {
        n: '04',
        title: 'Split the money',
        body: 'Per-head costs, deposits, who has paid. No spreadsheet, no chasing anyone in a chat.',
        out: 'A ledger'
    },
    {
        n: '05',
        title: 'Run the day',
        body: 'Check-in, live updates, last-minute changes pushed on the channel each guest joined from.',
        out: 'An event'
    },
    {
        n: '06',
        title: 'Close it out',
        body: 'Photos, feedback, a settled ledger. Clone the room when you want to run it again.',
        out: 'A repeat'
    }
];

export const Lifecycle = () => (
    <Section id="lifecycle" className="bg-paper-2">
        <SectionHead
            index="02"
            kicker="Lifecycle"
            title={
                <>
                    From the first idea
                    <br />
                    to the last receipt.
                </>
            }
            lead="Most tools stop at the invite and leave the rest to you. Spotivity carries the event the whole way, so nothing leaks into threads and half-finished spreadsheets."
        />

        <ol className="mt-14 border-t border-rule">
            {STAGES.map((stage) => (
                <li
                    key={stage.n}
                    className="grid items-baseline gap-2 border-b border-rule py-5 sm:grid-cols-[64px_200px_1fr_120px] sm:gap-6"
                >
                    <span className="tnum kicker text-signal">{stage.n}</span>
                    <h3 className="font-display text-[24px] leading-tight text-ink">{stage.title}</h3>
                    <p className="text-[15px] leading-[1.55] text-muted">{stage.body}</p>
                    <span className="kicker text-right text-muted">{stage.out}</span>
                </li>
            ))}
        </ol>
    </Section>
);
