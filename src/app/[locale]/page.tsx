import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations();
  return (
    <div>
      <h1>{t("homepage.greeting")}</h1>
      <p>{t("homepage.text")}</p>
      <Link href="/about">{t("homepage.button")}</Link>
    </div>
  );
}
