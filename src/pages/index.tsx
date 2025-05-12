import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Rovani Projects - Growth Architecture</title>
        <meta name="description" content="Professional consultancy services for businesses" />
      </Head>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Growth Architecture for Nonprofits and Emerging Enterprises</h1>
            <p className="text-xl text-gray-600 mb-8">
              Rovani Projects specializes in guiding organizations through critical growth transitions. Whether you&apos;re a nonprofit evolving beyond your founding phase or a business scaling from $5M to $200M, we transform reactive operations into strategic systems that support sustainable growth and amplified impact.
            </p>
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg inline-block"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Strategic Systems Implementation',
                description: 'As organizations grow, ad hoc processes become bottlenecks. We implement scalable systems and structured workflows that transform operational chaos into strategic advantage, whether you\'re managing donor relationships or customer acquisitions.',
              },
              {
                title: 'Financial Maturity & Scaling',
                description: 'We build financial operations that support ambitious growth. For nonprofits, this means sustainable funding models and efficient program delivery. For businesses, this translates to scalable revenue operations and financial structures that support 10x growth potential.',
              },
              {
                title: 'Technology Transformation',
                description: 'From outdated legacy systems to fragmented digital tools, we help organizations implement cohesive technology ecosystems that drive efficiency and insight. Our practical approach ensures technology becomes an accelerator for your growth, not a limitation.',
              },
              {
                title: 'Leadership & Team Development',
                description: 'Growth requires evolution at every level. We mentor leadership teams through the transition from hands-on management to strategic oversight, building the capabilities and structures needed for your next phase of growth.'
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
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center">Growth-Focused Business</h2>
        <div className="container mx-auto px-4 flex flex-col gap-3 rounded-lg shadow-md border border-gray-200 p-4">
          <p className="text-gray-600">The journey from $5M to $200M isn&apos;t simply about doing more of what worked initially. It requires fundamental transformation.</p>
          <p className="text-gray-600">At Rovani Projects, we specialize in helping businesses navigate this critical transition—implementing the processes, financial structures, and operational discipline needed to scale reliably and profitably. Our founders have guided numerous organizations through the inflection points where reactive management must evolve into strategic leadership.</p>
        </div>
      </section>
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center">Value Proposition</h2>
        <div className="container mx-auto px-4 flex flex-col gap-3 rounded-lg shadow-md border border-gray-200 p-4">
          <p className="text-gray-600">What sets us apart is our dual expertise in both operational excellence and technology transformation. We bridge the gap between strategic vision and practical implementation, ensuring your organization builds the foundation required for sustainable growth—whether measured in revenue, impact, or both.</p>
        </div>
      </section>
    </Layout>
  );
}