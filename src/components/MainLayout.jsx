import Header from "./Header";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <main className="flex-1 w-full p-4">{children}</main>
      <footer className="w-full bg-gray-100 text-center p-4">
        © {new Date().getFullYear()} Mounjaro Tracker
      </footer>
    </div>
  );
}
