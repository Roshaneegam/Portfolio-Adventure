import { Helmet } from "react-helmet-async";
import { PERSONAL_INFO, SEO_METADATA } from "../../data/profile.data.js";

const BASE_URL = PERSONAL_INFO.canonicalUrl || "https://your-portfolio-domain.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}${SEO_METADATA.ogImage}`;

export default function SEOHead({
  title,
  description = SEO_METADATA.description,
  canonical = "/",
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
}) {
  const fullTitle = title
    ? `${title} — ${PERSONAL_INFO.shortName}`
    : SEO_METADATA.defaultTitle;

  const fullCanonical = `${BASE_URL}${canonical}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      {!noIndex && <link rel="canonical" href={fullCanonical} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
