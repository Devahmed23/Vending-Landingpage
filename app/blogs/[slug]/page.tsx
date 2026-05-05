import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

type Props = {
  params: { slug: string }
}

export default function BlogPostPage({ params }: Props) {
  const title = params.slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <article>
          <header className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">{title}</h1>
            <p className="text-sm text-foreground/60">Published — Placeholder article</p>
          </header>

          <div className="w-full h-64 rounded-lg overflow-hidden mb-6 bg-muted">
            <Image src="/blog-1.jpg" alt={`Featured image for ${title}`} width={1200} height={600} quality={85} className="w-full h-full object-cover" />
          </div>

          <div className="prose prose-invert max-w-none text-foreground/80">
            <p>This is a placeholder article page for <strong>{title}</strong>. Replace this content with the real blog post content or a CMS-driven renderer.</p>
            <p>If you want, I can scaffold a blog CMS, MDX support, or static posts next.</p>
          </div>

          <div className="mt-8">
            <Link href="/blogs">
              <button className="px-4 py-2 rounded-md bg-primary text-white">Back to articles</button>
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
