import Layout from '@/components/layout/Layout';
import type { Service } from '@/components/services/ServiceCards';
import ServiceCards from '@/components/services/ServiceCards';
import { getAllContent } from '@/lib/markdown';
import { GetStaticProps } from 'next';
import Head from 'next/head';

type ServicesProps = {
  services: Service[];
};

export default function Services({ services }: ServicesProps) {
  return (
    <Layout>
      <Head>
        <title>Our Services | Rovani Projects</title>
        <meta name="description" content="Professional consultancy services to help your business grow" />
      </Head>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-gray-600">
              We offer a range of professional services to help your business thrive.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <ServiceCards
              services={services}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const services = getAllContent('services');

  return {
    props: {
      services,
    },
  };
};