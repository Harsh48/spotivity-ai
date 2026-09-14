import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';

const sans = Figtree({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
    variable: '--font-sans'
});

const description =
    'Spotivity AI turns any event into a shared room. Invite people by email, phone or WhatsApp, run the whole event in one place, and let AI do the planning — sports, corporate offsites, gym sessions, workshops, expos, treks, mixers and more.';

export const metadata: Metadata = {
    title: 'Spotivity AI — one room for every event',
    description,
    openGraph: {
        title: 'Spotivity AI — one room for every event',
        description,
        siteName: 'Spotivity AI',
        type: 'website'
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={sans.variable}>
            <body>{children}</body>
        </html>
    );
}
