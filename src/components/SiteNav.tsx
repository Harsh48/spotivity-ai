import { Shell } from './ui';

const LINKS = [
    { href: '#rooms', label: 'The room' },
    { href: '#lifecycle', label: 'Lifecycle' },
    { href: '#ai', label: 'Planning' },
    { href: '#types', label: 'Events' }
];

export const SiteNav = () => (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/95 backdrop-blur-sm">
        <Shell className="flex h-[58px] items-center gap-8">
            <a href="#top" className="flex flex-none items-baseline gap-2">
                <span className="font-display text-[22px] leading-none tracking-[-0.01em] text-ink">
                    Spotivity
                </span>
                <span className="kicker text-signal">AI</span>
            </a>

            <nav className="hidden flex-1 items-center gap-7 md:flex">
                {LINKS.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="text-[13.5px] font-medium text-muted transition-colors hover:text-ink"
                    >
                        {link.label}
                    </a>
                ))}
            </nav>

            <div className="ml-auto flex flex-none items-center gap-5 md:ml-0">
                <span className="kicker hidden text-muted sm:inline">iOS &amp; Android soon</span>
                <a
                    href="#waitlist"
                    className="bg-ink px-4 py-2 text-[13px] font-semibold text-paper transition-colors hover:bg-signal"
                >
                    Early access
                </a>
            </div>
        </Shell>
    </header>
);
