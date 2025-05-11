import Layout from '@/components/layout/Layout';
import { getAllContent, getContentBySlug, markdownToHtml } from '@/lib/markdown';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

type ServiceProps = {
  content: string;
  frontmatter: {
    title: string;
    description: string;
    [key: string]: any;
  };
};

export default function Service({ content, frontmatter }: ServiceProps) {
  return (
    <Layout>
      <Head>
        <title>{`${frontmatter.title} | Rovani Projects`}</title>
        <meta name="description" content={frontmatter.description} />
      </Head>

      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">{frontmatter.title}</h1>
            <p className="text-xl text-gray-600">{frontmatter.description}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <article className="prose lg:prose-xl">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </article>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const services = getAllContent('services');

    return {
      paths: services.map((service) => ({
        params: {
          service: service.slug,
        },
      })),
      fallback: false,
    };
  } catch (error) {
    console.error('Error generating static paths:', error);
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || !params.service) {
    return {
      notFound: true,
    };
  }

  const serviceSlug = params.service as string;

  try {
    const { content, frontmatter } = getContentBySlug('services', serviceSlug);
    const htmlContent = await markdownToHtml(content);

    return {
      props: {
        content: htmlContent,
        frontmatter,
      },
    };
  } catch (error) {
    console.error(`Error loading service ${serviceSlug}:`, error);
    return {
      notFound: true,
    };
  }
};