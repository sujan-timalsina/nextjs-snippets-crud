"use client";
import type { Snippet } from "@prisma/client";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";

interface SnippetEditFormProps {
  snippet: Snippet;
}
export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);

  function handleEditorChange(value: string = "") {
    setCode(value);
  }

  return (
    <>
      <div className="container p-8 mx-auto">
        <h1 className="text-indigo-600 text-xl my-8">{snippet.title}</h1>
        <Editor
          height="40vh"
          theme="vs-dark"
          language="javascript"
          defaultValue={snippet.code}
          options={{ minimap: { enabled: false } }}
          onChange={handleEditorChange}
        />
      </div>
    </>
  );
}
