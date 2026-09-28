import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";

const PAPER_SHADES = ["bg-base-100", "bg-base-200", "bg-[#F7EFDB]"];

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault(); // get rid of the navigation behaviour

    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id)); // get rid of the deleted one
      toast.success("Note deleted successfully");
    } catch (error) {
      console.log("Error in handleDelete", error);
      toast.error("Failed to delete note");
    }
  };

  // deterministic pseudo-random tilt/shade per note so the grid looks like a
  // stack of scattered index cards, but doesn't jitter on re-render
  const seed = note._id
    ? note._id.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0)
    : 0;
  const rotation = (seed % 5) - 2; // -2deg .. 2deg
  const shade = PAPER_SHADES[seed % PAPER_SHADES.length];

  return (
    <Link
      to={`/note/${note._id}`}
      style={{ transform: `rotate(${rotation}deg)` }}
      className={`torn-edge folded-corner relative card ${shade} pt-3
      shadow-[3px_5px_8px_rgba(43,33,26,0.35)]
      hover:shadow-[4px_8px_14px_rgba(43,33,26,0.45)] hover:!rotate-0
      transition-all duration-200`}
    >
      <span className="pushpin absolute -top-2 left-1/2 -translate-x-1/2" />
      <div className="card-body">
        <h3 className="font-hand text-2xl text-base-content leading-tight">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="font-hand text-base text-base-content/60">
            {formatDate(new Date(note.createdAt))}
          </span>
          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4 text-base-content/50" />
            <button
              className="btn btn-ghost btn-xs text-error"
              onClick={(e) => handleDelete(e, note._id)}
            >
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default NoteCard;
