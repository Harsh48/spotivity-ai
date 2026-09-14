import type { ReactNode } from 'react';

export const Shell = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
    <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>{children}</div>
);

export const Section = ({
    id,
    children,
    className = ''
}: {
    id?: string;
    children: ReactNode;
    className?: string;
}) => (
    <section id={id} className={`scroll-mt-20 py-20 sm:py-28 ${className}`}>
        <Shell>{children}</Shell>
    </section>
);

/** Pill label above a heading. */
export const Tag = ({ children, color = 'var(--color-flare)' }: { children: ReactNode; color?: string }) => (
    <span
        className="inline-block rounded-full px-3.5 py-1.5 text-[12.5px] font-extrabold uppercase tracking-[0.08em] text-white"
        style={{ background: color }}
    >
        {children}
    </span>
);

/** The big tight headline used across the page. */
export const Display = ({
    children,
    className = ''
}: {
    children: ReactNode;
    className?: string;
}) => (
    <h2 className={`display text-[40px] sm:text-[62px] ${className}`}>{children}</h2>
);

export const Pill = ({ href, children }: { href: string; children: ReactNode }) => (
    <a
        href={href}
        className="inline-flex items-center justify-center rounded-full bg-flare px-7 py-4 text-[16px] font-extrabold text-white transition-transform hover:scale-[1.03] active:scale-[0.99]"
    >
        {children}
    </a>
);

export const PillDark = ({ href, children }: { href: string; children: ReactNode }) => (
    <a
        href={href}
        className="inline-flex items-center justify-center rounded-full border-2 border-ink px-7 py-4 text-[16px] font-extrabold text-ink transition-colors hover:bg-ink hover:text-white"
    >
        {children}
    </a>
);
