"use server";

export async function getEmployee() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const employees = await data.json();
  return employees;
}
