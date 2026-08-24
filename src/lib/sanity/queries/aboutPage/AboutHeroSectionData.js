import { sanityClient } from "@lib/sanity/client";

const imageProjection = `{
  "_id": asset->_id,
  "_rev": asset->_rev,
  "altText": coalesce(alt, asset->altText),
  "crop": crop,
  "description": asset->description,
  "dimensions": asset->metadata.dimensions,
  "hotspot": hotspot,
  "lqip": asset->metadata.lqip,
  "title": asset->title
}`;

const videoProjection = `{
  "playbackId": asset->playbackId,
  "dimensions": {
    "width": asset->data.tracks[0].max_width,
    "height": asset->data.tracks[0].max_height,
    "aspectRatio": asset->data.aspect_ratio
  },
  "thumbTime": thumbTime
}`;

const mediaProjection = `{
  type,
  aspectRatio,
  highResolution,
  "image": image${imageProjection},
  "video": video${videoProjection},
  externalVideoUrl,
  videoOptions
}`;

const linkProjection = `{
  canDownload,
  href,
  modalId,
  openInNewTab,
  text,
  type
}`;

const ABOUT_HERO_QUERY = `*[_type == "aboutHero"][0]{
  "media": media${mediaProjection},
  "mobileImage": mobileImage${imageProjection},
  "headline": headline,
  "headlineLevel": headlineLevel,
  "headlineDisplay": headlineDisplay,
  "subtext": subtext,
  "ctas": ctas{
    layout,
    gap,
    buttons[]{
      _key,
      variant,
      theme,
      size,
      "link": link${linkProjection}
    }
  },
  "scrollText": scrollText,
  "useWatermark": useWatermark
}`;


export async function getAboutHeroSectionData() {
  return sanityClient.fetch(ABOUT_HERO_QUERY, {}, { next: { revalidate: 60 } });
}
