'use client';
import BlogPost from '@/src/views/BlogPost';
export default function BlogPostClient({ initialPost, initialRelated }) {
  return <BlogPost initialPost={initialPost} initialRelated={initialRelated} />;
}
