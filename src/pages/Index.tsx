import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import {
  ArrowRight,
  MessageSquare,
  Zap,
  BarChart3,
  Clock,
  Users,
  TrendingUp,
  Bot,
  Target,
  Send,
  CheckCircle2,
} from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-subtle">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent)/0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.05),transparent_50%)]" />
        
        <div className="container-wide mx-auto section-padding relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 animate-fade-in">
              <Zap size={16} />
              AI-Powered Marketing Automation
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up">
              Your Business on{" "}
              <span className="text-gradient">Autopilot</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up animation-delay-100">
              Stop losing leads to slow responses. Our AI handles WhatsApp, Instagram, 
              and website inquiries 24/7—qualifying prospects and routing them to your team instantly.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-200">
              <Button variant="hero" size="xl" asChild>
                <Link to="/book-demo">
                  Book a Free Demo
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="hero-secondary" size="xl" asChild>
                <Link to="/services">See How It Works</Link>
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground animate-fade-in-up animation-delay-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-accent" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-accent" />
                15-min demo call
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-accent" />
                Custom automation audit
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Sound Familiar?
            </h2>
            <p className="text-muted-foreground text-lg">
              These problems cost businesses thousands in lost revenue every month.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Clock,
                title: "Missed Leads",
                description:
                  "Inquiries come in at night, on weekends, during meetings—and by the time you respond, they've moved on.",
              },
              {
                icon: MessageSquare,
                title: "Slow Response Times",
                description:
                  "Manual replies take hours. Meanwhile, 78% of customers buy from whoever responds first.",
              },
              {
                icon: Users,
                title: "Manual Follow-ups",
                description:
                  "Your team spends hours on repetitive messages instead of closing deals and serving customers.",
              },
            ].map((problem, index) => (
              <div
                key={problem.title}
                className="p-6 lg:p-8 rounded-2xl bg-card border border-border/50 shadow-card card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-destructive/10 text-destructive flex items-center justify-center mb-4">
                  <problem.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg">
              A simple 4-step process that runs automatically, 24/7.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                icon: Target,
                title: "Capture",
                description: "Every lead from WhatsApp, Instagram, or your website is captured instantly.",
              },
              {
                step: "02",
                icon: Bot,
                title: "Qualify",
                description: "AI asks the right questions to understand needs and intent.",
              },
              {
                step: "03",
                icon: Send,
                title: "Route",
                description: "Hot leads go straight to your team. Others get nurtured automatically.",
              },
              {
                step: "04",
                icon: BarChart3,
                title: "Report",
                description: "See every conversation, conversion, and metric in real-time dashboards.",
              },
            ].map((item, index) => (
              <div
                key={item.step}
                className="relative p-6 rounded-2xl bg-card border border-border/50 shadow-card animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="absolute top-4 right-4 text-4xl font-bold text-accent/20">
                  {item.step}
                </span>
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What We Automate
            </h2>
            <p className="text-muted-foreground text-lg">
              End-to-end solutions for lead capture, communication, and conversion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Lead Capture & Routing",
                description: "Capture leads from all channels and route them to the right person instantly.",
              },
              {
                icon: Bot,
                title: "AI Chatbots",
                description: "24/7 intelligent responses on WhatsApp, Instagram, and your website.",
              },
              {
                icon: MessageSquare,
                title: "Social Media Automation",
                description: "Auto-reply to DMs, comments, and mentions with context-aware responses.",
              },
              {
                icon: Send,
                title: "Automated Follow-ups",
                description: "Never miss a follow-up. Proposals and reminders sent automatically.",
              },
              {
                icon: BarChart3,
                title: "Reporting & Dashboards",
                description: "Real-time visibility into leads, conversions, and team performance.",
              },
              {
                icon: Zap,
                title: "Ad Assist",
                description: "Connect your ads to instant lead responses for higher ROI.",
              },
            ].map((service, index) => (
              <div
                key={service.title}
                className="group p-6 rounded-2xl bg-card border border-border/50 shadow-card card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <service.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Built For Businesses Like Yours
            </h2>
            <p className="text-muted-foreground text-lg">
              If you get leads through WhatsApp, Instagram, or your website—we can help.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Salons & Spas", emoji: "💇‍♀️" },
              { name: "Gyms & Studios", emoji: "🏋️" },
              { name: "Clinics & Wellness", emoji: "🏥" },
              { name: "Real Estate", emoji: "🏠" },
              { name: "Cafes & Restaurants", emoji: "☕" },
              { name: "E-commerce & D2C", emoji: "🛒" },
              { name: "Coaching & Consulting", emoji: "📈" },
              { name: "Service Providers", emoji: "🔧" },
            ].map((business) => (
              <div
                key={business.name}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 shadow-soft"
              >
                <span className="text-2xl">{business.emoji}</span>
                <span className="font-medium text-foreground">{business.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Real Business Outcomes
            </h2>
            <p className="text-muted-foreground text-lg">
              What our clients experience after implementing our automations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "< 30 sec",
                label: "Average Response Time",
                description: "From hours to seconds—leads get instant attention.",
              },
              {
                metric: "40%+",
                label: "Higher Conversion",
                description: "Faster response = more customers won.",
              },
              {
                metric: "20+ hrs",
                label: "Saved Per Week",
                description: "Less manual work for you and your team.",
              },
            ].map((outcome, index) => (
              <div
                key={outcome.label}
                className="text-center p-8 rounded-2xl bg-card border border-border/50 shadow-card animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">
                  {outcome.metric}
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">
                  {outcome.label}
                </div>
                <p className="text-muted-foreground text-sm">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero text-primary-foreground">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Stop Losing Leads?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
            Book a free demo and see how Upsellian can automate your lead capture, 
            qualification, and follow-ups—starting this week.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/book-demo">
                Book Your Free Demo
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button variant="hero-secondary" size="xl" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
