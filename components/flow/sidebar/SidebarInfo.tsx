import { TYPOGRAPHY } from "@/constants/theme";
import { useTranslations } from "next-intl";

interface SidebarInfoProps {
  title: string;
  titleColor: string;
  description: string;
  isDynamic: boolean;
  prompt?: string;
  theme: any;
}

export default function SidebarInfo({
  title,
  titleColor,
  description,
  isDynamic,
  prompt,
  theme,
}: SidebarInfoProps) {
  const t = useTranslations("ScenarioSidebar");

  return (
    <>
      <div>
        <h2
          className="text-2xl font-bold leading-tight"
          style={{
            color: titleColor,
            fontFamily: TYPOGRAPHY.nodeFontFamily,
          }}
        >
          {title}
        </h2>
        <div
          className="w-12 h-1 mt-3 rounded-full"
          style={{ backgroundColor: theme.nodeBackgroundActive }}
        />
      </div>

      <p
        className="text-sm leading-relaxed opacity-90"
        style={{ color: theme.nodeTextInactive }}
      >
        {description}
      </p>

      {isDynamic && prompt && (
        <div
          className="mt-2 p-4 rounded-md border border-dashed"
          style={{
            borderColor: theme.nodeBorderInactive,
            backgroundColor: theme.nodeBackgroundUndiscovered,
          }}
        >
          <div
            className="text-xs uppercase tracking-widest mb-2 opacity-70"
            style={{ color: theme.nodeTextInactive }}
          >
            {t("originalPrompt")}
          </div>
          <div
            className="text-sm italic"
            style={{
              color: theme.nodeTextActive,
              fontFamily: TYPOGRAPHY.nodeFontFamily,
            }}
          >
            "{prompt}"
          </div>
        </div>
      )}
    </>
  );
}