import { createServerActionProcedure } from "zsa";

export const safeAction = createServerActionProcedure()
  .experimental_shapeError(({ err }) => {
    // @ts-expect-error err is of type unknown
    return err.message.toString();
  })
  .handler(async () => {
    console.log("[SAFE ACTION] Contact form submitted");
  });
