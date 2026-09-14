import { PlanScreen } from './AppScreens';
import { PhoneFrame } from './PhoneFrame';
import { Shell } from './ui';

const POINTS = [
    ['Finds the time', 'Reads everyone’s availability and picks the slot that loses the fewest people.'],
    ['Picks the place', 'Weighs travel across the whole guest list, capacity, weather and cost.'],
    ['Does the money', 'Per-head estimates, budget warnings, and a fair split when the bill lands.'],
    ['Chases people', 'Nudges the non-responders on the channel they were invited on.']
];

export const AiPlanning = () => (
    <section id="ai" className="scroll-mt-20 bg-ink py-20 text-white sm:py-28">
        <Shell>
            <div className="grid items-center gap-14 lg:grid-cols-[1fr_auto]">
                <div>
                    <span className="inline-block rounded-full bg-violet px-3.5 py-1.5 text-[12.5px] font-extrabold uppercase tracking-[0.08em] text-white">
                        ✦ Spotivity AI
                    </span>

                    <h2 className="display mt-6 text-[40px] sm:text-[62px]">
                        The part nobody
                        <br />
                        volunteers for.
                    </h2>

                    <p className="mt-6 max-w-lg text-[17.5px] leading-[1.55] font-medium text-white/65">
                        Organising is unpaid work — the polling, the chasing, the recalculating when four
                        people drop out on the day. The AI takes that and hands you decisions instead.
                    </p>

                    <dl className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
                        {POINTS.map(([title, body]) => (
                            <div key={title}>
                                <dt className="text-[17px] font-extrabold tracking-[-0.02em]">{title}</dt>
                                <dd className="mt-1.5 text-[14.5px] leading-[1.55] text-white/55">{body}</dd>
                            </div>
                        ))}
                    </dl>

                    <p className="mt-10 text-[14px] font-medium text-white/40">
                        Every suggestion is a proposal. Nothing moves, sends or charges until you approve it.
                    </p>
                </div>

                <div className="mx-auto">
                    <PhoneFrame width={280} time="9:41">
                        <PlanScreen />
                    </PhoneFrame>
                </div>
            </div>
        </Shell>
    </section>
);
