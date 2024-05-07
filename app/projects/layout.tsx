import NavBar from "@/app/ui/nav/navBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>{children}</div>
      <NavBar />
    </>
  );
}
