import NavBar from "@/components/component/navBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>{children}</div>
      <NavBar />
    </>
  );
}
