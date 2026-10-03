// export const isoStandards = [
//   {
//     code: "ISO 9001:2015",
//     title: "Quality Management System",
//     image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80"
//   },
//   {
//     code: "ISO 14001:2015",
//     title: "Environmental Management",
//     image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=80"
//   },
//   {
//     code: "ISO 45001:2018",
//     title: "Occupational Health & Safety",
//     image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80"
//   },
//   {
//     code: "ISO 27001:2022",
//     title: "Information Security Management",
//     image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80"
//   },
//   {
//     code: "ISO 50001:2018",
//     title: "Energy Management",
//     image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80"
//   },
//   {
//     code: "ISO 21001:2018",
//     title: "Educational Organizations",
//     image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
//   },
//   {
//     code: "ISO/IEC 17025:2017",
//     title: "Testing & Calibration Laboratories",
//     image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=80"
//   },
//   {
//     code: "IATF 16949:2016",
//     title: "Automotive Quality Management",
//     image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80"
//   }
// ];


import { ShieldCheck, Leaf, HardHat, Lock, RefreshCw, Server } from 'lucide-react';

export const isoStandards = [
  {
    id: 'iso-9001',
    code: 'ISO 9001',
    title: 'Quality Management',
    icon: ShieldCheck,
    short: 'Deliver consistent products and services that meet customer and regulatory requirements.',
    description:
      'The world’s most recognised quality management standard. It gives your organization a structured framework for consistent delivery, customer focus and continual improvement.',
    benefits: [
      'Higher customer satisfaction and trust',
      'Consistent, well-controlled processes',
      'Reduced errors, waste and rework',
      'Stronger eligibility for tenders and contracts',
    ],
  },
  {
    id: 'iso-14001',
    code: 'ISO 14001',
    title: 'Environmental Management',
    icon: Leaf,
    short: 'Manage environmental responsibilities, reduce impact and meet compliance obligations.',
    description:
      'A framework for managing environmental aspects and legal obligations in a systematic way, helping you reduce your footprint while improving operational efficiency.',
    benefits: [
      'Lower environmental impact and waste',
      'Improved regulatory compliance',
      'Reduced resource and energy costs',
      'Enhanced reputation with stakeholders',
    ],
  },
  {
    id: 'iso-45001',
    code: 'ISO 45001',
    title: 'Occupational Health & Safety',
    icon: HardHat,
    short: 'Protect your people by preventing work-related injury and ill health.',
    description:
      'An international standard for occupational health and safety management that helps organizations provide safe, healthy workplaces and proactively manage risk.',
    benefits: [
      'Fewer workplace incidents and injuries',
      'Clear roles, responsibilities and controls',
      'Better legal and regulatory compliance',
      'Stronger safety culture and engagement',
    ],
  },
  {
    id: 'iso-27001',
    code: 'ISO 27001',
    title: 'Information Security',
    icon: Lock,
    short: 'Protect information assets and manage security risks systematically.',
    description:
      'The leading standard for information security management systems. It helps you identify risks and put controls in place to protect confidentiality, integrity and availability of information.',
    benefits: [
      'Reduced risk of data breaches',
      'Demonstrated commitment to security',
      'Alignment with client and regulatory expectations',
      'Clear, risk-based security governance',
    ],
  },
  {
    id: 'iso-22301',
    code: 'ISO 22301',
    title: 'Business Continuity',
    icon: RefreshCw,
    short: 'Prepare for, respond to and recover from disruptive incidents.',
    description:
      'A framework for building organizational resilience so that critical activities can continue — or be restored quickly — when disruption occurs.',
    benefits: [
      'Faster recovery from disruption',
      'Protected revenue and reputation',
      'Clear incident response structures',
      'Greater confidence among customers and partners',
    ],
  },
  {
    id: 'iso-20000-1',
    code: 'ISO 20000-1',
    title: 'IT Service Management',
    icon: Server,
    short: 'Design, deliver and improve IT services that support business goals.',
    description:
      'Specifies requirements for a service management system so IT services are planned, delivered, monitored and continually improved in line with business needs.',
    benefits: [
      'More reliable, consistent IT services',
      'Better alignment of IT with business goals',
      'Improved service quality and efficiency',
      'Clear accountability and measurement',
    ],
  },
];