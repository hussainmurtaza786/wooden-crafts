import type { Metadata } from "next";
import "@/theme/globals.css";
import RootLayout from "@/components/Layout";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/app-config";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION
  },
};

export default RootLayout
