import { Display, Section, Tag } from './ui';

const STAGES = [
    ['Set it up', 'Type, date, place. The room takes shape in under a minute.'],
    ['Invite and fill', 'Send, watch RSVPs land, nudge the quiet ones, hold a waitlist.'],
    ['Sort logistics', 'Venue, kit, tickets, agenda, dietary notes, who brings what.'],
    ['Split the money', 'Per-head costs, deposits, who has paid. No spreadsheet.'],
    ['Run the day', 'Check-in and live updates on whatever channel each guest joined from.'],
    ['Close it out', 'Photos, feedback, a settled ledger. Clone it to run it again.']
];

export const Lifecycle = () => (
    <Section id="lifecycle">
        <div className="max-w-2xl">
            <Tag color="var(--color-mint)">The whole lifecycle</Tag>
            <Display className="mt-5">
                Most apps stop
                <br />
                at the invite.
            </Display>
            <p className="mt-5 text-[17.5px] leading-[1.55] font-medium text-body">
                Spotivity carries the event the whole way — through the logistics, the money and the day
                itself — so nothing leaks into a thread or a half-finished spreadsheet.
            </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[26px] bg-line sm:grid-cols-2 lg:grid-cols-3">
            {STAGES.map(([title, body], index) => (
                <div key={title} className="bg-white p-7">
                    <span className="text-[13px] font-black tracking-[0.1em] text-flare">
                        {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-3 text-[22px] font-extrabold tracking-[-0.03em]">{title}</h3>
                    <p className="mt-2 text-[15px] leading-[1.55] font-medium text-body">{body}</p>
                </div>
            ))}
        </div>
    </Section>
);
