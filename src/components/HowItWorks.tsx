import { Display, Section, Tag } from './ui';

const STEPS = [
    {
        n: '1',
        title: 'Open a room',
        body: 'Pick the type, a date and a place. That room is now the only place the event lives.',
        color: '#ff2e4d'
    },
    {
        n: '2',
        title: 'Invite everyone',
        body: 'Email, phone or WhatsApp — whatever your people actually use. RSVPs land back in the room.',
        color: '#2f80ff'
    },
    {
        n: '3',
        title: 'Let AI run it',
        body: 'Times, venue, costs, reminders and the follow-ups. You approve, it does the chasing.',
        color: '#7b5cff'
    }
];

export const HowItWorks = () => (
    <Section id="how" className="bg-cloud">
        <div className="max-w-2xl">
            <Tag color="var(--color-sky)">How it works</Tag>
            <Display className="mt-5">Three taps, then stop thinking about it.</Display>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
            {STEPS.map((step) => (
                <div key={step.n} className="rounded-[26px] bg-white p-7">
                    <span
                        className="flex h-12 w-12 items-center justify-center rounded-full text-[22px] font-black text-white"
                        style={{ background: step.color }}
                    >
                        {step.n}
                    </span>
                    <h3 className="mt-6 text-[24px] font-extrabold tracking-[-0.03em]">{step.title}</h3>
                    <p className="mt-2 text-[15.5px] leading-[1.55] font-medium text-body">{step.body}</p>
                </div>
            ))}
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
                ['Invites sent', 'Email · SMS · WhatsApp'],
                ['RSVPs tracked', 'Going, maybe, waitlist'],
                ['Money split', 'Per head, who has paid'],
                ['Day-of updates', 'Pushed to every channel']
            ].map(([label, note]) => (
                <div key={label} className="rounded-[20px] border border-line bg-white px-5 py-5">
                    <p className="text-[16px] font-extrabold tracking-[-0.02em]">{label}</p>
                    <p className="mt-1 text-[13.5px] font-medium text-hush">{note}</p>
                </div>
            ))}
        </div>
    </Section>
);
