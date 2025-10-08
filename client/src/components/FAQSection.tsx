import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you give estimates?",
    answer: "Yes — I can usually give a rough estimate over the phone after hearing a short description of your project or seeing a quick photo. Every job is different, so a quick call helps me understand exactly what's needed and give you the most accurate guidance.",
  },
  {
    question: "Do you supply materials?",
    answer: "Yes — for most jobs, I can provide and pick up standard materials to keep things simple. If you already have specific items you want used, that's fine too. We can talk through what makes the most sense during your call.",
  },
  {
    question: "Are you insured?",
    answer: "Yes — Rez The Builder LLC is fully licensed, bonded, and insured. You can have peace of mind knowing your job will be done safely and professionally.",
  },
  {
    question: "When can you come?",
    answer: "Most smaller jobs can be scheduled within a few days. Larger or more detailed projects might take a little longer depending on the week's workload. Either way, I'll always be honest about timing and try to get you on the calendar quickly.",
  },
  {
    question: "What areas do you service?",
    answer: "I serve Redmond, Bellevue, Kirkland, Issaquah, and Sammamish. These areas allow me to keep response times fast and consistent.",
  },
  {
    question: "Do you handle small jobs or just bigger projects?",
    answer: "I take on a wide range of jobs — from quick fixes to medium-sized repair or improvement work. Whether it's a house, condo, office, or small business, I'm set up to handle most repair and maintenance needs efficiently.",
  },
  {
    question: "How do I know the work will be done right?",
    answer: "With 200+ verified 5-star reviews, my work speaks for itself. I take pride in delivering clean, reliable, and long-lasting results, whether it's patching drywall or installing fixtures. Every job is checked, cleaned, and done with care.",
  },
  {
    question: "What kind of payment do you take?",
    answer: "I accept most major payment methods once the job is complete. Everything is handled simply and directly so there are no surprises.",
  },
  {
    question: "Can you work around my schedule?",
    answer: "Absolutely. I'm available seven days a week from 8:30 AM to 9:00 PM, and I do my best to schedule jobs at a time that works best for you or your business hours.",
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
                <p className="text-muted-foreground">
                  {faq.answer.split('Call 425-442-9328').map((part, i, arr) => (
                    i < arr.length - 1 ? (
                      <span key={i}>
                        {part}
                        <a href="tel:4254429328" className="text-primary font-semibold hover:underline">
                          Call 425-442-9328
                        </a>
                      </span>
                    ) : part
                  ))}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
