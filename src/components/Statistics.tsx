export const Statistics = () => {
  interface statsProps {
    quantity: string;
    description: string;
  }

  const stats: statsProps[] = [
    {
      quantity: "0%",
      description: "ChatGPT Users Get Structured Shadow Work",
    },
    {
      quantity: "3+ Months",
      description: "Jung's Therapeutic Memory vs ChatGPT's Episodic Chat",
    },
    {
      quantity: "15+",
      description: "Proprietary Psychology Frameworks",
    },
    {
      quantity: "100%",
      description: "Privacy - Your Shadow Work Never Trains Public Models",
    },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ quantity, description }: statsProps) => (
          <div
            key={description}
            className="space-y-2 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold ">{quantity}</h2>
            <p className="text-xl text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
