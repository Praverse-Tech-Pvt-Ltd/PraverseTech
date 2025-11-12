
'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

const logos = [
    { name: 'Intel', logo: IntelLogo },
    { name: 'GitHub', logo: Github, href: 'https://github.com/praverse' },
    { name: 'LinkedIn', logo: Linkedin, href: 'https://linkedin.com/company/praverse' }
]

function IntelLogo() {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto fill-current">
      <title>Intel</title>
      <path d="M13.685.011c.29.002.597.01.895.01a9.51 9.51 0 0 1 8.805 5.502l.004-.002a9.52 9.52 0 0 1-3.153 12.073c-.002.001-.004.002-.006.003a9.51 9.51 0 0 1-11.83-1.637c-.29-.002-.598-.01-.895-.01a9.51 9.51 0 0 1-8.805-5.502l-.004.002A9.52 9.52 0 0 1 3.153 6.45c.002-.001.004-.002.006-.003a9.51 9.51 0 0 1 10.526-6.436zM12.72 4.646a.972.972 0 0 0-.964.977v12.75a.972.972 0 0 0 .964.976h.001a.972.972 0 0 0 .965-.976V5.623a.972.972 0 0 0-.965-.977z"/>
    </svg>
  );
}


export function Collaborations() {
    return (
        <section className="py-20 md:py-28">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Community & Collaborations</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                        Building the future of AI with leading partners and the open-source community.
                    </p>
                    <div className="mt-12 flex justify-center items-center gap-12 text-muted-foreground">
                        {logos.map(item => (
                             item.href ? (
                                <Link key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
                                    <item.logo className="h-8 w-auto" />
                                </Link>
                             ) : (
                                <div key={item.name} className="transition-colors hover:text-foreground cursor-pointer">
                                     <item.logo />
                                </div>
                             )
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
