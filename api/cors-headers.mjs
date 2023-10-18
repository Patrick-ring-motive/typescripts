
export function addCorsHeaders(res) {
  res.removeHeader('Access-Control-Allow-Origin');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.removeHeader('Access-Control-Allow-Methods');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.removeHeader('Access-Control-Allow-Headers');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.removeHeader('Access-Control-Allow-Credentials');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.removeHeader('Access-Control-Max-Age');
  res.setHeader('Access-Control-Max-Age', '86400');
  res.removeHeader('Referrer-Policy');
  res.setHeader('Referrer-Policy', 'unsafe-url');
  res.removeHeader('Content-Security-Policy');
  res.removeHeader('content-security-policy-report-only');
  res.removeHeader('X-Frame-Options');
  res.removeHeader('Strict-Transport-Security');
  res.removeHeader('X-Content-Type-Options');
  res.removeHeader('Cross-Origin-Embedder-Policy');
  res.removeHeader('Cross-Origin-Resource-Policy');
  res.removeHeader('Cross-Origin-Opener-Policy');
  return res;
}