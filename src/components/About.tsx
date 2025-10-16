import { Card, CardContent } from "@/components/ui/card"
import about from '@/assets/coding.jpg';

export const About = () => {
  return (
    <section id="about" className="container py-24">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
          Meet <span className="bg-gradient-to-r from-primary to-primary/20 text-transparent bg-clip-text">Lyra Digital</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
          We're passionate innovators dedicated to transforming ideas into extraordinary digital experiences. Our
          journey began with a simple belief: technology should empower, inspire, and connect people.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Story Section */}
        <div className="space-y-6">
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full"></div>
            <div className="pl-8">
              <h3 className="text-2xl font-bold mb-4">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded by a team of visionary developers and designers, Lyra Digital emerged from the desire to bridge the
                gap between cutting-edge technology and human-centered design. We believe that every pixel, every line
                of code, and every user interaction should serve a greater purpose.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we're proud to be trusted partners for businesses ranging from innovative startups to Fortune 500
                companies, helping them navigate the digital landscape with confidence and creativity.
              </p>
            </div>
          </div>

        </div>

        {/* Image Section */}
        <div className="relative">
          <div className="relative overflow-hidden  p-8">
            <img
              src={about}
              alt="Lyra Digital team collaboration"
              className="w-full"
            />
          </div>

          {/* Floating Quote */}
          <Card className="absolute -bottom-6 -left-6 max-w-sm bg-card/95 backdrop-blur-sm border-primary/20">
            <CardContent className="p-6">
              <blockquote className="text-sm italic text-muted-foreground">
                "Innovation distinguishes between a leader and a follower. We choose to lead."
              </blockquote>
              <cite className="text-xs font-medium text-primary mt-2 block">— Lyra Digital Team</cite>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}