import { createFileRoute } from "@tanstack/react-router";
import { useState, type LucideIcon } from "react";
import {
  ArrowRight, BarChart3, Bot, Check, ChevronDown, CircleDot, Compass, Crosshair,
  FileText, GitBranch, Globe2, LayoutTemplate, Lightbulb, LineChart, Mail, Menu,
  MousePointerClick, Search, Send, Sparkles, Target, TrendingUp, Users, Workflow, X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TechNext | Go-To-Market & Growth Strategy" },
      { name: "description", content: "TechNext helps businesses build predictable growth through GTM strategy, demand generation, SEO, outbound, paid acquisition, conversion optimization, and analytics." },
      { property: "og:title", content: "TechNext | Go-To-Market & Growth Strategy" },
      { property: "og:description", content: "Build demand, generate qualified pipeline, and convert more opportunities into revenue with a connected GTM system." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "Organization", name: "TechNext", url: "/", description: "A technology-driven go-to-market and growth partner for B2B companies." },
          { "@type": "WebSite", name: "TechNext", url: "/" },
        ],
      }),
    }],
  }),
  component: TechNextPage,
});

const services: { icon: LucideIcon; title: string; short: string; detail: string; cta: string }[] = [
  { icon: Crosshair, title: "GTM Strategy", short: "Know who to target, what to say, and where to reach them.", detail: "Market research, ICP definition, positioning, messaging, competitor analysis, and GTM planning.", cta: "Explore GTM Strategy" },
  { icon: Sparkles, title: "Demand Generation", short: "Create demand before you ask for the sale.", detail: "Build awareness and interest through content, social, SEO, paid acquisition, and targeted campaigns.", cta: "Explore Demand Generation" },
  { icon: Search, title: "SEO", short: "Get discovered by the people already searching for what you offer.", detail: "Technical SEO, content strategy, search intent, on-page optimization, internal linking, and organic growth.", cta: "Explore SEO" },
  { icon: Send, title: "Outbound Lead Generation", short: "Put your offer in front of the right prospects.", detail: "ICP research, prospecting, cold email, LinkedIn outreach, personalization, follow-ups, and appointment setting.", cta: "Explore Outbound" },
  { icon: MousePointerClick, title: "Paid Acquisition", short: "Reach the right audience when speed matters.", detail: "Google Ads, Meta Ads, LinkedIn Ads, retargeting, conversion tracking, and campaign optimization.", cta: "Explore Paid Acquisition" },
  { icon: FileText, title: "Content & Social", short: "Build authority. Stay visible. Create demand.", detail: "Content strategy, LinkedIn, thought leadership, blogs, social content, distribution, and social management.", cta: "Explore Content" },
  { icon: Bot, title: "AEO / GEO", short: "Make your brand discoverable in the age of AI search.", detail: "AI search visibility, content optimization, entity optimization, authority building, and visibility monitoring.", cta: "Explore AEO / GEO" },
  { icon: LayoutTemplate, title: "Website & CRO", short: "Turn more visitors into opportunities.", detail: "Landing pages, website optimization, CTA strategy, forms, user journeys, and A/B testing.", cta: "Explore Website & CRO" },
];

const problems = [
  { icon: MousePointerClick, title: "Traffic Without Leads", text: "You have visitors, but not enough qualified opportunities." },
  { icon: GitBranch, title: "Leads Without Pipeline", text: "Marketing generates leads, but sales conversations remain inconsistent." },
  { icon: Target, title: "Unclear Positioning", text: "Your product is strong, but your market doesn't clearly understand why it matters." },
  { icon: Workflow, title: "Disconnected Channels", text: "SEO, content, paid campaigns, and outbound operate independently." },
  { icon: BarChart3, title: "No Clear Attribution", text: "You spend on marketing without knowing what is actually driving revenue." },
];

const outcomes = [
  { icon: Globe2, title: "Visibility", text: "Increase your presence across search, social, and emerging AI discovery channels." },
  { icon: Sparkles, title: "Demand", text: "Create awareness and interest among your target market." },
  { icon: Target, title: "Qualified Leads", text: "Attract prospects that fit your ideal customer profile." },
  { icon: Users, title: "Sales Meetings", text: "Turn targeted outreach and demand into meaningful sales conversations." },
  { icon: GitBranch, title: "Pipeline", text: "Create more qualified opportunities for your sales team." },
  { icon: TrendingUp, title: "Revenue", text: "Connect marketing activities to measurable business outcomes." },
];

const faqs = [
  ["What is GTM marketing?", "Go-to-market marketing is the strategy and execution used to bring a product or service to the right market, reach the right customers, communicate the right value, and create a path from demand to revenue."],
  ["Do you provide individual marketing services or complete GTM programs?", "We can support individual growth channels such as SEO, paid acquisition, or outbound, or combine multiple services into a broader GTM strategy based on your business needs."],
  ["How do you determine which services we need?", "We first look at your market, ICP, current acquisition channels, website, funnel, sales process, and business objectives. From there, we identify the highest-priority opportunities."],
  ["How long does it take to see results?", "The timeline depends on the channel, market, starting point, competition, and business objective. Some activities can generate early signals relatively quickly, while channels such as SEO typically require a longer compounding period."],
  ["Can you work with our existing marketing and sales team?", "Yes. We can work as an extension of an existing team, provide specific execution support, or help build and manage parts of the GTM system."],
  ["Can you handle both strategy and execution?", "Yes. Our approach can cover strategy, implementation, campaign execution, technology, tracking, and optimization."],
  ["How do you measure success?", "We align measurement with the business objective. Depending on the engagement, this may include qualified traffic, leads, meetings, conversion rate, pipeline, customer acquisition cost, and revenue-related metrics."],
];

function Logo() {
  return <a href="#top" className="flex items-center gap-2.5" aria-label="TechNext home"><span className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground"><TrendingUp className="size-4" /></span><span className="text-xl font-bold tracking-tight">TechNext</span></a>;
}

function ArrowLink({ href = "#contact", children, light = false }: { href?: string; children: React.ReactNode; light?: boolean }) {
  return <a href={href} className={`group inline-flex items-center gap-2 text-sm font-semibold ${light ? "text-deep-foreground" : "text-foreground"}`}>{children}<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
    <div className="section-shell grid h-18 grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
      <Logo />
      <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
        <div className="group relative py-6">
          <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground" aria-haspopup="true">Services <ChevronDown className="size-3.5" /></button>
          <div className="invisible absolute left-1/2 top-full w-[560px] -translate-x-1/2 border border-border bg-background p-5 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
            <div className="grid grid-cols-2 gap-x-8 gap-y-5">
              {[["Strategy", ["GTM Strategy"]], ["Demand", ["Demand Generation", "Content & Social", "SEO", "AEO / GEO"]], ["Acquisition", ["Outbound", "Paid Acquisition"]], ["Conversion", ["Website & CRO", "Analytics"]]].map(([group, links]) => <div key={group as string}><p className="mb-2 text-xs font-bold uppercase text-primary">{group as string}</p><div className="space-y-1">{(links as string[]).map((link) => <a key={link} href="#services" className="block py-1 text-sm text-muted-foreground hover:text-foreground">{link}</a>)}</div></div>)}
            </div>
          </div>
        </div>
        <a href="#solutions" className="text-sm font-medium text-muted-foreground hover:text-foreground">Solutions</a>
        <a href="#case-studies" className="text-sm font-medium text-muted-foreground hover:text-foreground">Case Studies</a>
        <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground">About</a>
        <a href="#insights" className="text-sm font-medium text-muted-foreground hover:text-foreground">Insights</a>
      </nav>
      <a href="#contact" className="btn-lift hidden items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground lg:inline-flex">Talk to Our GTM Team <ArrowRight className="size-4" /></a>
      <button className="grid size-10 place-items-center rounded-lg border border-border lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X className="size-5" /> : <Menu className="size-5" />}</button>
    </div>
    {open && <nav id="mobile-menu" className="border-t border-border bg-background px-5 py-5 lg:hidden" aria-label="Mobile navigation"><div className="mx-auto flex max-w-3xl flex-col gap-1">{["Services", "Solutions", "Case Studies", "About", "Insights"].map((item) => <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium hover:bg-secondary">{item}</a>)}<a href="#contact" onClick={() => setOpen(false)} className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground">Talk to Our GTM Team <ArrowRight className="size-4" /></a></div></nav>}
  </header>;
}

function HeroVisual() {
  const stages = ["Market", "Demand", "Leads", "Pipeline", "Revenue"];
  return <div className="relative mx-auto w-full max-w-[530px] overflow-hidden rounded-3xl border border-border bg-deep p-5 shadow-2xl sm:p-8" aria-label="GTM operating system flow from market to revenue">
    <div className="mb-8 flex items-center justify-between border-b border-line-dark pb-4"><div><p className="text-xs font-semibold uppercase text-primary">GTM operating system</p><p className="mt-1 text-sm text-deep-foreground/60">Connected growth architecture</p></div><span className="flex items-center gap-2 text-xs text-deep-foreground/70"><span className="size-2 rounded-full bg-primary flow-dot" /> Live system</span></div>
    <div className="relative mx-auto flex max-w-sm flex-col items-center">
      {stages.map((stage, i) => <div key={stage} className="contents"><div className={`relative z-10 grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 rounded-xl border px-4 py-3 ${i === 4 ? "border-primary bg-primary text-primary-foreground" : "border-line-dark bg-deep text-deep-foreground"}`}><span className={`grid size-8 place-items-center rounded-lg ${i === 4 ? "bg-primary-foreground/15" : "bg-primary/15 text-primary"}`}>{i === 4 ? <TrendingUp className="size-4" /> : <CircleDot className="size-4" />}</span><span className="font-semibold">{stage}</span><span className={`text-xs ${i === 4 ? "text-primary-foreground/70" : "text-deep-foreground/45"}`}>0{i + 1}</span></div>{i < stages.length - 1 && <div className="flow-line h-7 w-px bg-primary" />}</div>)}
    </div>
    <div className="mt-6 grid grid-cols-3 gap-2">{["Signal", "Intent", "Conversion"].map((x, i) => <div key={x} className="rounded-lg border border-line-dark p-2.5"><p className="text-[10px] uppercase text-deep-foreground/45">{x}</p><div className="mt-2 flex h-4 items-end gap-1">{[3, 7, 5, 10, 8].map((h, j) => <span key={j} className="flex-1 rounded-sm bg-primary/50" style={{ height: `${h + i * 2}px` }} />)}</div></div>)}</div>
  </div>;
}

function SectionIntro({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return <div className="mb-12"><p className="eyebrow">{eyebrow}</p><h2 className={`section-title mt-4 ${light ? "text-deep-foreground" : "text-foreground"}`}>{title}</h2>{text && <p className={`mt-5 max-w-2xl text-lg leading-8 ${light ? "text-deep-foreground/65" : "text-muted-foreground"}`}>{text}</p>}</div>;
}

function TechNextPage() {
  return <div id="top" className="bg-background text-foreground"><Header /><main>
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-y-0 right-0 hidden w-2/5 bg-brand-soft lg:block" aria-hidden="true" />
      <div className="section-shell relative grid items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
        <div className="reveal"><p className="eyebrow">GTM Strategy <span className="mx-2">•</span> Demand <span className="mx-2">•</span> Pipeline <span className="mx-2">•</span> Revenue</p><h1 className="mt-6 max-w-3xl text-[clamp(2.65rem,6vw,4.75rem)] font-bold leading-[1.02] tracking-normal">Turn Marketing Into a <span className="text-primary">Predictable Growth Engine</span></h1><p className="mt-6 max-w-2xl text-xl font-medium leading-8">Build demand. Generate qualified pipeline. Convert more opportunities into revenue.</p><p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">TechNext helps businesses build and execute data-driven go-to-market systems across SEO, demand generation, outbound, paid acquisition, content, conversion, and analytics.</p><p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">Whether you need more visibility, qualified leads, sales meetings, or a clearer path from marketing to revenue — we build the strategy and execution engine to get you there.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#contact" className="btn-lift inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground">Talk to Our GTM Team <ArrowRight className="size-4" /></a><a href="#services" className="btn-lift inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3.5 font-semibold hover:border-primary">Explore Our Services</a></div><p className="mt-7 max-w-2xl text-xs font-semibold uppercase leading-6 text-muted-foreground">GTM Strategy • Demand Generation • SEO • Outbound • Paid Acquisition • CRO • Analytics</p></div>
        <HeroVisual />
      </div>
    </section>

    <section id="solutions" className="bg-brand-soft py-20 lg:py-28"><div className="section-shell"><SectionIntro eyebrow="The growth problem" title="Growth doesn't come from doing more marketing. It comes from doing the right marketing." text="Most businesses don't have a traffic problem alone. They have a targeting problem, positioning problem, conversion problem, or execution problem." /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">{problems.map(({ icon: Icon, title, text }, i) => <article key={title} className="card-lift min-h-64 rounded-2xl border border-border bg-background p-6"><div className="flex items-center justify-between"><span className="text-sm font-bold text-primary">{String(i + 1).padStart(2, "0")}</span><Icon className="size-5 text-primary" /></div><h3 className="mt-12 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div></div></section>

    <section className="overflow-hidden bg-deep py-20 lg:py-28"><div className="section-shell"><SectionIntro light eyebrow="One connected growth system" title="Connect every stage of your go-to-market engine." text="TechNext brings strategy, technology, marketing, and measurement together to build a connected growth system." /><div className="overflow-x-auto pb-4"><div className="flex min-w-[1040px] items-center">{["Market", "ICP", "Positioning", "Offer", "Demand", "Lead", "Meeting", "Opportunity", "Customer", "Revenue"].map((item, i, arr) => <div key={item} className="contents"><div className={`grid h-20 min-w-24 flex-1 place-items-center rounded-xl border px-2 text-center text-sm font-semibold ${item === "Revenue" ? "border-primary bg-primary text-primary-foreground" : "border-line-dark bg-deep text-deep-foreground"}`}>{item}</div>{i < arr.length - 1 && <ArrowRight className="mx-2 size-4 shrink-0 text-primary" />}</div>)}</div></div><p className="mt-8 border-l-2 border-primary pl-5 text-xl font-medium text-deep-foreground">Every channel has a role. Every activity has an outcome.</p></div></section>

    <section id="services" className="py-20 lg:py-28"><div className="section-shell"><SectionIntro eyebrow="What we do" title="From market strategy to revenue growth." text="We don't treat marketing channels as isolated services. We connect the entire customer journey." /><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{services.map(({ icon: Icon, title, short, detail, cta }, i) => <article key={title} className="card-lift flex min-h-[390px] flex-col rounded-2xl border border-border bg-background p-6"><div className="flex items-center justify-between"><span className="text-sm font-bold text-muted-foreground">{String(i + 1).padStart(2, "0")}</span><span className="grid size-11 place-items-center rounded-xl bg-secondary text-primary"><Icon className="size-5" /></span></div><h3 className="mt-10 text-xl font-semibold">{title}</h3><p className="mt-3 font-medium leading-6">{short}</p><p className="mt-3 text-sm leading-6 text-muted-foreground">{detail}</p><div className="mt-auto pt-7"><ArrowLink>{cta}</ArrowLink></div></article>)}</div><div className="mt-10"><ArrowLink>View All Services</ArrowLink></div></div></section>

    <section id="about" className="bg-deep py-20 lg:py-28"><div className="section-shell"><SectionIntro light eyebrow="Why TechNext" title="Strategy + Execution + Technology" text="Marketing becomes difficult when strategy, execution, technology, and data live in separate places. TechNext brings them together." /><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{[
      [Compass, "Strategic Thinking", "We start with your market, customers, business goals, and competitive landscape—not a random list of marketing tactics."],
      [Workflow, "Full-Funnel Execution", "From attracting the right audience to generating leads and improving conversion, we work across the customer journey."],
      [Bot, "Technology Expertise", "Our technology background connects marketing strategy with websites, tracking, automation, data, and digital infrastructure."],
      [LineChart, "Data-Driven Decisions", "We measure meaningful business metrics and use performance data to continuously improve the system."],
    ].map(([Icon, title, text]) => { const C = Icon as LucideIcon; return <article key={title as string} className="rounded-2xl border border-line-dark bg-deep p-6"><div className="h-1 w-12 bg-primary" /><C className="mt-8 size-6 text-primary" /><h3 className="mt-5 text-xl font-semibold text-deep-foreground">{title as string}</h3><p className="mt-3 text-sm leading-6 text-deep-foreground/60">{text as string}</p></article>; })}</div></div></section>

    <section className="py-20 lg:py-28"><div className="section-shell"><SectionIntro eyebrow="How we work" title="From strategy to execution, built around your growth goals." /><div className="grid gap-x-8 gap-y-4 lg:grid-cols-2">{[
      ["Discover", "Understand your business, market, customers, competitors, existing channels, and objectives."], ["Define", "Identify your ICP, customer problems, positioning, messaging, offers, and growth opportunities."], ["Build", "Build campaigns, content, landing pages, tracking systems, and marketing infrastructure."], ["Launch", "Activate the right channels and start generating demand, traffic, leads, and opportunities."], ["Measure", "Track meaningful performance metrics across the funnel."], ["Optimize", "Use data and market feedback to continuously improve performance."],
    ].map(([title, text], i) => <article key={title} className={`grid grid-cols-[auto_1fr] gap-5 rounded-2xl p-6 ${i % 2 === 0 ? "bg-brand-soft" : "border border-border bg-background"}`}><span className="text-sm font-bold text-primary">{String(i + 1).padStart(2, "0")}</span><div><h3 className="text-xl font-semibold">{title}</h3><p className="mt-2 leading-7 text-muted-foreground">{text}</p></div></article>)}</div><div className="mt-10 flex flex-wrap items-center gap-2 text-sm font-semibold text-muted-foreground">{["Strategy", "Build", "Launch", "Measure", "Optimize"].map((x, i) => <span key={x} className="contents"><span>{x}</span>{i < 4 && <ArrowRight className="size-4 text-primary" />}</span>)}</div></div></section>

    <section className="bg-brand-pale py-20 lg:py-28"><div className="section-shell"><SectionIntro eyebrow="What success looks like" title="Marketing activity is not the goal. Business growth is." /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{outcomes.map(({ icon: Icon, title, text }) => <article key={title} className="card-lift rounded-2xl border border-primary/15 bg-background p-6"><Icon className="size-6 text-primary" /><h3 className="mt-8 text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-muted-foreground">{text}</p></article>)}</div></div></section>

    <section id="case-studies" className="py-20 lg:py-28"><div className="section-shell"><SectionIntro eyebrow="Proof of execution" title="Real growth problems. Real solutions." text="Explore how strategy, execution, technology, and optimization come together to solve specific business challenges." /><div className="grid gap-5 lg:grid-cols-3">{["B2B Technology", "SaaS", "Growth-Stage Business"].map((industry) => <article key={industry} className="rounded-2xl border border-border bg-background p-6"><p className="text-xs font-bold uppercase text-primary">{industry}</p><h3 className="mt-8 text-2xl font-semibold">Case Study Coming Soon</h3><div className="mt-7 divide-y divide-border">{["Challenge", "Approach", "Outcome"].map((label) => <div key={label} className="grid grid-cols-[90px_1fr] py-3 text-sm"><span className="font-semibold">{label}</span><span className="text-muted-foreground">Details will be published after approval.</span></div>)}</div></article>)}</div><div className="mt-10"><ArrowLink>View Case Studies</ArrowLink></div></div></section>

    <section className="bg-brand-soft py-20 lg:py-28"><div className="section-shell"><SectionIntro eyebrow="Who we help" title="Built for businesses ready to scale." /><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{[[TrendingUp, "Growth-Stage Companies", "Build a more predictable acquisition engine."], [Bot, "SaaS & Technology Companies", "Turn complex products into clear positioning and demand."], [Users, "B2B Companies", "Generate qualified demand and sales pipeline."], [Globe2, "Businesses Entering New Markets", "Define the market, ICP, positioning, and acquisition strategy."]].map(([Icon, title, text]) => { const C = Icon as LucideIcon; return <article key={title as string} className="rounded-2xl border border-border bg-background p-6"><C className="size-6 text-primary" /><h3 className="mt-8 text-xl font-semibold">{title as string}</h3><p className="mt-3 leading-7 text-muted-foreground">{text as string}</p></article>; })}</div><div className="mt-10"><ArrowLink>Find Your Growth Opportunity</ArrowLink></div></div></section>

    <section id="insights" className="bg-deep py-20 lg:py-28"><div className="section-shell grid items-start gap-14 lg:grid-cols-[.85fr_1.15fr]"><SectionIntro light eyebrow="Measure what matters" title="Know what is working. Know what to improve." text="Marketing decisions should be based on data, not assumptions." /><div className="rounded-2xl border border-line-dark bg-deep p-5 sm:p-7"><div className="flex items-center justify-between border-b border-line-dark pb-5"><div><p className="font-semibold text-deep-foreground">Revenue journey</p><p className="mt-1 text-xs text-deep-foreground/45">Demo Data · No live values</p></div><BarChart3 className="size-5 text-primary" /></div><div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">{["Traffic", "Leads", "Meetings", "Opportunities", "Customers", "Revenue"].map((x, i) => <div key={x} className={`rounded-xl border p-4 ${i === 5 ? "border-primary bg-primary/10" : "border-line-dark"}`}><p className="text-xs text-deep-foreground/45">Stage {i + 1}</p><p className="mt-2 font-semibold text-deep-foreground">{x}</p><div className="mt-4 h-1.5 rounded-full bg-line-dark"><div className="h-full rounded-full bg-primary" style={{ width: `${88 - i * 10}%` }} /></div></div>)}</div><div className="mt-6 flex flex-wrap gap-2">{["GA4", "Google Search Console", "Google Tag Manager", "UTM Tracking", "Conversion Tracking", "Attribution"].map((tool) => <span key={tool} className="rounded-lg border border-line-dark px-3 py-2 text-xs text-deep-foreground/65">{tool}</span>)}</div></div></div></section>

    <section className="py-20 lg:py-28"><div className="section-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><SectionIntro eyebrow="FAQ" title="Questions, answered." /><div>{faqs.map(([question, answer]) => <details key={question} className="group border-b border-border"><summary className="grid cursor-pointer list-none grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-6 font-semibold"><span>{question}</span><ChevronDown className="size-5 shrink-0 text-primary transition-transform group-open:rotate-180" /></summary><p className="max-w-3xl pb-6 leading-7 text-muted-foreground">{answer}</p></details>)}</div></div></section>

    <section id="contact" className="relative overflow-hidden bg-deep py-20 lg:py-28"><div className="absolute inset-0 opacity-20" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)", backgroundSize: "32px 32px" }} /><div className="section-shell relative"><p className="eyebrow">Ready to grow?</p><h2 className="mt-4 max-w-4xl text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.05] text-deep-foreground">Build a growth engine that connects marketing to revenue.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-deep-foreground/65">Whether you need more qualified traffic, better conversion, more sales meetings, or a clearer go-to-market strategy, let's identify what's holding your growth back.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="mailto:hello@technext.example?subject=GTM Strategy Call" className="btn-lift inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground">Talk to Our GTM Team <ArrowRight className="size-4" /></a><a href="mailto:hello@technext.example?subject=Book a Strategy Call" className="btn-lift inline-flex items-center justify-center rounded-xl border border-line-dark px-6 py-3.5 font-semibold text-deep-foreground hover:border-primary">Book a Strategy Call</a></div></div></section>
  </main><Footer /></div>;
}

function Footer() {
  return <footer className="border-t border-line-dark bg-deep py-14"><div className="section-shell"><div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]"><div><Logo /><p className="mt-5 max-w-xs text-sm leading-6 text-deep-foreground/55">Strategy + Technology + Marketing + Growth</p></div><FooterList title="Services" items={["GTM Strategy", "Demand Generation", "SEO", "Outbound", "Paid Acquisition", "Content & Social", "AEO / GEO", "Website & CRO", "Analytics"]} /><FooterList title="Company" items={["About", "Case Studies", "Insights", "FAQs", "Contact"]} /><FooterList title="Connect" items={["LinkedIn"]} /></div><div className="mt-14 flex flex-col gap-4 border-t border-line-dark pt-6 text-xs text-deep-foreground/45 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 TechNext. All rights reserved.</p><div className="flex gap-5"><a href="#top" className="hover:text-deep-foreground">Privacy Policy</a><a href="#top" className="hover:text-deep-foreground">Terms of Service</a></div></div></div></footer>;
}

function FooterList({ title, items }: { title: string; items: string[] }) {
  return <div><h3 className="text-sm font-semibold text-deep-foreground">{title}</h3><ul className="mt-4 space-y-2.5">{items.map((item) => <li key={item}><a href={item === "Contact" ? "#contact" : item === "FAQs" ? "#insights" : item === "LinkedIn" ? "#top" : "#services"} className="text-sm text-deep-foreground/50 hover:text-deep-foreground">{item}</a></li>)}</ul></div>;
}
