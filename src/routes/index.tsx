import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Website Transfer" },
      {
        name: "description",
        content: "This website has been successfully transferred.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-center">
      <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        This website has been successfully transferred
      </h1>
    </main>
  );
}
