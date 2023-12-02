import BreadCrumb from "@/app/_components/breadcrumb";

export default function SnippetCreatePage() {
  return (
    <>
      <BreadCrumb pages={["Home", "Snippets", "New"]} />
      <form>
        <div className="md:px-20 p-6">
          <div className=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto shadow-2xl">
            <h1 className="text-center text-2xl font-semibold text-gray-600 mb-10 uppercase">
              Create a Snippet
            </h1>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="title"
                  className="block font-semibold text-gray-600 uppercase"
                >
                  Title:
                </label>
                <input
                  type="text"
                  id="title"
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-100 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner rounded-md"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="code"
                  className="block font-semibold text-gray-600 uppercase"
                >
                  Code:
                </label>
                <textarea
                  id="code"
                  cols={30}
                  rows={10}
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-100 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner rounded-md"
                  required
                ></textarea>
              </div>
              <button className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-indigo-600 shadow-lg rounded-md focus:outline-none hover:bg-gray-900 hover:shadow-none">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
