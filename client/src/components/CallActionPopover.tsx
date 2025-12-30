import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CallActionPopoverProps {
  phoneNumber?: string;
  className?: string;
}

export function CallActionPopover({
  phoneNumber = "425-442-9328",
  className = "",
}: CallActionPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Button
        size="lg"
        variant="default"
        className="bg-accent text-accent-foreground border border-accent-border px-8 py-6 text-lg font-bold w-full"
        data-testid="button-call-trigger"
      >
        <Phone className="w-5 h-5" />
        <div className="flex flex-col items-start leading-tight">
          <span>Call Now</span>
          <span className="text-xs font-normal">or Text</span>
        </div>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute inset-0 flex overflow-hidden rounded-md bg-accent"
          >
            <a href={`tel:${phoneNumber}`} className="flex-1">
              <Button
                size="lg"
                variant="default"
                className="bg-accent text-accent-foreground h-full w-full rounded-none border-0 text-lg font-bold"
                data-testid="button-call-action"
              >
                <Phone className="w-6 h-6" />
                Call
              </Button>
            </a>
            <a href={`sms:${phoneNumber}`} className="flex-1">
              <Button
                size="lg"
                variant="default"
                className="bg-accent text-accent-foreground h-full w-full rounded-none border-0 text-lg font-bold"
                data-testid="button-text-action"
              >
                <MessageSquare className="w-6 h-6" />
                Text
              </Button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
