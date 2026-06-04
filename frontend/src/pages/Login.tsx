import { useForm } from "react-hook-form";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, type LoginInput } from "@/schemas/login.schema";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import AuthGrid from "@/components/AuthGrid/AuthGrid";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = (data: LoginInput) => {
    const success = login(data.identifier, data.password);

    if (!success) {
      setError("identifier", { message: "Usuario o contraseña incorrectos" });
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
              <h1 className="text-4xl font-semibold">Welcome Back 👋</h1>
              <p className="text-neutral-400">
                Please enter your details to log in
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
              <Input
                label="Email / Username"
                type="text"
                error={errors.identifier?.message}
                required
                {...register("identifier")}
              />
              <Input
                label="Password"
                type="password"
                showPasswordToggle
                error={errors.password?.message}
                required
                {...register("password")}
              />
            </div>

            <div className="flex flex-col gap-4">
              <Button variant="outline" type="submit" disabled={isSubmitting}>
                Sign in
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
                New on our platform?
              </p>
              <a href="/register" className="font-normal">
                Create an account
              </a>
            </div>
          </form>
        </div>
      </section>
      <AuthGrid />
    </div>
  );
}
