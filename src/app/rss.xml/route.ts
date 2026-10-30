import { NextResponse } from "next/server"

export async function GET() {
  const res = await fetch("https://dev.to/api/articles?username=sonwa&per_page=20")
  const articles = await res.json()

  const items = articles.map((article: {
    title: string
    url: string
    description: string
    published_at: string
  }) => `
    <item>
      <title>${article.title}</title>
      <link>${article.url}</link>
      <description>${article.description}</description>
      <pubDate>${new Date(article.published_at).toUTCString()}</pubDate>
      <guid>${article.url}</guid>
    </item>`
  ).join("")

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Ann Chisom Sokwue</title>
    <link>https://annchisom.com</link>
    <description>AI automation engineer writing about n8n, AI agents, workflow automation, and building systems that run while you sleep.</description>
    <language>en-us</language>
    <atom:link href="https://annchisom.com/rss.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`

  return new NextResponse(feed, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}