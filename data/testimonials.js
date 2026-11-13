// Only entries with `approved: true` appear on the site.
// Before approving a quote, get the person's OK to publish it and confirm how they want to be credited.

const testimonials = [
  // ---- GobbleCube: candidates found in Slack, not yet approved ----
  {
    approved: false,
    name: 'Manas Gupta',
    role: 'GobbleCube leadership', // TODO: confirm exact title
    context: 'After an enterprise client review that led to a multi-platform expansion (Apr 2026)',
    quote: 'Amazing job, guys. Let’s push to become thought leaders and not just execution agents.',
  },
  {
    approved: false,
    name: 'Kshitij Singh',
    role: 'Product, GobbleCube', // TODO: confirm exact title
    context: 'Product review of a dashboard release (Oct 2026)',
    quote: 'Thanks for the extremely detailed testing and feedback, Keshav.',
  },
  // Add brand-side quotes here (e.g. a CDO or marketing head), credited without the company name
  // if you want to keep clients anonymous, e.g. role: 'CDO, global beauty company'.

  // ---- Existing quotes (unchanged from the previous site) ----
  {
    approved: true,
    name: 'Former Manager, Indus Insights',
    quote: 'Keshav brings a rare mix of analytical depth and product intuition. A force multiplier for any growth team.',
  },
  {
    approved: true,
    name: 'Teammate, Nanonets',
    quote: 'One of the most dependable, insightful people I’ve worked with. Always delivers with strategic clarity and execution speed.',
  },
  {
    approved: true,
    name: 'Mentor, IIT Kanpur',
    quote: 'Keshav’s leadership during Techkriti was top-notch. He balanced team coordination, budget and execution like a pro.',
  },
];

export default testimonials;
