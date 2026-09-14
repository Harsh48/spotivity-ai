'use client';

import { useState, type FormEvent } from 'react';
import { StoreBadges } from './StoreBadges';
import { Shell } from './ui';

type Status = 'idle' | 'sending' | 'done' | 'error';

export const GetApp = () => {
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
        <section id="get" className="scroll-mt-20 px-5 pb-20 sm:px-8 sm:pb-28">
            <Shell className="overflow-hidden rounded-[36px] bg-flare px-6 py-16 text-white sm:px-14">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="display text-[40px] sm:text-[64px]">
                        Stop organising
                        <br />
                        in a group chat.
                    </h2>
                    <p className="mx-auto mt-6 max-w-md text-[17.5px] font-medium leading-[1.55] text-white/85">
                        Spotivity AI is in early access. Leave your email and we&apos;ll send you a room to
                        try with your next event.
                    </p>

                    {status === 'done' ? (
                        <p className="mx-auto mt-9 w-fit rounded-full bg-white px-7 py-4 text-[16px] font-extrabold text-flare">
                            You&apos;re on the list. We&apos;ll be in touch.
                        </p>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="mx-auto mt-9 flex max-w-lg flex-col gap-3 sm:flex-row"
                        >
                            <label htmlFor="get-email" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="get-email"
                                type="email"
                                required
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="you@email.com"
                                className="h-14 flex-1 rounded-full border-0 bg-white/95 px-6 text-[16px] font-medium text-ink outline-none placeholder:text-hush focus:ring-4 focus:ring-white/40"
                            />
                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="h-14 rounded-full bg-ink px-8 text-[16px] font-extrabold text-white transition-transform hover:scale-[1.03] disabled:opacity-70"
                            >
                                {status === 'sending' ? 'Adding you…' : 'Get early access'}
                            </button>
                        </form>
                    )}

                    {status === 'error' && <p className="mt-4 text-[14.5px] font-semibold">{message}</p>}

                    <div className="mt-10 flex justify-center">
                        <StoreBadges light />
                    </div>

                    <p className="mt-6 text-[13.5px] font-medium text-white/65">
                        One email when your room is ready. Nothing else.
                    </p>
                </div>
            </Shell>
        </section>
    );
};
