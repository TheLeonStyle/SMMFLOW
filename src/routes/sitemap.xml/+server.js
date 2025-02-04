export async function GET() {
	const pages = [
		{ loc: 'http://localhost:5173/', priority: '1.0' },
		{ loc: 'http://localhost:5173/legal/terms-of-service', priority: '0.7' },
		{ loc: 'http://localhost:5173/legal/privacy-policy', priority: '0.7' },
		{ loc: 'http://localhost:5173/legal/cookies', priority: '0.7' }
	];

	// Формируем XML
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
			.map(
				(page) => `
      <url>
        <loc>${page.loc}</loc>
        <priority>${page.priority}</priority>
      </url>`
			)
			.join('')}
  </urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}
