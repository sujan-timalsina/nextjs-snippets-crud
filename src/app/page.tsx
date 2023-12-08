// import Image from "next/image";
import Link from "next/link";
import BreadCrumb from "./_components/breadcrumb";
import { db } from "@/db";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  return (
    <>
      <BreadCrumb pages={["Home", "Snippets"]} />
      <div className="mx-auto my-10 p-8 flex flex-col break-words shadow-lg rounded max-w-4xl">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="w-full max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-xl text-indigo-500">
                Snippets
              </h3>
            </div>
            <div className="px-4 max-w-full flex-grow flex-1 text-right">
              <Link
                href="/snippets/new"
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                New
              </Link>
            </div>
          </div>
        </div>

        <div className="block w-full overflow-x-auto">
          <table className="items-center just bg-transparent w-full border-collapse ">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  S.N.
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Title
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {snippets.map((snippet, index) => (
                <tr key={`tr-snippet-${snippet.id}`}>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                    {index + 1}
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {snippet.title}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <Link
                      href={"/snippets/" + snippet.id}
                      className="text-2xl text-indigo-600"
                      title="View"
                    >
                      &#128065;
                    </Link>
                  </td>
                </tr>
              ))}
              {snippets.length === 0 && (
                <tr>
                  <td
                    className="text-red-500 text-center py-6 font-semibold"
                    colSpan={3}
                  >
                    Snippets Not Found!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
