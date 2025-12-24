export const Manifesto = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              The Alchemist's Promise
            </span>
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground">
            <p className="text-xl font-medium text-foreground">
              "I built this for me after years of struggle. I wanted to heal myself and learned a lot about myself in the process."
            </p>

            <p>
              In an age of noise, we offer a quiet mirror. We do not sell your data. We do not train on your secrets. We offer a private vault for your soul.
            </p>

            <p>
              Built by someone who knows what it's like to feel lost and found technology wanting. Your deepest thoughts deserve encryption, not exploitation.
            </p>

            <p className="font-medium text-foreground">
              Because the journey inward should be yours alone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};