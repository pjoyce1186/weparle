export default function Page() {
  return (
    <main>
      <div className="card">
        <h1 className="title">WeParlé</h1>
        <p style={{ marginTop: 8 }}>Hello, Next.js is running.</p>
        <a className="link" href="/sign-in" style={{ display: "inline-block", marginTop: 12 }}>
          Sign in (magic link)
        </a>
      </div>
    </main>
  );
}
