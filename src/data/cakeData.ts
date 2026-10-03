export interface Cake {
  id: string;
  name: string;
  category: CakeCategory;
  description: string;
  price: number;
  image: string;
  featured?: boolean;
}

export type CakeCategory =
  | "Classic & Sponges"
  | "Chocolate Varieties"
  | "Fruit & Berry"
  | "Spiced & Vegetable"
  | "Cheesecakes"
  | "Nut & Seed"
  | "Traditional & Global Regional"
  | "Celebration, Yeast & Rich Styles";

export const cakeCategories: CakeCategory[] = [
  "Classic & Sponges",
  "Chocolate Varieties",
  "Fruit & Berry",
  "Spiced & Vegetable",
  "Cheesecakes",
  "Nut & Seed",
  "Traditional & Global Regional",
  "Celebration, Yeast & Rich Styles",
];

export const cakes: Cake[] = [
  // Classic & Sponges
  {
    id: "victoria-sponge",
    name: "Victoria Sponge",
    category: "Classic & Sponges",
    description:
      "A timeless sponge cake with soft vanilla layers and a delicate cream filling.",
    price: 1299,
    image: "/images/cakes/victoria-sponge.jpg",
    featured: true,
  },
  {
    id: "yellow-butter-cake",
    name: "Yellow Butter Cake",
    category: "Classic & Sponges",
    description:
      "Rich, buttery and tender cake with a classic homemade character.",
    price: 1199,
    image: "/images/cakes/yellow-butter-cake.jpg",
  },
  {
    id: "white-cake",
    name: "White Cake",
    category: "Classic & Sponges",
    description:
      "Light and delicate vanilla cake with a soft, elegant crumb.",
    price: 1199,
    image: "/images/cakes/white-cake.jpg",
  },
  {
    id: "pound-cake",
    name: "Pound Cake",
    category: "Classic & Sponges",
    description:
      "Dense, buttery and beautifully rich with a traditional golden crumb.",
    price: 1099,
    image: "/images/cakes/pound-cake.jpg",
  },
  {
    id: "marble-cake",
    name: "Marble Cake",
    category: "Classic & Sponges",
    description:
      "Vanilla and chocolate cake swirled together for a beautiful marble finish.",
    price: 1299,
    image: "/images/cakes/marble-cake.jpg",
  },
  {
    id: "chiffon-cake",
    name: "Chiffon Cake",
    category: "Classic & Sponges",
    description:
      "An airy and delicate sponge with a wonderfully light texture.",
    price: 1299,
    image: "/images/cakes/chiffon-cake.jpg",
  },
  {
    id: "angel-food-cake",
    name: "Angel Food Cake",
    category: "Classic & Sponges",
    description:
      "Light-as-air sponge cake with a soft texture and subtle sweetness.",
    price: 1399,
    image: "/images/cakes/angel-food-cake.jpg",
  },
  {
    id: "devils-food-cake",
    name: "Devil’s Food Cake",
    category: "Classic & Sponges",
    description:
      "Deep, rich chocolate sponge with an indulgently soft crumb.",
    price: 1499,
    image: "/images/cakes/devils-food-cake.jpg",
  },
  {
    id: "genoa-cake",
    name: "Genoa Cake",
    category: "Classic & Sponges",
    description:
      "A traditional fruit-rich cake inspired by classic Genoese baking.",
    price: 1399,
    image: "/images/cakes/genoa-cake.jpg",
  },
  {
    id: "madeira-cake",
    name: "Madeira Cake",
    category: "Classic & Sponges",
    description:
      "A classic British-style buttery cake with a firm yet tender crumb.",
    price: 1199,
    image: "/images/cakes/madeira-cake.jpg",
  },

  // Chocolate Varieties
  {
    id: "german-chocolate-cake",
    name: "German Chocolate Cake",
    category: "Chocolate Varieties",
    description:
      "Layered chocolate cake finished with a rich coconut and pecan topping.",
    price: 1699,
    image: "/images/cakes/german-chocolate-cake.jpg",
    featured: true,
  },
  {
    id: "chocolate-fudge-cake",
    name: "Chocolate Fudge Cake",
    category: "Chocolate Varieties",
    description:
      "Moist chocolate layers with a luxurious, fudgy chocolate finish.",
    price: 1599,
    image: "/images/cakes/chocolate-fudge-cake.jpg",
    featured: true,
  },
  {
    id: "flourless-chocolate-cake",
    name: "Flourless Chocolate Cake",
    category: "Chocolate Varieties",
    description:
      "Dense and intensely chocolatey with a smooth, decadent texture.",
    price: 1699,
    image: "/images/cakes/flourless-chocolate-cake.jpg",
  },
  {
    id: "chocolate-lava-cake",
    name: "Chocolate Lava Cake",
    category: "Chocolate Varieties",
    description:
      "A rich chocolate cake with a warm molten-style chocolate centre.",
    price: 1499,
    image: "/images/cakes/chocolate-lava-cake.jpg",
  },
  {
    id: "sacher-torte",
    name: "Sacher-Torte",
    category: "Chocolate Varieties",
    description:
      "Elegant chocolate cake layered with apricot preserve and chocolate glaze.",
    price: 1799,
    image: "/images/cakes/sacher-torte.jpg",
  },
  {
    id: "black-forest-cake",
    name: "Black Forest Cake",
    category: "Chocolate Varieties",
    description:
      "Chocolate sponge layered with cream and cherry-inspired flavours.",
    price: 1699,
    image: "/images/cakes/black-forest-cake.jpg",
    featured: true,
  },
  {
    id: "mississippi-mud-cake",
    name: "Mississippi Mud Cake",
    category: "Chocolate Varieties",
    description:
      "Ultra-rich chocolate cake with a soft and indulgent texture.",
    price: 1599,
    image: "/images/cakes/mississippi-mud-cake.jpg",
  },
  {
    id: "kladdkaka",
    name: "Kladdkaka",
    category: "Chocolate Varieties",
    description:
      "Swedish-style sticky chocolate cake with a rich fudgy centre.",
    price: 1499,
    image: "/images/cakes/kladdkaka.jpg",
  },
  {
    id: "chocolate-mousse-cake",
    name: "Chocolate Mousse Cake",
    category: "Chocolate Varieties",
    description:
      "Silky chocolate mousse layered over a delicate chocolate base.",
    price: 1799,
    image: "/images/cakes/chocolate-mousse-cake.jpg",
  },
  {
    id: "chocolate-truffle-cake",
    name: "Chocolate Truffle Cake",
    category: "Chocolate Varieties",
    description:
      "Luxurious chocolate cake finished with a smooth truffle coating.",
    price: 1699,
    image: "/images/cakes/chocolate-truffle-cake.jpg",
    featured: true,
  },

  // Fruit & Berry
  {
    id: "pineapple-upside-down-cake",
    name: "Pineapple Upside-Down Cake",
    category: "Fruit & Berry",
    description:
      "Tender cake topped with caramelised pineapple and fruity sweetness.",
    price: 1399,
    image: "/images/cakes/pineapple-upside-down-cake.jpg",
  },
  {
    id: "lemon-drizzle-cake",
    name: "Lemon Drizzle Cake",
    category: "Fruit & Berry",
    description:
      "Soft lemon cake finished with a bright and delicate citrus drizzle.",
    price: 1299,
    image: "/images/cakes/lemon-drizzle-cake.jpg",
  },
  {
    id: "strawberry-shortcake",
    name: "Strawberry Shortcake",
    category: "Fruit & Berry",
    description:
      "Light sponge layered with cream and fresh strawberry flavours.",
    price: 1499,
    image: "/images/cakes/strawberry-shortcake.jpg",
    featured: true,
  },
  {
    id: "apple-charlotte",
    name: "Apple Charlotte",
    category: "Fruit & Berry",
    description:
      "Classic baked dessert combining soft apples with a golden cake shell.",
    price: 1399,
    image: "/images/cakes/apple-charlotte.jpg",
  },
  {
    id: "key-lime-cake",
    name: "Key Lime Cake",
    category: "Fruit & Berry",
    description:
      "Fresh citrus cake with a smooth and refreshing lime character.",
    price: 1399,
    image: "/images/cakes/key-lime-cake.jpg",
  },
  {
    id: "raspberry-mousse-cake",
    name: "Raspberry Mousse Cake",
    category: "Fruit & Berry",
    description:
      "Light mousse cake balanced with bright raspberry flavour.",
    price: 1699,
    image: "/images/cakes/raspberry-mousse-cake.jpg",
  },
  {
    id: "coconut-layer-cake",
    name: "Coconut Layer Cake",
    category: "Fruit & Berry",
    description:
      "Soft layered cake with delicate coconut cream and tropical notes.",
    price: 1499,
    image: "/images/cakes/coconut-layer-cake.jpg",
  },
  {
    id: "banana-cake",
    name: "Banana Cake",
    category: "Fruit & Berry",
    description:
      "Moist banana cake with a naturally sweet and comforting flavour.",
    price: 1199,
    image: "/images/cakes/banana-cake.jpg",
  },
  {
    id: "mango-cream-cake",
    name: "Mango Cream Cake",
    category: "Fruit & Berry",
    description:
      "Soft vanilla sponge layered with cream and vibrant mango flavour.",
    price: 1499,
    image: "/images/cakes/mango-cream-cake.jpg",
    featured: true,
  },
  {
    id: "plum-upside-down-cake",
    name: "Plum Upside-Down Cake",
    category: "Fruit & Berry",
    description:
      "Tender cake topped with beautifully caramelised seasonal plums.",
    price: 1499,
    image: "/images/cakes/plum-upside-down-cake.jpg",
  },
  {
    id: "blueberry-lemon-buckle",
    name: "Blueberry Lemon Buckle",
    category: "Fruit & Berry",
    description:
      "Rustic blueberry cake brightened with fresh lemon notes.",
    price: 1399,
    image: "/images/cakes/blueberry-lemon-buckle.jpg",
  },
  {
    id: "fig-almond-cake",
    name: "Fig & Almond Cake",
    category: "Fruit & Berry",
    description:
      "Elegant almond cake complemented by naturally sweet fig flavours.",
    price: 1599,
    image: "/images/cakes/fig-almond-cake.jpg",
  },
  {
    id: "orange-chiffon-cake",
    name: "Orange Chiffon Cake",
    category: "Fruit & Berry",
    description:
      "Airy chiffon sponge infused with bright orange flavour.",
    price: 1299,
    image: "/images/cakes/orange-chiffon-cake.jpg",
  },
  {
    id: "passion-fruit-mousse-cake",
    name: "Passion Fruit Mousse Cake",
    category: "Fruit & Berry",
    description:
      "Silky mousse balanced with the refreshing tang of passion fruit.",
    price: 1699,
    image: "/images/cakes/passion-fruit-mousse-cake.jpg",
  },
  {
    id: "cherry-almond-cake",
    name: "Cherry Almond Cake",
    category: "Fruit & Berry",
    description:
      "Tender almond cake paired with sweet cherry flavours.",
    price: 1599,
    image: "/images/cakes/cherry-almond-cake.jpg",
  },

  // Spiced & Vegetable
  {
    id: "carrot-cake",
    name: "Carrot Cake",
    category: "Spiced & Vegetable",
    description:
      "Moist spiced carrot cake with a creamy and elegant finish.",
    price: 1399,
    image: "/images/cakes/carrot-cake.jpg",
    featured: true,
  },
  {
    id: "hummingbird-cake",
    name: "Hummingbird Cake",
    category: "Spiced & Vegetable",
    description:
      "Moist fruit-filled cake combining banana, pineapple and warm spices.",
    price: 1499,
    image: "/images/cakes/hummingbird-cake.jpg",
  },
  {
    id: "gingerbread-cake",
    name: "Gingerbread Cake",
    category: "Spiced & Vegetable",
    description:
      "Warmly spiced cake with a comforting ginger-forward flavour.",
    price: 1299,
    image: "/images/cakes/gingerbread-cake.jpg",
  },
  {
    id: "pumpkin-spice-cake",
    name: "Pumpkin Spice Cake",
    category: "Spiced & Vegetable",
    description:
      "Soft pumpkin cake infused with warm seasonal spices.",
    price: 1399,
    image: "/images/cakes/pumpkin-spice-cake.jpg",
  },
  {
    id: "zucchini-walnut-cake",
    name: "Zucchini Walnut Cake",
    category: "Spiced & Vegetable",
    description:
      "Moist zucchini cake with toasted walnut character.",
    price: 1399,
    image: "/images/cakes/zucchini-walnut-cake.jpg",
  },
  {
    id: "spice-cake",
    name: "Spice Cake",
    category: "Spiced & Vegetable",
    description:
      "Classic tender cake layered with fragrant baking spices.",
    price: 1299,
    image: "/images/cakes/spice-cake.jpg",
  },
  {
    id: "sweet-potato-bundt-cake",
    name: "Sweet Potato Bundt Cake",
    category: "Spiced & Vegetable",
    description:
      "Tender bundt cake with sweet potato and warm spice notes.",
    price: 1399,
    image: "/images/cakes/sweet-potato-bundt-cake.jpg",
  },
  {
    id: "parsnip-pecan-cake",
    name: "Parsnip & Pecan Cake",
    category: "Spiced & Vegetable",
    description:
      "A rustic cake combining delicate parsnip sweetness with pecans.",
    price: 1499,
    image: "/images/cakes/parsnip-pecan-cake.jpg",
  },

  // Cheesecakes
  {
    id: "new-york-baked-cheesecake",
    name: "New York Baked Cheesecake",
    category: "Cheesecakes",
    description:
      "Classic baked cheesecake with a rich, smooth and creamy texture.",
    price: 1599,
    image: "/images/cakes/new-york-baked-cheesecake.jpg",
    featured: true,
  },
  {
    id: "basque-burnt-cheesecake",
    name: "Basque Burnt Cheesecake",
    category: "Cheesecakes",
    description:
      "Creamy cheesecake with a deeply caramelised top.",
    price: 1699,
    image: "/images/cakes/basque-burnt-cheesecake.jpg",
    featured: true,
  },
  {
    id: "japanese-cotton-cheesecake",
    name: "Japanese Cotton Cheesecake",
    category: "Cheesecakes",
    description:
      "Light and delicate cheesecake with a soft cotton-like texture.",
    price: 1599,
    image: "/images/cakes/japanese-cotton-cheesecake.jpg",
  },
  {
    id: "strawberry-cheesecake",
    name: "No-Bake Strawberry Cheesecake",
    category: "Cheesecakes",
    description:
      "Creamy no-bake cheesecake with bright strawberry flavour.",
    price: 1599,
    image: "/images/cakes/strawberry-cheesecake.jpg",
  },
  {
    id: "ricotta-cheesecake",
    name: "Ricotta Cheesecake",
    category: "Cheesecakes",
    description:
      "Delicate cheesecake with the subtle richness of ricotta.",
    price: 1599,
    image: "/images/cakes/ricotta-cheesecake.jpg",
  },
  {
    id: "oreo-cheesecake",
    name: "Oreo Cookies & Cream Cheesecake",
    category: "Cheesecakes",
    description:
      "Creamy cookies-and-cream cheesecake with a chocolate cookie base.",
    price: 1699,
    image: "/images/cakes/oreo-cheesecake.jpg",
  },
  {
    id: "espresso-cheesecake",
    name: "Espresso Cheesecake",
    category: "Cheesecakes",
    description:
      "Smooth cheesecake infused with rich espresso flavour.",
    price: 1699,
    image: "/images/cakes/espresso-cheesecake.jpg",
  },

  // Nut & Seed
  {
    id: "almond-opera-cake",
    name: "Almond Opera Cake",
    category: "Nut & Seed",
    description:
      "Elegant layered cake combining almond sponge with refined coffee and chocolate notes.",
    price: 1899,
    image: "/images/cakes/almond-opera-cake.jpg",
    featured: true,
  },
  {
    id: "pistachio-cardamom-cake",
    name: "Pistachio Cardamom Cake",
    category: "Nut & Seed",
    description:
      "Fragrant pistachio cake enhanced with delicate cardamom.",
    price: 1699,
    image: "/images/cakes/pistachio-cardamom-cake.jpg",
  },
  {
    id: "hazelnut-praline-cake",
    name: "Hazelnut Praline Cake",
    category: "Nut & Seed",
    description:
      "Rich hazelnut cake layered with smooth praline flavours.",
    price: 1799,
    image: "/images/cakes/hazelnut-praline-cake.jpg",
  },
  {
    id: "walnut-coffee-cake",
    name: "Walnut Coffee Cake",
    category: "Nut & Seed",
    description:
      "Tender coffee cake with toasted walnut richness.",
    price: 1499,
    image: "/images/cakes/walnut-coffee-cake.jpg",
  },
  {
    id: "poppy-seed-cake",
    name: "Poppy Seed Cake",
    category: "Nut & Seed",
    description:
      "Soft cake with delicate poppy seed texture and flavour.",
    price: 1399,
    image: "/images/cakes/poppy-seed-cake.jpg",
  },
  {
    id: "chestnut-mont-blanc",
    name: "Chestnut Cake",
    category: "Nut & Seed",
    description:
      "Elegant Mont Blanc-inspired cake with delicate chestnut flavour.",
    price: 1899,
    image: "/images/cakes/chestnut-mont-blanc.jpg",
  },
  {
    id: "chestnut-chocolate-cake",
    name: "Chestnut & Chocolate Cake",
    category: "Nut & Seed",
    description:
      "Luxurious combination of chestnut cream and rich chocolate.",
    price: 1799,
    image: "/images/cakes/chestnut-chocolate-cake.jpg",
  },

  // Traditional & Global Regional
  {
    id: "tres-leches",
    name: "Tres Leches Cake",
    category: "Traditional & Global Regional",
    description:
      "Soft sponge inspired by the classic Latin American milk-soaked cake.",
    price: 1599,
    image: "/images/cakes/tres-leches.jpg",
  },
  {
    id: "tiramisu-cake",
    name: "Tiramisu Cake",
    category: "Traditional & Global Regional",
    description:
      "Italian-inspired cake with coffee, cream and cocoa flavours.",
    price: 1699,
    image: "/images/cakes/tiramisu-cake.jpg",
    featured: true,
  },
  {
    id: "panettone",
    name: "Panettone",
    category: "Traditional & Global Regional",
    description:
      "Italian-style enriched sweet bread with a festive character.",
    price: 1499,
    image: "/images/cakes/panettone.jpg",
  },
  {
    id: "stollen",
    name: "Stollen",
    category: "Traditional & Global Regional",
    description:
      "Traditional German festive fruit bread with a rich, tender crumb.",
    price: 1499,
    image: "/images/cakes/stollen.jpg",
  },
  {
    id: "galette-des-rois",
    name: "Galette des Rois",
    category: "Traditional & Global Regional",
    description:
      "French pastry-inspired celebration cake with delicate almond filling.",
    price: 1699,
    image: "/images/cakes/galette-des-rois.jpg",
  },
  {
    id: "king-cake",
    name: "King Cake",
    category: "Traditional & Global Regional",
    description:
      "Festive New Orleans-inspired celebration cake with a colourful finish.",
    price: 1599,
    image: "/images/cakes/king-cake.jpg",
  },
  {
    id: "babka",
    name: "Babka",
    category: "Traditional & Global Regional",
    description:
      "Eastern European-inspired twisted sweet bread with rich filling.",
    price: 1399,
    image: "/images/cakes/babka.jpg",
  },
  {
    id: "baumkuchen",
    name: "Baumkuchen",
    category: "Traditional & Global Regional",
    description:
      "Distinctive layered German and Japanese-style ring cake.",
    price: 1699,
    image: "/images/cakes/baumkuchen.jpg",
  },
  {
    id: "cassata",
    name: "Cassata",
    category: "Traditional & Global Regional",
    description:
      "Sicilian-inspired celebration cake with rich layered flavours.",
    price: 1799,
    image: "/images/cakes/cassata.jpg",
  },
  {
    id: "lamington",
    name: "Lamington",
    category: "Traditional & Global Regional",
    description:
      "Australian-inspired sponge cake finished with chocolate and coconut.",
    price: 1299,
    image: "/images/cakes/lamington.jpg",
  },
  {
    id: "boston-cream-pie",
    name: "Boston Cream Pie",
    category: "Traditional & Global Regional",
    description:
      "Soft cake layered with cream and finished with chocolate.",
    price: 1599,
    image: "/images/cakes/boston-cream-pie.jpg",
  },
  {
    id: "pavlova-cake",
    name: "Pavlova Cake",
    category: "Traditional & Global Regional",
    description:
      "Delicate meringue-inspired celebration dessert with cream and fruit.",
    price: 1699,
    image: "/images/cakes/pavlova-cake.jpg",
  },
  {
    id: "prinzregententorte",
    name: "Prinzregententorte",
    category: "Traditional & Global Regional",
    description:
      "Elegant German layered cake with delicate chocolate finishing.",
    price: 1899,
    image: "/images/cakes/prinzregententorte.jpg",
  },
  {
    id: "medovik",
    name: "Medovik",
    category: "Traditional & Global Regional",
    description:
      "Russian honey cake built from delicate layers and creamy filling.",
    price: 1799,
    image: "/images/cakes/medovik.jpg",
  },
  {
    id: "esterhazy-torte",
    name: "Estérhazy Torte",
    category: "Traditional & Global Regional",
    description:
      "Elegant layered Hungarian-Austrian-inspired nut cake.",
    price: 1899,
    image: "/images/cakes/esterhazy-torte.jpg",
  },
  {
    id: "dobos-torte",
    name: "Dobos Torte",
    category: "Traditional & Global Regional",
    description:
      "Classic Hungarian layered cake with chocolate buttercream and caramel.",
    price: 1899,
    image: "/images/cakes/dobos-torte.jpg",
  },
  {
    id: "basbousa-revani",
    name: "Basbousa / Revani",
    category: "Traditional & Global Regional",
    description:
      "Middle Eastern-style semolina cake with a delicate sweet finish.",
    price: 1199,
    image: "/images/cakes/basbousa-revani.jpg",
  },
  {
    id: "bibingka",
    name: "Bibingka",
    category: "Traditional & Global Regional",
    description:
      "Filipino-inspired rice cake with a soft, comforting texture.",
    price: 1299,
    image: "/images/cakes/bibingka.jpg",
  },
  {
    id: "kue-lapis",
    name: "Kue Lapis / Spekkek",
    category: "Traditional & Global Regional",
    description:
      "Indonesian-inspired layered cake with beautiful delicate layers.",
    price: 1499,
    image: "/images/cakes/kue-lapis.jpg",
  },
  {
    id: "pandan-chiffon",
    name: "Pandan Chiffon Cake",
    category: "Traditional & Global Regional",
    description:
      "Light chiffon cake with fragrant pandan flavour.",
    price: 1399,
    image: "/images/cakes/pandan-chiffon.jpg",
  },
  {
    id: "castella",
    name: "Castella",
    category: "Traditional & Global Regional",
    description:
      "Japanese-inspired sponge with a soft, delicate and bouncy texture.",
    price: 1399,
    image: "/images/cakes/castella.jpg",
  },
  {
    id: "bienenstich",
    name: "Bienenstich",
    category: "Traditional & Global Regional",
    description:
      "German bee sting cake with a caramelised almond topping.",
    price: 1599,
    image: "/images/cakes/bienenstich.jpg",
  },
  {
    id: "welsh-cake",
    name: "Welsh Cake",
    category: "Traditional & Global Regional",
    description:
      "Traditional Welsh-style griddle cake with a comforting character.",
    price: 1099,
    image: "/images/cakes/welsh-cake.jpg",
  },
  {
    id: "dundee-cake",
    name: "Dundee Cake",
    category: "Traditional & Global Regional",
    description:
      "Scottish-style fruit cake with a rich and traditional character.",
    price: 1499,
    image: "/images/cakes/dundee-cake.jpg",
  },
  {
    id: "simnel-cake",
    name: "Simnel Cake",
    category: "Traditional & Global Regional",
    description:
      "Traditional UK celebration cake with fruit, spice and almond character.",
    price: 1599,
    image: "/images/cakes/simnel-cake.jpg",
  },

  // Celebration, Yeast & Rich Styles
  {
    id: "red-velvet",
    name: "Red Velvet Cake",
    category: "Celebration, Yeast & Rich Styles",
    description:
      "Velvety cocoa cake paired with a smooth cream cheese-style finish.",
    price: 1599,
    image: "/images/cakes/red-velvet.jpg",
    featured: true,
  },
  {
    id: "funfetti-cake",
    name: "Funfetti / Birthday Confetti Cake",
    category: "Celebration, Yeast & Rich Styles",
    description:
      "Playful vanilla celebration cake filled with colourful confetti.",
    price: 1399,
    image: "/images/cakes/funfetti-cake.jpg",
  },
  {
    id: "christmas-fruitcake",
    name: "Christmas Fruitcake",
    category: "Celebration, Yeast & Rich Styles",
    description:
      "Festive fruit-rich cake made for seasonal celebrations.",
    price: 1599,
    image: "/images/cakes/christmas-fruitcake.jpg",
  },
  {
    id: "dundee-fruit-cake",
    name: "Dundee Fruit Cake",
    category: "Celebration, Yeast & Rich Styles",
    description:
      "Rich traditional fruit cake with a classic Scottish character.",
    price: 1499,
    image: "/images/cakes/dundee-fruit-cake.jpg",
  },
  {
    id: "rum-cake",
    name: "Rum Cake",
    category: "Celebration, Yeast & Rich Styles",
    description:
      "Rich celebration cake with a deep, aromatic flavour.",
    price: 1599,
    image: "/images/cakes/rum-cake.jpg",
  },
  {
    id: "caramel-drizzle-cake",
    name: "Caramel Drizzle Cake",
    category: "Celebration, Yeast & Rich Styles",
    description:
      "Soft cake finished with a luxurious caramel drizzle.",
    price: 1499,
    image: "/images/cakes/caramel-drizzle-cake.jpg",
    featured: true,
  },
  {
    id: "salted-caramel-crunch-cake",
    name: "Salted Caramel Crunch Cake",
    category: "Celebration, Yeast & Rich Styles",
    description:
      "Rich caramel cake balanced with a delicate salted crunch.",
    price: 1699,
    image: "/images/cakes/salted-caramel-crunch-cake.jpg",
  },
  {
    id: "coffee-walnut-layer-cake",
    name: "Coffee & Walnut Layer Cake",
    category: "Celebration, Yeast & Rich Styles",
    description:
      "Classic coffee cake layered with toasted walnut richness.",
    price: 1599,
    image: "/images/cakes/coffee-walnut-layer-cake.jpg",
  },
  {
    id: "earl-grey-tea-cake",
    name: "Earl Grey Tea Cake",
    category: "Celebration, Yeast & Rich Styles",
    description:
      "Elegant tea-infused cake with subtle bergamot notes.",
    price: 1499,
    image: "/images/cakes/earl-grey-tea-cake.jpg",
  },
  {
    id: "matcha-green-tea-cake",
    name: "Matcha Green Tea Layer Cake",
    category: "Celebration, Yeast & Rich Styles",
    description:
      "Delicate layered cake with refined matcha green tea flavour.",
    price: 1699,
    image: "/images/cakes/matcha-green-tea-cake.jpg",
  },
  {
    id: "biscoff-cake",
    name: "Biscoff Speculoos Cake",
    category: "Celebration, Yeast & Rich Styles",
    description:
      "Creamy cake layered with caramelised biscuit flavour.",
    price: 1599,
    image: "/images/cakes/biscoff-cake.jpg",
    featured: true,
  },
  {
    id: "nutella-fudge-cake",
    name: "Nutella Fudge Cake",
    category: "Celebration, Yeast & Rich Styles",
    description:
      "Rich chocolate fudge cake with a hazelnut cocoa finish.",
    price: 1699,
    image: "/images/cakes/nutella-fudge-cake.jpg",
  },
  {
    id: "dulce-de-leche-cake",
    name: "Dulce de Leche Cake",
    category: "Celebration, Yeast & Rich Styles",
    description:
      "Soft layered cake finished with smooth caramelised milk flavour.",
    price: 1599,
    image: "/images/cakes/dulce-de-leche-cake.jpg",
  },
  {
    id: "peanut-butter-fudge-cake",
    name: "Peanut Butter Fudge Cake",
    category: "Celebration, Yeast & Rich Styles",
    description:
      "Decadent chocolate fudge cake paired with peanut butter richness.",
    price: 1699,
    image: "/images/cakes/peanut-butter-fudge-cake.jpg",
  },
  {
    id: "cookies-cream-layer-cake",
    name: "Cookies & Cream Layer Cake",
    category: "Celebration, Yeast & Rich Styles",
    description:
      "Creamy layered cake with chocolate cookie pieces throughout.",
    price: 1599,
    image: "/images/cakes/cookies-cream-layer-cake.jpg",
  },
];