import { Logo } from './Logo';
import { Shell } from './ui';

const LINKS = [
    { href: '#how', label: 'How it works' },
    { href: '#types', label: 'Events' },
    { href: '#ai', label: 'AI planning' }
];

export const SiteNav = () => (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-md">
        <Shell className="flex h-[68px] items-center gap-8">
            <a href="#top" className="flex-none">
                <Logo />
            </a>

            <nav className="hidden flex-1 items-center gap-8 md:flex">
                {LINKS.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="text-[15px] font-semibold text-body transition-colors hover:text-ink"
                    >
                        {link.label}
                    </a>
                ))}
            </nav>

            <a
                href="#get"
                className="ml-auto rounded-full bg-ink px-5 py-2.5 text-[14.5px] font-extrabold text-white transition-colors hover:bg-flare md:ml-0"
            >
                Get the app
            </a>
        </Shell>
    </header>
);
