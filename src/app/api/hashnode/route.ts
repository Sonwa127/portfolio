import { NextResponse } from "next/server";

export const revalidate = 3600;

const QUERY = `{
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
}`;

// Hashnode blocks direct browser calls (CORS), so the site asks this route and
// the route asks Hashnode from the server.
export async function GET() {
  try {
    const res = await fetch("https://gql.hashnode.com/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: QUERY }),
      next: { revalidate: 3600 },
    });
    if (!res.ok) return NextResponse.json({ edges: [] });
    const json = await res.json();
    const edges = json?.data?.publication?.posts?.edges ?? [];
    return NextResponse.json({ edges });
  } catch {
    return NextResponse.json({ edges: [] });
  }
}
