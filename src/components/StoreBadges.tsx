/**
 * App Store / Play Store badges in the familiar black-pill shape, overprinted
 * with "Coming soon". Not links — the apps are not published, and a badge that
 * looks tappable but goes nowhere reads as a broken promise.
 */
export const StoreBadges = ({ light = false }: { light?: boolean }) => (
    <div className="flex flex-wrap items-center gap-3">
        <Badge light={light} small="Coming soon on the" large="App Store" icon={<AppleMark />} />
        <Badge light={light} small="Coming soon on" large="Google Play" icon={<PlayMark />} />
    </div>
);

const Badge = ({
    small,
    large,
    icon,
    light
}: {
    small: string;
    large: string;
    icon: React.ReactNode;
    light: boolean;
}) => (
    <span
        className={`relative flex items-center gap-2.5 rounded-xl px-4 py-2.5 ${
            light ? 'bg-white text-ink' : 'bg-ink text-white'
        }`}
    >
        <span className="flex h-7 w-7 items-center justify-center">{icon}</span>
        <span className="leading-tight">
            <span className={`block text-[10px] font-semibold ${light ? 'text-body' : 'text-white/65'}`}>
                {small}
            </span>
            <span className="block text-[16px] font-extrabold tracking-[-0.02em]">{large}</span>
        </span>
    </span>
);

const AppleMark = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
        <path d="M16.36 12.73c.02-2.2 1.8-3.26 1.88-3.31-1.02-1.5-2.61-1.7-3.18-1.73-1.35-.14-2.64.8-3.33.8-.69 0-1.75-.78-2.87-.76-1.48.02-2.84.86-3.6 2.18-1.53 2.66-.39 6.6 1.1 8.76.73 1.06 1.6 2.25 2.74 2.2 1.1-.04 1.52-.71 2.85-.71 1.33 0 1.7.71 2.86.69 1.18-.02 1.93-1.08 2.65-2.14.84-1.23 1.18-2.42 1.2-2.48-.03-.01-2.3-.88-2.3-3.5ZM14.2 6.03c.6-.74 1.01-1.76.9-2.78-.87.04-1.93.58-2.56 1.31-.56.65-1.05 1.7-.92 2.7.97.08 1.97-.49 2.58-1.23Z" />
    </svg>
);

const PlayMark = () => (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path d="M3.5 2.2a1 1 0 0 0-.5.87v17.86a1 1 0 0 0 .5.87l9.4-9.8-9.4-9.8Z" fill="#00D2FF" />
        <path d="m12.9 12 2.9-3.02L4.6 2.05a1 1 0 0 0-1.1.15l9.4 9.8Z" fill="#00F076" />
        <path d="m12.9 12-9.4 9.8a1 1 0 0 0 1.1.15l11.2-6.93L12.9 12Z" fill="#FF3A44" />
        <path d="m15.8 8.98-2.9 3.02 2.9 3.02 3.7-2.29a1 1 0 0 0 0-1.46l-3.7-2.29Z" fill="#FFC900" />
    </svg>
);
