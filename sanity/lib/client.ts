import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "sk06rga4ZPvIHYLVtlxrM1sNkEyQua583VAhsrjKCgfVN5t3jkA6EluMJxmgI142PBvFspC2Hu7Ca6yD4nfsGVBXmeROxYrCB4TFLMmLZUWANqtiV4YYS9tGGrNDbOBwkuvBLs8vooRtVxWipoE0eNz1so8heyKbsf6YWAozWr9Wtbjz9q9M",
})
