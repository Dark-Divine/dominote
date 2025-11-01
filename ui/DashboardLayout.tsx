import AppSidebar from "@/ui/Sidebar/Sidebar";
import Navbar from "@/ui/Navbar/Navbar";
import NavbarAvatar from "@/ui/Navbar/NavbarAvatar";

export default function DashboardLayoutComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full overflow-hidden">
      <Navbar>
        <NavbarAvatar />
      </Navbar>
      <div className="flex grow h-full">
        <AppSidebar />
        {children}
      </div>
    </div>
  );
}
