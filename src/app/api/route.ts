// src/app/api/route.ts
export async function POST(req: Request) {
    try {
      const { email } = await req.json();
      if (!email) {
        return new Response(JSON.stringify({ error: "Email is required" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }
  
      // Your Google Form's POST URL (from the embed code)
      const formUrl =
        "https://docs.google.com/forms/d/e/1FAIpQLSe0FRRRixLqzkh9uiE0kcpge75eU-umAKS3h2TtWb0HGgq8Yg/formResponse";
  
      // Prepare form data. Replace "entry.xxxxxxxx" with your field's name value.
      const formData = new URLSearchParams();
      formData.append("entry.1173159370", email);  // Use the actual entry ID here
  
      // Make the POST request to Google Forms
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",  // no-cors is required for Google Forms submissions
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });
  
      return new Response(JSON.stringify({ message: "Success" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error submitting to Google Form:", error);
      return new Response(JSON.stringify({ error: "Error submitting form" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }