import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import {
  ArrowRight,
  Target,
  Bot,
  MessageSquare,
  Send,
  BarChart3,
  Zap,
  Check,
} from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Lead Capture & Routing",
    description:
      "Capture every lead from WhatsApp, Instagram DMs, web forms, and ads—then route them to the right person on your team instantly.",
    outcomes: [
      "Zero missed leads",
      "Instant assignment to team members",
      "Source tracking for better ad ROI",
    ],
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    description:
      "Intelligent chatbots on WhatsApp, Instagram, and your website that respond 24/7, answer FAQs, and qualify leads before they reach your team.",
    outcomes: [
      "24/7 instant responses",
      "Intelligent lead qualification",
      "Seamless handoff to humans",
    ],
  },
  {
    icon: MessageSquare,
    title: "Social Media Automation",
    description:
      "Auto-reply to DMs, comments, and mentions with context-aware responses. Never leave a potential customer waiting again.",
    outcomes: [
      "Faster social engagement",
      "Consistent brand voice",
      "More leads from social",
    ],
  },
  {
    icon: Send,
    title: "Automated Follow-ups & Proposals",
    description:
      "Automatically send follow-up messages, reminders, and proposals based on lead behavior and timing rules you define.",
    outcomes: [
      "No dropped leads",
      "Faster proposal delivery",
      "Higher close rates",
    ],
  },
  {
    icon: BarChart3,
    title: "Reporting & Dashboards",
    description:
      "Real-time visibility into every lead, conversation, and conversion. Know exactly what's working and where to improve.",
    outcomes: [
      "Real-time lead tracking",
      "Conversion analytics",
      "Team performance metrics",
    ],
  },
  {
    icon: Zap,
    title: "Ad Assist",
    description:
      "Connect your Facebook, Instagram, and Google ads directly to your automation flows for instant lead response and better ROI.",
    outcomes: [
      "Instant lead response from ads",
      "Better lead quality tracking",
      "Higher ad ROI",
    ],
  },
];

const packages = [
  {
    name: "Pilot",
    description: "Perfect for testing automation on one channel",
    features: ["1 channel (WhatsApp OR Instagram)", "Basic chatbot", "Lead capture", "Email reports"],
    cta: "Start Pilot",
  },
  {
    name: "Starter",
    description: "Ideal for small businesses getting started",
    features: ["2 channels", "AI chatbot", "Lead routing", "Weekly reports", "Follow-up sequences"],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Pro",
    description: "Full automation suite for growing teams",
    features: [
      "All channels",
      "Advanced AI chatbot",
      "Multi-team routing",
      "Real-time dashboards",
      "Custom workflows",
      "Priority support",
    ],
    cta: "Go Pro",
  },
  {
    name: "Custom",
    description: "Enterprise-grade solutions tailored to you",
    features: ["Everything in Pro", "Custom integrations", "Dedicated manager", "SLA guarantees", "On-demand features"],
    cta: "Contact Us",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-subtle">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent)/0.06),transparent_60%)]" />
        
        <div className="container-wide mx-auto section-padding relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up animation-delay-100">
              End-to-end automation solutions for lead capture, qualification, and conversion. 
              Choose what you need—or let us build a custom system.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="p-6 lg:p-8 rounded-2xl bg-card border border-border/50 shadow-card card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-5">{service.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Business Outcomes:</p>
                  {service.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check size={16} className="text-accent flex-shrink-0" />
                      {outcome}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Simple Packages
            </h2>
            <p className="text-muted-foreground text-lg">
              Choose a package that fits your needs, or contact us for a custom solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`p-6 rounded-2xl bg-card border shadow-card relative ${
                  pkg.popular ? "border-accent" : "border-border/50"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <p className="text-muted-foreground text-sm mb-5">{pkg.description}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <Check size={16} className="text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={pkg.popular ? "accent" : "outline"}
                  className="w-full"
                  asChild
                >
                  <Link to="/book-demo">{pkg.cta}</Link>
                </Button>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground text-sm mt-8">
            All packages include one-time setup, stabilization period, and ongoing support. 
            Pricing discussed during demo.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-hero text-primary-foreground">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Not Sure What You Need?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
            Book a free demo and we'll audit your current lead flow, then recommend 
            the best solution for your business.
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

export default Services;
