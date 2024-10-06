import { LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
}

export const Spinner = ({ sm, md, lg }: Props) => {
  const className = cn("animate-spin text-white-300 fill-white-300 mr-2", {
    "w-4 h-4": sm,
    "w-6 h-6": md,
    "w-8 h-8": lg,
  });
  return (
    <div role="status">
      <LoaderCircle className={className} />
      <span className="sr-only">Đang tải...</span>
    </div>
  );
};
