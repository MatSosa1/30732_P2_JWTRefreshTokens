import 'dotenv/config';
import * as Sentry from '@sentry/node';
import pkg from './package.json' with { type: 'json' };

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV || 'development',
  release: process.env.SENTRY_RELEASE || `jwt@${pkg.version}`,
  tracesSampleRate: 0,
  sampleRate: 1.0,  // 100% de errores
  sendDefaultPii: false,
  enabled: Boolean(process.env.SENTRY_DSN),

  beforeSend(event) {
    if (event.request?.cookies) delete event.request?.cookies;
    if (event.request?.headers?.cookie) delete event.request?.headers?.cookie;

    return event;
  }
});
