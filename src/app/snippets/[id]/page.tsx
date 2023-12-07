import BreadCrumb from "@/app/_components/breadcrumb";
import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";

type ViewSnippetPageType = {
  params: {
    id: string;
  };
};
export default async function ViewSnippetPage({ params }: ViewSnippetPageType) {
  // await new Promise((r) => setTimeout(r, 2000));
  const id = parseInt(params.id);
  const snippet = await db.snippet.findUnique({
    where: {
      id: id,
    },
  });

  if (snippet == null) {
    notFound();
  }

  async function deleteSnippet(id: number) {
    "use server";
    const snippet = await db.snippet.delete({
      where: {
        id: id,
      },
    });
    console.log(snippet);
  }

  return (
    <>
      <BreadCrumb pages={["Home", "Snippet", "View"]} />
      <div className="container m-auto flex flex-col gap-5 my-8 max-w-3xl">
        <div className="flex justify-between">
          <div>{snippet.title}</div>
          <div>
            <Link
              className="bg-indigo-500 py-1 px-3 text-white rounded-md mx-2"
              href={`/snippets/${snippet.id}/edit`}
            >
              Edit
            </Link>
            <button className="bg-red-500 py-1 px-3 text-white rounded-md mx-2">
              Delete
            </button>
          </div>
        </div>
        <pre className="p-3 border rounded bg-gray-200 border-gray-200">
          <code>{snippet.code}</code>
        </pre>
      </div>
    </>
  );
}
