/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReadMe } from "@/types/readMe";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import { generateDocumentForPreview } from "@/utils/readMe.utils";
import { useScrollSync } from "@/hooks/useScrollSync";

type PreviewProps = {
  document: ReadMe;
};

const AClassName =
  "inline-block w-fit underline text-blue-500 decoration-2 decoration-blue-500 hover:text-blue-700 hover:decoration-blue-700 transition-all";

const Preview = ({ document }: PreviewProps) => {
  const documentContent = generateDocumentForPreview(document);

  // Enable scroll sync from preview to editor
  useScrollSync("preview-content", "editor-content");

  return (
    <div id="preview-content" className="overflow-auto h-full">
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          a: ({ node, ...props }) => {
            const href = node?.properties.href;
            if (typeof href === "string" && href.startsWith("http")) {
              return (
                <a
                  target="_blank"
                  rel="noreferrer"
                  className={AClassName}
                  {...props}
                />
              );
            }

            return <a className={AClassName} {...props} />;
          },
          h1: ({ node, ...props }) => {
            return <h1 className="text-3xl font-bold mt-8" {...props} />;
          },
          h2: ({ node, ...props }) => {
            return (
              <h2
                className="text-2xl font-bold border-b mb-4 mt-6 pb-1"
                {...props}
              />
            );
          },
          h3: ({ node, ...props }) => {
            return <h3 className="text-xl font-bold mb-4 mt-6" {...props} />;
          },
          p: ({ node, ...props }) => {
            return <p className="text-base mb-4" {...props} />;
          },
          li: ({ node, ...props }) => {
            return <li className="mt-1" {...props} />;
          },
        }}
      >
        {documentContent}
      </Markdown>
    </div>
  );
};

export default Preview;
