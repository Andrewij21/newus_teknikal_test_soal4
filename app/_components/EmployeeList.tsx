import { getEmployee } from "@/actions/Employee";
import EmployeeFilter from "./EmployeeFilter";

export default async function EmployeeLists() {
  const employees = await getEmployee();
  return <EmployeeFilter data={employees} />;
}
