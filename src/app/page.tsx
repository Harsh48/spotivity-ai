import { AiPlanning } from '@/components/AiPlanning';
import { EventTypes } from '@/components/EventTypes';
import { Hero } from '@/components/Hero';
import { Lifecycle } from '@/components/Lifecycle';
import { Marquee } from '@/components/Marquee';
import { Rooms } from '@/components/Rooms';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteNav } from '@/components/SiteNav';
import { Waitlist } from '@/components/Waitlist';

export default function Home() {
    return (
        <>
            <SiteNav />
            <main>
                <Hero />
                <Marquee />
                <Rooms />
                <Lifecycle />
                <AiPlanning />
                <EventTypes />
                <Waitlist />
            </main>
            <SiteFooter />
        </>
    );
}
