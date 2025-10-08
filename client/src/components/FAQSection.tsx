import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you give estimates?",
    answer: "Yes, by phone after a quick description or photo",
  },
  {
    question: "Do you supply materials?",
    answer: "Yes, I can pick up standard materials if needed",
  },
  {
    question: "Are you insured?",
    answer: "Yes, licensed, bonded, insured",
  },
  {
    question: "When can you come?",
    answer: "Most small tasks are scheduled within a few days",
  },
];

export default function FAQSection() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12" data-testid="text-faq-title">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} data-testid={`accordion-item-${index}`}>
              <AccordionTrigger className="text-left" data-testid={`accordion-trigger-${index}`}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent data-testid={`accordion-content-${index}`}>
                <p className="text-muted-foreground">{faq.answer}</p>
                <p className="text-muted-foreground mt-2">
                  Call <a href="tel:4254429328" className="text-primary font-semibold hover:underline">425-442-9328</a> for more details.
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
