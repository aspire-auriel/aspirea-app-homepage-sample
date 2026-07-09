// Content pulled from https://aspireapp.com/ (Hero, Features, Testimonials).
// Kept in a single module so it maps cleanly onto Sanity documents later.

export const hero = {
  eyebrow: "🔥 New: Earn 1.2% unlimited cashback on all corporate card spend.",
  eyebrowHref: "https://aspireapp.com/cashback",
  title: "The finance stack for global businesses",
  subtitle:
    "Multi-currency, multi-market, multi-time zone — Aspire does business like you do.",
  emailPlaceholder: "Enter your work email",
  cta: "Get started",
  trustLabel: "Trusted by 50,000+ modern businesses",
  rating: "4.5 rating",
  image:
    "https://cdn.prod.website-files.com/5ed5b60be1889f546024ada0/6a02b9745355b96af94975eb_home-02-v2.webp",
  boxBg:
    "https://cdn.prod.website-files.com/5ed5b60be1889f546024ada0/6a0172ace415cdbc01e0932d_home-01-p-500.webp",
  logos: [
    "https://cdn.prod.website-files.com/5ed5b60be1889f546024ada0/69b8c0ee47787c088dcc2664_Group%201242151271.png",
    "https://cdn.prod.website-files.com/5ed5b60be1889f546024ada0/69b8c0ee47787c088dcc266e_hmlet.png",
    "https://cdn.prod.website-files.com/5ed5b60be1889f546024ada0/69b8c0ee47787c088dcc266c_Group%201242151269.png",
    "https://cdn.prod.website-files.com/5ed5b60be1889f546024ada0/69b8c0ee47787c088dcc266a_HIPVAN.png",
    "https://cdn.prod.website-files.com/5ed5b60be1889f546024ada0/69b8c0ee47787c088dcc2668_Group%201242151272.png",
    "https://cdn.prod.website-files.com/5ed5b60be1889f546024ada0/69b8c0ee47787c088dcc2662_Group%201242151276.png",
    "https://cdn.prod.website-files.com/5ed5b60be1889f546024ada0/69b8c0ee47787c088dcc2670_Group%201242151274.png",
    "https://cdn.prod.website-files.com/5ed5b60be1889f546024ada0/69b8c0ee47787c088dcc2666_Group%201242151275.png",
    "https://cdn.prod.website-files.com/5ed5b60be1889f546024ada0/69b8c0ee47787c088dcc2672_Group%201242151273.png",
  ],
};

export const features = {
  title: "Everything you need to grow your business",
  items: [
    {
      name: "Business Account",
      desc: "Open and manage multi-currency accounts built for global growth",
      href: "https://aspireapp.com/business-account",
    },
    {
      name: "FX & Payments",
      desc: "Move money worldwide faster, at better rates",
      href: "https://aspireapp.com/global-payments",
    },
    {
      name: "Corporate Cards",
      desc: "Empower teams with smart cards that track every expense",
      href: "https://aspireapp.com/corporate-card",
    },
    {
      name: "Yield",
      desc: "Unlock returns on your SGD and USD funds with daily interest",
      href: "https://aspireapp.com/yield",
    },
    {
      name: "Integrations",
      desc: "Connect Aspire to your existing tools and automate workflows",
      href: "https://aspireapp.com/integrations",
    },
    {
      name: "Expense Management",
      desc: "Control company spending with real-time visibility and approvals",
      href: "https://aspireapp.com/expense-management",
    },
  ],
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  logo: string;
  portrait: string;
  href: string;
  stats: { value: string; label: string }[];
};

export const testimonials = {
  title: "Hear it first from our customers",
  items: [
    {
      quote:
        "As a startup, we needed more flexible solutions to support our increasing needs, as well as ones that'd make the most financial sense in supporting our growth.",
      name: "Gregory Van",
      role: "CEO of Endowus",
      logo: "https://cdn.prod.website-files.com/5ed5b60be1889f546024ada0/69ba3cfc33149763ebfb9e94_endowus-logo.webp",
      portrait:
        "https://cdn.prod.website-files.com/5ed5b60be1889f546024ada0/69ba3c374dcccb1bef713f9b_corp-card-16.webp",
      href: "https://aspireapp.com/case-studies/endowus",
      stats: [
        { value: "$111,000", label: "Saved per year" },
        { value: "900hr", label: "Saved per year" },
      ],
    },
    {
      quote:
        "By leveraging Aspire, First Page aimed to establish tighter control over our financial outflows, ensuring that all media spending stayed within the allocated budget limits. This was crucial for maintaining financial discipline and ensuring that our company's marketing efforts were both effective and sustainable.",
      name: "Holly Qian",
      role: "Head of Finance",
      logo: "https://cdn.prod.website-files.com/5ed5b60be1889f546024ada0/69df5319b436fb7dd53e6765_FirstPage.svg",
      portrait:
        "https://cdn.prod.website-files.com/5ed5b60be1889f546024ada0/69df532018b139a23e06cda4_a2f5d2fc6ae3a12e055437e72ba228b4_Frame%201707480627.webp",
      href: "https://aspireapp.com/case-studies/first-page-digital",
      stats: [
        { value: "$80,405", label: "Saved per year" },
        { value: "2,834hrs", label: "Saved per year" },
      ],
    },
    {
      quote:
        "In the past, we used different devices for calls, music, and work. Just like smartphones brought everything together, Aspire elegantly combines corporate cards, FX, business accounts, payables, and much more, into one user-friendly interface.",
      name: "William Chong",
      role: "Finance Director at Glints",
      logo: "https://cdn.prod.website-files.com/5ed5b60be1889f546024ada0/69df5413231b3e584013305c_Glints.svg",
      portrait:
        "https://cdn.prod.website-files.com/5ed5b60be1889f546024ada0/69df542c7288cd815f31316b_Frame%201707480627%20(1).webp",
      href: "https://aspireapp.com/case-studies/glints",
      stats: [
        { value: "$28,037", label: "Saved per year" },
        { value: "860hrs", label: "Saved per year" },
      ],
    },
  ] as Testimonial[],
};
