import { ReadMe } from "@/types/readMe";
import CollapsibleCard from "./collapsible-card";
import EditorProject from "./editor-project";
import React from "react";
import EditorContact from "./editor-contact";
import { Cog, FolderOpenDot, Mail, Users } from "lucide-react";
import EditorAboutProject from "./editor-about-project";
import EditorAboutContributing from "./editor-contributing";
import { useScrollSync } from "@/hooks/useScrollSync";

type EditorProps = {
  document: ReadMe;
  setDocument: React.Dispatch<React.SetStateAction<ReadMe>>;
};

const Editor = ({ document, setDocument }: EditorProps) => {
  // Enable scroll sync from editor to preview
  useScrollSync("editor-content", "preview-content");

  return (
    <>
      <section id="general" data-section-id="general">
        <CollapsibleCard
          title="General"
          icon={<Cog color="#7c3aed" />}
          defaultOpen
        >
          <EditorProject document={document} setDocument={setDocument} />
        </CollapsibleCard>
      </section>
      <section id="about" data-section-id="about">
        <CollapsibleCard
          title="About"
          icon={<FolderOpenDot color="#7c3aed" />}
          defaultOpen
          data-section-id="about"
        >
          <EditorAboutProject document={document} setDocument={setDocument} />
        </CollapsibleCard>
      </section>
      <section id="contributing" data-section-id="contributing">
        <CollapsibleCard
          title="Contributing"
          icon={<Users color="#7c3aed" />}
          defaultOpen
        >
          <EditorAboutContributing
            document={document}
            setDocument={setDocument}
          />
        </CollapsibleCard>
      </section>
      <section id="contact" data-section-id="contact">
        <CollapsibleCard
          title="Contact"
          icon={<Mail color="#7c3aed" />}
          defaultOpen
        >
          <EditorContact document={document} setDocument={setDocument} />
        </CollapsibleCard>
      </section>
    </>
  );
};

export default Editor;
