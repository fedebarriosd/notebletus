import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
      <div
        className="ruled-page bg-base-100 rounded-sm p-8 border border-base-300
        shadow-[3px_5px_10px_rgba(43,33,26,0.3)] -rotate-1"
      >
        <NotebookIcon className="size-10 text-accent mx-auto" />
      </div>
      <h3 className="font-hand text-3xl">No notes yet</h3>
      <p className="text-base-content/70">
        Ready to organize your thoughts? Create your first note to get started on your journey.
      </p>
      <Link
        to="/create"
        className="btn btn-secondary font-hand text-lg rotate-1 border-2 border-dashed border-accent/40"
      >
        Create Your First Note
      </Link>
    </div>
  );
};
export default NotesNotFound;
