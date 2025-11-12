
import { BrainCircuit, Cpu, FlaskConical, Microscope, Orbit, Stethoscope } from "lucide-react";

export const Testimonials = [
  {
    quote: "Praverse Tech's AI platform reduced our response time to regulatory inquiries by 75%. It's a game-changer for our compliance team.",
    name: "Dr. Anya Sharma",
    title: "QA Head, Top 10 Pharma Co.",
    avatarId: "avatar-1",
  },
  {
    quote: "The HealthMate kiosk has streamlined our patient intake process, freeing up our nurses to focus on care. Patient feedback has been overwhelmingly positive.",
    name: "Rajesh Kumar",
    title: "Administrator, Apollo Hospitals",
    avatarId: "avatar-2",
  },
  {
    quote: "As an investor in HealthTech, I look for companies with deep domain expertise and a clear vision. Praverse Tech has both in spades. Their technology is robust and their team is world-class.",
    name: "Priya Singh",
    title: "Partner, HealthTech Ventures",
    avatarId: "avatar-3",
  },
];


export const DOMAINS = [
    {
        title: 'AI for Pharma',
        description: 'Compliance automation, data integrity, and FDA 483 analytics.',
        href: '/pharma-ai',
        icon: FlaskConical,
        color: 'text-purple-400',
    },
    {
        title: 'HealthMate Humanoid',
        description: 'Intelligent assistive robot for healthcare & education.',
        href: '/healthmate',
        icon: Stethoscope,
        color: 'text-green-400',
    },
    {
        title: 'Cognitive Robotics Lab',
        description: 'Locomotion, gesture recognition, and real-world simulation.',
        href: '/humanoid-robotics',
        icon: BrainCircuit,
        color: 'text-blue-400',
    },
    {
        title: 'Neural Vision Systems',
        description: 'CV + NLP fusion for industrial safety & medical imaging.',
        href: '/domains/neural-vision',
        icon: Microscope,
        color: 'text-teal-400',
    },
    {
        title: 'Digital Twin & Simulation',
        description: 'Physics-based virtual environments for R&D.',
        href: '/domains/digital-twin',
        icon: Orbit,
        color: 'text-orange-400',
    },
    {
        title: 'Edge AI & IoT',
        description: 'Lightweight ML models for embedded systems.',
        href: '/domains/edge-ai',
        icon: Cpu,
        color: 'text-pink-400',
    }
];

export const FEATURED_PROJECTS = [
    { title: 'HealthMate v0.9', description: 'Private Beta Launching Soon', imageId: 'project-healthmate' },
    { title: 'FDA 483 Response Automation', description: 'Live Client Demo', imageId: 'project-fda' },
    { title: 'Cognitive Robot Simulation', description: 'Webots × NEAT Integration', imageId: 'project-robotics' },
    { title: 'Federated Learning for Wearables', description: 'Research Collaboration', imageId: 'project-federated' },
    { title: 'Smart EHR Assistant', description: 'Under Testing', imageId: 'project-ehr' },
];

export const TECH_STACK = [
    'Generative AI × Regulatory Compliance',
    'Federated Learning',
    'Reinforcement Learning in Robotics',
    'Synthetic Data Generation',
    'Multimodal AI Pipelines',
    'Explainable AI (XAI)',
    'Cloud + Edge Orchestration',
    'Biomedical Signal Processing',
    'Digital Twin Simulation',
    'Quantum-ready AI Research',
];

export const WHY_PRAVERSE = [
    {
        title: 'Domain Depth + AI Expertise',
        description: 'We bridge the gap between complex industries like pharma and healthcare with deep, practical knowledge of modern AI.',
    },
    {
        title: 'Innovation Network',
        description: 'Our strong ties with academic institutions and industry leaders keep us at the forefront of research and application.',
    },
    {
        title: 'Ethical AI by Design',
        description: 'We are committed to building AI that is transparent, explainable, and prioritizes privacy and human oversight.',
    }
]
