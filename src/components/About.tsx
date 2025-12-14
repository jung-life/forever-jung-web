import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  The Mental Health{" "}
                </span>
                Crisis
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                <strong>The Problem:</strong> 1 in 4 people worldwide suffer from mental health disorders, yet 70% lack access to adequate care. Traditional therapy costs $100-200/session with 3-6 month waiting lists. Current digital solutions lack personalization and clinical depth.
              </p>
              <p className="text-xl text-muted-foreground mt-4">
                <strong>Our Solution:</strong> Jung leverages advanced AI conversation therapy to provide personalized, evidence-based mental health interventions accessible 24/7. We're building the first clinically-validated AI therapist that adapts to individual needs, cultural context, and therapeutic progress.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
