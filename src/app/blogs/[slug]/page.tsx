import BlogContent from "@/app/components/BlogContent";
import BlogHeader from "@/app/components/BlogHeader";
import { getBlog } from "@/app/utils/blogData";
import { createHighlighter } from "shiki";
import { JSDOM } from "jsdom";
import { Metadata } from "next";
import { stripHtmlAndDecode } from "@/app/utils/helpers";
import Footer from "@/app/components/Footer";
import SocialIcons from "@/app/components/SocialIcons";

type TProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: TProps): Promise<Metadata> {
  const blog = getBlog(params.slug);
  if (!blog) {
    return {
      title: "Blog Not Found - Portfolio",
      description: "The requested blog post could not be found.",
    };
  }

  const description = stripHtmlAndDecode(blog.excerpt.rendered);
  return {
    title: blog.title.rendered + " - Shoaib Ahmad",
    description,
    keywords: blog.title.rendered,
    alternates: {
      canonical: `https://alvinchang.dev/blogs/${blog.slug}`,
    },
    openGraph: {
      title: blog.title.rendered + " - Shoaib Ahmad",
      description,
      url: `https://alvinchang.dev/blogs/${blog.slug}`,
      type: "article",
      siteName: "Shoaib Ahmad",
      images: [
        {
          url: "/horizontal-logo.png",
          width: 1100,
          height: 300,
          alt: "Shoaib Ahmad Portfolio Logo",
        },
      ],
    },
  };
}

export default async function BlogPage({ params }: TProps) {
  const blog = getBlog(params.slug);
  if (!blog) {
    return (
      <div className="w-full flex justify-center">
        <main className="w-full min-h-screen max-w-[600px] p-2">
          <BlogHeader />
          <h1 className="text-2xl mt-8">Blog Post Not Found</h1>
          <p className="mt-4">The requested blog post could not be found.</p>
          <Footer noAnimate />
          <SocialIcons noAnimate />
        </main>
      </div>
    );
  }

  // Function to highlight code blocks
  const highlightCodeBlocks = async (htmlContent: string) => {
    const highlighter = await createHighlighter({
      langs: ["javascript"],
      themes: ["ayu-dark"],
    });
    const dom = new JSDOM(htmlContent);
    const document = dom.window.document;

    const blocks = Array.from(document.querySelectorAll("pre code"));
    await Promise.all(
      blocks.map(async (block: any) => {
        block.innerHTML = block.innerHTML.replaceAll("<br>", "\n");
        const content = block.textContent;

        const highlighted = await highlighter.codeToHtml(content || "", {
          lang: "javascript",
          theme: "ayu-dark",
        });
        block.parentElement.innerHTML = highlighted;
      })
    );

    // Dispose of the highlighter
    highlighter.dispose();

    return document.body.innerHTML;
  };

  // Preprocess the content to highlight code blocks
  const highlightedContent = await highlightCodeBlocks(blog.content.rendered);

  return (
    <div className="w-full flex justify-center">
      <main className="w-full min-h-screen max-w-[600px] p-2">
        <BlogHeader />
        {blog && <BlogContent blog={blog} content={highlightedContent} />}
        <Footer noAnimate />
        <SocialIcons noAnimate />
      </main>
    </div>
  );
}
