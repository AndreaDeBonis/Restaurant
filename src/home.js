export default function home() {
  const content = document.getElementById("content");
  content.innerHTML = `<h1 class="py-10 mb-4 text-6xl text-blue-950 self-center">
  Welcome to NoName Bistrot
</h1>
<p class="py-5 text-2xl">
  Discover a place where wholesome meets delicious. At Nourish Bistro,
  we believe that healthy eating doesn't have to compromise on flavor.
  Our menu is crafted with the finest, freshest ingredients, bringing
  you meals that are both nutritious and mouth-wateringly good.
</p>
<h2 class="py-5 text-4xl">Our Philosophy</h2>
<p class="py-5 text-2xl">
  Nourish Bistro, we are committed to promoting well-being through
  thoughtfully prepared meals. Every dish is a testament to our
  dedication to sustainability, organic produce, and balanced nutrition.
  We cater to a variety of dietary preferences, ensuring that everyone
  can find something to love on our menu.
</p>
<h2 class="py-5 text-4xl">Why choose us</h2>
<div class="py-5 text-2xl">
  <ul class="list-disc ml-5">
    <li>
      Health-Centric: Our dishes are balanced, nutrient-dense, and made
      with your health in mind.
    </li>
    <li>
      Eco-Friendly: We strive to minimize our environmental impact
      through sustainable practices in our sourcing and operations.
    </li>
    <li>
      Community Focused: We believe in supporting our local community
      and fostering connections through food.
    </li>
  </ul>
</div>
`;
}
