import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(import.meta.env.SITE, 'src/content/letters');

export async function getStaticPaths() {
  const files = fs.readdirSync(contentDirectory);
  return files.map((file) => {
    const filePath = path.join(contentDirectory, file);
    const { data: frontmatter } = matter(fs.readFileSync(filePath, 'utf-8'));
    return {
      params: {
        slug: frontmatter.slug,
      },
    };
  });
}

export async function get({ slug }) {
  const filePath = path.join(contentDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content, data: frontmatter } = matter(fileContent);

  return {
    props: {
      content,
      frontmatter,
    },
  };
}
