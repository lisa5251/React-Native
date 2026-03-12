// simple stub service for recipes

export async function getRecipes() {
  // In a real application you would fetch this data from an API
  // return fetch('/api/recipes').then(res => res.json());

  // static sample recipes
  return [
    {
      id: '1',
      title: 'Classic Pancakes',
      image: 'https://source.unsplash.com/featured/?pancakes',
      ingredients: [
        '1 1/2 cups all-purpose flour',
        '3 1/2 teaspoons baking powder',
        '1 teaspoon salt',
        '1 tablespoon white sugar',
        '1 1/4 cups milk',
        '1 egg',
        '3 tablespoons butter, melted',
      ],
      instructions:
        'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium-high heat. Pour or scoop batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
    },
    {
      id: '2',
      title: 'Spaghetti Carbonara',
      image: 'https://source.unsplash.com/featured/?carbonara',
      ingredients: [
        '200g spaghetti',
        '100g pancetta or bacon',
        '2 large eggs',
        '50g pecorino cheese',
        '50g parmesan',
        'Freshly ground black pepper',
        'Salt',
      ],
      instructions:
        'Cook spaghetti in salted boiling water until al dente. Fry pancetta until crisp. Beat eggs in a bowl, then mix in cheeses. Drain pasta and return to pot. Quickly stir in pancetta and fat, then remove from heat and add egg-cheese mixture, stirring vigorously to create a creamy sauce without scrambling the eggs. Season with pepper and serve immediately.',
    },
    {
      id: '3',
      title: 'Guacamole',
      image: 'https://source.unsplash.com/featured/?guacamole',
      ingredients: [
        '2 ripe avocados',
        '1/4 cup finely chopped onion',
        '1 tomato, chopped',
        '1 tablespoon lime juice',
        'Salt and pepper to taste',
        'Cilantro (optional)',
      ],
      instructions:
        'Mash the avocados in a bowl. Add chopped onion, tomato, lime juice, and cilantro if using. Season with salt and pepper. Stir until combined and adjust seasoning. Serve immediately with tortilla chips.',
    },
  ];
}
