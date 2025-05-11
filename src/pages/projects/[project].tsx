import Layout from '@/components/layout/Layout';
import { getAllContent, getContentBySlug, markdownToHtml } from '@/lib/markdown';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

type ProjectProps = {
  content: string;
  frontmatter: {
    title: string;
    description: string;
    [key: string]: any;
  };
};

export default function Project({ content, frontmatter }: ProjectProps) {
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
    const projects = getAllContent('projects');

    return {
      paths: projects.map((project) => ({
        params: {
          project: project.slug,
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
  if (!params || !params.project) {
    return {
      notFound: true,
    };
  }

  const projectSlug = params.project as string;

  try {
    const { content, frontmatter } = getContentBySlug('projects', projectSlug);
    const htmlContent = await markdownToHtml(content);

    return {
      props: {
        content: htmlContent,
        frontmatter,
      },
    };
  } catch (error) {
    console.error(`Error loading project ${projectSlug}:`, error);
    return {
      notFound: true,
    };
  }
};