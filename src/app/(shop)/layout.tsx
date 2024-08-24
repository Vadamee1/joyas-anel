import TopMenu from "@/components/ui/top-menu/TopMenu";

export default function Shop({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen">
      <TopMenu />
      <div className="px-0 sm:px-5">{children}</div>
    </main>
  );
}
