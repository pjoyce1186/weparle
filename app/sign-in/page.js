"use client";
import { useState } from "react";
import { supabase } from "../../lib/supabaseClient"; // relative path avoids alias issues

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) setError(error.message);
    else setSent(true);
  }

  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "var(--bg)" }}>
      <div className="card" style={{ maxWidth: 420 }}>
        <h2 className="title">Sign in</h2>
        <p style={{ marginTop: 6 }}>We’ll email you a one-time magic link.</p>

        <form onSubmit={handleSubmit} style={{ marginTop: 12, display: "grid", gap: 10 }}>
          <input
            type="email"
            required
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: 12, borderRadius: 12, border: "1px solid #e5e7eb" }}
          />
          <button className="cta" type="submit">Send magic link</button>
        </form>

        {sent && <p style={{ marginTop: 10, color: "var(--secondary)" }}>Check your inbox for the link.</p>}
        {error && <p style={{ marginTop: 10, color: "crimson" }}>{error}</p>}

        <a href="/" className="link" style={{ display: "inline-block", marginTop: 12 }}>← Back</a>
      </div>
    </main>
  );
}
