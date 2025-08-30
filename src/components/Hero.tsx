import { Button } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { MessageCircle, Users } from "lucide-react";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              Kaenis
            </span>{" "}
            transforms
          </h1>{" "}
          your{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              business
            </span>{" "}
            digitally
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          We deliver innovative digital solutions that help businesses thrive in the modern digital landscape. From website development to mobile apps.
        </p>

        <div className="flex flex-col md:flex-row gap-4 w-full lg:w-2/3">
          <Button
            className="flex-1 flex items-center gap-2"
            onClick={() => {
              const phoneNumber = "6281234567890"; // Ganti dengan nomor WhatsApp Anda
              const message = encodeURIComponent(
                "Halo Kaenis Tech! Saya tertarik dengan layanan digital solutions yang Anda tawarkan. Bisakah kita diskusikan lebih lanjut tentang kebutuhan bisnis saya?"
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
