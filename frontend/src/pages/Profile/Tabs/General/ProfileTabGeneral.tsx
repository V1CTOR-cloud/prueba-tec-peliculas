import Input from "@/components/Input/Input";
import Separator from "@/components/Separator/Separator";
import { AtSign, Mail, User } from "lucide-react";

export default function ProfileTabGeneral() {
  return (
    <>
      <section id="general" className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <h3 className="text-xl">General Information</h3>
          <p className="text-neutral-400">Manage your personal information.</p>
        </div>
        <div className="flex-1 flex flex-col gap-6 pt-6">
          <Input
            label="Full Name"
            required
            type="text"
            icon={User}
            iconPosition="right"
          />
          <Input
            label="Username"
            required
            type="text"
            icon={AtSign}
            iconPosition="right"
          />
          <Input
            label="Email"
            required
            type="email"
            icon={Mail}
            iconPosition="right"
          />
          <Input label="Password" required type="password" showPasswordToggle />
        </div>
      </section>

      <Separator />
    </>
  )
}