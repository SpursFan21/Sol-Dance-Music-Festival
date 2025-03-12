import Footer from "@/components/Footer";

export default function LineupPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Spacer to add some breathing room */}
      <div className="h-16"></div>
      <main className="flex-grow p-8 text-center">
        <h1 className="text-4xl font-bold">Festival Lineup</h1>
        <p className="text-lg mt-4">Check out the incredible artists performing at Sol Dance!</p>

        {/* Display the festival lineup flyer with padding and controlled width */}
        <div className="mt-8 p-4 flex justify-center">
          <img
            src="/soldanceflyer.png"
            alt="Festival Lineup Flyer"
            className="w-full max-w-5xl h-auto rounded-lg"
          />
        </div>

        {/* Spacer to add some breathing room */}
        <div className="h-16"></div>
      </main>

      {/* Footer stays at the bottom of the page (not viewport) */}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
