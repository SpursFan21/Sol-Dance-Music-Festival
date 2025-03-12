export default function AboutPage() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/dune1.jpg')" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <main className="relative p-8 text-center text-white max-w-3xl mx-auto">
        {/* Spacer */}
        <div className="my-40"></div>
        <h1 className="text-5xl font-bold mb-6">We’re here for a reason.</h1>
        <p className="text-lg mb-6">
          When the elements of our reality align, life emerges. These essential
          forces come together so perfectly that forms like the human body, not
          only exist within this dimension, but thrive. The same pattern is
          seen with celestial bodies, as they move in harmony with the universe,
          creating an endless fractal of cosmic balance. We are right in the
          center of it all.
        </p>
        <blockquote className="italic text-xl mb-6">
          “Yesterday is gone. Tomorrow has not yet come. We have only today.
          Let us begin.”
        </blockquote>
         {/* Spacer */}
         <div className="my-40"></div>
        <p className="text-lg mb-6">
          We aimed not only to design an incredible event, but to integrate every
          creative element possible to give people the most intentional
          experience. When what you see, smell, taste, touch, and hear are all
          aligned in positivity, it creates a space for true being, helping you
          let go of the things that block you from becoming your truest self.
        </p>
        <p className="text-lg mb-6">
          SolDance is about allowing people to flow into a space where magic can
          happen. Imagine letting go of the anger from your commute, childhood
          trauma, life’s pain, and mental burdens…
        </p>
        <p className="text-lg mb-6">
          These moments of peace and community become so rare as we grow older,
          let’s revisit that time, together!
        </p>
        <p className="text-lg mb-6">
          Step into a world of wonder and joy. Immerse yourself in the art and
          melodies that will make your heart sing. Let your soul dance under
          the sun, and celebrate the essence of summertime.
        </p>
        <p className="text-lg mb-6">
          Feel the rhythm, feel the beat. SolDance is a festival like no other –
          where memories are made, and we experience our true selves once again.
        </p>
      </main>
    </div>
  );
}
