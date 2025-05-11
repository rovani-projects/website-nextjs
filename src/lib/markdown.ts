import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

// Base frontmatter interface for common fields
interface BaseFrontmatter {
  title: string;
}

// Project-specific frontmatter
interface ProjectFrontmatter extends BaseFrontmatter {
  date?: string; // Store dates as ISO strings from the beginning
  client?: string;
  industry?: string;
}

// Service-specific frontmatter
interface ServiceFrontmatter extends BaseFrontmatter {
  icon?: string;
  order?: number;
}

// Page-specific frontmatter (simplest case)
interface PageFrontmatter extends BaseFrontmatter {
  description: string;
}

// Union type for all frontmatter types
type ContentFrontmatter = ProjectFrontmatter | ServiceFrontmatter | PageFrontmatter;

// Type guard functions to determine frontmatter type
function isProjectFrontmatter(frontmatter: BaseFrontmatter): frontmatter is ProjectFrontmatter {
  return "client" in frontmatter || "industry" in frontmatter;
}

function isServiceFrontmatter(frontmatter: BaseFrontmatter): frontmatter is ServiceFrontmatter {
  return "icon" in frontmatter || "order" in frontmatter;
}

const contentDirectory = path.join(process.cwd(), "content");

export function getContentBySlug(folder: string, slug: string) {
  const fullPath = path.join(contentDirectory, folder, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // Handle date strings appropriately
  if (data.date && typeof data.date === "object" && data.date instanceof Date) {
    data.date = data.date.toISOString();
  }

  return {
    slug,
    frontmatter: data as ContentFrontmatter,
    content,
  };
}

export function getAllContent(folder: string) {
  const folderPath = path.join(contentDirectory, folder);

  if (!fs.existsSync(folderPath)) {
    console.warn(`Content directory not found: ${folderPath}`);
    return [];
  }

  const filenames = fs.readdirSync(folderPath);

  return filenames
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      try {
        return getContentBySlug(folder, slug);
      } catch (error) {
        console.error(`Error processing ${slug}:`, error);
        return null;
      }
    })
    .filter((item): item is NonNullable<typeof item> => item !== null)
    .sort((a, b) => {
      // Different sorting based on content type
      if (isProjectFrontmatter(a.frontmatter) && isProjectFrontmatter(b.frontmatter)) {
        // For projects, sort by date
        if (a.frontmatter.date && b.frontmatter.date) {
          return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
        }
      } else if (isServiceFrontmatter(a.frontmatter) && isServiceFrontmatter(b.frontmatter)) {
        // For services, sort by order
        if (a.frontmatter.order !== undefined && b.frontmatter.order !== undefined) {
          return a.frontmatter.order - b.frontmatter.order;
        }
      }

      // Default sorting by title
      return a.frontmatter.title.localeCompare(b.frontmatter.title);
    });
}

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
