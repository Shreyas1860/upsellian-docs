import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import {
  ArrowRight,
  Target,
  Lightbulb,
  Cog,
  BarChart3,
  CheckCircle2,
  Users,
  Zap,
} from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-subtle">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent)/0.06),transparent_60%)]" />
        
        <div className="container-wide mx-auto section-padding relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
              About <span className="text-gradient">Upsellian</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up animation-delay-100">
              We're an AI-driven marketing and automation agency on a mission to help 
              businesses capture every lead and convert more customers—automatically.
            </p>
          </div>
        </div>
      </section>

      {/* What We Are */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                What is Upsellian?
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Upsellian is an AI-driven marketing and automation agency that transforms 
                how businesses handle leads and customer communication.
              </p>
              <p className="text-muted-foreground mb-6">
                We build custom automation systems that respond to inquiries instantly, 
                qualify leads intelligently, and route hot prospects to your team—so you 
                never miss an opportunity again.
              </p>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                <p className="text-foreground font-medium italic">
                  "Turn manual marketing and lead handling into automated systems that 
                  work for you 24/7."
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Target, label: "Lead Capture", value: "100%" },
                { icon: Zap, label: "Response Time", value: "<30s" },
                { icon: Users, label: "Clients Served", value: "50+" },
                { icon: BarChart3, label: "Avg. ROI", value: "4.2x" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-xl bg-card border border-border/50 shadow-card text-center"
                >
                  <stat.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-wide mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-card border border-border/50 shadow-card">
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                <Target size={24} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                To transform manual marketing and lead handling into intelligent, 
                automated systems that help businesses respond faster, convert more, 
                and grow without adding headcount.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border/50 shadow-card">
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                <Lightbulb size={24} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground">
                A world where every small and medium business has access to affordable, 
                reliable automation—leveling the playing field with enterprise competitors 
                and delighting customers with instant, intelligent responses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How We Work
            </h2>
            <p className="text-muted-foreground text-lg">
              A proven process that gets you from demo to deployment in days, not months.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: 1,
                title: "Demo-First Approach",
                description:
                  "We start with a free demo where we audit your current lead flow and show you exactly how automation would work for your business.",
              },
              {
                step: 2,
                title: "Simple Onboarding",
                description:
                  "Once you're on board, we gather your requirements, connect your channels (WhatsApp, Instagram, website), and configure your automations.",
              },
              {
                step: 3,
                title: "One-Time Setup + Stabilization",
                description:
                  "We build, test, and deploy your system. Then we monitor closely for the first 2-4 weeks to ensure everything runs smoothly.",
              },
              {
                step: 4,
                title: "Ongoing Reporting & Optimization",
                description:
                  "You get real-time dashboards and regular reports. We continuously optimize based on data to improve your results.",
              },
            ].map((item, index) => (
              <div
                key={item.step}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  {index < 3 && (
                    <div className="w-0.5 h-16 bg-border mx-auto mt-2" />
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What We Stand For
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: CheckCircle2,
                title: "Results Over Hype",
                description: "We focus on ROI and business outcomes, not flashy demos that don't deliver.",
              },
              {
                icon: Cog,
                title: "Simple & Reliable",
                description: "Our systems are built to work consistently, not to impress with complexity.",
              },
              {
                icon: Users,
                title: "Service-First",
                description: "We're partners, not vendors. Your success is our success.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-xl bg-card border border-border/50 shadow-card text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
                  <value.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-hero text-primary-foreground">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's Build Your Automation System
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
            Ready to see what Upsellian can do for your business? Book a free demo 
            and get a custom automation audit.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/book-demo">
              Book Your Free Demo
              <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
