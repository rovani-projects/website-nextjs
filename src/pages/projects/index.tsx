import Layout from '@/components/layout/Layout';
import { getAllContent } from '@/lib/markdown';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

type Project = {
  slug: string;
  frontmatter: {
    title: string;
    description: string;
    icon?: string;
    [key: string]: any;
  };
};

type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <Layout>
      <Head>
        <title>Our Projects | Rovani Projects</title>
        <meta name="description" content="Professional consultancy services to help your business grow" />
      </Head>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
            <p className="text-xl text-gray-600">
              We offer a range of professional projects to help your business thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="bg-white rounded-lg shadow-md p-8 transition-all hover:shadow-lg"
              >
                <h2 className="text-2xl font-semibold mb-4">{project.frontmatter.title}</h2>
                <p className="text-gray-600 mb-4">{project.frontmatter.description}</p>
                <span className="text-blue-600 font-medium">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAllContent('projects');

  return {
    props: {
      projects,
    },
  };
};