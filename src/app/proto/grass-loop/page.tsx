import "./picker.css";
import GrassLoopPicker from "./GrassLoopPicker";

export default function GrassLoopProtoPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <section className="mx-auto w-full max-w-7xl px-8 py-16 sm:px-16">
        <h1 className="max-w-lg text-ink">Grass &amp; trees loop</h1>
        <p className="p2 mt-4 max-w-lg">
          Comparing a real video loop against a lightweight CSS/SVG
          recreation, dropped into the existing quote banner slot.
        </p>

        <div className="mt-10">
          <GrassLoopPicker />
        </div>
      </section>
    </main>
  );
}
