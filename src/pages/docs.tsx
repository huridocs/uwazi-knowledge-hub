import React from 'react';
import { Redirect } from '@docusaurus/router';

// The home page (/) is the docs hub, so the old /docs landing is redundant.
// A page-based redirect works in both dev (`npm start`) and production,
// unlike plugin-client-redirects which only runs at build time.
export default function DocsRedirect(): React.JSX.Element {
  return <Redirect to="/" />;
}
