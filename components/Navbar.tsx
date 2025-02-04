export default async function Navbar() {
  return (
    <nav className="px-4 py-2 w-full bg-primary text-primary-foreground">
      <div className="flex items-center justify-between">
        {/* Link */}
        <div className="flex gap-x-8 items-center">
          {/* Logo */}
          <h1 className="text-3xl tracking-tight font-bold">ADMIN DASHBOARD</h1>
        </div>
        {/* login,Signup,Lang */}
        <div className="flex gap-x-4 items-center"></div>
      </div>
    </nav>
  );
}
