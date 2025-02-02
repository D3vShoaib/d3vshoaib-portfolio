import { MetadataRoute } from "next";
import { getBlogs } from "./utils/blogData";
import { TPost } from "./utils/types";

export async function generateSitemaps() {
  const sitemapIndexes = [{ id: 0 }];

  return sitemapIndexes;
}

export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  const posts = getBlogs();

  return [
    {
      url: "https://alvinchang.dev",
      lastModified: new Date(),
    },

    ...posts.map((post: TPost) => ({
      url: `https://alvinchang.dev/blogs/${post.slug}`,
      lastModified: new Date(post.modified_gmt),
      priority: 0.8,
    })),
  ];
}
