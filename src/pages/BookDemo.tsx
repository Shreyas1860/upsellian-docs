import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import {
  Calendar,
  Clock,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const BookDemo = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-subtle">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent)/0.06),transparent_60%)]" />
        
        <div className="container-wide mx-auto section-padding relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
              Book Your Free{" "}
              <span className="text-gradient">Automation Demo</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up animation-delay-100">
              See exactly how Upsellian can automate your lead capture, qualification, 
              and follow-ups—customized for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* What to Expect */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                What to Expect
              </h2>
              
              <div className="space-y-6 mb-8">
                {[
                  {
                    title: "Quick Audit",
                    description:
                      "We'll review your current lead flow and identify opportunities for automation.",
                    duration: "5 min",
                  },
                  {
                    title: "Live Demo",
                    description:
                      "See our AI chatbots, lead routing, and follow-up sequences in action—tailored to your business.",
                    duration: "10 min",
                  },
                  {
                    title: "Clear Next Steps",
                    description:
                      "Get a custom recommendation with timeline and pricing. No pressure, no hard sell.",
                    duration: "5 min",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 p-5 rounded-xl bg-card border border-border/50 shadow-soft"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                          ~{item.duration}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-8">
                <Clock size={18} />
                <span>Total call time: ~15-20 minutes</span>
              </div>

              <div className="p-6 rounded-xl bg-accent/5 border border-accent/20">
                <h3 className="font-semibold text-foreground mb-2">
                  Why Book a Demo?
                </h3>
                <ul className="space-y-2">
                  {[
                    "See automation working for YOUR industry",
                    "Get a free audit of your current lead flow",
                    "No commitment required",
                    "Walk away with actionable insights",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Calendar Embed Placeholder */}
            <div>
              <div className="p-8 rounded-2xl bg-card border border-border/50 shadow-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      Schedule Your Demo
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Pick a time that works for you
                    </p>
                  </div>
                </div>

                {/* Placeholder for Calendly or similar */}
                <div className="aspect-[4/3] bg-secondary/50 rounded-xl flex flex-col items-center justify-center p-8 text-center border-2 border-dashed border-border">
                  <Calendar size={48} className="text-muted-foreground/40 mb-4" />
                  <p className="text-muted-foreground mb-4">
                    Calendar booking widget will be embedded here
                  </p>
                  <p className="text-xs text-muted-foreground/60">
                    (Calendly, Cal.com, or similar integration)
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    Prefer to chat first? Reach out on WhatsApp:
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle size={18} />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-narrow mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {[
              {
                q: "Is the demo really free?",
                a: "Yes, 100% free with no strings attached. We'll give you a custom audit and demo without any obligation.",
              },
              {
                q: "How long does the demo take?",
                a: "About 15-20 minutes. We respect your time and keep things focused.",
              },
              {
                q: "What do I need to prepare?",
                a: "Nothing! Just come with an idea of your current lead flow and any pain points you're experiencing.",
              },
              {
                q: "Can I invite my team?",
                a: "Absolutely. We encourage it so everyone can see how the automation would work.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="p-5 rounded-xl bg-card border border-border/50 shadow-soft"
              >
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternate CTA */}
      <section className="section-padding bg-gradient-hero text-primary-foreground">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Have Questions First?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
            No problem. Send us a message and we'll get back to you within 24 hours.
          </p>
          <Button variant="hero-secondary" size="xl" asChild>
            <Link to="/contact">
              Contact Us
              <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default BookDemo;
