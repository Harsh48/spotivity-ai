import { Rule, Section, SectionHead } from './ui';

const ABILITIES = [
    ['Finds the time', 'Reads everyone’s availability and proposes slots that lose the fewest people.'],
    ['Suggests the place', 'Weighs travel across the guest list, capacity, weather and cost, then argues for one.'],
    ['Drafts the plan', 'Agendas, run sheets, kit lists, catering quantities — from the type and the headcount.'],
    ['Does the money', 'Estimates per-head cost, flags a venue that blows the budget, splits the bill fairly.'],
    ['Chases people', 'Nudges non-responders on the channel they were invited on, when they will read it.'],
    ['Learns your events', 'Notices your Thursday runs always lose three people, and plans the next one for it.']
];

export const AiPlanning = () => (
    <Section id="ai">
        <SectionHead
            index="03"
            kicker="Planning"
            title={
                <>
                    The part nobody
                    <br />
                    volunteers for.
                </>
            }
            lead="Organising is unpaid work: the polling, the chasing, the recalculating when four people drop out on the day."
        />

        <blockquote className="mt-14 max-w-3xl border-l-2 border-signal pl-6">
            <p className="font-display text-[28px] leading-[1.25] text-ink sm:text-[34px]">
                Spotivity AI takes the admin and hands the host{' '}
                <em className="text-signal">decisions</em> instead.
            </p>
        </blockquote>

        <dl className="mt-14 grid gap-x-16 gap-y-0 md:grid-cols-2">
            {ABILITIES.map(([title, body], index) => (
                <div
                    key={title}
                    className={`border-b border-rule py-5 ${index < 2 ? 'border-t' : ''} ${
                        index === 1 ? 'md:border-t' : ''
                    }`}
                >
                    <dt className="text-[16px] font-semibold text-ink">{title}</dt>
                    <dd className="mt-1.5 text-[15px] leading-[1.55] text-muted">{body}</dd>
                </div>
            ))}
        </dl>

        <Rule className="mt-14" />
        <p className="pt-5 text-[14px] text-muted">
            Every suggestion is a proposal, not an action. Nothing moves, sends or charges until the host
            says yes.
        </p>
    </Section>
);
