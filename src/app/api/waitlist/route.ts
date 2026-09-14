/**
 * Waitlist sign-ups.
 *
 * NOTE: this does not persist anything yet — it validates the address and logs
 * it to the server. Wire it to a database or an email provider before putting
 * the page in front of real visitors, otherwise sign-ups are silently lost.
 */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
    let email: unknown;

    try {
        ({ email } = await request.json());
    } catch {
        return Response.json({ error: 'Send a JSON body.' }, { status: 400 });
    }

    if (typeof email !== 'string' || !EMAIL.test(email.trim())) {
        return Response.json({ error: 'That does not look like an email address.' }, { status: 400 });
    }

    console.log('[waitlist] signup (not persisted):', email.trim().toLowerCase());

    return Response.json({ ok: true });
}
