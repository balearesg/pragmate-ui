import React from "react";
import { Header } from "docs/header";
import { Navbar } from "docs/navbar";
import { Footer } from "docs/footer";
export function Page() {
  return (
    <main className="page__home-container">
      <Navbar />
      <div className="content">
        <Header />
        <Footer />
      </div>
    </main>
  );
}
