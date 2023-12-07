import Image from "next/image";

import DefaultBlur from "@/components/static/default-blur";
import Picture from "../../public/images/welder.png";

export default function Home() {
  return (
    <main className="flex justify-center items-center prose-xl">
      <div>
        <h1>Static Imports</h1>
        <div>
          <DefaultBlur src={Picture} />
        </div>
      </div>
    </main>
  );
}
