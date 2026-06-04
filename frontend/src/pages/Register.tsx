import AuthGrid from "@/components/AuthGrid/AuthGrid";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { useAuth } from "@/hooks/useAuth";
import { type SignupInput, SignupSchema } from "@/schemas/signup.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SignupInput>({
    resolver: zodResolver(SignupSchema),
  });

  const onSubmit = (data: SignupInput) => {
    const success = signup({
      fullName: data.fullName,
      email: data.email,
      passw: data.passw
    });

    if (!success) {
      setError("root", { message: "Este usario ya existe" });
      return;
    }

    navigate("/home");
  };

  return (
    <div className="min-h-screen flex text-[#FAFAFA]">
      <section className="flex-1 flex items-center justify-center">
        <div className="flex flex-col gap-4 lg:min-w-96">
          <div className="flex flex-col pb-4">
            <div className="mx-auto rounded p-2.5 grid place-content-center w-fit">
              <img
                src="/favicon.svg"
                alt="WatchNova Logo"
                className="size-10"
              />
            </div>
            <div className="flex flex-col gap-2 justify-between items-center">
              <h1 className="text-4xl font-semibold">Create your account ✌️</h1>
              <p className="text-neutral-400">
                Please enter your details to sign up
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
              <Input
                label="Full Name"
                type="text"
                error={errors.fullName?.message}
                required
                {...register("fullName")}
              />
              <Input
                label="Email"
                type="email"
                error={errors.email?.message}
                required
                {...register("email")}
              />
              <Input
                label="Password"
                type="password"
                showPasswordToggle
                error={errors.passw?.message}
                required
                {...register("passw")}
              />
            </div>

            <div className="flex flex-col gap-4">
              <Button variant="secondary" type="submit" disabled={isSubmitting}>
                Sign up
              </Button>
              <div className="flex items-center justify-center gap-2.5">
                <hr className="border-0 h-px bg-neutral-500 w-full" />
                <img
                  src="/favicon.svg"
                  alt="WatchNova Logo"
                  className="size-4 select-none"
                />
                <hr className="border-0 h-px bg-neutral-500 w-full" />
              </div>
            </div>

            <div className="flex justify-center items-center gap-1.5">
              <p className="font-light text-neutral-400">
                Alerady have an account?
              </p>
              <a href="/login" className="font-normal">
                Log in
              </a>
            </div>
          </form>
        </div>
      </section>
      <AuthGrid />
    </div>
  );
}
