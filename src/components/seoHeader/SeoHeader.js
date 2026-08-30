import React from "react";
import { Helmet } from "react-helmet";
import {
  greeting,
  seo,
  socialMediaLinks,
  experience,
  contactPageData,
  certifications,
} from "../../portfolio.js";

function SeoHeader() {
  let sameAs = [];
  socialMediaLinks
    .filter(
      (media) =>
        !(media.link.startsWith("tel") || media.link.startsWith("mailto"))
    )
    .forEach((media) => {
      sameAs.push(media.link);
    });

  let mail = socialMediaLinks
    .find((media) => media.link.startsWith("mailto"))
    ?.link.substring("mailto:".length);
  let job = experience.sections?.find((section) => section.work)
    ?.experiences?.[0];

  let credentials = [];
  if (certifications && certifications.certifications) {
    certifications.certifications.forEach((certification) => {
      credentials.push({
        "@context": "https://schema.org",
        "@type": "EducationalOccupationalCredential",
        url: certification.certificate_link,
        name: certification.title,
        description: certification.subtitle,
      });
    });
  }
  const data = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: greeting.title,
    url: seo?.og?.url,
    email: mail,
    telephone: contactPageData.phoneSection?.subtitle,
    sameAs: sameAs,
    jobTitle: job?.title,
    worksFor: job?.company
      ? {
          "@type": "Organization",
          name: job.company,
        }
      : undefined,
    address: {
      "@type": "PostalAddress",
      addressLocality: contactPageData.addressSection?.locality,
      addressRegion: contactPageData.addressSection?.region,
      addressCountry: contactPageData.addressSection?.country,
      postalCode: contactPageData.addressSection?.postalCode,
      streetAddress: contactPageData.addressSection?.streetAddress,
    },
    hasCredential: credentials,
  };
  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo?.og?.title || seo.title} />
      <meta property="og:type" content={seo?.og?.type || "website"} />
      <meta
        property="og:url"
        content={seo?.og?.url || "https://huzaifasafdar310.github.io/"}
      />
      <meta property="og:description" content={seo.description} />
      <meta
        property="og:image"
        content="https://huzaifasafdar310.github.io/icons/desc.png"
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={seo?.og?.title || seo.title} />
      <meta property="twitter:description" content={seo.description} />
      <meta
        property="twitter:image"
        content="https://huzaifasafdar310.github.io/icons/desc.png"
      />
      <link
        rel="canonical"
        href={seo?.og?.url || "https://huzaifasafdar310.github.io/"}
      />
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export default SeoHeader;
