import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { PracticeAreas } from "@/components/site/PracticeAreas";
import { Testimonials } from "@/components/site/Testimonials";
import { Hours } from "@/components/site/Hours";
import { Location } from "@/components/site/Location";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  useReveal();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    name: "Dra. Rocío D'Agostino",
    image: "",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Italia 1242",
      addressLocality: "Luján",
      addressRegion: "Buenos Aires",
      postalCode: "B6700",
      addressCountry: "AR",
    },
    telephone: "+541136395445",
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "18",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
  };

  return (
    <main className="bg-background">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <About />
      <PracticeAreas />
      <Testimonials />
      <Hours />
      <Location />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
