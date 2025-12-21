import iconImage from "../assets/icon.png";

export function LogoHeader() {
  return (
    <a
      href="/"
      className="flex items-center gap-3 select-none hover:opacity-80 transition-opacity"
    >
      {/* The Icon (High-quality PNG icon) */}
      <div className="relative w-10 h-10 md:w-12 md:h-12 shrink-0">
        <img
          src={iconImage}
          alt="Forever Jung Icon"
          className="w-full h-full object-contain"
        />
      </div>

      {/* The Text (Sharp, Live Font) */}
      <span className="font-heading font-bold text-2xl md:text-3xl tracking-wider text-foreground pt-1">
        Forever Jung
      </span>
    </a>
  );
}