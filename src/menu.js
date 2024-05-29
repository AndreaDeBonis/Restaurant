import guacamole from "./media/guacamole.png";
import paella from "./media/paella.png";
import tapas from "./media/tapas.png";
import salad from "./media/salad.png";

export default function menu() {
  const content = document.getElementById("content");
  content.innerHTML = `<h1 class="py-10 text-6xl text-blue-950 self-center">Menu</h1>
  <div class="grid grid-cols-1 gap-4 self-center sm:grid-cols-2">
    <div class="relative px-24 py-8 border">
      <img class="absolute left-4" src="${guacamole}" alt="" />
      <h2>Dish</h2>
      <ul>
        <li>a</li>
        <li>a</li>
        <li>a</li>
      </ul>
    </div>
    <div class="relative px-24 py-8 border">
      <img class="absolute left-4" src="${tapas}" alt="" />
      <h2>Dish</h2>
      <ul>
        <li>a</li>
        <li>a</li>
        <li>a</li>
      </ul>
    </div>
    <div class="relative px-24 py-8 border">
      <img class="absolute left-4" src="${paella}" alt="" />
      <h2>Dish</h2>
      <ul>
        <li>a</li>
        <li>a</li>
        <li>a</li>
      </ul>
    </div>
    <div class="relative px-24 py-8 border">
      <img class="absolute left-4" src="${salad}" alt="" />
      <h2>Dish</h2>
      <ul>
        <li>a</li>
        <li>a</li>
        <li>a</li>
      </ul>
    </div>
  </div>
  `;
}
