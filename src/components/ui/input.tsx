import * as React from "react";

import { cn } from "@/lib/utils";
import { IoSearchOutline } from "react-icons/io5";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isSearch?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, isSearch, ...props }, ref) => {
    return (
      <div className="relative">
        {isSearch && (
          <IoSearchOutline size={22} className="absolute top-2 left-2" />
        )}
        <input
          type={type}
          className={cn(
            `flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 ${
              isSearch ? "pl-9" : ""
            } text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus:border-b-yellow-500 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
