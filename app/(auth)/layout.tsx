import Navbar from "@/components/navigation/navbar";
import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <main>{children}</main>;
};

export default AuthLayout;
