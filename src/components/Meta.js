import NextHead from "next/head"

export default function Meta({
	title = "Code & Pixels", 
	description = "Explore the hybrid world of UX Engineering with Adekunle Oduye & Kelly Harrop.",
	keywords = "podcast, ux engineer, design engineer, design systems",
	ogUrl = "",
	ogType = "website",
	ogTitle = title,
	ogDescription = description,
	ogImg = "/images/og-logo.png",
	ogSiteName = "Code & Pixels",
}) {
	return (
		<NextHead>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			<meta name="msapplication-TileColor" content="#191B1E" />
			<meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
			<meta name="theme-color" content="#191B1E"></meta>

			{/* Favicon */}
			<link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
			<link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
			<link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
			<link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
			<link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
			<link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
			<link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
			<link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
			<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
			<link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
			<link rel="manifest" href="/favicon/manifest.json" />
			<link rel="icon" href="/favicon/favicon.ico" />

			{/* <!-- Facebook Meta Tags --> */}
			<meta property="og:url" content={`https://codeandpixels.fm/${ogUrl}`} />
			<meta property="og:type" content={ogType} />
			<meta property="og:title" content={ogTitle} />
			<meta property="og:description" content={ogDescription} />
			<meta property="og:image" content={`https://codeandpixels.fm/${ogImg}`} />
			<meta property="og:site_name" content={ogSiteName} />

			{/* <!-- Twitter Meta Tags --> */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={`https://codeandpixels.fm/${ogUrl}`} />
			<meta name="twitter:title" content={ogTitle} />
			<meta name="twitter:description" content={ogDescription} />
			<meta name="twitter:image" content={`https://codeandpixels.fm/${ogImg}`} />
		</NextHead>
	)
}
