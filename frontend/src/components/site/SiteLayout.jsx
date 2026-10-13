import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { useLenis } from "@/hooks/useLenis";

const SiteLayout = () => {
  const { pathname } = useLocation();
  useLenis();

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <div
      data-testid="site-layout"
      className="min-h-screen bg-white text-[#0F172A] flex flex-col"
    >
      <Header isHome={isHome} />
      <main className={`flex-1 ${isHome ? "" : "pt-20"}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
