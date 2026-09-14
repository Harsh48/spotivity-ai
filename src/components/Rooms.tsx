import { Rule, Section, SectionHead } from './ui';

const POINTS = [
    {
        n: '01',
        title: 'Email',
        body: 'Paste a list of addresses. Everyone gets the room link, the agenda and a one-tap RSVP.'
    },
    {
        n: '02',
        title: 'Phone',
        body: 'Add numbers instead. Invites go by SMS and guests join the room without installing anything.'
    },
    {
        n: '03',
        title: 'WhatsApp',
        body: 'Share into the group people already use. Replies and RSVPs come back into the room, not the chat.'
    }
];

export const Rooms = () => (
    <Section id="rooms">
        <SectionHead
            index="01"
            kicker="The room"
            title={
                <>
                    A host opens the room.
                    <br />
                    Everyone else just turns up.
                </>
            }
            lead="The room is the single place an event lives: details, guest list, costs, files and the thread. Share it however your people actually talk."
        />

        <div className="mt-14 grid gap-px bg-rule sm:grid-cols-3">
            {POINTS.map((point) => (
                <div key={point.title} className="bg-paper pr-6 pt-6 sm:pl-6 sm:first:pl-0">
                    <span className="tnum kicker text-signal">{point.n}</span>
                    <h3 className="mt-3 font-display text-[26px] leading-tight text-ink">
                        {point.title}
                    </h3>
                    <p className="mt-2 max-w-xs text-[15px] leading-[1.55] text-muted">{point.body}</p>
                </div>
            ))}
        </div>

        <Rule className="mt-14" />
        <div className="grid gap-10 pt-8 md:grid-cols-2 md:gap-16">
            <div>
                <h3 className="font-display text-[24px] leading-tight text-ink">
                    One link. No account in the way.
                </h3>
                <p className="mt-2 text-[15px] leading-[1.55] text-muted">
                    Guests open the room and respond. Signing up is something they can do later, if they
                    ever want to host their own.
                </p>
            </div>
            <div>
                <h3 className="font-display text-[24px] leading-tight text-ink">
                    Co-hosts, not a single point of failure.
                </h3>
                <p className="mt-2 text-[15px] leading-[1.55] text-muted">
                    Hand another organiser the keys. Anyone with host rights can edit the room, chase the
                    stragglers and settle the money.
                </p>
            </div>
        </div>
    </Section>
);
