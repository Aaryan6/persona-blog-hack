import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-[#f8f8f6]">
      {/* Header Section */}
      <section className="container mx-auto px-4 pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <Skeleton className="h-12 w-48 mx-auto mb-4" />
          <Skeleton className="h-6 w-full max-w-lg mx-auto mb-8" />

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Skeleton className="h-12 w-full rounded-full" />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} className="h-10 w-24 rounded-full" />
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-white rounded-3xl overflow-hidden border border-[#e6e6e6]"
            >
              <div className="aspect-[4/3] relative">
                <Skeleton className="h-full w-full" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Skeleton className="h-6 w-20 rounded-full" />
                  <Skeleton className="h-4 w-16" />
                </div>
                <Skeleton className="h-8 w-full mb-3" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-4" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-10 w-10 rounded-full" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
