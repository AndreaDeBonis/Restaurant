import guacamole from "./media/guacamole.png";
import paella from "./media/paella.png";
import tapas from "./media/tapas.png";
import salad from "./media/salad.png";

export default function menu() {
  const content = document.getElementById("content");
  content.innerHTML = `<h1 class="py-10 mb-4 text-6xl text-blue-950 self-center">Menu</h1>
  <div class="grid grid-cols-1 gap-16 self-center sm:grid-cols-2">
    <div class="relative px-24 py-8 border">
      <img class="absolute left-4" src="${guacamole}" alt="" />
      <h2 class="text-2xl font-bold">Guacamole - 9.99 $</h2>
      <ul class="text-xl list-disc mt-3 ml-4">
        <li>Avocado</li>
        <li>Lime</li>
        <li>Onion</li>
      </ul>
    </div>
    <div class="relative px-24 py-8 border">
      <img class="absolute left-4" src="${tapas}" alt="" />
      <h2 class="text-2xl font-bold">Tapas - 9.99 $</h2>
      <ul class="text-xl list-disc mt-3 ml-4">
        <li>Fish</li>
        <li>Meat</li>
        <li>Vegetables</li>
      </ul>
    </div>
    <div class="relative px-24 py-8 border">
      <img class="absolute left-4" src="${paella}" alt="" />
      <h2 class="text-2xl font-bold">Paella - 9.99 $</h2>
      <ul class="text-xl list-disc mt-3 ml-4">
        <li>Rice</li>
        <li>Fish</li>
        <li>Vegetables</li>
      </ul>
    </div>
    <div class="relative px-24 py-8 border">
      <img class="absolute left-4" src="${salad}" alt="" />
      <h2 class="text-2xl font-bold">Salad - 9.99 $</h2>
      <ul class="text-xl list-disc mt-3 ml-4">
        <li>Tomato</li>
        <li>Feta cheese</li>
        <li>Pepper</li>
      </ul>
    </div>
  </div>
`;
}
