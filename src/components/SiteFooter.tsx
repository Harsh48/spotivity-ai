import { Logo } from './Logo';
import { Shell } from './ui';

export const SiteFooter = () => (
    <footer className="border-t border-line py-10">
        <Shell className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <p className="flex items-center gap-3">
                <Logo />
                <span className="text-[14px] font-medium text-hush">One room for every event.</span>
            </p>
            <p className="text-[13.5px] font-medium text-hush">
                © {new Date().getFullYear()} Spotivity AI · iOS &amp; Android coming soon
            </p>
        </Shell>
    </footer>
);
