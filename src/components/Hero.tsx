import { InviteScreen, RoomScreen } from './AppScreens';
import { PhoneFrame } from './PhoneFrame';
import { StoreBadges } from './StoreBadges';
import { Shell } from './ui';

export const Hero = () => (
    <section id="top" className="relative overflow-hidden bg-cloud pb-10 pt-14 sm:pt-20">
        {/* Colour wash behind the phones */}
        <div
            aria-hidden="true"
            className="absolute right-[-10%] top-[-12%] hidden h-[760px] w-[760px] rounded-full opacity-[0.18] blur-[10px] lg:block"
            style={{ background: 'conic-gradient(from 210deg, #ff2e4d, #ffc531, #00c2a8, #7b5cff, #ff2e4d)' }}
        />

        <Shell className="relative">
            <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto]">
                <div className="pb-6 lg:pb-16">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13.5px] font-bold text-ink shadow-[0_2px_10px_rgba(16,16,19,0.06)]">
                        <span className="h-2 w-2 rounded-full bg-mint" />
                        Early access is open
                    </span>

                    <h1 className="display mt-6 text-[52px] sm:text-[88px]">
                        One room
                        <br />
                        for every
                        <br />
                        <span className="text-flare">event.</span>
                    </h1>

                    <p className="mt-7 max-w-lg text-[18px] leading-[1.55] font-medium text-body">
                        Open a room, invite everyone by email, phone or WhatsApp, and run the whole thing
                        from your pocket. Spotivity AI does the planning nobody volunteers for.
                    </p>

                    <div className="mt-8">
                        <StoreBadges />
                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] font-bold text-body">
                        {[
                            ['⚽', 'Sports'],
                            ['🏢', 'Corporate'],
                            ['🏋️', 'Gym'],
                            ['🥾', 'Treks'],
                            ['🎤', 'Expos']
                        ].map(([emoji, label]) => (
                            <span key={label} className="inline-flex items-center gap-1.5">
                                <span aria-hidden="true">{emoji}</span>
                                <span>{label}</span>
                            </span>
                        ))}
                        <span className="text-hush">+ a lot more</span>
                    </div>
                </div>

                {/* Two devices, the second tucked behind */}
                <div className="relative mx-auto flex items-end justify-center pb-0 lg:pr-8">
                    <div className="hidden translate-y-8 -rotate-6 sm:block">
                        <PhoneFrame width={216} time="9:41">
                            <InviteScreen />
                        </PhoneFrame>
                    </div>
                    <div className="animate-bob -ml-10 hidden sm:block">
                        <PhoneFrame width={268} time="9:41">
                            <RoomScreen />
                        </PhoneFrame>
                    </div>
                    <div className="sm:hidden">
                        <PhoneFrame width={244} time="9:41">
                            <RoomScreen />
                        </PhoneFrame>
                    </div>
                </div>
            </div>
        </Shell>
    </section>
);
