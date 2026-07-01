import { Fragment, type ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/*  Tipe data untuk setiap item breadcrumb                                   */
/* -------------------------------------------------------------------------- */
export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: ReactNode;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  /** Menampilkan ikon home di awal */
  showHome?: boolean;
  /** Class tambahan */
  className?: string;
  /** Custom separator (default: ChevronRight) */
  separator?: ReactNode;
}

/* -------------------------------------------------------------------------- */
/*  Breadcrumb — navigasi halaman bertingkat                                 */
/* -------------------------------------------------------------------------- */
function Breadcrumb({
  items,
  showHome = true,
  className = "",
  separator,
}: BreadcrumbProps) {
  const allItems = showHome
    ? [{ label: "Beranda", href: "/" }, ...items]
    : items;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center gap-1 text-sm ${className}`}
    >
      <ol className="flex items-center gap-1 list-none m-0 p-0">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;

          return (
            <Fragment key={index}>
              {index > 0 && (
                <span className="text-[rgba(51,51,51,0.38)] mx-1 flex items-center ">
                  {separator || "/"}
                </span>
              )}

              <li className="flex items-center gap-1.5">
                {item.icon && (
                  <span className="text-[rgba(51,51,51,0.48)] flex items-center">
                    {item.icon}
                  </span>
                )}

                {isLast ? (
                  <span className="text-gray-600 font-medium max-w-50 line-clamp-1 max-w-screen">
                    {item.label}
                  </span>
                ) : item.href ? (
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-[#3ECF4C] transition-colors no-underline"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className="text-gray-500">{item.label}</span>
                )}
              </li>
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
