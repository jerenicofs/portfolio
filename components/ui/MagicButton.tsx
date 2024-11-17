import React from "react";

type MagicButtonProps = {
  title: string;
  icon: React.ReactNode;
  position: "left" | "right";
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  otherClasses?: string;
  downloadUrl?: string;
  href?: string;
};

const MagicButton: React.FC<MagicButtonProps> = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  downloadUrl,
  href,
}) => {
  const handleAction = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (downloadUrl) {
      e.preventDefault();
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = "CV_Jerenico_Franssen_Semanuel.pdf";
      link.click();
    } else if (handleClick) {
      handleClick(e);
    }
  };

  if (href) {
    return (
      <a href={href} className="inline-block">
        <button className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span
            className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-6 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
          >
            {position === "left" && icon}
            {title}
            {position === "right" && icon}
          </span>
        </button>
      </a>
    );
  }

  return (
    <button
      className="relative inline-flex h-12 w-[50%] overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10"
      onClick={handleAction}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-6 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
