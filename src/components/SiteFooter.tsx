import { Shell } from './ui';

export const SiteFooter = () => (
    <footer className="border-t border-rule py-10">
        <Shell className="flex flex-col justify-between gap-4 sm:flex-row sm:items-baseline">
            <p className="flex items-baseline gap-2">
                <span className="font-display text-[20px] text-ink">Spotivity</span>
                <span className="kicker text-signal">AI</span>
                <span className="ml-2 text-[13.5px] text-muted">One room per event.</span>
            </p>
            <p className="kicker text-muted">
                © {new Date().getFullYear()} · Early access · iOS &amp; Android soon
            </p>
        </Shell>
    </footer>
);
