import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = {
  question: string;
  answer: string;
};

const faqsData: FaqItem[] = [
  {
    question: " What age groups are the kits suitable for? ",
    answer:
      "Our kits are designed for children aged 5 to 12 years old, and are categorized by age level and learning stage. Each product description includes a recommended age range to help you choose the right one.",
  },
  {
    question: "What subjects do your kits cover?",
    answer:
      "We focus on STEAM (Science, Technology, Engineering, Arts, and Math) education, along with language learning, logic games, and symbolic thinking. You’ll find kits for math basics, storytelling, science experiments, and more.",
  },
  {
    question: " Do I need any special tools to use the kits?",
    answer:
      "No special tools are required. Everything needed is either included in the kit or easily available at home (like scissors or glue). Check the product page for a detailed list of what’s included.",
  },
  {
    question: "Can teachers or schools order in bulk?",
    answer:
      "Absolutely! We offer bulk discounts and custom packages for schools, teachers, and educational institutions. Contact us directly through our Schools Program page.",
  },
  {
    question: "How do subscriptions work?",
    answer:
      "If you choose a subscription plan, you'll receive a new educational kit every month, tailored to your child's age and learning level. You can cancel, pause, or switch your subscription anytime from your account dashboard.",
  },
  {
    question: " Are the kits aligned with school curricula?",
    answer:
      "Yes. Our educational kits are developed with teachers and child development experts to align with national curriculum standards in key subjects like math, science, and logic.",
  },
  {
    question: "  Do you ship nationwide? ",
    answer:
      "Yes! We deliver all across Tunisia and are expanding to international shipping soon. Shipping time typically takes 2–5 business days depending on your location.",
  }, 
  {
    "question": "What if a kit is missing a piece or arrives damaged?",
    "answer": "No worries! If your kit is missing something or arrives damaged, just contact our support team, and we’ll send a replacement part or a full kit free of charge."
  },
  {
    "question": ". How do I contact customer support?",
    "answer": "You can reach us via\nEmail: contact@recolab.tn\nPhone: +216 50956800"
  },
  
  
  
];

const FaqContent = () => {
  return (
    <section>
      <h3 className="text-xl sm:text-2xl font-bold text-black mb-5 sm:mb-6">
        Frequently asked questions
      </h3>
      <Accordion type="single" collapsible>
        {faqsData.map((faq, idx) => (
          <AccordionItem key={idx} value={`item-${idx + 1}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FaqContent;
