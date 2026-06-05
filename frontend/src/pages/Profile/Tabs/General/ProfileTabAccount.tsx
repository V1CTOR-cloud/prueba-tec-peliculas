import Button from "@/components/Button/Button";
import { Trash } from "lucide-react";

export default function ProfileTabGeneral() {
  return (
    <section id="account" className="flex gap-8 flex-col xl:flex-row">
      <div className="flex-1">
        <h3 className="text-xl">Account</h3>
        <p className="text-neutral-400">Manage your account settings.</p>
      </div>
      <div className="flex-1 pt-6">
        <div className="p-6 flex gap-8 flex-col md:flex-row items-center justify-between bg-neutral-800 ring ring-neutral-600 rounded-2xl">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl">Delete account</h3>
            <p className="text-sm text-neutral-400">
              Delete your account permanently. This action will remove all your
              data and cannot be undone.
            </p>
          </div>
          <Button variant={"outline_destructive"} className="gap-2 w-full lg:w-fit">
            <Trash size={16} strokeWidth={1.5} />
            <span>Delete</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
