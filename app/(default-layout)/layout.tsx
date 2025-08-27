import DashboardLayout from '@/ui/DashboardLayout'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout>
      <main className="p-3 md:p-5 flex flex-col grow bg-[#212121]">{children}</main>
    </DashboardLayout>
  )
}
