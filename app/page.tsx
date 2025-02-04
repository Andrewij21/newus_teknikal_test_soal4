import { Suspense } from "react";
import EmployeeLists from "./_components/EmployeeList";

export interface Employee {
  id: number;
  name: string;
  email: string;
}

export default function Home() {
  return (
    <div className="mx-auto space-y-10 min-h-screen py-16">
      {/* Headline */}
      <h1 className="text-2xl mx-auto capitalize tracking-wide text-center font-bold max-w-md text-primary">
        A simple platform to view, search, and explore employee information.
      </h1>

      <Suspense
        fallback={
          <div className="flex justify-center items-center space-x-2">
            {/* Spinner */}
            <div className="w-8 h-8 border-4 border-t-4 border-gray-200 border-solid rounded-full animate-spin border-t-blue-500"></div>
            <span className="text-gray-500">Loading...</span>
          </div>
        }
      >
        <EmployeeLists />
      </Suspense>
    </div>
  );
}
