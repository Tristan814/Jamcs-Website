import {
  Compass, Search, FileText, ClipboardCheck, Users, GraduationCap, Award,
  BadgeCheck, Briefcase, Lightbulb, Handshake, Globe, Target,
  Factory, Cpu, Building2, HeartPulse, School, Landmark, Truck, Banknote,
  ShieldCheck, RefreshCw,
} from 'lucide-react';

/* ---------- Company info (REPLACE with real details) ---------- */
export const company = {
  name: 'JA Consultancy & Training',
  phone: '+00 000 000 0000',
  email: 'info@yourdomain.com',
  address: 'Your Street Address, City, Country',
  hours: 'Mon – Fri, 8:00 AM – 5:00 PM',
};

/* ---------- Stats ---------- */
export const stats = [
  { value: 100, suffix: '+', label: 'Projects Completed' },
  { value: 50, suffix: '+', label: 'Organizations Assisted' },
  { value: 500, suffix: '+', label: 'Professionals Trained' },
  { value: 95, suffix: '%', label: 'Client Satisfaction' },
];

/* ---------- Services ---------- */
export const services = [
  {
    title: 'ISO Consultancy',
    icon: Compass,
    desc: 'End-to-end guidance to design, implement and sustain ISO management systems.',
    points: ['System design & planning', 'Process mapping & risk assessment', 'Implementation support'],
  },
  {
    title: 'Gap Assessment',
    icon: Search,
    desc: 'Measure your current practices against the standard and get a clear action plan.',
    points: ['Clause-by-clause review', 'Prioritised findings', 'Practical roadmap to compliance'],
  },
  {
    title: 'Documentation Development',
    icon: FileText,
    desc: 'Clear, usable policies, procedures and records tailored to how you work.',
    points: ['Manuals, policies & procedures', 'Forms, templates & registers', 'Lean, audit-ready documentation'],
  },
  {
    title: 'Internal Audit Support',
    icon: ClipboardCheck,
    desc: 'Independent internal audits that uncover risks and drive real improvement.',
    points: ['Audit planning & execution', 'Findings & corrective actions', 'Follow-up verification'],
  },
  {
    title: 'Management Review Facilitation',
    icon: Users,
    desc: 'Structured management reviews that turn performance data into decisions.',
    points: ['Agenda & data preparation', 'Facilitated review sessions', 'Action tracking & minutes'],
  },
  {
    title: 'ISO Training',
    icon: GraduationCap,
    desc: 'Awareness, implementer and internal auditor training for teams at every level.',
    points: ['Awareness & implementer courses', 'Internal auditor training', 'In-house or public sessions'],
  },
  {
    title: 'Certification Preparation',
    icon: Award,
    desc: 'Be fully ready for your certification audit with mock audits and coaching.',
    points: ['Pre-certification readiness review', 'Mock audits', 'Audit-day support & coaching'],
  },
];

/* ---------- Process (Services page) ---------- */
export const process = [
  { step: '01', title: 'Assess', desc: 'We understand your business and benchmark current practices.' },
  { step: '02', title: 'Plan', desc: 'We build a clear, realistic roadmap with defined milestones.' },
  { step: '03', title: 'Implement', desc: 'We help you build, document and embed the system.' },
  { step: '04', title: 'Certify', desc: 'We prepare you for audit and support continual improvement.' },
];

/* ---------- Why choose JA ---------- */
export const reasons = [
  { title: 'Expert Guidance', icon: BadgeCheck, desc: 'Clear, accurate interpretation of ISO requirements so you never guess.' },
  { title: 'Experienced Consultants', icon: Briefcase, desc: 'Practitioners who have implemented and audited management systems first-hand.' },
  { title: 'Practical Solutions', icon: Lightbulb, desc: 'Right-sized systems that fit your operations, not bureaucracy for its own sake.' },
  { title: 'Long-Term Partnership', icon: Handshake, desc: 'Support that continues beyond certification to keep your system effective.' },
  { title: 'Industry Expertise', icon: Globe, desc: 'Experience across sectors, so advice reflects your real-world context.' },
  { title: 'Results-Focused Approach', icon: Target, desc: 'Every engagement is tied to measurable performance and compliance outcomes.' },
];

/* ---------- Industries ---------- */
export const industries = [
  { name: 'Manufacturing', icon: Factory },
  { name: 'Information Technology', icon: Cpu },
  { name: 'Construction', icon: Building2 },
  { name: 'Healthcare', icon: HeartPulse },
  { name: 'Education', icon: School },
  { name: 'Government', icon: Landmark },
  { name: 'Logistics', icon: Truck },
  { name: 'Financial Services', icon: Banknote },
];

/* ---------- Recent activities (SAMPLE — replace; add image: importedPhoto) ---------- */
export const activities = [
  {
    tag: 'Training',
    date: '12 Sep 2026',
    title: 'ISO 9001 Internal Auditor Workshop',
    desc: 'A two-day hands-on workshop equipping quality teams to plan, conduct and report internal audits.',
    image: null,
  },
  {
    tag: 'Gap Assessment',
    date: '28 Aug 2026',
    title: 'ISO 27001 Gap Assessment',
    desc: 'A full clause and control review for a technology client, ending in a prioritised remediation plan.',
    image: null,
  },
  {
    tag: 'Internal Audit',
    date: '15 Aug 2026',
    title: 'Integrated Internal Audit',
    desc: 'Combined quality and safety audit across multiple sites with consolidated findings and actions.',
    image: null,
  },
  {
    tag: 'Certification',
    date: '30 Jul 2026',
    title: 'ISO 14001 Certification Project',
    desc: 'Guided a manufacturing client from kickoff to a successful certification audit.',
    image: null,
  },
];

/* ---------- Gallery (SAMPLE — replace; add image: importedPhoto) ---------- */
export const gallery = [
  { label: 'Workshop', ratio: 'aspect-[4/5]', image: null },
  { label: 'Training Session', ratio: 'aspect-[4/3]', image: null },
  { label: 'On-site Audit', ratio: 'aspect-square', image: null },
  { label: 'Client Meeting', ratio: 'aspect-[4/3]', image: null },
  { label: 'Team Training', ratio: 'aspect-square', image: null },
  { label: 'Audit Review', ratio: 'aspect-[4/5]', image: null },
  { label: 'Workshop Group', ratio: 'aspect-[4/3]', image: null },
  { label: 'Certification Briefing', ratio: 'aspect-square', image: null },
];

/* ---------- About page ---------- */
export const values = [
  { title: 'Integrity', icon: ShieldCheck, desc: 'Honest advice and transparent practices in every engagement.' },
  { title: 'Excellence', icon: Award, desc: 'High standards in our work, our training and our deliverables.' },
  { title: 'Collaboration', icon: Users, desc: 'We work alongside your people so the system truly becomes yours.' },
  { title: 'Continual Improvement', icon: RefreshCw, desc: 'We practise what we advise: always learning and improving.' },
];

// SAMPLE — replace with your real team
export const consultants = [
  { name: 'Lead ISO Consultant', role: 'Quality & Information Security', image: null },
  { name: 'Senior Consultant', role: 'Environmental, Health & Safety', image: null },
  { name: 'Training Specialist', role: 'Auditor & Implementer Courses', image: null },
];