import Redirect from "@/components/Redirect";

/* Freelance services were retired; old /services links land on the home page. */
export default function Page() {
  return <Redirect to="/" />;
}
