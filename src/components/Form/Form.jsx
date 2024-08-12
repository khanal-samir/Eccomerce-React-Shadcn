import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import GetStarted from "./GetStarted";
const Form = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Get Started</Button>
      </DialogTrigger>

      <DialogContent>
        <GetStarted />
      </DialogContent>
    </Dialog>
  );
};

export default Form;
