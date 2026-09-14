import type { ReactNode } from 'react';

export const Shell = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
    <div className={`mx-auto w-full max-w-[1180px] px-6 sm:px-10 ${className}`}>{children}</div>
);

/** Hairline rule. The layout is built out of these rather than boxes. */
export const Rule = ({ className = '' }: { className?: string }) => (
    <hr className={`border-0 border-t border-rule ${className}`} />
);

export const Kicker = ({ children, index }: { children: ReactNode; index?: string }) => (
    <span className="kicker flex items-baseline gap-3 text-muted">
        {index && <span className="tnum text-signal">{index}</span>}
        {children}
    </span>
);

/**
 * Section opener: a numbered kicker above a rule, then the heading. Numbering
 * runs down the page so the whole thing reads as a programme.
 */
export const SectionHead = ({
    index,
    kicker,
    title,
    lead
}: {
    index: string;
    kicker: string;
    title: ReactNode;
    lead?: ReactNode;
}) => (
    <>
        <Kicker index={index}>{kicker}</Kicker>
        <Rule className="mt-3" />
        <div className="mt-8 grid gap-6 md:grid-cols-[1.15fr_1fr] md:gap-16">
            <h2 className="font-display text-[38px] leading-[1.02] tracking-[-0.015em] text-ink sm:text-[54px]">
                {title}
            </h2>
            {lead && <p className="max-w-lg text-[16px] leading-[1.6] text-muted md:pt-3">{lead}</p>}
        </div>
    </>
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
    <section id={id} className={`scroll-mt-20 py-20 sm:py-24 ${className}`}>
        <Shell>{children}</Shell>
    </section>
);

/** Solid ink button. */
export const InkButton = ({ href, children }: { href: string; children: ReactNode }) => (
    <a
        href={href}
        className="inline-flex items-center justify-center rounded-none bg-ink px-7 py-3.5 text-[14.5px] font-semibold text-paper transition-colors hover:bg-signal"
    >
        {children}
    </a>
);

/** Underlined text link, the quieter companion to InkButton. */
export const TextLink = ({ href, children }: { href: string; children: ReactNode }) => (
    <a
        href={href}
        className="inline-flex items-center border-b border-ink pb-1 text-[14.5px] font-semibold text-ink transition-colors hover:border-signal hover:text-signal"
    >
        {children}
    </a>
);
