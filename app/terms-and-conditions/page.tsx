export const metadata = {
  title: "Terms and Conditions | MovieDubbed",
  description: "Terms and conditions of MovieDubbed website",
};

export default function TermsConditions() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10 ">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

      <p className="mb-4">
        By accessing and using MovieDubbed, you accept and agree to be bound by
        these terms and conditions.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Website Usage</h2>
      <p className="mb-4">
        You agree to use this website only for lawful purposes and in a way that
        does not harm others.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Content</h2>
      <p className="mb-4">
        All content provided on this website is for informational purposes only.
        We do not guarantee accuracy or completeness.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Changes</h2>
      <p className="mb-4">
        We may update these terms at any time without prior notice.
      </p>

      <p className="mt-6">
        Continued use of the website means you accept the updated terms.
      </p>
    </main>
  );
}
