import { useState } from "react";
import Header from "./Header";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./Footer";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="mx-3">{renderPage()}</main>
      <Footer></Footer>
    </div>
  );
}
