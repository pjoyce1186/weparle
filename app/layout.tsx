export const metadata = { title: "WeParlé" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
     <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1D3557" />
      </head>
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "var(--bg)", color: "#0f172a" }}>
        <style>{`
          :root{
            --primary:#1D3557;   /* Deep Blue */
            --secondary:#06B6D4; /* Teal */
            --bg:#F5F5F5;        /* Warm Gray */
            --highlight:#FF8C82; /* Coral */
            --accent:#F97316;    /* Bright Orange */
          }
          .card{background:#fff; border:1px solid #e5e7eb; border-radius:16px; padding:24px; box-shadow:0 2px 8px rgba(0,0,0,.04)}
          .title{color:var(--primary); margin:0}
          .cta{background:var(--accent); color:#fff; border:none; border-radius:12px; padding:10px 14px; font-weight:600}
          .link{color:var(--secondary); text-decoration:underline}
          main{min-height:100vh; display:grid; place-items:center; background:var(--bg)}
        `}</style>
        {children}
      </body>
    </html>
  );
}
