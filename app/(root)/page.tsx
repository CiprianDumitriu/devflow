import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ROUTES from "@/constants/routes";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";

const Home = async () => {
  const session = await auth();

  // console.log(session);
  return (
    <>
      <h1>Welcome to the world of Next.js</h1>
    </>
  );
};

export default Home;
