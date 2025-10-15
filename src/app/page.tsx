import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Resume } from "@/components/resume";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Resume />
        <Footer />
      </main>
    </>
  );
}
