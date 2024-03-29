// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

const isSentryDisabled = process.env.SENTRY_DISABLED === 'true';
if (!isSentryDisabled) {
  Sentry.init({
    dsn: "https://e49d28a8d525a227f21481f4d5df8689@o4506879615303680.ingest.us.sentry.io/4506879617662976",

    // Adjust this value in production, or use tracesSampler for greater control
    tracesSampleRate: 1,

    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false,
  })
};
