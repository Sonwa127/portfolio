"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Article = {
  id: string;
  title: string;
  description: string;
  url: string;
  cover_image: string | null;
  published_at: string;
  reading_time_minutes: number;
  tag_list: string[];
  source: "devto" | "hashnode";
};

export default function Blog() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      const all: Article[] = [];

      try {
        const devRes = await fetch("https://dev.to/api/articles?username=sonwa&per_page=6");
        const devData = await devRes.json();
        if (Array.isArray(devData)) {
          devData.forEach((a: any) => {
            all.push({
              id: `devto-${a.id}`,
              title: a.title || "",
              description: a.description || "",
              url: a.url || "",
              cover_image: a.cover_image || null,
              published_at: a.published_at || "",
              reading_time_minutes: a.reading_time_minutes || 3,
              tag_list: a.tag_list || [],
              source: "devto",
            });
          });
        }
      } catch {}

      try {
        const hnRes = await fetch("https://gql.hashnode.com/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: `{
              publication(host: "sonwa.hashnode.dev") {
                posts(first: 6) {
                  edges {
                    node {
                      id title brief url
                      coverImage { url }
                      publishedAt
                      readTimeInMinutes
                      tags { name }
                    }
                  }
                }
              }
            }`,
          }),
        });
        const hnData = await hnRes.json();
        const edges = hnData?.data?.publication?.posts?.edges || [];
        edges.forEach((e: any) => {
          all.push({
            id: `hashnode-${e.node.id}`,
            title: e.node.title || "",
            description: e.node.brief || "",
            url: e.node.url || "",
            cover_image: e.node.coverImage?.url || null,
            published_at: e.node.publishedAt || "",
            reading_time_minutes: e.node.readTimeInMinutes || 3,
            tag_list: e.node.tags?.map((t: any) => t.name) || [],
            source: "hashnode",
          });
        });
      } catch {}

      all.sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());
      setArticles(all);
      setLoading(false);
    };

    fetchAll();
  }, []);

  return (
    <section id="blog" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <span className="font-mono-custom text-accent text-[11px] tracking-[0.2em] uppercase block mb-3">
          writing
        </span>
        <h2 className="font-display text-3xl font-bold text-text-primary mb-4">
          Articles
        </h2>
        <p className="text-text-secondary mb-12 max-w-lg">
          Thoughts on automation, AI systems, and the ops problems most businesses
          do not know they have.
        </p>

        {loading ? (
          <div className="grid md:grid-cols-3 gap-5">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-surface border border-border rounded-lg overflow-hidden">
                <div className="h-40 bg-card animate-pulse" />
                <div className="p-5 space-y-3">
                  <div className="h-3 bg-card rounded animate-pulse w-1/3" />
                  <div className="h-4 bg-card rounded animate-pulse w-full" />
                  <div className="h-4 bg-card rounded animate-pulse w-4/5" />
                </div>
              </div>
            ))}
          </div>
        ) : articles.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-5">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-surface border border-border rounded-lg overflow-hidden hover:border-accent transition-colors"
              >
                {article.cover_image ? (
                  <div className="h-40 overflow-hidden">
                    <img
                      src={article.cover_image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="h-40 bg-card flex items-center justify-center">
                    <span className="font-mono-custom text-[11px] text-text-muted uppercase tracking-widest">
                      {article.source === "devto" ? "Dev.to" : "Hashnode"}
                    </span>
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex flex-wrap gap-1.5">
                      {article.tag_list.slice(0, 2).map((tag) => (
                        <span key={tag} className="font-mono-custom text-[10px] text-accent bg-[#0F2D20] border border-[#1A4A32] px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="font-mono-custom text-[9px] text-text-muted border border-border px-2 py-0.5 rounded">
                      {article.source === "devto" ? "Dev.to" : "Hashnode"}
                    </span>
                  </div>
                  <h3 className="font-display font-medium text-text-primary text-sm leading-snug mb-2 group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  {article.description && (
                    <p className="text-text-muted text-xs leading-relaxed line-clamp-2">
                      {article.description}
                    </p>
                  )}
                  <p className="font-mono-custom text-[10px] text-text-muted mt-3">
                    {article.reading_time_minutes} min read
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="font-mono-custom text-[11px] text-text-muted">
            No articles found. Check back soon.
          </p>
        )}

        <div className="mt-8 flex justify-center gap-6">
          <Link href="https://dev.to/sonwa" target="_blank" rel="noopener noreferrer" className="font-mono-custom text-[11px] text-accent hover:underline">
            View all on Dev.to
          </Link>
          <Link href="https://sonwa.hashnode.dev" target="_blank" rel="noopener noreferrer" className="font-mono-custom text-[11px] text-accent hover:underline">
            View all on Hashnode
          </Link>
        </div>
      </div>
    </section>
  );
}
