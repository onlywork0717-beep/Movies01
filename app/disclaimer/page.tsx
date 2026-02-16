export const metadata = {
  title: "Disclaimer | MovieDubbed",
  description: "Disclaimer of MovieDubbed website",
};

export default function Disclaimer() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10 ">
      <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>

      <p className="mb-4">
        All information provided on MovieDubbed is published in good faith and
        for general information purposes only.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">No Responsibility</h2>
      <p className="mb-4">
        We do not make warranties about the completeness, reliability, or
        accuracy of this information.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">External Links</h2>
      <p className="mb-4">
        Our website may contain links to external websites. We do not control or
        take responsibility for their content.
      </p>

      <p className="mt-6">
        Any action you take based on the information from this website is
        strictly at your own risk.
      </p>
    </main>
  );
}
