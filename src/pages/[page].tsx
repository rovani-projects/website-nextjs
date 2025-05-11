import Layout from '@/components/layout/Layout';
import { getAllContent, getContentBySlug, markdownToHtml } from '@/lib/markdown';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

type PageProps = {
    content: string;
    frontmatter: {
        title: string;
        description: string;
        [key: string]: unknown;
    };
    slug: string;
};

export default function Page({ content, frontmatter }: PageProps) {
    return (
        <Layout>
            <Head>
                <title>{`${frontmatter.title} | Rovani Projects`}</title>
                <meta name="description" content={frontmatter.description} />
            </Head>

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
    const pages = getAllContent('pages');

    return {
        paths: pages.map((page) => ({
            params: {
                page: page.slug,
            },
        })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    if (!params || !params.page) {
        return {
            notFound: true, // Return 404 page if params or params.page is undefined
        };
    }

    const pageSlug = params.page as string;

    try {
        const { content, frontmatter } = getContentBySlug('pages', pageSlug);
        const htmlContent = await markdownToHtml(content);

        return {
            props: {
                content: htmlContent,
                frontmatter,
            },
        };
    } catch (error) {
        console.error(`Error loading page ${pageSlug}:`, error);
        return {
            notFound: true, // Return 404 page if there's an error loading the page
        };
    }
};