import { useEffect } from "react";

interface MetaTags {
  title?: string;
  description?: string;
  imageUrl?: string;
  twitter?: {
    card?: string;
    site?: string;
    creator?: string;
    url?: string;
    title?: string;
    image?: string;
    description?: string;
  };
  og?: {
    title?: string;
    description?: string;
    imageUrl?: string;
    url?: string;
    siteName?: string;
  };
}

export const useMetaTags = (metaTags: MetaTags): void => {
  useEffect(() => {
    const { title, description, imageUrl, twitter, og } = metaTags;

    document.title = title || "";

    let metaDescription = document.head.querySelector(
      'meta[name="description"]'
    );
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description || "");

    let metaImageUrl = document.head.querySelector('meta[name="image"]');
    if (!metaImageUrl) {
      metaImageUrl = document.createElement("meta");
      metaImageUrl.setAttribute("name", "image");
      document.head.appendChild(metaImageUrl);
    }
    metaImageUrl.setAttribute("content", imageUrl || "");

    // Update Open Graph (OG) tags
    const updateOGTag = (property: string, content: string) => {
      let ogTag = document.head.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement("meta");
        ogTag.setAttribute("property", property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute("content", content);
    };

    updateOGTag("og:title", og?.title || title || "");
    updateOGTag("og:description", og?.description || description || "");
    updateOGTag("og:image", og?.imageUrl || imageUrl || "");
    updateOGTag("og:url", og?.url || window.location.href);
    updateOGTag("og:site_name", og?.siteName || "");

    // Update Twitter meta tags
    const updateTwitterTag = (name: string, content: string) => {
      let twitterTag = document.head.querySelector(`meta[name="${name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement("meta");
        twitterTag.setAttribute("name", name);
        document.head.appendChild(twitterTag);
      }
      twitterTag.setAttribute("content", content);
    };

    updateTwitterTag("twitter:card", twitter?.card || "summary");
    updateTwitterTag("twitter:site", twitter?.site || "");
    updateTwitterTag("twitter:creator", twitter?.creator || "");
    updateTwitterTag("twitter:url", twitter?.url || "summary");
    updateTwitterTag("twitter:title", twitter?.title || "");
    updateTwitterTag("twitter:image", twitter?.image || "");
    updateTwitterTag("twitter:description", twitter?.description || "");
  }, [metaTags]);
};
