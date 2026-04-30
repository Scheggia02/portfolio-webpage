export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto flex max-w-5xl justify-between gap-6 p-6 text-sm text-zinc-400">
        <div>&copy; {new Date().getFullYear()} Domenico Salernitano</div>
        <div className="flex flex-col text-right">
          <span>Available for hire</span>
          <span>Email: domenico.salernitano@outlook.com</span>
          <a href="https://www.linkedin.com/in/domenico-salernitano/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}