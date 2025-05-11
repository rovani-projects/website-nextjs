import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export function getContentBySlug(folder: string, slug: string) {
  const fullPath = path.join(contentDirectory, folder, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: data,
    content,
  };
}

export function getAllContent(folder: string) {
  const folderPath = path.join(contentDirectory, folder);
  const filenames = fs.readdirSync(folderPath);

  return filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    return getContentBySlug(folder, slug);
  }).sort((a, b) => {
    // Sort by date if available
    if (a.frontmatter.date && b.frontmatter.date) {
      return new Date(b.frontmatter.date).getTime() -
             new Date(a.frontmatter.date).getTime();
    }
    // Sort by order if available
    if (a.frontmatter.order !== undefined && b.frontmatter.order !== undefined) {
      return a.frontmatter.order - b.frontmatter.order;
    }
    return 0;
  });
}

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}