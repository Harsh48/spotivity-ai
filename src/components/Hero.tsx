import { PhoneMock } from './PhoneMock';
import { StoreBadges } from './StoreBadges';
import { InkButton, Rule, Shell, TextLink } from './ui';

const CHANNELS = ['Email', 'Phone', 'WhatsApp'];

export const Hero = () => (
    <section id="top" className="pt-16 pb-12 sm:pt-24">
        <Shell>
            <div className="grid gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
                <div>
                    <span className="kicker text-muted">
                        Event rooms · <span className="text-signal">Planned by AI</span>
                    </span>

                    <h1 className="mt-6 font-display text-[54px] leading-[0.95] tracking-[-0.02em] text-ink sm:text-[86px]">
                        One room
                        <br />
                        per event.
                        <br />
                        <em className="text-signal">Nothing</em> in the
                        <br />
                        group chat.
                    </h1>

                    <div className="mt-10 grid max-w-2xl gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
                        <p className="text-[17px] leading-[1.55] text-muted">
                            A host opens a room, invites people by email, phone or WhatsApp, and runs the
                            whole event from there — a five-a-side match, a sales offsite, a sunrise trek,
                            a five-hundred person expo. Spotivity AI does the planning nobody volunteers
                            for.
                        </p>
                    </div>

                    <div className="mt-9 flex flex-wrap items-center gap-6">
                        <InkButton href="#waitlist">Get early access</InkButton>
                        <TextLink href="#lifecycle">See how a room works</TextLink>
                    </div>

                    <Rule className="mt-12" />
                    <div className="flex flex-wrap items-center justify-between gap-6 py-5">
                        <span className="flex items-center gap-5">
                            <span className="kicker border-r border-rule pr-5 text-muted">Invite by</span>
                            {CHANNELS.map((channel) => (
                                <span key={channel} className="text-[14px] font-semibold text-ink">
                                    {channel}
                                </span>
                            ))}
                        </span>
                        <StoreBadges />
                    </div>
                    <Rule />
                </div>

                <div className="lg:pt-6">
                    <PhoneMock />
                </div>
            </div>
        </Shell>
    </section>
);
