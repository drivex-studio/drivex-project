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

const CONTENT_BLOCK_QUERY = `*[_type == "contentBlockSection" && _id == $id][0]{
  theme,
  selector,
  className,
  layout,
  "headline": content.headline{ level, text },
  "headlineDisplay": content.headlineDisplay,
  "secondaryHeadline": content.secondaryHeadline{ level, text },
  "media": content.media${mediaProjection},
  "text": content.text,
  "primaryCta": content.ctas.primary,
  "secondaryCta": content.ctas.secondary,
  "footnote": content.footnote
}`;

export async function getContentBlockSectionData(id) {
  return sanityClient.fetch(
    CONTENT_BLOCK_QUERY,
    { id },
    { next: { revalidate: 60 } }
  );
}
