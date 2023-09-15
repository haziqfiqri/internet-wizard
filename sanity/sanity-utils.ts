import { Article } from "@/types/Article";
import { createClient, groq } from "next-sanity";

export async function getArticles(): Promise<Article[]> {
  const client = createClient({
    projectId: "utm3wtak",
    dataset: "production",
    apiVersion: "2023-09-06",
    useCdn: false,
  });

  return client.fetch(
    groq`*[_type == "article"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }
    `
  );
}
