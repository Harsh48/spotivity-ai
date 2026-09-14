import { AiPlanning } from '@/components/AiPlanning';
import { Categories } from '@/components/Categories';
import { GetApp } from '@/components/GetApp';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { Lifecycle } from '@/components/Lifecycle';
import { Marquee } from '@/components/Marquee';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteNav } from '@/components/SiteNav';

export default function Home() {
    return (
        <>
            <SiteNav />
            <main>
                <Hero />
                <Marquee />
                <HowItWorks />
                <Categories />
                <AiPlanning />
                <Lifecycle />
                <GetApp />
            </main>
            <SiteFooter />
        </>
    );
}
