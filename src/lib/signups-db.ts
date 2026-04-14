import { query } from "@/lib/db";

export interface ComingSoonSignup {
  id: string;
  email: string;
  ip_address: string | null;
  user_agent: string | null;
  privacy_accepted: boolean;
  consent_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface InsertSignupParams {
  email: string;
  ipAddress?: string | null;
  userAgent?: string | null;
  privacyAccepted: boolean;
}

export async function insertSignup(
  params: InsertSignupParams
): Promise<ComingSoonSignup> {
  const { email, ipAddress, userAgent, privacyAccepted } = params;

  const result = await query<ComingSoonSignup>(
    `INSERT INTO coming_soon_signups (email, ip_address, user_agent, privacy_accepted, consent_at)
     VALUES ($1, $2, $3, $4, $5)
     ON CONFLICT (email)
     DO UPDATE SET
       ip_address = EXCLUDED.ip_address,
       user_agent = EXCLUDED.user_agent,
       privacy_accepted = EXCLUDED.privacy_accepted,
       consent_at = EXCLUDED.consent_at
     RETURNING *`,
    [
      email,
      ipAddress ?? null,
      userAgent ?? null,
      privacyAccepted,
      privacyAccepted ? new Date().toISOString() : null,
    ]
  );

  return result.rows[0];
}

export async function getSignups(): Promise<ComingSoonSignup[]> {
  const result = await query<ComingSoonSignup>(
    "SELECT * FROM recent_signups"
  );
  return result.rows;
}

export async function getSignupCount(): Promise<number> {
  const result = await query<{ count: string }>(
    "SELECT COUNT(*) FROM coming_soon_signups"
  );
  return parseInt(result.rows[0].count, 10);
}
