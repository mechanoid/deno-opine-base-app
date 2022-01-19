import { dirname, join } from "../../deps.ts";

interface Meta {
  url: string;
}

const __dirname = dirname(import.meta.url);

export const relativePath = (meta: Meta) =>
  (path: string) => join(dirname(meta.url), path);
