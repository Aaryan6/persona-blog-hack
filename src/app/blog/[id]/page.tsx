import BlogIdPage from "@/components/blog-id-page";

type Params = Promise<{ id: string }>;

export default async function BlogPost({ params }: { params: Params }) {
  const { id } = await params;
  return <BlogIdPage id={id} />;
}
