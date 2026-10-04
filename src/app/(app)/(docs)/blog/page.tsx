import type { Metadata } from "next";

import { PostItem } from "@/features/blog/components/post-item";
import { getAllPosts } from "@/features/blog/data/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "A collection of articles on development, design, and ideas.",
};

export default function Page() {
  const allPosts = getAllPosts();

  return (
    <>
      <div className="screen-line-after px-4">
        <h1 className="font-pixel text-5xl lowercase">blog</h1>
      </div>

      <div className="screen-line-after p-4">
        <p className="micro-label text-balance">{metadata.description}</p>
      </div>

      <div className="relative pt-4">
        <div className="absolute inset-0 -z-1 grid grid-cols-1 gap-3 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-edge"></div>
          <div className="border-l border-edge"></div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {allPosts.map((post, index) => (
            <PostItem
              key={post.slug}
              post={post}
              shouldPreloadImage={index <= 4}
            />
          ))}
        </div>
      </div>

      <div className="h-4" />
    </>
  );
}
