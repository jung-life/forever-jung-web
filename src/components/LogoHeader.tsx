import appIcon from "../assets/app-icon.png";

export function LogoHeader() {
  return (
    <a
      href="/"
      className="flex items-center gap-3 select-none hover:opacity-80 transition-opacity"
    >
      {/* The App Icon (Use the square app-icon you saved) */}
      <div className="relative w-10 h-10 md:w-12 md:h-12 shrink-0">
        <img
          src={appIcon}
          alt="Forever Jung Icon"
          className="w-full h-full object-contain" // Keeps the mandala inside the square
        />
      </div>

      {/* The Text (Sharp, Live Font) */}
      <span className="font-heading font-bold text-2xl md:text-3xl tracking-wider text-brand-stone pt-1 uppercase">
        Forever Jung
      </span>
    </a>
  );
}