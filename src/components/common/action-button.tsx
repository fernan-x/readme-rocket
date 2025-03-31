import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

const ActionButton = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          variant="default"
          className="md:hidden absolute bottom-2 right-2 rounded-full p-4 w-14 h-14"
        >
          <Menu size={24} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="bg-white shadow-lg rounded-md p-4 absolute bottom-16 right-2">
        <ul>
          <li className="py-1">Action 1</li>
          <li className="py-1">Action 2</li>
          <li className="py-1">Action 3</li>
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default ActionButton;
