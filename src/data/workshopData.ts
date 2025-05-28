//sol-dance\src\data\workshopData.ts

export interface Workshop {
  time: string;
  title: string;
  host: string;
  description: string;
  day: "Saturday" | "Sunday";
}

export const workshops: Workshop[] = [
  {
    day: "Saturday",
    time: "9:00 - 9:55am",
    title: "Awaken & Align - Group Reiki Meditation",
    host: "Rejuvenate with Adri",
    description:
      "Start your morning with a transformative one-hour journey of inner harmony. This workshop blends guided meditation with a powerful group Reiki clearing to help you awaken your energy and align mind, body, and spirit. Come as you are and leave feeling grounded, refreshed, and ready for the day ahead.",
  },
  {
    day: "Saturday",
    time: "10:00 - 10:55am",
    title: "Solstice Healing Yoga",
    host: "Rejuvenate with Adri",
    description:
      "This gentle offering combines the healing power of Restorative Yoga with the grounding elements of our surrounding landscape. Unwind, release, and restore in this deeply nourishing session designed to recharge you as we set intentions for the Summer Solstice upon us.",
  },
  {
    day: "Saturday",
    time: "11:00 - 11:55am",
    title: "Journey to Your Inner Light Breathwork & Meditation",
    host: "Adriana & Ryan Wignall",
    description:
      "Reconnect with your true self in this one-hour immersive experience combining meditation, breath work, and the soothing sounds of Koshi chimes. This session is designed to calm the mind, open the heart, and guide you gently back to your inner light.",
  },
  {
    day: "Saturday",
    time: "12:00 - 12:55pm",
    title: "Recharge Break",
    host: "",
    description: "A chance to rest, hydrate, and reset before the next session begins.",
  },
  {
    day: "Saturday",
    time: "1:00 - 1:55pm",
    title: "Daoist Breathwork & Flow Yoga",
    host: "Payge Riverwulf",
    description:
      "Daoist Yoga emphasizes deep connection to the body, nervous system regulation, and self-expression. Join Payge to integrate ancient breath techniques with intuitive movement, empowering you to step into your most aligned, untamed self.",
  },
  {
    day: "Saturday",
    time: "2:00 - 2:45pm",
    title: "Creative Movement",
    host: "Steph Spinelli",
    description:
      "In this workshop, we'll blend stretching, meditation, and props into a meditative flow experience. We'll explore basic prop movements to music, focusing on breath and body awareness. Hoops and props provided first come, first serve.",
  },
  {
    day: "Saturday",
    time: "2:50 - 3:30pm",
    title: "Intro to Poi",
    host: "InfernoMoe",
    description:
      "In this workshop new poi artists will explore terminology and fundamental skills from the ground up. We'll dive into plane control, timing, direction, turns, the 3-Beat Weave, and Butterfly patterns.",
  },
  {
    day: "Sunday",
    time: "9:00 - 9:55am",
    title: "Awaken & Align - Group Reiki Meditation",
    host: "Rejuvenate with Adri",
    description:
      "Start your morning with a transformative one-hour journey of inner harmony. This workshop blends guided meditation with a powerful group Reiki clearing to help you awaken your energy and align mind, body, and spirit.",
  },
  {
    day: "Sunday",
    time: "10:00 - 10:55am",
    title: "Solstice Healing Yoga",
    host: "Rejuvenate with Adri",
    description:
      "This gentle offering combines the healing power of Restorative Yoga with the grounding elements of our surrounding landscape. Unwind, release, and restore in this deeply nourishing session designed to recharge you.",
  },
  {
    day: "Sunday",
    time: "11:00 - 11:55am",
    title: "QiGong Movement Medicine",
    host: "Payge Riverwulf",
    description:
      "Connect with your body, breath, and spirit. Rooted in ancient Chinese medicine, Qigong uses slow, intentional movements, breathwork, and visualization to awaken life force energy—Qi—and restore inner balance.",
  },
  {
    day: "Sunday",
    time: "12:00 - 12:55pm",
    title: "Recharge Break",
    host: "",
    description: "A chance to rest, hydrate, and reset before the next session begins.",
  },
  {
    day: "Sunday",
    time: "1:00 - 1:55pm",
    title: "Frequency Therapy",
    host: "Bamboo n Lotus Wellness",
    description:
      "Discover the healing potential of frequency and vibration. Learn how frequency therapy supports physical, emotional, and energetic balance, and explore tools and techniques for integration.",
  },
  {
    day: "Sunday",
    time: "2:00 - 2:45pm",
    title: "Intuitive/Advanced Poi",
    host: "Andrew Montez",
    description:
      "Learn advanced poi techniques with Andrew Montez in this open-format workshop. Bring your questions and explore tricks like complex flowers, pendulums, stalls, tosses, snakes, tracers, and more!",
  },
  {
    day: "Sunday",
    time: "2:50 - 3:30pm",
    title: "Triphlo",
    host: "Tay.Phloz",
    description:
      "Join Tay.Phloz for Triphlo — a unique movement workshop designed to unite the mind, body, and soul in harmony. Whether you’re a seasoned flow artist or just want to let loose and boogie, this experience is all about feeling good, flowing freely, and reconnecting with yourself.",
  },
];
