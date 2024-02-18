export default function Services() {
  return (
    <div className="font-sans text-gray-900">
      <div className="bg-white shadow">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-3xl font-semibold text-gray-800">Our Services</h1>
          <p className="mt-4 text-gray-600">
            Discover how Beaumont & Langley can guide you through the
            complexities of sell-side M&A transactions with our specialized
            services.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-2">
              Comprehensive Sell-Side Advisory
            </h2>
            <p className="mb-4">
              Our flagship service encompasses every aspect of the sell-side
              process. From initial valuation, preparation for sale, to
              negotiation and deal closure, we ensure a seamless and efficient
              transaction. Our approach integrates innovative technology with
              personalized, sector-specific strategies to maximize value for our
              clients.
            </p>
            <ul className="list-disc pl-6">
              <li>Expert Valuation Services</li>
              <li>Preparation and Positioning for Sale</li>
              <li>Negotiation and Deal Structuring</li>
              <li>Comprehensive Deal Management</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-2">
              Strategic Market Positioning
            </h2>
            <p className="mb-4">
              Beyond traditional advisory roles, we offer strategic consulting
              to enhance your company's market value. We provide insights on
              optimal market timing, prepare your business for the sale process,
              and leverage our extensive network to connect you with the right
              buyers, ensuring the best possible outcome.
            </p>
            <ul className="list-disc pl-6">
              <li>Market Timing and Strategy</li>
              <li>Business Preparation for Sale</li>
              <li>Access to Extensive Buyer Networks</li>
              <li>Maximization of Sale Value</li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <div className="bg-gray-100 p-6 rounded-lg shadow mt-12">
              <h2 className="text-2xl font-semibold mb-2">
                Innovative Technology Platform
              </h2>
              <p className="mb-4">
                At the heart of our service offering is our innovative
                technology platform, designed to streamline the M&A process.
                This platform provides our clients with unparalleled insights
                and transparency, from deal initiation through to completion.
                Our technology enables efficient deal management, enhances
                communication, and facilitates a more effective transaction
                process.
              </p>
              <ul className="list-disc pl-6">
                <li>Advanced Deal Management Tools</li>
                <li>Real-Time Transaction Insights</li>
                <li>Enhanced Communication Channels</li>
                <li>Secure Document Management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white text-center p-4 mt-12">
        <p>
          © {new Date().getFullYear()} Beaumont & Langley. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
