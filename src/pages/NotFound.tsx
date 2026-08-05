import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Page not found | Vishvex";
    if (import.meta.env.DEV) {
      console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-dvh bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="container-narrow">
          <span className="eyebrow">Error 404</span>
          <h1 className="font-display font-[700] text-4xl md:text-6xl mt-4 mb-5 text-foreground leading-[1.05]">
            This route doesn't exist.
          </h1>
          <p className="font-body text-muted-foreground max-w-lg mb-8">
            The page you asked for isn't here. Head back to the homepage, or jump straight to an
            industry playbook.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="/" className="btn-primary">Back to homepage</a>
            <a href="/#work-request" className="btn-ghost">Start a project</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
