import type { CSSProperties, ReactNode } from 'react';

/**
 * iPhone hardware, drawn to the real proportions.
 *
 * Every measurement below is the iPhone 15 Pro point value scaled by
 * `width / 393` (its logical screen width), so the Dynamic Island, corner
 * radii, bezel and home indicator stay correct at any size.
 */
const REFERENCE_WIDTH = 393;
const REFERENCE_HEIGHT = 852;

export const PhoneFrame = ({
    children,
    width = 300,
    className = '',
    style,
    time = '9:41'
}: {
    children: ReactNode;
    width?: number;
    className?: string;
    style?: CSSProperties;
    time?: string;
}) => {
    const k = width / REFERENCE_WIDTH;
    const px = (points: number) => `${(points * k).toFixed(2)}px`;

    const bezel = 11 * k; // titanium band thickness
    const screenWidth = width;
    const screenHeight = width * (REFERENCE_HEIGHT / REFERENCE_WIDTH);

    return (
        <div
            className={`relative ${className}`}
            style={{ width: screenWidth + bezel * 2, ...style }}
        >
            {/* Side buttons sit under the frame so the frame edge overlaps them. */}
            <SideButton className="left-0" top={px(120)} height={px(32)} k={k} side="left" />
            <SideButton className="left-0" top={px(170)} height={px(62)} k={k} side="left" />
            <SideButton className="left-0" top={px(244)} height={px(62)} k={k} side="left" />
            <SideButton className="right-0" top={px(200)} height={px(96)} k={k} side="right" />

            {/* Titanium band */}
            <div
                className="relative rounded-[inherit] shadow-[0_28px_60px_-12px_rgba(16,16,19,0.45)]"
                style={{
                    padding: bezel,
                    borderRadius: px(55),
                    background:
                        'linear-gradient(145deg,#8e8e94 0%,#3a3a3f 18%,#1d1d21 42%,#3a3a3f 70%,#9a9aa0 100%)'
                }}
            >
                {/* Inner black lip between band and glass */}
                <div
                    className="relative overflow-hidden bg-black"
                    style={{ borderRadius: px(44), width: screenWidth, height: screenHeight }}
                >
                    {/* Screen */}
                    <div className="absolute inset-0 overflow-hidden bg-white" style={{ borderRadius: px(44) }}>
                        {/* Status bar */}
                        <div
                            className="relative z-20 flex items-center justify-between"
                            style={{
                                height: px(54),
                                paddingLeft: px(32),
                                paddingRight: px(28),
                                paddingTop: px(12)
                            }}
                        >
                            <span
                                className="font-semibold tracking-[-0.01em] text-black"
                                style={{ fontSize: px(16) }}
                            >
                                {time}
                            </span>
                            <span className="flex items-center" style={{ gap: px(6) }}>
                                <CellularIcon size={px(17)} />
                                <WifiIcon size={px(17)} />
                                <BatteryIcon width={px(27)} height={px(13)} />
                            </span>
                        </div>

                        {/*
                          App content is authored at the real logical size
                          (393pt wide) and scaled down, so type inside the
                          screen keeps true iOS proportions.
                        */}
                        <div
                            className="relative z-10 overflow-hidden"
                            style={{ height: `calc(100% - ${px(54)})` }}
                        >
                            <div
                                style={{
                                    width: REFERENCE_WIDTH,
                                    height: REFERENCE_HEIGHT - 54,
                                    transform: `scale(${k})`,
                                    transformOrigin: 'top left'
                                }}
                            >
                                {children}
                            </div>
                        </div>
                    </div>

                    {/* Dynamic Island */}
                    <div
                        className="absolute left-1/2 z-30 -translate-x-1/2 bg-black"
                        style={{
                            top: px(11),
                            width: px(125),
                            height: px(36),
                            borderRadius: px(20)
                        }}
                    >
                        {/* Front camera */}
                        <span
                            className="absolute rounded-full bg-[#16161b]"
                            style={{ right: px(11), top: px(10), width: px(16), height: px(16) }}
                        >
                            <span
                                className="absolute rounded-full bg-[#2b3550]"
                                style={{ inset: px(4) }}
                            />
                        </span>
                    </div>

                    {/* Home indicator */}
                    <div
                        className="absolute left-1/2 z-30 -translate-x-1/2 rounded-full bg-black/85"
                        style={{ bottom: px(9), width: px(140), height: px(5) }}
                    />
                </div>
            </div>
        </div>
    );
};

const SideButton = ({
    className,
    top,
    height,
    k,
    side
}: {
    className: string;
    top: string;
    height: string;
    k: number;
    side: 'left' | 'right';
}) => (
    <span
        aria-hidden="true"
        className={`absolute ${className}`}
        style={{
            top,
            height,
            width: `${(3 * k).toFixed(2)}px`,
            [side === 'left' ? 'marginLeft' : 'marginRight']: `${(-2 * k).toFixed(2)}px`,
            borderRadius: `${(2 * k).toFixed(2)}px`,
            background: 'linear-gradient(90deg,#6e6e74,#3a3a3f)'
        }}
    />
);

const CellularIcon = ({ size }: { size: string }) => (
    <svg viewBox="0 0 18 12" style={{ width: size, height: `calc(${size} * 0.67)` }} aria-hidden="true">
        <rect x="0" y="8" width="3" height="4" rx="1" fill="#000" />
        <rect x="5" y="5.5" width="3" height="6.5" rx="1" fill="#000" />
        <rect x="10" y="3" width="3" height="9" rx="1" fill="#000" />
        <rect x="15" y="0" width="3" height="12" rx="1" fill="#000" />
    </svg>
);

const WifiIcon = ({ size }: { size: string }) => (
    <svg viewBox="0 0 16 12" style={{ width: size, height: `calc(${size} * 0.75)` }} aria-hidden="true">
        <path
            d="M8 11.2 5.9 8.8a3.2 3.2 0 0 1 4.2 0L8 11.2Z"
            fill="#000"
        />
        <path
            d="M3.6 6.3a6.6 6.6 0 0 1 8.8 0"
            stroke="#000"
            strokeWidth="1.7"
            strokeLinecap="round"
            fill="none"
        />
        <path
            d="M1.2 3.6a10.2 10.2 0 0 1 13.6 0"
            stroke="#000"
            strokeWidth="1.7"
            strokeLinecap="round"
            fill="none"
        />
    </svg>
);

const BatteryIcon = ({ width, height }: { width: string; height: string }) => (
    <svg viewBox="0 0 27 13" style={{ width, height }} aria-hidden="true">
        <rect x="0.6" y="0.6" width="22.8" height="11.8" rx="3.6" stroke="#000" strokeOpacity="0.35" fill="none" />
        <rect x="2.2" y="2.2" width="17" height="8.6" rx="2.2" fill="#000" />
        <path d="M25 4.6v3.8a2 2 0 0 0 0-3.8Z" fill="#000" fillOpacity="0.35" />
    </svg>
);
