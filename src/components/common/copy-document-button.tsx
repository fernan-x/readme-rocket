import * as React from "react";
import { CheckIcon, ClipboardIcon } from "lucide-react";

import { Button, ButtonProps } from "../ui/button";
import { ReadMe } from "@/types/readMe";
import { generateDocumentExport } from "@/utils/readMe.utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface CopyDocumentButtonProps extends ButtonProps {
  document: ReadMe;
}

export async function copyToClipboardWithMeta(value: string) {
  navigator.clipboard.writeText(value);
}

const CopyDocumentButton = ({
  document,
  variant = "outline",
  ...props
}: CopyDocumentButtonProps) => {
  const [hasCopied, setHasCopied] = React.useState(false);
  const value = React.useMemo(
    () => generateDocumentExport(document),
    [document],
  );

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  const onHandleCopy = React.useCallback(() => {
    copyToClipboardWithMeta(value);
    setHasCopied(true);
  }, [value]);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            variant={variant}
            onClick={onHandleCopy}
            {...props}
          >
            <span className="sr-only">Copy</span>
            {hasCopied ? <CheckIcon /> : <ClipboardIcon />}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Copy ReadME</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CopyDocumentButton;
