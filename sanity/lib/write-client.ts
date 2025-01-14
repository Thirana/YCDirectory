import "server-only";

import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, token } from "../env";

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  // if this is true, ISR will be enabled
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token,
});

if (!writeClient.config().token) {
  throw new Error("Write token not found");
}
