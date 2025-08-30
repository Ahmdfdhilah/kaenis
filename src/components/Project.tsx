import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import jejama from '@/assets/projects/jejama.png';
import keran from '@/assets/projects/keran.jpg';
import perwadag from '@/assets/projects/perwadag.jpg';
import okoce from '@/assets/projects/okoce.jpg';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
}

const project: ProjectProps[] = [
  {
    title: "Performance Evaluation System – Ministry of Trade (Indonesia)",
    description:
      "We developed a comprehensive evaluation system for the Ministry of Trade, automating workflows such as task letter generation, meeting management, and digital questionnaires. Built with a monorepo architecture (Turborepo) and shared UI packages, the system ensures scalability, consistency, and streamlined government evaluation processes.",
    image: perwadag,
  },
  {
    title: "JEJAMA QRIS Competition – Bank Indonesia",
    description:
      "Our team delivered a real-time QRIS transaction validation system powered by OCR technology with 95% accuracy. Using a microservices architecture with RabbitMQ for asynchronous processing, the platform can handle thousands of concurrent transactions seamlessly. Redis-based fraud detection further ensures integrity and prevents duplicate submissions.",
    image: jejama,
  },
  {
    title: "Human Resource Information System (HRIS) – OKOCE",
    description:
      "We built a modern HRIS platform that unifies attendance, leave, payroll, and organizational management in one system. Developed with FastAPI, Redis, and Celery for real-time processing and background tasks, the solution is containerized with Docker for production stability and integrated with automated notifications and backups.",
    image: okoce,
  },
  {
    title: "Smart E-Parking System – Sumatera Institute of Technology",
    description:
      "A secure and scalable parking solution integrating multi-factor authentication (RFID cards, RFID stickers, and license plate recognition). Developed with Python Pyramid and React, the system enhances access control, streamlines on-site operations, and provides a responsive user interface to minimize user errors.",
    image: keran,
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
          <Card key={title} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            {/* Image di atas sebagai hero */}
            <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={image}
                alt={`${title} screenshot`}
                className="w-full h-64  group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              {/* Overlay gradient untuk depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent" />
            </div>

            <CardHeader className="pb-4">
              <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors duration-300">
                {title}
              </CardTitle>
            </CardHeader>

            <CardContent className="flex-1">
              <p className="text-muted-foreground leading-relaxed line-clamp-4">
                {description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};