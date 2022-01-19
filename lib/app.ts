import { opine, renderFile } from "../deps.ts";
import { relativePath } from "../lib/utils/file.ts";

const app = opine();
const relative = relativePath(import.meta);

app.set("views", relative("../views"));
app.engine(".pug", renderFile);

export { app };
