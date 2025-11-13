
'use client';

import { motion } from 'framer-motion';
import { usePrav } from './PravProvider';
import { Bot } from 'lucide-react';

export function PravDock() {
  const { setIsOpen } = usePrav();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 15,
          ease: 'linear',
        }}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="relative w-16 h-16 rounded-[2rem] shadow-2xl bg-primary/80 backdrop-blur-md text-primary-foreground flex items-center justify-center border border-primary/50"
          aria-label="Open AI Assistant"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-purple-500/50 blur-lg animate-pulse" />
          <Bot className="h-8 w-8 relative z-10" />
        </button>
      </motion.div>
    </div>
  );
}
