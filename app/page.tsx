import DefaultBlur from "@/components/static/default-blur";
import Picture from "@/public/welder.png";
import PlaiceholderBlur from "@/components/static/plaiceholder-blur";

export default function Home() {
  return (
    <main className="flex justify-center items-center prose-xl">
      <div>
        <h1>Static Import</h1>
        <div>
          <DefaultBlur src={Picture} />
        </div>
      </div>

      <div>
        <h1>Static Import with Plaiceholder</h1>
        <div>
          <PlaiceholderBlur src={"/welder.png"} />
        </div>
      </div>
    </main>
  );
}
