import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
}

const project: ProjectProps[] = [
  {
    title: "Responsive Design",
    description:
      "Every solution we create adapts perfectly to any device. From desktop to mobile, your users get a consistent, optimized experience that drives engagement and conversions.",
    image: image4,
  },
  {
    title: "Intuitive User Interface",
    description:
      "We design interfaces that users love to interact with. Clean, modern, and user-friendly designs that make complex business processes simple and enjoyable.",
    image: image3,
  },
  {
    title: "AI-Powered Insights",
    description:
      "Leverage artificial intelligence to gain valuable business insights. Our solutions integrate smart analytics to help you make data-driven decisions and stay ahead of the competition.",
    image: image,
  },
];

const featureList: string[] = [
  "Custom Web Application Development",
  "Mobile App Development (Android)",
  "E-commerce Platform Solutions",
  "Progressive Web Apps (PWA)",
  "API Development & Integration",
];

export const Project = () => {
  return (
    <section
      id="projects"
      className="container py-24 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Projects
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {project.map(({ title, description, image }: ProjectProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
