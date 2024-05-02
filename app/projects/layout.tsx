import NavBar from "@/app/ui/navBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>{children}</div>
      <NavBar />
    </>
  );
}
