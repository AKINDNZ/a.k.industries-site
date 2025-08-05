
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, Hammer, ShowerHead, LayoutGrid, Warehouse } from 'lucide-react';

export default function AKIndustriesWebsite() {
  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <header className="text-center mb-10">
        <img src="/AK-LOGO-TJ-RAW.png" alt="A.K. Industries Logo" className="mx-auto w-40 mb-4" />
        <h1 className="text-4xl font-bold">A.K. INDUSTRIES LIMITED</h1>
        <p className="text-lg text-gray-600">Your Local Experts in Tiny Homes, Maintenance & Property Services</p>
      </header>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardContent className="p-6">
            <LayoutGrid className="w-8 h-8 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Tiny Home Builds</h2>
            <p className="text-gray-700">
              Quality, affordable, and stylish tiny homes designed and built by skilled New Zealanders. Whether off-grid or urban, we can help bring your dream to life.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <Warehouse className="w-8 h-8 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Small Shed Construction</h2>
            <p className="text-gray-700">
              From garden sheds to utility buildings, we offer custom-built small structures that are durable, secure, and suit your space perfectly.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <Hammer className="w-8 h-8 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Handyman & Maintenance</h2>
            <p className="text-gray-700">
              Home repairs, fence building, painting, general maintenance and more — we’re here to help keep your home in top shape.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <ShowerHead className="w-8 h-8 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Pressure Washing</h2>
            <p className="text-gray-700">
              We clean driveways, patios, home exteriors, fences and decks to restore surfaces to their original shine and condition.
            </p>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} A.K. INDUSTRIES LIMITED. All rights reserved.</p>
        <p>Registered in New Zealand | Company No. [Your NZBN or ID Here]</p>
        <p>Domain: <a href="https://akindustries.co.nz" className="text-blue-500">akindustries.co.nz</a></p>
      </footer>
    </main>
  );
}
