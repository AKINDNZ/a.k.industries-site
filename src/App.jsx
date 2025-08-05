
import React from 'react';

export default function App() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <img src="/AK-LOGO-TJ-RAW.png" alt="A.K. Industries Logo" style={{ width: '160px', marginBottom: '1rem' }} />
        <h1 style={{ fontSize: '2.5rem' }}>A.K. INDUSTRIES LIMITED</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>Your Local Experts in Tiny Homes, Maintenance & Property Services</p>
      </header>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        <div><h2>Tiny Home Builds</h2><p>Affordable and stylish tiny homes designed and built in NZ.</p></div>
        <div><h2>Small Shed Construction</h2><p>Custom-built sheds for gardens, storage, or workspace.</p></div>
        <div><h2>Handyman & Maintenance</h2><p>Fences, decks, repairs — all your home needs sorted.</p></div>
        <div><h2>Pressure Washing</h2><p>Driveways, homes, decks — restored and sparkling.</p></div>
      </section>

      <footer style={{ marginTop: '4rem', textAlign: 'center', fontSize: '0.9rem', color: '#888' }}>
        <p>© {new Date().getFullYear()} A.K. INDUSTRIES LIMITED. All rights reserved.</p>
        <p>Registered in New Zealand | Domain: akindustries.co.nz</p>
      </footer>
    </main>
  );
}
