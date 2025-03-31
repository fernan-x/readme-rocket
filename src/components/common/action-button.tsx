import { Eye } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import Preview from "../editor/preview";
import { ReadMe } from "@/types/readMe";

type ActionButtonProps = {
  document: ReadMe;
};

const ActionButton = ({ document }: ActionButtonProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="md:hidden absolute bottom-2 right-2 rounded-full p-4 w-12 h-12"
        >
          <Eye size={24} />
        </Button>
      </DialogTrigger>
      <DialogContent className="h-[90vh] max-w-full sm:max-w-[90vw]">
        <DialogHeader>
          <DialogTitle>Preview of your ReadMe</DialogTitle>
          <DialogDescription>
            This is how your ReadMe will look when rendered on GitHub.
          </DialogDescription>
        </DialogHeader>
        <div className="flex-1 overflow-auto">
          <Preview document={document} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ActionButton;
