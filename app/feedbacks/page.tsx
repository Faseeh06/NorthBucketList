import { permanentRedirect } from "next/navigation";

/** Legacy URL — all traffic goes to About us. */
export default function FeedbacksPageRedirect() {
  permanentRedirect("/about");
}
