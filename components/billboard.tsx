import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
  data: BillboardType | null;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  if (!data) {
    return null;
  }

  const { imageUrl, label } = data;
  const hasImage = Boolean(imageUrl);

  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className={[
          "rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden",
          !hasImage ? "bg-gradient-to-br from-gray-200 to-gray-300 dark:from-neutral-800 dark:to-neutral-700" : "bg-cover"
        ].join(" ")}
        style={hasImage ? { backgroundImage: `url(${imageUrl})` } : undefined}
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {label ?? ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
