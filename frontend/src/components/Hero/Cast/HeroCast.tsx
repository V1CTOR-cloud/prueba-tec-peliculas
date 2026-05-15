import Avatar from "@/components/Avatar/Avatar";
import Button from "@/components/Button/Button";

export default function HeroCast() {
  const cast = [
    { name: "Rami Malek", role: "Elliot Alderson", initials: "RM" },
    { name: "Christian Slater", role: "Mr. Robot", initials: "CS" },
    { name: "Portia Doubleday", role: "Angela Moss", initials: "PD" },
    { name: "Carly Chaikin", role: "Darlene", initials: "CC" },
    { name: "Martin Wallström", role: "Tyrell Wellick", initials: "MW" },
    { name: "Stephanie Corneliussen", role: "Joanna Wellick", initials: "SC" },
    { name: "Grace Gummer", role: "Dominique DiPierro", initials: "GG" },
    { name: "Sunita Mani", role: "Trenton", initials: "SM" },
    { name: "B.D Wong", role: "Whiterose", initials: "BD" },
    { name: "Michael Cristofer", role: "Phillip Price", initials: "MC" },
    { name: "Bruce Altman", role: "Terry Colby", initials: "BA" },
    { name: "Brian Stokes Mitchell", role: "Scott Knowles", initials: "BS" },
    { name: "Michelle Hicks", role: "Sharon Knowles", initials: "MH" },
    { name: "Frankie Shaw", role: "Shayla Nico", initials: "FS" },
    { name: "Gloria Reuben", role: "Krista Gordon", initials: "GR" },
    { name: "Elliot Villar", role: "Fernando Vera", initials: "EV" },
  ];

  return (
    <div className="col-span-12 md:col-span-4 row-span-2 flex flex-col bg-neutral-800 rounded-2xl text-white">
      <div className="relative z-10 py-2 px-4 flex justify-between items-center bg-black/60 backdrop-blur-md border border-white/10 rounded-t-2xl">
        <h2 className="font-semibold">Cast</h2>
        <Button
          variant={"ghost"}
          className="cursor-pointer text-xs text-neutral-400 p-0 h-fit"
        >
          Ver Todos
        </Button>
      </div>

      <div className="flex pt-2 flex-col gap-3 px-4 pb-4 min-h-0 overflow-y-auto no-scrollbar">
        {cast.map((actor) => (
          <Avatar
            name={actor.name}
            fullInfo={{
              name: actor.name,
              role: actor.role,
            }}
          />
        ))}
      </div>
    </div>
  );
}
