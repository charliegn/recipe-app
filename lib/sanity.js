import {
  createClient,
  createPreviewSubscriptionHook,
  createImageUrlBuilder,
  createPortableTextComponent
} from "next-sanity";

const config = {
  projectId: 'nkzvxcgd',
  dataset: 'production',
  apiVersion: '2022-08-11',
  useCdn: false,
}

export const sanityClient = createClient(config);
export const usePreviewSubscription = createPreviewSubscriptionHook(config);
export const urlFor = (source) => createImageUrlBuilder(config).image(source);
export const PortableText = createPortableTextComponent({
  ...config,
  serializers: {},
})