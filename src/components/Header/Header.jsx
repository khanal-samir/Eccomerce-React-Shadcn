import React from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import Collection from "./Collection";
import Categories from "./Categories";
import { ModeToggle } from "./ModeToggle";
import SearchBar from "./Search";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "..";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 p-4 border-b flex flex-wrap justify-between items-center space-y-4 sm:space-y-0 bg-white dark:bg-gray-900 z-50">
      <div className="flex justify-between gap-10 items-center w-full sm:w-auto">
        <img
          src="/logo.svg"
          alt="logo"
          onClick={() => navigate("/")}
          className="cursor-pointer"
        />
        <SearchBar className="sm:hidden" />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6 font-normal font-sans text-slate-800 cursor-pointer">
        <Categories />
        <h2 className="text-base font-medium text-gray-800 dark:text-gray-200">
          New Arrival
        </h2>
        <Collection />
      </div>
      <div className="flex items-center gap-4 ">
        <ShoppingCart
          className="cursor-pointer"
          onClick={() => navigate("/cart")}
        />
        <ModeToggle />
        <Dialog>
          <DialogTrigger>
            <Button>Get Started</Button>
          </DialogTrigger>
          <DialogContent>
            <Form />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Header;
