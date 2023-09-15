import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "@/sanity/schemas";

const config = defineConfig({
  projectId: "utm3wtak",
  dataset: "production",
  title: "Website",
  apiVersion: "2023-09-06",
  basePath: "/studio",
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
});

export default config;
