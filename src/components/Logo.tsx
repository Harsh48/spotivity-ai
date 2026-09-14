/**
 * Spotivity mark: a map pin with a spark cut out of it.
 *
 * Pin for the spot, spark for the AI that plans it. Two earlier attempts were
 * discarded for reading as something else — three dots in a rounded card is the
 * universal typing indicator, and three dots inside a pin becomes a face.
 * The spark collapses to a clean diamond at favicon size.
 */
export const LogoMark = ({
    size = 32,
    className = '',
    fill = 'currentColor',
    dot = '#fff'
}: {
    size?: number;
    className?: string;
    fill?: string;
    dot?: string;
}) => (
    <svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        className={className}
        role="img"
        aria-label="Spotivity"
    >
        <path
            d="M16 1.8c-5.6 0-10.1 4.5-10.1 10.1 0 7.3 8.9 17 10.1 18.3 1.2-1.3 10.1-11 10.1-18.3 0-5.6-4.5-10.1-10.1-10.1Z"
            fill={fill}
        />
        <path
            d="M16 6.6c.5 2.6 1.1 3.7 2.4 4.3.6.3 1.4.5 2.7.7-2.6.5-3.7 1.1-4.3 2.4-.3.6-.5 1.4-.8 2.7-.5-2.6-1.1-3.7-2.4-4.3-.6-.3-1.4-.5-2.7-.8 2.6-.5 3.7-1.1 4.3-2.4.3-.6.5-1.4.8-2.6Z"
            fill={dot}
        />
    </svg>
);

/** Mark sat in the brand tile, the way it appears as an app icon. */
export const LogoTile = ({ size = 36, className = '' }: { size?: number; className?: string }) => (
    <span
        className={`inline-flex flex-none items-center justify-center rounded-[28%] bg-flare ${className}`}
        style={{ width: size, height: size }}
    >
        <LogoMark size={size * 0.62} fill="#fff" dot="var(--color-flare)" />
    </span>
);

export const Logo = ({
    className = '',
    tone = 'ink'
}: {
    className?: string;
    tone?: 'ink' | 'white';
}) => (
    <span className={`flex items-center gap-2.5 ${className}`}>
        <LogoTile size={34} />
        <span
            className={`text-[19px] font-extrabold tracking-[-0.035em] ${
                tone === 'white' ? 'text-white' : 'text-ink'
            }`}
        >
            Spotivity
        </span>
    </span>
);
