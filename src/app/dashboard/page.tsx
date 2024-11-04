"use client";
import { logout } from "@/actions/login/actions";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div>
      <p>Dashboard</p>
      <Button onClick={() => logout()}>Logout</Button>
    </div>
  );
}
