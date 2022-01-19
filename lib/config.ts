import { dotenv } from "../deps.ts";
import { withoutUnset } from "./utils/object.ts";

const { env } = Deno;
const { PORT } = dotenv();
export const config = Object.assign(
  {},
  { PORT }, // uses dotenv as default, but let's env override such settings
  withoutUnset({
    PORT: env.get("PORT"),
  }),
);
