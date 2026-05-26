import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brain TDS Logistics — Importation & Delivery in Ghana" },
      {
        name: "description",
        content:
          "Brain TDS Logistics: China, Dubai, USA & Nigeria to Ghana cargo shipping. Live tracking, Accra-Tema and Koforidua warehouses.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/brain-tds.html"
      title="Brain TDS Logistics"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        border: "none",
      }}
    />
  );
}
