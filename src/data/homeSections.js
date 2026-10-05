import {
  CATEGORIES,
  tomAndJerry, dragonBallZ, heyArnold, inspectorGadget, pokemon, smurfs, cartoons11, cartoons16,
  comedyVideo, cookingVideo, fashion24Video, fashion26Video,
} from './catalog';

// Ids are only unique within a category, so each home item gets a category-scoped key.
const tag = (categoryId) => (video) => ({
  ...video,
  key: `${categoryId}-${video.id}`,
  category: CATEGORIES[categoryId],
});
const cartoon = tag('cartoon');
const comedy = tag('comedy');
const cooking = tag('cooking');
const fashion = tag('fashion');

export const topTen = [
  cartoon(tomAndJerry[2]),
  comedy(comedyVideo(13)),
  cooking(cookingVideo(20)),
  fashion(fashion24Video(3)),
  cartoon(dragonBallZ[0]),
  comedy(comedyVideo(22)),
  cooking(cookingVideo(16)),
  cartoon(pokemon[0]),
  fashion(fashion26Video(8)),
  cartoon(smurfs[2]),
];

export const cartoonShows = [
  { name: 'Tom & Jerry', episodes: tomAndJerry },
  { name: 'Dragon Ball Z', episodes: dragonBallZ },
  { name: 'Pokémon Évolutions', episodes: pokemon },
  { name: 'Les Schtroumpfs', episodes: smurfs },
  { name: 'Hé Arnold', episodes: heyArnold },
  { name: 'Inspecteur Gadget', episodes: inspectorGadget },
  { name: 'Totally Spies', episodes: cartoons11 },
].map((show) => ({ ...show, episodes: show.episodes.map(cartoon) }));

export const cartoonEpisodes = [...tomAndJerry, ...cartoons16.slice(0, 6)].map(cartoon);

export const comedyPicks = [1, 3, 11, 12, 13, 17, 21, 29, 33, 37, 42, 50].map(comedyVideo).map(comedy);

export const cookingSpotlight = {
  featured: cooking(cookingVideo(20)),
  items: [4, 16, 25, 39].map(cookingVideo).map(cooking),
};

export const cookingMore = [9, 13, 17, 30, 35, 37, 40, 41].map(cookingVideo).map(cooking);

export const fashionPicks = [
  ...[2, 3, 10, 13, 19].map(fashion24Video),
  ...[4, 8, 19, 24].map(fashion26Video),
].map(fashion);
