/**
 * Store availability, set as type rather than as fake store buttons — the apps
 * are not published, and a badge that looks tappable but goes nowhere reads as
 * a broken promise.
 */
export const StoreBadges = ({ inverted = false }: { inverted?: boolean }) => (
    <div
        className={`flex flex-wrap items-center gap-x-5 gap-y-2 ${
            inverted ? 'text-paper' : 'text-ink'
        }`}
    >
        <span
            className={`kicker basis-full sm:basis-auto ${
                inverted ? 'text-paper/60' : 'text-muted'
            } sm:border-r ${inverted ? 'sm:border-paper/25' : 'sm:border-rule'} sm:pr-5`}
        >
            Coming soon
        </span>
        <span className="flex items-center gap-2 whitespace-nowrap text-[14px] font-semibold">
            <AppleMark />
            App Store
        </span>
        <span className="flex items-center gap-2 whitespace-nowrap text-[14px] font-semibold">
            <PlayMark />
            Google Play
        </span>
    </div>
);

const AppleMark = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden="true">
        <path d="M16.36 12.73c.02-2.2 1.8-3.26 1.88-3.31-1.02-1.5-2.61-1.7-3.18-1.73-1.35-.14-2.64.8-3.33.8-.69 0-1.75-.78-2.87-.76-1.48.02-2.84.86-3.6 2.18-1.53 2.66-.39 6.6 1.1 8.76.73 1.06 1.6 2.25 2.74 2.2 1.1-.04 1.52-.71 2.85-.71 1.33 0 1.7.71 2.86.69 1.18-.02 1.93-1.08 2.65-2.14.84-1.23 1.18-2.42 1.2-2.48-.03-.01-2.3-.88-2.3-3.5ZM14.2 6.03c.6-.74 1.01-1.76.9-2.78-.87.04-1.93.58-2.56 1.31-.56.65-1.05 1.7-.92 2.7.97.08 1.97-.49 2.58-1.23Z" />
    </svg>
);

const PlayMark = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden="true">
        <path d="M3.9 2.1a1 1 0 0 0-.6.93v17.94a1 1 0 0 0 .6.93l9.44-9.9L3.9 2.1Zm10.6 7.02L5.6 2.02l11.02 6.43-2.12 2.22-.9-1.55Zm0 5.76.9-1.55 2.12 2.22L6.5 21.98l8-7.1Zm1.62-1.7 3.18-1.86a1 1 0 0 0 0-1.72l-3.18-1.85-2.29 2.4 2.29 3.03Z" />
    </svg>
);
