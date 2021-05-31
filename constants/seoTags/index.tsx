import { DefaultSeo } from 'next-seo';
import React from 'react';

function SeoTags() {
	const siteName = 'New Project';
	const title = 'New project 202X';
	const description = 'This is my new awesome project!';

	return (
		<DefaultSeo
			title={title}
			description={description}
			canonical="https://www.canonical.ie/"
			openGraph={{
				url: 'https://www.url.ie/a',
				title,
				description,
				type: 'website',
				images: [
					{
						url: 'https://www.example.ie/og-image-01.jpg',
						width: 800,
						height: 600,
						alt: 'Og Image Alt'
					}
				],
				site_name: siteName
			}}
			twitter={{
				handle: '@content_username',
				site: '@website_username',
				cardType: 'summary_large_image'
			}}
		/>
	);
}

export default SeoTags;
