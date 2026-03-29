import React from 'react';
import { CheckCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SuccessAlertProps {
  message: string;
  onClose: () => void;
}

export function SuccessAlert({ message, onClose }: SuccessAlertProps) {
  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="bg-green-50 border-l-4 border-secondary rounded-xl p-4 flex items-center justify-between mb-8"
      >
        <div className="flex items-center gap-3">
          <div className="bg-secondary text-white rounded-full p-1 flex items-center justify-center">
            <CheckCircle className="h-4 w-4" />
          </div>
          <p className="text-green-800 font-medium text-sm">{message}</p>
        </div>
        <button 
          onClick={onClose}
          className="text-green-800/50 hover:text-green-800 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
