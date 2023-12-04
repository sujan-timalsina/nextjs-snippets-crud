import BreadCrumb from "@/app/_components/breadcrumb";
import { db } from "@/db";
import { notFound } from "next/navigation";

type ViewSnippetPageType = {
  params: {
    id: string;
  };
};
export default async function ViewSnippetPage({ params }: ViewSnippetPageType) {
  const id = parseInt(params.id); // or Number(params.id)
  let snippet;
  try {
    snippet = await db.snippet.findUniqueOrThrow({
      where: {
        id: id,
      },
    });
  } catch (error: any) {
    // error is object with keys: 'name', 'code', 'clientVersion', 'meta'
    if (error.name === "NotFoundError") {
      notFound();
    } else {
      // some toastify message with error occurred
    }
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
          <div>{snippet?.title}</div>
          <div>
            <button className="bg-indigo-500 py-1 px-3 text-white rounded-md mx-2">
              Edit
            </button>
            <button className="bg-red-500 py-1 px-3 text-white rounded-md mx-2">
              Delete
            </button>
          </div>
        </div>
        <div>
          <textarea
            id="code"
            name="code"
            value={snippet?.code}
            cols={30}
            rows={10}
            className="block w-full p-3 mt-2 text-gray-700 bg-gray-100 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner rounded-md"
            disabled
          ></textarea>
        </div>
      </div>
    </>
  );
}
