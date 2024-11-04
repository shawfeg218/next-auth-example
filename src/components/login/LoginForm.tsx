"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { useActionState } from "react";
import { login } from "@/actions/login/actions";
import { Input } from "../ui/input";

export default function LoginForm() {
  const [state, loginAction] = useActionState(login, undefined);

  return (
    <div className="flex justify-center py-16">
      <form action={loginAction} className="flex max-w-[300px] flex-col gap-2">
        <div className="flex flex-col gap-2">
          <Input id="email" name="email" placeholder="Email" />
        </div>

        {state?.error?.email && <div className="text-red-500">{state.error.email}</div>}

        <div className="flex flex-col gap-2">
          <Input id="password" name="password" type="password" placeholder="Password" />
        </div>

        {state?.error?.password && <div className="text-red-500">{state.error.password}</div>}

        <SubmitButton />
      </form>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit">
      Login
    </Button>
  );
}
