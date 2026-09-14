import type { Metadata } from 'next';
import { Archivo, Instrument_Serif } from 'next/font/google';
import './globals.css';

const display = Instrument_Serif({
    subsets: ['latin'],
    weight: '400',
    style: ['normal', 'italic'],
    variable: '--font-display'
});

const sans = Archivo({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-sans'
});

const description =
    'Spotivity AI turns any event into a shared room. Invite people by email, phone or WhatsApp, run the whole event lifecycle in one place, and let AI do the planning — for sports, corporate offsites, gym sessions, workshops, expos, treks, mixers and more.';

export const metadata: Metadata = {
    title: 'Spotivity AI — one room per event',
    description,
    openGraph: {
        title: 'Spotivity AI — one room per event',
        description,
        siteName: 'Spotivity AI',
        type: 'website'
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${display.variable} ${sans.variable}`}>
            <body>{children}</body>
        </html>
    );
}
