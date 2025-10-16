import { Button } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { MessageCircle, Users } from "lucide-react";

export const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-24 grid place-items-center lg:grid-cols-2 gap-8 md:gap-10">
      <div className="text-center lg:text-start space-y-5 md:space-y-6 min-h-[50vh] lg:min-h-0 pt-12">
        <main className="text-4xl lg:text-5xl font-bold leading-tight md:leading-snug">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-primary to-primary/20 text-transparent bg-clip-text">
              Lyra Digital
            </span>{" "}
            transforms
          </h1>{" "}
          <h2 className="inline">
            your{" "}
            <span className="inline bg-gradient-to-r from-primary to-primary/20 text-transparent bg-clip-text">
              business
            </span>{" "}
            digitally
          </h2>
        </main>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0">
          We deliver innovative digital solutions that help businesses thrive in the modern digital landscape. From website development to mobile apps.
        </p>

        <div className="flex flex-col md:flex-row gap-4 w-full lg:w-2/3">
          <Button
            className="flex-1 flex items-center gap-2"
            onClick={() => {
              const phoneNumber = "6281234567890";
              const message = encodeURIComponent(
                "Halo Lyra Digital! Saya tertarik dengan layanan digital solutions yang Anda tawarkan. Bisakah kita diskusikan lebih lanjut tentang kebutuhan bisnis saya?"
              );
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
              window.open(whatsappUrl, '_blank');
            }}
          >
            <MessageCircle className="w-5 h-5" />
            Get Started
          </Button>

          <Button
            variant="outline"
            className="flex-1 flex items-center gap-2"
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}
          >
            <Users className="w-5 h-5" />
            About Us
          </Button>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
