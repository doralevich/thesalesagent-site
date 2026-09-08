import type { Metadata } from "next";
import { AudiencePage } from "../components/AudiencePage";
import { getAudience } from "@/lib/audiences";
import { pageMeta } from "@/lib/site";

const audience = getAudience("for-sales-leaders")!;

export const metadata: Metadata = pageMeta({
  title: audience.metaTitle,
  description: audience.metaDescription,
  path: "/for-sales-leaders",
  keywords: audience.keywords,
});

export default function Page() {
  return <AudiencePage audience={audience} />;
}
