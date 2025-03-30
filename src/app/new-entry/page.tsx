import NewEntryPage from "@/components/new-entry-page";
import { Suspense } from "react";

export default async function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NewEntryPage />
    </Suspense>
  );
}
