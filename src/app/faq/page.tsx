// src/app/faq/page.tsx
"use client";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function FAQPage() {
  // FAQ data
  const faqs = [
    {
      question: "What are we improving and changing for 2025?",
      answer: `2024 had a rocky start with delays in sound systems, setup issues, vehicles getting stuck, and the land turning into a mud field. Despite these challenges, the community and the wonderful people who came together made it an unforgettable event.

2024 was our inaugural festival year, and we had much to learn. We deeply appreciate everyone for their patience and understanding.

In 2025, we will be improving security, overall layout, the vendor village, the ticketing and waiver process, sound systems/stages, schedules, workshops, and much more.

We’re looking forward to 2025 and can’t wait to show you the improvements and exciting plans for next year.`
    },
    {
      question: "What happened to the old name and website, Psychedelic Sundance?",
      answer: `Originally, a member of the festival wanted to honor the Sundance tradition in a modern way. Due to differences, we couldn’t continue with that project. With multiple concerns raised by surrounding communities and online groups, we decided to change the name as soon as possible. 

We felt that none of the organizers had the sufficient heritage, credibility, or knowledge to continue with the name Psychedelic Sundance—thus, the change to Sol Dance. We apologize if our previous name conveyed any unintended cultural appropriation. We encourage attendees to research resources on the Sundance Tradition and educational materials about the San Luis Valley. 

Sol Dance is derived from soul, sun, solstice, and dancing. We are confident in our new direction and hope you embrace it with us.`
    },
    {
      question: "Opening and Closing Ceremonies - Blessing the Land: Why San Luis Valley?",
      answer: `The land where SolDance is held is sacred. We honor all cultures and communities, especially in the San Luis Valley, which has been recognized by more than five tribes as “The Valley of No Fighting.”

Our opening and closing ceremonies are designed to reflect this spiritual connection. The valley offers expansive 100-mile views, sand dunes, and soaring peaks, all rich in history and folklore from Native American, Hispanic, and European settlers.

Many come here to meditate and reconnect with nature—a break from the busy urban environment. We believe that experiencing the natural beauty of Blanca Peak and the breathtaking sunrises is something that must be witnessed in person.`
    },
    {
      question: "How do I get to the Event?",
      answer: `Once you purchase a ticket, you will receive a QR code and precise coordinates for Google Maps to guide you to the location.

The closest towns are Blanca and Alamosa, about a 30-minute drive away for any additional needs.

While the land is relatively flat upon arrival, we recommend a 4-wheel drive vehicle (with decent shocks and tires) in case of unexpected weather or bumpy roads.

If you have any issues finding the location, please contact us with your name and receipt details for further directions.`
    }
  ];

  // State to track which FAQ is open (default all closed)
  const [openFAQs, setOpenFAQs] = useState<boolean[]>(faqs.map(() => false));

  const toggleFAQ = (index: number) => {
    setOpenFAQs((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="p-8 max-w-4xl mx-auto space-y-12 flex-grow">
          <h1 className="text-4xl font-bold text-center mb-8">
            FAQ’s and Information about SolDance
          </h1>
  
          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300 pb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left focus:outline-none"
                >
                  <span className="text-2xl font-semibold">{faq.question}</span>
                  <span className="text-3xl font-bold">
                    {openFAQs[index] ? "-" : "+"}
                  </span>
                </button>
                {openFAQs[index] && (
                  <div className="mt-2 text-lg text-gray-200">
                    {faq.answer.split("\n").map((line, idx) => (
                      <p key={idx}>{line.trim()}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
  
          {/* About the Organizers Section */}
          <div className="mt-12">
            <h2 className="text-4xl font-bold text-center mb-6">
              About the Organizers
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-semibold mb-2">Dystopia Radio</h3>
                <p className="text-lg text-gray-200">
                  Every day, we drift further into a dystopian reality, losing sight
                  of the utopia we were meant to create. Dystopia Radio offers a
                  connection through transformative frequencies, uniting a collective
                  of performing artists and visionaries. Their mission is to help break
                  free from society’s mold, inspiring a shift toward a brighter, more
                  hopeful future. Here, heroes come together to change the atmosphere and
                  spark a new energy for the world.
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-semibold mb-2">Dead Hound Studios</h3>
                <p className="text-lg text-gray-200">
                  Dead Hound Studios takes pride in the quality and professionalism of
                  our events. They believe that excellence, positivity, and being your
                  true self should be the cornerstone of every gathering. At the heart
                  of their approach is a commitment to creating an environment that is
                  both professional and inclusive—one that lets you escape the
                  repetitiveness of everyday reality.
                </p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Footer remains at the bottom */}
        <Footer />
      </div>
    </>
  );  
}
