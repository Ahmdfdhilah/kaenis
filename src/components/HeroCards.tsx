import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Smartphone, Globe, MessageCircle } from "lucide-react";
import ceo from '@/assets/ceo.jpg';

export const HeroCards = () => {
  const openWhatsApp = () => {
    const phoneNumber = "6289647107815";
    const message = encodeURIComponent(
      "Halo Kaenis Tech! Saya tertarik dengan layanan digital solutions yang Anda tawarkan. Bisakah kita diskusikan lebih lanjut tentang kebutuhan bisnis saya?"
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="hidden sm:flex flex-row flex-wrap gap-8 relative lg:w-[700px] h-[500px]">
      {/* Team Profile */}
      <Card className="absolute right-[20px] top-12 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src={ceo}
            alt="team member"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Fiqih M. Alfito</CardTitle>
          <CardDescription className="font-normal text-primary">
            Chief Executive Officer
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-0">
          <p>
            Passionate about transforming businesses through innovative
          </p>
        </CardContent>
        <CardFooter>

        </CardFooter>
      </Card>

      {/* Contact Card (instead of Pricing) */}
      <Card className="absolute top-[100px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Get to know
            </span>
          </CardTitle>

          <CardDescription>
            Ready to transform your business? Let's discuss your digital needs and create the perfect solution.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            {[
              "Free initial consultation",
              "Custom solution design",
              "24/7 support included"
            ].map((benefit: string) => (
              <span
                key={benefit}
                className="flex"
              >
                <Check className="text-green-500" />{" "}
                <h3 className="ml-2">{benefit}</h3>
              </span>
            ))}
          </div>

        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />
        <CardFooter className="flex">
          <Button
            className="w-full flex items-center gap-2"
            onClick={openWhatsApp}
          >
            <MessageCircle className="w-4 h-4" />
            Contact via WhatsApp
          </Button>
        </CardFooter>
      </Card>

      {/* Services Card */}
      <Card className="absolute w-[350px] -right-[10px] bottom-10 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="">
            <CardTitle>Digital Solutions</CardTitle>
            <CardDescription className="text-md mt-2">
              Web development, mobile apps, and digital transformation services tailored for your business growth.
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <div className="flex gap-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <Globe className="w-3 h-3" />
              Web Dev
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Smartphone className="w-3 h-3" />
              Mobile
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};