
export default function AuthGrid() {
  return (
    <section className="hidden flex-3 bg-neutral-800 2xl:grid grid-cols-7 grid-rows-6 gap-4 p-4">
      <div className="col-span-3 row-span-2 col-start-3 row-start-3 rounded-2xl flex items-center justify-center gap-2 bg-neutral-700">
        <img src="/favicon.svg" alt="Bento, WatchNova Logo" />
        <h1 className="text-5xl font-extrabold italic">WatchNova</h1>
      </div>
      <div className="col-span-2 row-span-2 col-start-1 row-start-1 rounded-2xl flex items-center justify-center bg-green-500"></div>
      <div className="col-span-2 row-span-2 col-start-1 row-start-3 rounded-2xl flex items-center justify-center bg-pink-400"></div>
      <div className="col-span-3 row-span-2 col-start-1 row-start-5 rounded-2xl flex items-center justify-center bg-amber-400"></div>
      <div className="col-span-2 row-span-2 col-start-4 row-start-5 rounded-2xl flex items-center justify-center bg-blue-500"></div>
      <div className="col-span-2 row-span-3 col-start-6 row-start-4 rounded-2xl flex items-center justify-center bg-emerald-400"></div>
      <div className="col-span-2 row-span-3 col-start-6 row-start-1 rounded-2xl flex items-center justify-center bg-fuchsia-500"></div>
      <div className="col-span-3 row-span-2 col-start-3 row-start-1 rounded-2xl flex items-center justify-center bg-purple-500"></div>
    </section>
  );
}
