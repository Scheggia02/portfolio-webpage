import { useState } from "react";
import { ChevronLeft, ChevronRight, Image, Play } from "lucide-react";

export function MediaGallery({ items = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];

  if (!activeItem) {
    return null;
  }

  const hasMultipleItems = items.length > 1;

  function showPrevious() {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? items.length - 1 : currentIndex - 1,
    );
  }

  function showNext() {
    setActiveIndex((currentIndex) =>
      currentIndex === items.length - 1 ? 0 : currentIndex + 1,
    );
  }

  return (
    <div className="mt-4 space-y-4">
      <div className="relative overflow-hidden rounded-lg border border-white/10 bg-zinc-950/80">
        <div className="flex aspect-video items-center justify-center bg-black/50">
          {activeItem.src && activeItem.type === "video" ? (
            <video
              className="h-full w-full object-cover"
              controls
              poster={activeItem.poster}
              src={activeItem.src}
            />
          ) : null}

          {activeItem.src && activeItem.type !== "video" ? (
            <img
              src={activeItem.src}
              alt={activeItem.alt ?? activeItem.title}
              className="h-full w-full object-cover"
            />
          ) : null}

          {!activeItem.src ? (
            <div className="flex max-w-sm flex-col items-center px-6 text-center">
              {activeItem.type === "video" ? (
                <Play size={28} strokeWidth={1.7} className="text-cyan-200/80" aria-hidden="true" />
              ) : (
                <Image size={28} strokeWidth={1.7} className="text-cyan-200/80" aria-hidden="true" />
              )}
              <p className="mt-3 text-sm font-medium text-zinc-300">{activeItem.title}</p>
            </div>
          ) : null}
        </div>

        {hasMultipleItems ? (
          <div className="absolute inset-x-3 top-1/2 flex -translate-y-1/2 justify-between">
            <button
              type="button"
              onClick={showPrevious}
              className="flex size-9 items-center justify-center rounded-md border border-white/10 bg-black/70 text-zinc-200 backdrop-blur transition hover:border-white/30 hover:bg-black"
              aria-label="Previous media"
            >
              <ChevronLeft size={19} strokeWidth={1.8} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={showNext}
              className="flex size-9 items-center justify-center rounded-md border border-white/10 bg-black/70 text-zinc-200 backdrop-blur transition hover:border-white/30 hover:bg-black"
              aria-label="Next media"
            >
              <ChevronRight size={19} strokeWidth={1.8} aria-hidden="true" />
            </button>
          </div>
        ) : null}
      </div>

      <div>
        <h3 className="text-sm font-semibold text-zinc-100">{activeItem.title}</h3>
        <p className="mt-1 text-sm leading-6 text-zinc-400">{activeItem.caption}</p>
        {activeItem.note ? (
          <p className="mt-2 text-sm leading-6 text-zinc-500">{activeItem.note}</p>
        ) : null}
      </div>

      {hasMultipleItems ? (
        <div className="grid gap-2 sm:grid-cols-3">
          {items.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`rounded-md border p-3 text-left text-sm transition ${
                  isActive
                    ? "border-cyan-200/50 bg-cyan-200/10 text-white"
                    : "border-white/10 bg-white/[0.02] text-zinc-400 hover:border-white/20 hover:text-zinc-100"
                }`}
              >
                <span className="flex items-center gap-2">
                  {item.type === "video" ? (
                    <Play size={15} strokeWidth={1.8} aria-hidden="true" />
                  ) : (
                    <Image size={15} strokeWidth={1.8} aria-hidden="true" />
                  )}
                  <span>{item.title}</span>
                </span>
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
