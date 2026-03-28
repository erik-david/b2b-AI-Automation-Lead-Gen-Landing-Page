/*
  # Create Audit Requests Table

  1. New Tables
    - `audit_requests`
      - `id` (uuid, primary key)
      - `name` (text, required) - Contact name
      - `email` (text, required, unique) - Contact email
      - `company` (text, required) - Company name
      - `phone` (text, optional) - Contact phone
      - `message` (text, optional) - Additional context
      - `created_at` (timestamp) - Submission timestamp
      - `ip_address` (text, optional) - Client IP for spam prevention
      - `status` (text, default 'new') - Audit request status

  2. Security
    - Enable RLS on `audit_requests` table
    - Allow anonymous users to INSERT new audit requests
    - Allow authenticated admins to VIEW and UPDATE requests
    - Restrict direct user SELECT access
*/

CREATE TABLE IF NOT EXISTS audit_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  phone text,
  message text,
  created_at timestamptz DEFAULT now(),
  ip_address text,
  status text DEFAULT 'new',
  CONSTRAINT email_format CHECK (email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$')
);

ALTER TABLE audit_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit audit request"
  ON audit_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Service role can view all requests"
  ON audit_requests
  FOR SELECT
  TO service_role
  USING (true);

CREATE POLICY "Service role can update requests"
  ON audit_requests
  FOR UPDATE
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_audit_requests_email ON audit_requests(email);
CREATE INDEX IF NOT EXISTS idx_audit_requests_created_at ON audit_requests(created_at);
CREATE INDEX IF NOT EXISTS idx_audit_requests_status ON audit_requests(status);