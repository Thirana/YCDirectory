import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // if this is true, ISR will be enabled
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
