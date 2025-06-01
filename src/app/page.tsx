import { PAGES, SITE_DESCRIPTION, SITE_TITLE } from "@/app-config";
import { Box, Heading, Text } from "@chakra-ui/react";
import { Metadata } from "next";
import HomePage from './home/page'


export const metadata: Metadata = {
  title: `${PAGES.Home.title} | ${SITE_TITLE}`,
  description: SITE_DESCRIPTION,
};

export default HomePage;



