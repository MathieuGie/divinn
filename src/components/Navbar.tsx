"use client";

import { Link, usePathname } from "@/i18n/navigation";
import classes from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className={classes.navbar}>
      <Link href="/">
        {" "}
        <img src="/globe.svg" alt="logo" className={classes.logo} />
        <span>Divinn</span>
      </Link>
      <div className={classes.langButtons}>
        <Link href={pathname} locale="en">
          EN
        </Link>
        <Link href={pathname} locale="fr">
          FR
        </Link>
      </div>
    </div>
  );
}
