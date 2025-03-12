// src/app/faq/page.tsx
"use client";
import { useState } from "react";

export default function FAQPage() {
  // FAQ data
  const faqs = [
    {
      question: "What are we improving and changing for 2025?",
      answer: `2024 had a very rocky start, with delays in sound systems, troubles setting up, cars getting stuck, and the land turning into a literal mud field. Despite all of this, we still felt that it was the community and the wonderful people who came to help us that made it an unforgettable event.

2024 was our first festival year, and we had a lot to learn. We deeply appreciate everyone for their patience and understanding during this first year event.

We will be improving security, overall layout, vendor village, the flow of ticketing and waivers, sound systems/stages, schedules and timing, workshops, and much much more.

We’re looking forward to the creation of 2025, and we can’t wait to show everyone the improvements we made and the plans that we have for next year.`
    },
    {
      question: "What happened to the old name and website, Psychedelic Sundance?",
      answer: `At the festival’s originality, we had a member who was part of the festival and wanted to specifically honor the Sundance tradition in a modern way.

Due to a disconnect, we could no longer move forward with them on this project. We wanted to change the name immediately, as we had received multiple concerns from surrounding cities and online groups. However, with the festival only weeks away, we couldn’t change the links and marketing materials as quickly as we desired.

All organizers involved at the moment do not have sufficient Native American heritage, credibility, or knowledge to justify continuing with the name Psychedelic Sundance—hence the change to Sol Dance. We also apologize if anyone received a negative connotation of cultural appropriation from our previous branding. This was never our intent. We encourage attendees to research resources based on the Sundance Tradition and related educational materials about the San Luis Valley. We aim to ensure that our actions lead to beautiful blessings, a deep connection with the land and nature, and frequency alignment with the music.

Sol Dance is derived from the words soul, sun, solstice, and dancing. We are comfortable moving forward with this name, and we hope you love it too!`
    },
    {
      question: "Opening and Closing Ceremonies - Blessing the Land: Why San Luis Valley?",
      answer: `Acknowledgment: The land we host SolDance on is sacred.

We want to ensure all cultures and communities are respected, especially in the San Luis Valley, where more than five different tribes have gathered and deemed the land as “The Valley of No Fighting.”

Please read more about our closing and opening ceremonies. The valley offers a spiritual, intriguing landscape with epic 100-mile views, sand dunes, and soaring peaks. It is peppered with the legacy of Native American, Hispanic, and European settlers and explorers, steeped in history and ripe with folklore.

People come to the valley to meditate, as they find peace in the open landscape—a welcome break from dense, business-oriented cities. The emptiness of the valley favors a deeper connection with nature.

Below is an actual view of Blanca Peak from the land; we believe this incredible mountain, along with its sunrises, is something that must be experienced in person.`
    },
    {
      question: "How do I get to the Event?",
      answer: `Once you purchase a ticket, you will receive a QR code and direct coordinates for Google Maps to the location.

The closest towns are Blanca and Alamosa, about a 30-minute drive away if you need additional supplies.

The land is relatively flat once you arrive; however, in case of surprise weather, we recommend a 4-wheel drive vehicle, as this is a drive through mountainous terrain into the valley. We also advise using vehicles with decent shocks and tires, as the road can be bumpy. Generally, all vehicles can access the site without issue.

If you have trouble finding or getting to the location, please email or call us using the number on your ticket confirmation and provide your name and receipt for directions.`
    }
  ];

  // State: an array of booleans for whether each FAQ is open (default all closed)
  const [openFAQs, setOpenFAQs] = useState<boolean[]>(faqs.map(() => false));

  const toggleFAQ = (index: number) => {
    setOpenFAQs((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">
        FAQ’s and Information about SolDance
      </h1>
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
    </div>
  );
}
