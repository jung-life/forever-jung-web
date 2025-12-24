import appIcon from "../assets/app-icon.png";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex justify-center items-center w-[500px] h-[500px]">
      <div className="text-center space-y-8">
        {/* Forever Jung App Logo */}
        <div className="flex justify-center">
          <img
            src={appIcon}
            alt="Forever Jung App Icon"
            className="w-48 h-48 object-contain drop-shadow-2xl"
          />
        </div>

        {/* App Description */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold font-heading text-foreground">
            The Forever Jung App
          </h3>
          <p className="text-lg text-muted-foreground max-w-md mx-auto font-sans leading-relaxed">
            Executive depth psychology program. Systematic shadow integration for leaders.
            Coming soon to iOS and Android.
          </p>
        </div>
      </div>
    </div>
  );
};
