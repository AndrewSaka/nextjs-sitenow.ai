import Link from "next/link";
import Image from "next/image";
import SnNavbar from "@/components/staging/sn-navbar";
import SnFooter from "@/components/staging/sn-footer";
import { Badge } from "@/components/ui/badge";

const featuredPost = {
  image: "/assets/blog-hero.jpg",
  tags: ["AI Website Builder", "No-Code", "Trends"],
  title: "How Much Does It Cost to Build a Website in 2026? Way Less Than You Think",
  excerpt:
    "Dev agencies still quote $10K–$100K. But AI costs dropped 20x in 2026, and AI website builders now handle the full stack. Here's what it actually costs today.",
  date: "April 5, 2026",
  readTime: "8 min read",
  slug: "/blog/website-cost-2026",
};

const posts = [
  {
    image: "/assets/blog-thumb-1.jpg",
    tags: ["AI Tools", "Comparison"],
    title: "Top 5 AI Website Builders Compared: Which One Is Right for You?",
    excerpt:
      "We tested the leading AI website builders head-to-head. Here's how they stack up on speed, quality, and customisation.",
    date: "April 3, 2026",
    readTime: "12 min read",
    slug: "/blog/ai-builders-compared",
  },
  {
    image: "/assets/blog-thumb-3.jpg",
    tags: ["Tutorial", "No-Code"],
    title: "From Idea to Live Website in Under 5 Minutes: A Step-by-Step Guide",
    excerpt:
      "Follow along as we take a rough concept and turn it into a fully deployed, responsive website using AI. No coding required.",
    date: "March 30, 2026",
    readTime: "6 min read",
    slug: "/blog/idea-to-website",
  },
  {
    image: "/assets/blog-thumb-1.jpg",
    tags: ["Small Business", "AI"],
    title: "Why Every Small Business Needs an AI-Powered Website in 2026",
    excerpt:
      "Static brochure sites are losing the attention war. See the data on why small businesses are switching to intelligent, AI-generated websites.",
    date: "March 27, 2026",
    readTime: "10 min read",
    slug: "/blog/small-business-ai",
  },
  {
    image: "/assets/blog-thumb-3.jpg",
    tags: ["SEO", "AI"],
    title: "AI-Generated Websites and SEO: What You Need to Know",
    excerpt:
      "Do AI-built websites rank on Google? We break down the SEO implications and best practices for sites generated with AI tools.",
    date: "March 22, 2026",
    readTime: "9 min read",
    slug: "/blog/ai-seo",
  },
  {
    image: "/assets/blog-thumb-1.jpg",
    tags: ["Design", "Trends"],
    title: "The Death of Templates: How AI Is Changing Web Design Forever",
    excerpt:
      "Cookie-cutter templates are on their way out. AI now generates unique, bespoke designs tailored to your brand in seconds.",
    date: "March 18, 2026",
    readTime: "7 min read",
    slug: "/blog/death-of-templates",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <SnNavbar forceLight />

      <section className="container mx-auto px-4 mb-16 pt-[100px] md:pt-[130px]">
        <Link href={featuredPost.slug} className="block group">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src={featuredPost.image}
              alt={featuredPost.title}
              width={1200}
              height={600}
              priority
              className="w-full h-[320px] md:h-[480px] object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
          <div className="mt-6 max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-3">
              {featuredPost.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs font-medium">
                  {tag}
                </Badge>
              ))}
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight mb-3 group-hover:text-primary transition-colors">
              {featuredPost.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {featuredPost.excerpt}
            </p>
            <p className="text-sm text-muted-foreground">
              {featuredPost.date} · {featuredPost.readTime}
            </p>
          </div>
        </Link>
      </section>

      <section className="container mx-auto px-4 pb-24">
        <h2 className="text-2xl font-bold text-foreground mb-10">Latest articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={post.slug} className="group block">
              <div className="rounded-xl overflow-hidden mb-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={512}
                  className="w-full h-48 object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="flex flex-wrap gap-1.5 mb-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-[11px] font-medium">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h3 className="font-bold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                {post.excerpt}
              </p>
              <p className="text-xs text-muted-foreground">
                {post.date} · {post.readTime}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <SnFooter />
    </div>
  );
}
