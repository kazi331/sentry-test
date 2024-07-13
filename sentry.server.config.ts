import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://3bb84f0627cc96f31254f887419865f0@o4507581599514624.ingest.us.sentry.io/4507581604233216",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
