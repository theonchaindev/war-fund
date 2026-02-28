import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Charities from "@/components/Charities";
import Transparency from "@/components/Transparency";
import TokenInfo from "@/components/TokenInfo";
import Footer from "@/components/Footer";
import StickyDonationBadge from "@/components/StickyDonationBadge";

export default function Home() {
  return (
    <div className="relative z-10">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Charities />
        <Transparency />
        <TokenInfo />
      </main>
      <Footer />
      <StickyDonationBadge />
    </div>
  );
}
