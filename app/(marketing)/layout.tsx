import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";

type MarktingLayoutProps = {
  children: React.ReactNode;
};

const MarktingLayout = ({ children }: MarktingLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MarktingLayout;
