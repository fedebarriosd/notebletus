import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="relative bg-accent shadow-[0_4px_10px_rgba(43,33,26,0.4)]">
      {/* ring-binder holes */}
      <div className="absolute left-3 top-0 bottom-0 flex flex-col justify-evenly py-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className="size-2.5 rounded-full bg-base-100/90 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]"
          />
        ))}
      </div>

      <div className="mx-auto max-w-6xl p-4 pl-12">
        <div className="flex items-center justify-between">
          <h1 className="font-hand text-4xl text-secondary drop-shadow-[1px_1px_0_rgba(43,33,26,0.6)] -rotate-1">
            Notebletus
          </h1>
          <div className="flex items-center gap-4">
            <Link
              to={"/create"}
              className="btn btn-secondary font-hand text-lg rotate-1 border-2 border-dashed border-accent/40 shadow-[2px_3px_0_rgba(43,33,26,0.5)]"
            >
              <PlusIcon className="size-5" />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
