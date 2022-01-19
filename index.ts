import { app } from "./lib/app.ts";
import { config } from "./lib/config.ts";

app.get("/", (_, res) => {
  res.render("index.pug");
});

app.listen(
  parseInt(config.PORT),
  () => console.log(`server has started on http://localhost:${config.PORT} 🚀`),
);
