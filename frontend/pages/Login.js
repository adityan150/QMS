import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Login() {
  // if not logged in, display login page
  // else if, user.role == student, show student interface
  // else if, user.role == admin, show admin interface
  const router = useRouter();

  useEffect(() => {
    router.push("/All");
  });
  return <p>Redirecting...</p>;
}
