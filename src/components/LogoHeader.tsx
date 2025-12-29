import appIcon from "../assets/app-icon.png";

export function LogoHeader() {
  return (
    <a
      href="/"
      className="select-none hover:opacity-80 transition-opacity"
    >
      {/* Complete Logo with text included in the image */}
      <img
        src={appIcon}
        alt="Forever Jung - Depth Psychology AI Guide"
        className="h-10 md:h-12 w-auto object-contain py-1"
      />
    </a>
  );
}