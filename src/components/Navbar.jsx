export function Navbar({ onNavigate }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between p-4">
        <button className="font-semibold" onClick={() => onNavigate("home")}>
          Domenico Salernitano
        </button>
        <div className="flex gap-6 text-sm text-zinc-300">
          <button className="transition hover:text-white" onClick={() => onNavigate("home")}>
            Home
          </button>
          <button className="transition hover:text-white" onClick={() => onNavigate("dreamcatcher")}>
            Dreamcatcher
          </button>
          <button className="transition hover:text-white" onClick={() => onNavigate("aken")}>
            AKEN
          </button>
        </div>
      </nav>
    </header>
  );
}