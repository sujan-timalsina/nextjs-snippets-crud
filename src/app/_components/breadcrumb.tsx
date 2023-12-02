import Link from "next/link";

type BreadCrumbPropTypes = {
  pages: string[];
};

export default function BreadCrumb({ pages }: BreadCrumbPropTypes) {
  return (
    <nav aria-label="breadcrumb" className="py-2 px-8 bg-gray-50">
      <ol className="flex space-x-2 text-sm">
        {pages.length == 0 && (
          <li>
            <Link href="/" className="text-purple-700" aria-current="page">
              Home
            </Link>
          </li>
        )}

        {pages?.map((page, index) => (
          <>
            {index == pages.length - 1 ? (
              <li className="text-purple-700" aria-current="page">
                {page}
              </li>
            ) : (
              <li>
                <Link
                  href="#"
                  className="after:content-['/'] after:ml-2 text-gray-600 hover:text-purple-700"
                >
                  {page}
                </Link>
              </li>
            )}
          </>
        ))}
      </ol>
    </nav>
  );
}
