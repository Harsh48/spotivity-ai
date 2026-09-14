'use client';

import { useState, type FormEvent } from 'react';
import { StoreBadges } from './StoreBadges';
import { Shell } from './ui';

type Status = 'idle' | 'sending' | 'done' | 'error';

export const Waitlist = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<Status>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        if (status === 'sending') return;

        setStatus('sending');
        try {
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });
            const body = await response.json();

            if (!response.ok) {
                setMessage(body?.error || 'That did not go through. Try again?');
                setStatus('error');
                return;
            }

            setStatus('done');
        } catch {
            setMessage('That did not go through. Try again?');
            setStatus('error');
        }
    };

    return (
        <section id="waitlist" className="scroll-mt-20 bg-ink py-20 text-paper sm:py-28">
            <Shell>
                <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
                    <div>
                        <span className="kicker text-paper/50">05 · Early access</span>
                        <h2 className="mt-5 font-display text-[44px] leading-[0.98] tracking-[-0.02em] text-paper sm:text-[62px]">
                            Stop organising
                            <br />
                            in a <em className="text-signal">group chat</em>.
                        </h2>
                    </div>

                    <div className="md:pt-4">
                        <p className="text-[16px] leading-[1.6] text-paper/70">
                            Spotivity AI is in early access. Leave an email and we will send you a room to
                            try with your next event.
                        </p>

                        {status === 'done' ? (
                            <p className="mt-8 border-l-2 border-signal pl-4 text-[16px] font-semibold text-paper">
                                You are on the list. We will be in touch.
                            </p>
                        ) : (
                            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <label htmlFor="waitlist-email" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="waitlist-email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    placeholder="you@company.com"
                                    className="flex-1 border-b border-paper/30 bg-transparent px-0 py-3 text-[16px] text-paper outline-none transition-colors placeholder:text-paper/35 focus:border-signal"
                                />
                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="bg-paper px-7 py-3.5 text-[14.5px] font-semibold text-ink transition-colors hover:bg-signal hover:text-paper disabled:opacity-60"
                                >
                                    {status === 'sending' ? 'Adding you…' : 'Get early access'}
                                </button>
                            </form>
                        )}

                        {status === 'error' && (
                            <p className="mt-4 text-[14px] text-signal">{message}</p>
                        )}

                        <p className="mt-5 text-[13px] text-paper/45">
                            One email when your room is ready. Nothing else.
                        </p>

                        <div className="mt-10 border-t border-paper/15 pt-6">
                            <StoreBadges inverted />
                        </div>
                    </div>
                </div>
            </Shell>
        </section>
    );
};
