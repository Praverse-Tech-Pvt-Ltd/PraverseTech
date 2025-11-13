
'use client';

import { motion } from 'framer-motion';
import { usePrav } from './PravProvider';
import { Bot } from 'lucide-react';

export function PravDock() {
  const { setIsOpen } = usePrav();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-16 h-16 shadow-lg bg-primary text-primary-foreground flex items-center justify-center"
          aria-label="Open AI Assistant"
        >
          <Bot className="h-8 w-8" />
        </button>
      </motion.div>
    </div>
  );
}
