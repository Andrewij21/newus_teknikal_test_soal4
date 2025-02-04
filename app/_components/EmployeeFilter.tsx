"use client";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import CardList from "@/components/card/CardList";
import { Employee } from "../page";
import { useState } from "react";
import { getEmployee } from "@/actions/Employee";
import { Button } from "@/components/ui/button";

export default function EmployeeFilter({ data }: { data: Employee[] }) {
  const [search, setSearch] = useState("");
  const [filteredEmployee, setfilteredEmployee] = useState(data);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setLoading(true);
    setError("");
    setfilteredEmployee([]);
    try {
      const data = await getEmployee();
      setfilteredEmployee(data);
    } catch (err) {
      console.log(err);
      setError("Failed to fetch data. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  // Refetch data
  const handleRefetch = () => {
    fetchData();
  };

  // Simulate fetch failure
  const handleSimulateFailure = () => {
    fetchData().then(() => {
      setError("Failed to fetch data. Please try again.");
      setfilteredEmployee([]);
    });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    const updatedFilterEmployee = data.filter((item) =>
      item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    setfilteredEmployee(updatedFilterEmployee);
  };

  return (
    <div className="space-y-10">
      {/* Input search */}
      <div className="bg-white rounded-full px-4 py-2 flex mx-auto max-w-md items-center">
        <Search />
        <Input
          placeholder="Search employee names..."
          value={search}
          onChange={(e) => handleSearch(e)} // Update search term
          className="shadow-none border-0 focus-visible:border-0 focus-visible:outline-none focus-visible:ring-0 outline-none ring-0"
        />
      </div>

      {/* Employee Lists */}
      <div>
        <div className="flex justify-between items-center mb-4">
          {/* h2 */}
          <h2 className="text-xl capitalize font-bold">Our Team Members</h2>
          {/* Buttons */}
          <div className="flex items-center gap-x-2">
            <Button onClick={handleRefetch} disabled={loading}>
              Refetch Data
            </Button>
            <Button
              onClick={handleSimulateFailure}
              disabled={loading}
              variant={"destructive"}
            >
              Simulate Failure
            </Button>
          </div>
        </div>
        {/* Cards */}
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <CardList data={filteredEmployee} />
      </div>
    </div>
  );
}
