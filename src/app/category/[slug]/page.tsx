import CategorySlugPage from "@/components/category-slug-page";

type Params = Promise<{ slug: string }>;

export default async function CategoryPage({ params }: { params: Params }) {
  const { slug } = await params;

  return <CategorySlugPage slug={slug} />;
}
