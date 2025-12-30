import { useState } from "react";
import { Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { motion, AnimatePresence } from "framer-motion";

interface CallActionPopoverProps {
  phone: string;
  variant?: "default" | "outline";
  size?: "sm" | "lg" | "default";
  className?: string;
  testId?: string;
}

export default function CallActionPopover({
  phone,
  variant = "default",
  size = "lg",
  className = "",
  testId,
}: CallActionPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = phone.replace(/\D/g, "");

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          size={size}
          variant={variant}
          className={className}
          data-testid={testId}
        >
          <Phone className="w-4 h-4" />
          <div className="flex flex-col items-center">
            <span className="font-bold">Call {phone}</span>
            <span className="text-xs font-normal">or Text</span>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-3 mb-2" align="center">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex gap-2"
            >
              <a href={`tel:${phoneNumber}`}>
                <Button
                  size="sm"
                  variant="default"
                  className="bg-accent text-accent-foreground border border-accent-border"
                  data-testid="button-call-action"
                >
                  <Phone className="w-4 h-4" />
                  Call
                </Button>
              </a>
              <a href={`sms:${phoneNumber}`}>
                <Button
                  size="sm"
                  variant="outline"
                  data-testid="button-text-action"
                >
                  <MessageSquare className="w-4 h-4" />
                  Text
                </Button>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </PopoverContent>
    </Popover>
  );
}
