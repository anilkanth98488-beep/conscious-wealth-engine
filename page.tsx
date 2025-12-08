// app/page.tsx
export default function Home() {
  return (
    <div style={{ fontFamily: 'system-ui', textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '3rem', color: '#0f172a' }}>Conscious Wealth Engine</h1>
      <p style={{ fontSize: '1.5rem', color: '#475569' }}>
        Tax Strategy + Astro-Timing + Osho Wisdom.
      </p>
      <div
        style={{
          marginTop: '30px',
          padding: '20px',
          background: '#f0fdf4',
          display: 'inline-block',
          borderRadius: '10px',
        }}
      >
        <strong>Status:</strong> System is Live 🟢
      </div>
    </div>
  );
}
