"use client";
import React from "react";
import { ThemeProvider } from "next-themes";

interface IProviders {
  children: any;
}

const Providers = ({ children }: IProviders) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:bg-gray-500 transition-colors min-h-screen select-none">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Providers;
