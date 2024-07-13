import { withSentryConfig } from "@sentry/nextjs";

const nextConfig = {};

// Make sure adding Sentry options is the last code to run before exporting
export default withSentryConfig(nextConfig, {
    org: "kazi-zi",
    project: "approveage",

    // An auth token is required for uploading source maps.
    authToken: process.env.SENTRY_AUTH_TOKEN,

    silent: false, // Can be used to suppress logs
});
