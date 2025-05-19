// src/pages/index.tsx with hyphen notation for colors
import Layout from '@/components/layout/Layout';
import { cn } from '@/lib/utils';
import { ArrowRight, Code, Layers, LineChart, Users } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Rovani Projects - Growth Architecture</title>
        <meta name="description" content="Professional consultancy services for businesses and nonprofits in Chicago" />
      </Head>

      {/* Hero Section with Chicago Skyline */}
      <section className="relative h-hero flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/chicago-skyline.jpg"
            alt="Chicago skyline"
            fill
            style={{ objectFit: "cover" }}
            priority
            className="brightness-75"
          />
        </div>
        <div className="container mx-auto p-4 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 text-white">Growth Architecture for Nonprofits and Emerging Enterprises</h1>
            <p className="text-xl text-gray-100 mb-8">
              <span className='font-bold'>Rovani Projects</span> specializes in guiding organizations through critical growth transitions. We transform reactive operations into strategic systems that support sustainable growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className={cn(
                  "bg-chicago-blue border-2 border-white",
                  "text-white font-semibold py-4 px-8 rounded-lg inline-flex items-center"
                )}
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Transforming Organizations for Sustainable Growth</h2>
                <p className="text-gray-700 mb-4">
                  Whether you&apos;re a nonprofit evolving beyond your founding phase or a business scaling from $5M to $200M,
                  we provide the expertise needed to navigate complex transitions.
                </p>
                <p className="text-gray-700">
                  Our approach combines strategic vision with practical implementation, ensuring your organization builds
                  the foundation required for long-term success.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                {/* Business professionals image */}
                <div className="relative h-80 w-full">
                  <Image
                    src="/images/business-meeting.jpg"
                    alt="Business professionals in meeting"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Chicago-inspired colors */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center space-x-3 mb-4">
              <div className="h-1 w-12 bg-chicago-blue"></div>
              <h2 className="text-3xl font-bold">Our Services</h2>
              <div className="h-1 w-12 bg-chicago-blue"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to drive your organization&apos;s growth and success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Strategic Systems Implementation */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] group">
              <div className="p-6">
                <div className="w-14 h-14 rounded-full bg-chicago-red/10 flex items-center justify-center mb-6 group-hover:bg-chicago-red/20 transition-colors">
                  <LineChart className="text-chicago-red h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-chicago-red transition-colors">Strategic Systems Implementation</h3>
                <p className="text-gray-600">
                  We implement scalable systems and structured workflows that transform operational chaos into strategic advantage, whether you&apos;re managing donor relationships or customer acquisitions.
                </p>
              </div>
            </div>

            {/* Financial Maturity & Scaling */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] group">
              <div className="p-6">
                <div className="w-14 h-14 rounded-full bg-chicago-blue/10 flex items-center justify-center mb-6 group-hover:bg-chicago-blue/20 transition-colors">
                  <Layers className="text-chicago-blue h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-chicago-blue transition-colors">Financial Maturity & Scaling</h3>
                <p className="text-gray-600">
                  We build financial operations that support ambitious growth. For nonprofits, this means sustainable funding models and efficient program delivery.
                </p>
              </div>
            </div>

            {/* Technology Transformation */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] group">
              <div className="p-6">
                <div className="w-14 h-14 rounded-full bg-chicago-blue-light/20 flex items-center justify-center mb-6 group-hover:bg-chicago-blue-light/30 transition-colors">
                  <Code className="text-chicago-blue h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-chicago-blue transition-colors">Technology Transformation</h3>
                <p className="text-gray-600">
                  From outdated legacy systems to fragmented digital tools, we help organizations implement cohesive technology ecosystems that drive efficiency and insight.
                </p>
              </div>
            </div>

            {/* Leadership & Team Development */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] group">
              <div className="p-6">
                <div className="w-14 h-14 rounded-full bg-chicago-red/10 flex items-center justify-center mb-6 group-hover:bg-chicago-red/20 transition-colors">
                  <Users className="text-chicago-red h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-chicago-red transition-colors">Leadership & Team Development</h3>
                <p className="text-gray-600">
                  We mentor leadership teams through the transition from hands-on management to strategic oversight, building the capabilities needed for growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Business Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center space-x-3 mb-6">
                <div className="h-1 w-12 bg-chicago-red"></div>
                <h2 className="text-3xl font-bold">Growth-Focused Business</h2>
              </div>
              <p className="text-gray-600 mb-4">
                The journey from $5M to $200M isn&apos;t simply about doing more of what worked initially. It requires fundamental transformation.
              </p>
              <p className="text-gray-600 mb-6">
                At Rovani Projects, we specialize in helping businesses navigate this critical transition—implementing the processes, financial structures, and operational discipline needed to scale reliably and profitably.
              </p>
              <p className="text-gray-600">
                Our founders have guided numerous organizations through the inflection points where reactive management must evolve into strategic leadership.
              </p>
            </div>
            <div className="order-1 md:order-2 rounded-xl overflow-hidden shadow-xl">
              {/* Business growth image */}
              <div className="relative h-96 w-full">
                <Image
                  src="/images/business-growth.jpg"
                  alt="Business growth visualization"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition with Chicago-inspired Design */}
      <section className="py-20 bg-chicago-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">What Sets Us Apart</h2>
            <div className="relative">
              <div className="h-0.5 w-full bg-white/20 absolute top-10 left-0 z-0"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white flex items-center justify-center">
                    <div className="text-chicago-blue font-bold text-xl">1</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Operational Excellence</h3>
                  <p className="text-gray-100">
                    We transform inefficient processes into strategic systems that scale with your growth.
                  </p>
                </div>

                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white flex items-center justify-center">
                    <div className="text-chicago-blue font-bold text-xl">2</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Technology Expertise</h3>
                  <p className="text-gray-100">
                    We bridge the gap between legacy systems and modern digital transformation.
                  </p>
                </div>

                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white flex items-center justify-center">
                    <div className="text-chicago-blue font-bold text-xl">3</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Strategic Vision</h3>
                  <p className="text-gray-100">
                    We develop clear roadmaps that connect your current position to ambitious growth goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chicago-Based Callout */}
      <section className="py-20 bg-grey-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Chicago-Based, Globally Minded</h2>
            <div className="flex justify-center mb-10">
              <div className="h-1 w-24 bg-chicago-red"></div>
            </div>
            <p className="text-xl text-gray-600 mb-10">
              Founded in Chicago with a commitment to the city&apos;s values of hard work, innovation, and resilience,
              we bring a practical, results-oriented approach to every client engagement.
            </p>
            <Link
              href="/contact"
              className={cn(
                "bg-chicago-blue border-2 border-white",
                "text-white font-semibold py-4 px-8 rounded-lg inline-flex items-center"
              )}
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}