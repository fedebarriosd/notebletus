import { ZapIcon } from "lucide-react";

const RateLimitedUI = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div
        className="relative folded-corner bg-secondary/90 border border-secondary-content/10
        rounded-sm shadow-[3px_5px_10px_rgba(43,33,26,0.35)] rotate-1"
      >
        <span className="pushpin absolute -top-2 left-8" />
        <div className="flex flex-col md:flex-row items-center p-6">
          <div className="flex-shrink-0 bg-secondary-content/10 p-4 rounded-full mb-4 md:mb-0 md:mr-6">
            <ZapIcon className="size-10 text-secondary-content" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-hand text-2xl mb-2 text-secondary-content">Rate Limit Reached</h3>
            <p className="text-secondary-content/90 mb-1">
              You've made too many requests in a short period. Please wait a moment.
            </p>
            <p className="text-sm text-secondary-content/70">
              Try again in a few seconds for the best experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateLimitedUI;
