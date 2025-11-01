/** @type {import('next').NextConfig} */
const nextConfig = {
  // не публикуем source maps в проде
  productionBrowserSourceMaps: false,

  // заголовки для безопасности и noindex
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // запрет индексации поисковиками
          { key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive, nosnippet' },

          // базовые security headers
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'no-referrer' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // простая CSP: только наш домен и кошелёк/WalletConnect
          { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self' https://rpc.ankr.com https://mainnet.base.org https://*.walletconnect.com https://*.walletconnect.org; frame-ancestors 'none';" },
          // HSTS (включится на прод-домене с HTTPS)
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
        ],
      },
    ]
  },
}

export default nextConfig