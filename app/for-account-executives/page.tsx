import type { Metadata } from "next";
import { AudiencePage } from "../components/AudiencePage";
import { getAudience } from "@/lib/audiences";
import { pageMeta } from "@/lib/site";

const audience = getAudience("for-account-executives")!;

export const metadata: Metadata = pageMeta({
  title: audience.metaTitle,
  description: audience.metaDescription,
  path: "/for-account-executives",
  keywords: audience.keywords,
});

export default function Page() {
  return <AudiencePage audience={audience} />;
}
