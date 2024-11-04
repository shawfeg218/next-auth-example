"use server";

import { createSession, deleteSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { z } from "zod";

const testUser = {
  id: "1",
  email: "shawnfeng610@gmail.com",
  password: "123456",
};

const logingSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }).trim(),
});

export async function login(prevState: any, formData: FormData) {
  // check if the form data is valid
  const result = logingSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return {
      error: result.error.flatten().fieldErrors,
    };
  }

  // check if the email and password are correct
  const { email, password } = result.data;

  if (email !== testUser.email || password !== testUser.password) {
    return {
      error: {
        email: ["Invalid email or password"],
      },
    };
  }

  await createSession(testUser.id);

  redirect("/dashboard");
}

export async function logout() {
  await deleteSession();

  redirect("/login");
}
