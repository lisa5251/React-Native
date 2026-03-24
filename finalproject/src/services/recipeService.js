// recipeService.js

const RECIPE_GROUPS = {
  Breakfast: [
    { title: 'Pancakes', image: 'https://source.unsplash.com/featured/?pancakes' },
    { title: 'Waffles', image: 'https://source.unsplash.com/featured/?waffles' },
    { title: 'Omelet', image: 'https://source.unsplash.com/featured/?omelet' },
    { title: 'French toast', image: 'https://source.unsplash.com/featured/?french-toast' },
    { title: 'Shakshuka', image: 'https://source.unsplash.com/featured/?shakshuka' },
    { title: 'Breakfast burrito', image: 'https://source.unsplash.com/featured/?breakfast-burrito' },
    { title: 'Smoothie bowl', image: 'https://source.unsplash.com/featured/?smoothie-bowl' },
    { title: 'Avocado toast', image: 'https://source.unsplash.com/featured/?avocado-toast' },
  ],
  Salads: [
    { title: 'Caesar salad', image: 'https://source.unsplash.com/featured/?caesar-salad' },
    { title: 'Greek salad', image: 'https://source.unsplash.com/featured/?greek-salad' },
    { title: 'Pasta salad', image: 'https://source.unsplash.com/featured/?pasta-salad' },
    { title: 'Quinoa salad', image: 'https://source.unsplash.com/featured/?quinoa-salad' },
    { title: 'Coleslaw', image: 'https://source.unsplash.com/featured/?coleslaw' },
    { title: 'Caprese', image: 'https://source.unsplash.com/featured/?caprese' },
  ],
  Soups: [
    { title: 'Chicken soup', image: 'https://source.unsplash.com/featured/?chicken-soup' },
    { title: 'Tomato soup', image: 'https://source.unsplash.com/featured/?tomato-soup' },
    { title: 'Lentil soup', image: 'https://source.unsplash.com/featured/?lentil-soup' },
    { title: 'Minestrone', image: 'https://source.unsplash.com/featured/?minestrone' },
    { title: 'Beef stew', image: 'https://source.unsplash.com/featured/?beef-stew' },
    { title: 'Chili', image: 'https://source.unsplash.com/featured/?chili' },
  ],
  'Pasta & Noodles': [
    { title: 'Spaghetti Bolognese', image: 'https://source.unsplash.com/featured/?spaghetti-bolognese' },
    { title: 'Carbonara', image: 'https://source.unsplash.com/featured/?carbonara' },
    { title: 'Lasagna', image: 'https://source.unsplash.com/featured/?lasagna' },
    { title: 'Mac and cheese', image: 'https://source.unsplash.com/featured/?mac-and-cheese' },
    { title: 'Ramen', image: 'https://source.unsplash.com/featured/?ramen' },
    { title: 'Pad Thai', image: 'https://source.unsplash.com/featured/?pad-thai' },
    { title: 'Udon', image: 'https://source.unsplash.com/featured/?udon' },
    { title: 'Pho', image: 'https://source.unsplash.com/featured/?pho' },
  ],
  'Rice Dishes': [
    { title: 'Fried rice', image: 'https://source.unsplash.com/featured/?fried-rice' },
    { title: 'Risotto', image: 'https://source.unsplash.com/featured/?risotto' },
    { title: 'Paella', image: 'https://source.unsplash.com/featured/?paella' },
    { title: 'Biryani', image: 'https://source.unsplash.com/featured/?biryani' },
    { title: 'Pilaf', image: 'https://source.unsplash.com/featured/?rice-pilaf' },
    { title: 'Sushi', image: 'https://source.unsplash.com/featured/?sushi' },
  ],
  Meat: [
    { title: 'Roast chicken', image: 'https://source.unsplash.com/featured/?roast-chicken' },
    { title: 'Steak', image: 'https://source.unsplash.com/featured/?steak' },
    { title: 'Meatballs', image: 'https://source.unsplash.com/featured/?meatballs' },
    { title: 'BBQ ribs', image: 'https://source.unsplash.com/featured/?bbq-ribs' },
    { title: 'Burger', image: 'https://source.unsplash.com/featured/?burger' },
    { title: 'Sausages', image: 'https://source.unsplash.com/featured/?sausages' },
  ],
  Seafood: [
    { title: 'Grilled salmon', image: 'https://source.unsplash.com/featured/?grilled-salmon' },
    { title: 'Fish and chips', image: 'https://source.unsplash.com/featured/?fish-and-chips' },
    { title: 'Shrimp scampi', image: 'https://source.unsplash.com/featured/?shrimp-scampi' },
    { title: 'Ceviche', image: 'https://source.unsplash.com/featured/?ceviche' },
    { title: 'Lobster roll', image: 'https://source.unsplash.com/featured/?lobster-roll' },
  ],
  Vegetarian: [
    { title: 'Veg stir fry', image: 'https://source.unsplash.com/featured/?vegetable-stir-fry' },
    { title: 'Tofu curry', image: 'https://source.unsplash.com/featured/?tofu-curry' },
    { title: 'Falafel', image: 'https://source.unsplash.com/featured/?falafel' },
    { title: 'Stuffed peppers', image: 'https://source.unsplash.com/featured/?stuffed-peppers' },
    { title: 'Veg burger', image: 'https://source.unsplash.com/featured/?veggie-burger' },
    { title: 'Ratatouille', image: 'https://source.unsplash.com/featured/?ratatouille' },
  ],
  'Street Food': [
    { title: 'Tacos', image: 'https://source.unsplash.com/featured/?tacos' },
    { title: 'Burritos', image: 'https://source.unsplash.com/featured/?burrito' },
    { title: 'Nachos', image: 'https://source.unsplash.com/featured/?nachos' },
    { title: 'Hot dog', image: 'https://source.unsplash.com/featured/?hot-dog' },
    { title: 'Spring rolls', image: 'https://source.unsplash.com/featured/?spring-rolls' },
    { title: 'Dumplings', image: 'https://source.unsplash.com/featured/?dumplings' },
    { title: 'Samosa', image: 'https://source.unsplash.com/featured/?samosa' },
  ],
  Baked: [
    { title: 'Pizza', image: 'https://source.unsplash.com/featured/?pizza' },
    { title: 'Calzone', image: 'https://source.unsplash.com/featured/?calzone' },
    { title: 'Quiche', image: 'https://source.unsplash.com/featured/?quiche' },
    { title: "Shepherd's pie", image: 'https://source.unsplash.com/featured/?shepherds-pie' },
    { title: 'Pot pie', image: 'https://source.unsplash.com/featured/?pot-pie' },
  ],
  Global: [
    { title: 'Butter chicken', image: 'https://source.unsplash.com/featured/?butter-chicken' },
    { title: 'Sushi rolls', image: 'https://source.unsplash.com/featured/?sushi-rolls' },
    { title: 'Kimchi stew', image: 'https://source.unsplash.com/featured/?kimchi-stew' },
    { title: 'Goulash', image: 'https://source.unsplash.com/featured/?goulash' },
    { title: 'Moussaka', image: 'https://source.unsplash.com/featured/?moussaka' },
    { title: 'Tagine', image: 'https://source.unsplash.com/featured/?tagine' },
  ],
  Desserts: [
    { title: 'Chocolate cake', image: 'https://source.unsplash.com/featured/?chocolate-cake' },
    { title: 'Cheesecake', image: 'https://source.unsplash.com/featured/?cheesecake' },
    { title: 'Brownies', image: 'https://source.unsplash.com/featured/?brownies' },
    { title: 'Ice cream', image: 'https://source.unsplash.com/featured/?ice-cream' },
    { title: 'Tiramisu', image: 'https://source.unsplash.com/featured/?tiramisu' },
    { title: 'Apple pie', image: 'https://source.unsplash.com/featured/?apple-pie' },
    { title: 'Donuts', image: 'https://source.unsplash.com/featured/?donuts' },
    { title: 'Cupcakes', image: 'https://source.unsplash.com/featured/?cupcakes' },
  ],
  Bakery: [
    { title: 'Cookies', image: 'https://source.unsplash.com/featured/?cookies' },
    { title: 'Muffins', image: 'https://source.unsplash.com/featured/?muffins' },
    { title: 'Croissants', image: 'https://source.unsplash.com/featured/?croissants' },
    { title: 'Macarons', image: 'https://source.unsplash.com/featured/?macarons' },
    { title: 'Eclairs', image: 'https://source.unsplash.com/featured/?eclairs' },
  ],
  Drinks: [
    { title: 'Smoothie', image: 'https://source.unsplash.com/featured/?smoothie' },
    { title: 'Milkshake', image: 'https://source.unsplash.com/featured/?milkshake' },
    { title: 'Lemonade', image: 'https://source.unsplash.com/featured/?lemonade' },
    { title: 'Iced coffee', image: 'https://source.unsplash.com/featured/?iced-coffee' },
    { title: 'Hot chocolate', image: 'https://source.unsplash.com/featured/?hot-chocolate' },
  ],
  Sides: [
    { title: 'Garlic bread', image: 'https://source.unsplash.com/featured/?garlic-bread' },
    { title: 'Mashed potatoes', image: 'https://source.unsplash.com/featured/?mashed-potatoes' },
    { title: 'Onion rings', image: 'https://source.unsplash.com/featured/?onion-rings' },
    { title: 'Hummus', image: 'https://source.unsplash.com/featured/?hummus' },
    { title: 'Bruschetta', image: 'https://source.unsplash.com/featured/?bruschetta' },
    { title: 'Deviled eggs', image: 'https://source.unsplash.com/featured/?deviled-eggs' },
    { title: 'Cheese platter', image: 'https://source.unsplash.com/featured/?cheese-platter' },
  ],
  'Diet Types': [
    { title: 'Keto meal', image: 'https://source.unsplash.com/featured/?keto-meal' },
    { title: 'Vegan meal', image: 'https://source.unsplash.com/featured/?vegan-meal' },
    { title: 'Gluten-free dish', image: 'https://source.unsplash.com/featured/?gluten-free-food' },
    { title: 'Low carb', image: 'https://source.unsplash.com/featured/?low-carb-meal' },
    { title: 'High protein', image: 'https://source.unsplash.com/featured/?high-protein-food' },
  ],
  Bonus: [
    { title: 'Mixed platter', image: 'https://source.unsplash.com/featured/?food-platter' },
  ],
};

export const RECIPE_CATEGORIES = ['All', ...Object.keys(RECIPE_GROUPS)];

const dessertCategories = new Set(['Desserts', 'Bakery']);
const drinkCategories = new Set(['Drinks']);
const breakfastCategories = new Set(['Breakfast']);
const seafoodCategories = new Set(['Seafood']);

function buildIngredients(title, category) {
  if (dessertCategories.has(category)) {
    return [
      `Ingredients for ${title}`,
      'Flour',
      'Sugar',
      'Butter',
      'Eggs',
      'Vanilla extract',
    ];
  }

  if (drinkCategories.has(category)) {
    return [
      `Base for ${title}`,
      'Ice',
      'Sweetener to taste',
      'Fresh fruit or flavoring',
      'Water or milk',
    ];
  }

  if (breakfastCategories.has(category)) {
    return [
      `Ingredients for ${title}`,
      'Eggs',
      'Milk or dairy alternative',
      'Salt',
      'Black pepper',
      'Fresh herbs',
    ];
  }

  if (seafoodCategories.has(category)) {
    return [
      `Ingredients for ${title}`,
      'Seafood of choice',
      'Lemon',
      'Olive oil',
      'Garlic',
      'Salt and pepper',
    ];
  }

  return [
    `Ingredients for ${title}`,
    'Olive oil',
    'Salt',
    'Black pepper',
    'Garlic',
    'Fresh herbs (optional)',
  ];
}

function buildInstructions(title, category) {
  return (
    `Prep all ingredients for ${title}. ` +
    `Cook or assemble using your preferred ${category.toLowerCase()} method. ` +
    'Season to taste and serve fresh.'
  );
}

function buildRecipe(entry, category, id) {
  // Prefer the explicit image tied to the recipe name; fall back to a stable tag-based image.
  const tags = [entry.title, category, 'food']
    .map((tag) => encodeURIComponent(tag))
    .join(',');
  const fallbackImage = `https://loremflickr.com/1200/800/${tags}?lock=${id}`;
  const rawImage = typeof entry.image === 'string' ? entry.image.trim() : '';
  const imageForRecipe = rawImage
    ? rawImage.replace('source.unsplash.com/featured/?', 'source.unsplash.com/1200x800/?')
    : fallbackImage;

  return {
    id: String(id),
    title: entry.title,
    category,
    image: imageForRecipe,
    fallbackImage,
    ingredients: buildIngredients(entry.title, category),
    instructions: buildInstructions(entry.title, category),
  };
}

export async function getRecipes() {
  let id = 1;
  const recipes = [];

  Object.entries(RECIPE_GROUPS).forEach(([category, entries]) => {
    entries.forEach((entry) => {
      recipes.push(buildRecipe(entry, category, id));
      id += 1;
    });
  });

  return recipes;
}
