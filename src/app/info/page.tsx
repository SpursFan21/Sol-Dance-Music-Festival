// src/app/faq/page.tsx
"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

export default function InfoPage() {
  const faqs = [
    {
      question: "Getting to the Event",
      answer: `▪ Once you purchase a ticket, you will receive direct coordinates of the location closer to the event date. 

▪ Nearby towns are Blanca and Alamosa, CO.

▪ We recommend 4-wheel drive vehicles to ensure safety with surprise weather. `,
    },
    {
      question: "Car type",
      answer: `Car size does matter! We recommend an all-wheel or four-wheel drive car. The roads are
mainly dirt getting from the main road to the festival grounds. Though a small car might do,
it is important to be prepared when driving in the desert or mountains by understanding
your vehicle and its capabilities.`,
    },
    {
      question: "Bathrooms",
      answer: `Bathrooms will be located, in both Campgrounds and inside Festival grounds.
Open bathroom use will not be permitted. No defecating or urinating on the land to respect
the property owners and their land and most importantly the guests around you.`,
    },
    {
      question: "Safety",
      answer: `- Jam Care
Jam Care will be available for medical needs and emergencies on site, on Friday and
Saturday of the festival. They will be hosting a safe/healthy place for any first aid needs. For
any life-threatening emergencies, the local medical center will be alerted and called upon.
There is a distance to the festival from the medical center, so response time may vary.
- How to get help
If you, a friend, or someone you see are seeking help please direct them to someone
wearing a SolDance Staff shirt, Security, Jam Care tent, or anyone working or operating a
vending/staff booth. It is important to speak up for any concern and it is noted to all that
are involved in the festival that “IF you see something, Say something”.
- What will staff be wearing
Staff will be wearing a Staff Shirt, the color of the shirts will be blue with a SolDance Staff
logo on the back and front.
- Where to find water
The festival will be supplying plastic water bottles. Although they will be only available on
request from a staff booth to limit waste and to be responsible for resources. To limit
waste and to be prepared, we recommend you bring your own water as it is the desert and
can get very hot during the day.`,
    },
    {
      question: "Weather",
      answer: `- Wind
The wind in the San Luis Valley can be unforgiving at times, although this won't stop us
from having a magical experience. The great Colorado sand dunes were created by these
forceful winds. It is important to bring face coverings, eye coverings, and coverings for
anything you don't want exposed to sand.
Tie downs, screw stakes, sandbags, or water buckets are a great way to ensure that your
camping equipment does not blow away or get destroyed and is tired down to the ground.
Please see your local camping store for related supplies!
- Rain
Rain can happen. It is very important to be prepared for the elements. IT CAN GET VERY
MUDDY! So, we recommend bringing boots, extra socks, and a rain jacket.
- Lightning
If lightning hits anywhere within a mile radius of the festival, the festival must stop all
production, and all scheduled programming will be delayed until further notice and it is
safe to do so.`,
    },
    {
      question: "Stages",
      answer: `- Summit Stage
We are excited to share with you our mainstage. Sound provided by KOJA sound and their

paraflex system.
4 - Danley SH46 Tops

4 - Kicks - HOQS C-2D 15" Kickbins (Mullins Mod)
8 - Subs - HOQS ELF 21" subwoofers (28hz tuned Paraflex C-2E.3)

- Temple Flora Stage

Our second stage, named the Temple Flora Stage, will be powered by AKA productions and
their turbo sound system.

X6 TurboSound TMS - 4
X8 TurboSound TSW - 124
X2 TurboSound IQ15
X2 TurboSound IQ18b`,
    },
    {
      question: "Accessibility",
      answer: `- ADA camping
We will be providing ADA camping. The spots are limited and only given upon request.
Proof of access pass must be provided and shown at time of arrival.
- Entrances
There will be two accessible entrances to the festival site and property, one will be access
to the campground area. The other will be access to the daytime parking. Both have their
own designated entrances to the actual festival grounds.
- Passes
There are only two different types of festival passes, Day time pass with access to the
festival only during festival hours (Camping not included) , and a general 3 – Day GA pass
with camping included.
A CAR PASS IS REQUIRED TO HAVE A CAR CAMPING SPOT. 1 standard sized car, SUV, or
truck. No trailers of any type, and no box trucks allowed. 10’x35’ camping space for 1-2
tents.`,
    },
    {
      question: "Wi-Fi for guests.",
      answer: `We will be providing solar power and high-speed Wi-Fi for all guests and staff. There will be
a charge to have full access to all sites and apps. It is important to note that each person in
your group will have to pay a separate charge for their own Wi-Fi.`,
    },
    {
      question: "Performers and Live Painters",
      answer: `Beyond the music, Sol Dance will feature live painters and performers adding bursts of creativity and movement to the festival atmosphere.`,
    },
  ];

  const [openFAQs, setOpenFAQs] = useState<boolean[]>(faqs.map(() => false));

  const toggleFAQ = (index: number) => {
    setOpenFAQs((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <>
    {/* Spacer */} 
    <div className="my-16 sm:my-14 md:my-18 lg:my-20"></div>

      <div className="flex flex-col min-h-screen">
      <motion.div
        className="bg-black bg-opacity-50 text-white rounded-2xl shadow-lg p-8 w-11/12 max-w-4xl mx-auto flex-grow"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0, ease: "easeOut" }}
      >
          <h1 className="text-4xl font-bold text-center mb-8">
            Information about SolDance
          </h1>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-500 pb-4">
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
                      <p key={idx} className="mb-2">
                        {line.trim()}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* About the Organizers Section */}
          <div className="mt-16">
            <h2 className="text-4xl font-bold text-center mb-6">
              About the Organizers
            </h2>
            <div className="space-y-12">
              {/* Dystopia Radio */}
              <div className="text-center">
                <Image
                  src="/DYSTOPIA-RADIO-ICON.png"
                  alt="Dystopia Radio Logo"
                  width={200}
                  height={100}
                  className="mx-auto mb-4 drop-shadow-md"
                />
                <h3 className="text-3xl font-semibold mb-2">Dystopia Radio</h3>
                <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                  Every day, we drift further into a dystopian reality, losing sight of
                  the utopia we were meant to create. Dystopia Radio offers a connection
                  through transformative frequencies, uniting a collective of performing
                  artists and visionaries. Their mission is to help break free from
                  society’s mold, inspiring a shift toward a brighter, more hopeful
                  future. Here, heroes come together to change the atmosphere and spark a
                  new energy for the world.
                </p>
              </div>

              {/* Dead Hound Studios */}
              <div className="text-center">
                <Image
                  src="/Dead-Hound-Studios.png"
                  alt="Dead Hound Studios Logo"
                  width={200}
                  height={100}
                  className="mx-auto mb-4 drop-shadow-md"
                />
                <h3 className="text-3xl font-semibold mb-2">Dead Hound Studios</h3>
                <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                  Dead Hound Studios takes pride in the quality and professionalism of
                  our events. They believe that excellence, positivity, and being your
                  true self should be the cornerstone of every gathering. At the heart of
                  their approach is a commitment to creating an environment that is both
                  professional and inclusive—one that lets you escape the repetitiveness
                  of everyday reality.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Spacer */}
        <div className="my-4 sm:my-4 md:my-8 lg:my-10"></div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

