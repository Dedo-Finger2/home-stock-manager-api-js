import * as v from "valibot";

const envSchema = v.object({
  PORT: v.pipe(v.string(), v.transform(Number)),
  DATABASE_URL: v.pipe(v.string(), v.url())
});

const _env = v.safeParse(envSchema, process.env);

if (_env.success !== true) {
  throw new TypeError("Invalid .env file.");
}

export const env = _env.output;
