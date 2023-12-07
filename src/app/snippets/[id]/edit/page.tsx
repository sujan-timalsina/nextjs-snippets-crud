import BreadCrumb from "@/app/_components/breadcrumb";
import SnippetEditForm from "@/app/_components/snippet-edit-form";
import { db } from "@/db";
import { notFound } from "next/navigation";

interface EditSnippetPageProps {
  params: {
    id: string;
  };
}

export default async function EditSnippetPage(props: EditSnippetPageProps) {
  const id = parseInt(props.params.id);
  const snippet = await db.snippet.findUnique({
    where: {
      id,
    },
  });

  if (snippet == null) {
    notFound();
  }

  return (
    <>
      <BreadCrumb pages={["Home", "Snippet", "Edit"]} />
      <SnippetEditForm snippet={snippet} />
    </>
  );
}
