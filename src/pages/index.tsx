import Layout from '@/components/layout/Layout';
import Head from 'next/head';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Rovani Projectts - Expert Solutions</title>
        <meta name="description" content="Professional consultancy services for businesses" />
      </Head>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Expert Consultancy Solutions</h1>
            <p className="text-xl text-gray-600 mb-8">
              We help businesses achieve their goals through strategic consulting and expert implementation.
            </p>
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg inline-block"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Strategy Consulting',
                description: 'Develop comprehensive business strategies to achieve your goals.',
              },
              {
                title: 'Implementation Support',
                description: 'Expert guidance and hands-on support for successful execution.',
              },
              {
                title: 'Performance Optimization',
                description: 'Identify and implement improvements to maximize efficiency.',
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}