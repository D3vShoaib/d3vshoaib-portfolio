import { TPost } from "./types";

const blogs: TPost[] = [
  {
    id: 1,
    date: "2024-02-01",
    date_gmt: "2024-02-01",
    guid: { rendered: "https://example.com/blog/sample-blog-post" },
    modified: "2024-02-01",
    modified_gmt: "2024-02-01",
    slug: "sample-blog-post",
    status: "publish",
    type: "post",
    link: "https://example.com/blog/sample-blog-post",
    title: {
      rendered: "Welcome to My Portfolio",
    },
    content: {
      rendered: `<p>Welcome to my portfolio website! Here you'll find examples of my work and technical expertise.</p>
                      <p>Feel free to explore my projects and get in touch if you'd like to collaborate!</p>`,
      protected: false,
    },
    excerpt: {
      rendered:
        "Welcome to my portfolio website! Here you'll find examples of my work and technical expertise.",
      protected: false,
    },
    author: 1,
    featured_media: 0,
    comment_status: "closed",
    ping_status: "closed",
    sticky: false,
    template: "",
    format: "standard",
    meta: {
      footnotes: "",
    },
    categories: [1],
    tags: [],
    class_list: [],
    _links: {
      self: [{ href: "https://example.com/wp-json/wp/v2/posts/1" }],
      collection: [{ href: "https://example.com/wp-json/wp/v2/posts" }],
      about: [{ href: "https://example.com/wp-json/wp/v2/types/post" }],
      author: [
        { embeddable: true, href: "https://example.com/wp-json/wp/v2/users/1" },
      ],
      replies: [
        {
          embeddable: true,
          href: "https://example.com/wp-json/wp/v2/comments?post=1",
        },
      ],
      "version-history": [
        {
          count: 1,
          href: "https://example.com/wp-json/wp/v2/posts/1/revisions",
        },
      ],
      "predecessor-version": [
        {
          id: 0,
          href: "https://example.com/wp-json/wp/v2/posts/1/revisions/0",
        },
      ],
      "wp:attachment": [
        { href: "https://example.com/wp-json/wp/v2/media?parent=1" },
      ],
      "wp:term": [
        {
          taxonomy: "category",
          embeddable: true,
          href: "https://example.com/wp-json/wp/v2/categories",
        },
      ],
      curies: [
        {
          name: "wp",
          href: "https://api.w.org/{rel}",
          templated: true,
        },
      ],
    },
  },
];

export function getBlogs() {
  return blogs;
}

export function getBlog(slug: string) {
  return blogs.find((blog) => blog.slug === slug) || null;
}
