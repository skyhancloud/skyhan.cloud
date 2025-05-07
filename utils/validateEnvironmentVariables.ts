import { z } from 'zod';

const envVariables = z.object({
  NODE_ENV: z.enum(['development', 'production']),
  SPOTIFY_CLIENT_ID: z.string().optional(),
  SPOTIFY_CLIENT_SECRET: z.string().optional(),
  SPOTIFY_REDIRECT_URL: z.string().url().optional(),
  SPOTIFY_REFRESH_TOKEN: z.string().optional(),
  RYBBIT_ANALYTICS_SITE_ID: z.string().optional(),
  RYBBIT_ANALYTICS_URL: z.string().url().optional()
});

export default function validateEnvironmentVariables() {
  const parsedEnv = envVariables.safeParse(process.env);

  if (!parsedEnv.success) {
    console.error('Invalid environment variables:');
    console.error(parsedEnv.error.format());

    throw new Error('Invalid environment variables');
  }
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface ProcessEnv extends z.infer<typeof envVariables> { }
  }
}