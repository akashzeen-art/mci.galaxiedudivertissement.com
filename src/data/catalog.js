export const CATEGORIES = {
  cartoon: { id: 'cartoon', page: 'Dessin Animé', label: 'Dessins animés', accent: '#7c3aed', accentLight: '#a855f7' },
  comedy: { id: 'comedy', page: 'Comédie', label: 'Comédie', accent: '#ec4899', accentLight: '#f472b6' },
  cooking: { id: 'cooking', page: 'Cuisine', label: 'Gastronomie', accent: '#f59e0b', accentLight: '#fbbf24' },
  fashion: { id: 'fashion', page: 'Mode', label: 'Mode & Style', accent: '#3b82f6', accentLight: '#60a5fa' },
};

// Dessins animés
export const CARTOON_BASE = 'https://api.ameora.fun/content/GalaxiWebsite/CARTOONS-32';
export const VAS_CARTOON_BASE = 'https://api.ameora.fun/content/vas_cartoon';
export const dragonBallZ = [
  { id: 'd1', title: 'Dragon Ball Z – Méga Compilation Saga Boo', thumbnail: `${VAS_CARTOON_BASE}/thumnbnail/DRAGONBALLZ/1.png`, videoUrl: `${VAS_CARTOON_BASE}/video/dragonballZ/DragonBallZ-MégaCompilation-RésuméCompletSagaBoo.mp4` },
  { id: 'd2', title: 'Méga Compilation – Résumé Comp', thumbnail: `${VAS_CARTOON_BASE}/thumnbnail/DRAGONBALLZ/2.png`, videoUrl: `${VAS_CARTOON_BASE}/video/dragonballZ/MégaCompilation-RésuméComp.mp4` },
  { id: 'd3', title: 'Méga Compilation – Résumé Complet', thumbnail: `${VAS_CARTOON_BASE}/thumnbnail/DRAGONBALLZ/3.png`, videoUrl: `${VAS_CARTOON_BASE}/video/dragonballZ/MégaCompilation-RésuméComplet.mp4` },
  { id: 'd4', title: 'Méga Compilation – Résumé Complet Saga', thumbnail: `${VAS_CARTOON_BASE}/thumnbnail/DRAGONBALLZ/4.png`, videoUrl: `${VAS_CARTOON_BASE}/video/dragonballZ/MégaCompilation-RésuméCompletSaga.mp4` },
  { id: 'd5', title: 'Résumé Complet Saga Babidi', thumbnail: `${VAS_CARTOON_BASE}/thumnbnail/DRAGONBALLZ/5.png`, videoUrl: `${VAS_CARTOON_BASE}/video/dragonballZ/RésuméCompletSagaBabidi.mp4` },
];
export const heyArnold = [
  { id: 'h1', title: 'Hé Arnold – Canicule !', thumbnail: `${VAS_CARTOON_BASE}/thumnbnail/HEYARNOLD/1.png`, videoUrl: `${VAS_CARTOON_BASE}/video/HEYARNOLD/HéArnold_Canicule!.mp4` },
  { id: 'h2', title: 'Hé Arnold – La soirée de filles', thumbnail: `${VAS_CARTOON_BASE}/thumnbnail/HEYARNOLD/2.png`, videoUrl: `${VAS_CARTOON_BASE}/video/HEYARNOLD/HéArnold_Lasoiréedefilles.mp4` },
  { id: 'h3', title: 'Hé Arnold – Le samedi parfait', thumbnail: `${VAS_CARTOON_BASE}/thumnbnail/HEYARNOLD/3.png`, videoUrl: `${VAS_CARTOON_BASE}/video/HEYARNOLD/HéArnold_Lesamediparfait.mp4` },
  { id: 'h4', title: 'Hé Arnold – Le petit carnet rose', thumbnail: `${VAS_CARTOON_BASE}/thumnbnail/HEYARNOLD/4.png`, videoUrl: `${VAS_CARTOON_BASE}/video/HEYARNOLD/HéArnoldLepetitcarnetrose.mp4` },
  { id: 'h5', title: 'Hé Arnold – Monsieur Smith', thumbnail: `${VAS_CARTOON_BASE}/thumnbnail/HEYARNOLD/5.png`, videoUrl: `${VAS_CARTOON_BASE}/video/HEYARNOLD/HéArnoldMonsieurSmith.mp4` },
];
export const inspectorGadget = [
  { id: 'g1', title: 'Conférence de presse de Gadget', thumbnail: `${VAS_CARTOON_BASE}/thumnbnail/INSPECTORGADGET/1.png`, videoUrl: `${VAS_CARTOON_BASE}/video/inspectorgadget/ConférencedepressedeGadget.mp4` },
  { id: 'g2', title: 'Gadget et le Lama', thumbnail: `${VAS_CARTOON_BASE}/thumnbnail/INSPECTORGADGET/2.png`, videoUrl: `${VAS_CARTOON_BASE}/video/inspectorgadget/GadgetetleLama.mp4` },
  { id: 'g3', title: 'Gadget et le Nain', thumbnail: `${VAS_CARTOON_BASE}/thumnbnail/INSPECTORGADGET/3.png`, videoUrl: `${VAS_CARTOON_BASE}/video/inspectorgadget/GadgetetleNain.mp4` },
  { id: 'g4', title: 'Gadget le somnambule', thumbnail: `${VAS_CARTOON_BASE}/thumnbnail/INSPECTORGADGET/4.png`, videoUrl: `${VAS_CARTOON_BASE}/video/inspectorgadget/Gadgetlesomnambule.mp4` },
  { id: 'g5', title: 'Gadget magique', thumbnail: `${VAS_CARTOON_BASE}/thumnbnail/INSPECTORGADGET/5.png`, videoUrl: `${VAS_CARTOON_BASE}/video/inspectorgadget/Gadgetmagique.mp4` },
];
export const pokemon = [
  { id: 'p1', title: 'Le Maître Pokémon Évolutions – Épisode 1', thumbnail: `${VAS_CARTOON_BASE}/thumnbnail/POKEMON/1.png`, videoUrl: `${VAS_CARTOON_BASE}/video/POKEMON/LeMaîtrePokémonÉvolutions_Épisode1.mp4` },
  { id: 'p2', title: 'Pokémon Évolutions – Bande-annonce 2', thumbnail: `${VAS_CARTOON_BASE}/thumnbnail/POKEMON/2.png`, videoUrl: `${VAS_CARTOON_BASE}/video/POKEMON/PokémonÉvolutions_Bande-annonce2.mp4` },
  { id: 'p3', title: "L'éclipse – Pokémon Évolutions – Épisode 2", thumbnail: `${VAS_CARTOON_BASE}/thumnbnail/POKEMON/3.png`, videoUrl: `${VAS_CARTOON_BASE}/video/POKEMON/L'éclipse_PokémonÉvolutions–Épisode2.mp4` },
  { id: 'p4', title: 'Le visionnaire – Pokémon Évolutions – Épisode 3', thumbnail: `${VAS_CARTOON_BASE}/thumnbnail/POKEMON/4.png`, videoUrl: `${VAS_CARTOON_BASE}/video/POKEMON/Levisionnaire_PokémonÉvolutions_Épisode3.mp4` },
  { id: 'p5', title: 'Le plan – Pokémon Évolutions – Épisode 4', thumbnail: `${VAS_CARTOON_BASE}/thumnbnail/POKEMON/5.png`, videoUrl: `${VAS_CARTOON_BASE}/video/POKEMON/Leplan_PokémonÉvolutions_Épisode4.mp4` },
];
export const smurfs = [
  { id: 's1', title: 'Le Pouvoir du Sourire ! Les Schtroumpfs', thumbnail: `${VAS_CARTOON_BASE}/thumnbnail/THESMURFS/1.png`, videoUrl: `${VAS_CARTOON_BASE}/video/thesmurfs/ePouvoirduSourire!LesSchtroumpfs.mp4` },
  { id: 's2', title: 'Le Problème du Schtroumpf Paresseux !', thumbnail: `${VAS_CARTOON_BASE}/thumnbnail/THESMURFS/2.png`, videoUrl: `${VAS_CARTOON_BASE}/video/thesmurfs/LeProblèmeduSchtroumpfParesseux!.mp4` },
  { id: 's3', title: 'Le Retour des Schtroumpfs ! – Clip Exclusif', thumbnail: `${VAS_CARTOON_BASE}/thumnbnail/THESMURFS/3.png`, videoUrl: `${VAS_CARTOON_BASE}/video/thesmurfs/LeRetourdesSchtroumpfs!_CLIPEXCLUSIF!.mp4` },
  { id: 's4', title: 'Les deux bêtas font la paire – Les Schtroumpfs 3D', thumbnail: `${VAS_CARTOON_BASE}/thumnbnail/THESMURFS/4.png`, videoUrl: `${VAS_CARTOON_BASE}/video/thesmurfs/LesdeuxbêtasfontlapaireLesSchtroumpfs3D.mp4` },
  { id: 's5', title: 'Qui a cassé le télescope du Grand Schtroumpf ?', thumbnail: `${VAS_CARTOON_BASE}/thumnbnail/THESMURFS/5.png`, videoUrl: `${VAS_CARTOON_BASE}/video/thesmurfs/QuiacasséletélescopeduGrandSchtroumpf-LesSchtroumpfs.mp4` },
  { id: 's6', title: 'Un Anniversaire EXPLOSIF !', thumbnail: `${VAS_CARTOON_BASE}/thumnbnail/THESMURFS/6..png`, videoUrl: `${VAS_CARTOON_BASE}/video/thesmurfs/UnAnniversaireEXPLOSIF!.mp4` },
];
export const tomAndJerry = [
  { id: 't1', title: 'Folie martienne', thumbnail: `${VAS_CARTOON_BASE}/thumnbnail/TOMANDJERRY/1.png`, videoUrl: `${VAS_CARTOON_BASE}/video/tomandjerryfr/Foliemartienne.mp4` },
  { id: 't2', title: 'Le chat & la souris détectives', thumbnail: `${VAS_CARTOON_BASE}/thumnbnail/TOMANDJERRY/2.png`, videoUrl: `${VAS_CARTOON_BASE}/video/tomandjerryfr/Lechat&lasourisdétectives.mp4` },
  { id: 't3', title: 'Les GRANDES aventures fantasy de Tom et Jerry', thumbnail: `${VAS_CARTOON_BASE}/thumnbnail/TOMANDJERRY/3.png`, videoUrl: `${VAS_CARTOON_BASE}/video/tomandjerryfr/LesGRANDESaventuresfantasydeTometJerry.mp4` },
  { id: 't4', title: 'Tom & Jerry deviennent des RATS DE BIBLIOTHÈQUE', thumbnail: `${VAS_CARTOON_BASE}/thumnbnail/TOMANDJERRY/4.png`, videoUrl: `${VAS_CARTOON_BASE}/video/tomandjerryfr/Tom&JerrydeviennentdesRATSDEBIBLIOTHÈQUE.mp4` },
  { id: 't5', title: 'Un Jerry IMMENSE vs un Tom MINUSCULE', thumbnail: `${VAS_CARTOON_BASE}/thumnbnail/TOMANDJERRY/5.png`, videoUrl: `${VAS_CARTOON_BASE}/video/tomandjerryfr/UnJerryIMMENSEvsunTomMINUSCULE.mp4` },
];

export const cartoons11 = Array.from({ length: 11 }, (_, i) => ({
  id: i + 1, thumbnail: `${CARTOON_BASE}/CARTOONS-11/i${i + 1}.jpg`, videoUrl: `${CARTOON_BASE}/CARTOONS-11/v${i + 1}.mp4`,
  title: ['Silicon Valley Girls','A Thing For Musicians','Mandy Book','Baddies On A Blimp','Danger TV','Une Vie De Chat','Jeux Vidéo Zéro','Super Méga Danse Show','Mariage Et Sabotages','Les Délices De Grand-Mère','Célébrité Volée'][i],
}));
export const cartoons16 = Array.from({ length: 16 }, (_, i) => ({
  id: i + 12, thumbnail: `${CARTOON_BASE}/CARTOONS-16/i${i + 1}.jpg`, videoUrl: `${CARTOON_BASE}/CARTOONS-16/v${i + 1}.mp4`,
  title: ['Chap Kollé','Dansez Petits Rats','Deux Mirette','Faux Pas Sur La Place Rouge','Jean Patonaute','La Griffe Du Caire','La Trahison Du Bortsch','Le Monstre De La Tamise',"L'Invasion Des Potiches Tournantes",'Le Sphinx Se Démonte','Paris Photo Express',"Pour L'Amour Du Sphinx",'Rap À Plondres','Rome Mise À Neuf','Taxi Iii Yi Iii Ha','Un Gorille À New York'][i],
}));
export const cartoons5 = Array.from({ length: 5 }, (_, i) => ({
  id: i + 28, thumbnail: `${CARTOON_BASE}/CARTOONS-5/i${i + 1}.jpg`, videoUrl: `${CARTOON_BASE}/CARTOONS-5/v${i + 1}.mp4`,
  title: ['La Chute','La Loi De La Jungle','Miss À Tous Les Prix','Such Is Taken','Les Espionnes De La Silicon Valley'][i],
}));

// Comédie
export const COMEDY_BASE = 'https://api.ameora.fun/content/GalaxiWebsite/COMEDY-50';
export const COMEDY_TITLES = [
  "Le running - Ce que tu penses quand..","Quand ton gosse n'est pas rentable","Bande dessinée","Blague Miroir","Bureau des Plaintes, Harry Potter","Bureau des Plaintes - Spécial Halloween","COVID - Les masques","COVID - Premier BBQ","Effet Papillon","Emoji","Honnête - L'entretien d'embauche","Jean Michel Bruitage","Jeff Panacloc et Jean-Marc","L'enfance","L'homme moderne et les inventions","La vérité","Le rap de Gaspard et Balthazar","Le Bon L'Aveugle et le Racisme","Le Bon Prénom","Le don du Lang Urbain","Le Roi Lion - L'amour brille sous les étoiles","Les Candidats les Plus WTF","Le secret de la réussite à l'école","Les gens avec qui ne pas...","Les hommes","Les mémés s'éclatent","Les phrases à ne pas dire à ton ado","Les phrases honnêtes à Noël","Les Réponses de Ouf des Enfants","Le Surveillant du Bac","Ma chanteuse préférée","Massothérapeute","Princesse VS Princesse","Pub Ok Google","Quand ils font une connerie","Quand le coronavirus a ruiné ta vie","Quand on est Mario et Luigi","Quand on fait du camping","Quand t'as trop peur du coronavirus","Salle d'attente","Se remettre avec son ex","Serveur VS Client","Si Doctissimo était un vrai docteur","Si on traitait nos hommes comme des vêtements","Sketch Point de presse sur la COVID-19","Ski 1800","Top 10 des trucs qui n'arrivent qu'à la campagne","Top 20 des pires voisins pendant un spectacle","Vérification de Sécurité","Vieux Rap VS Nouveau Rap",
];
export const comedyVideo = (n) => ({ id: n, thumbnail: `${COMEDY_BASE}/i${n}.jpg`, title: COMEDY_TITLES[n - 1], videoUrl: `${COMEDY_BASE}/v${n}.mp4` });

// Gastronomie
export const COOKING_BASE = 'https://api.ameora.fun/content/GalaxiWebsite/COOKING';
export const COOKING_TITLES = [
  "Basque aux œufs","Biscuit roulé au chocolat","Boulettes de viande de porc","Burger au barbecue","Burger de boeuf et fraises","Carbonnade flamande","Cotoletta milanaise","Côte de boeuf","Curry de la Réunion","Curry de poulet aux champignons","Dinde farcie","Double burger","Homard grillé","Kumpir turque","Lamb Kebab","Lasagna Bolognese","Mafé au poulet","Mafé cuisine","Maison Saumon","Moroccan Tagine","Nouilles au boeuf","Nouilles de poulet","Pâtes & champignons","Pâtisserie à la viande hachée","Pizza végétarienne","Plat d'aubergine","Plat de Valence","Poisson au curry rouge","Pommes de terre au lait","Poulet BBQ portugais","Quiche de thon","Ragoût de porc","Recette du Ramadan Tunisien","Recette japonaise","Sandwich au banh mi","Sea Spaghetti","Tacos au poulet","Tartelettes au thon","Tartiflette","Tomates farcies","Truffade Cuisine",
];
export const cookingVideo = (n) => ({ id: n, thumbnail: `${COOKING_BASE}/i${n}.jpg`, title: COOKING_TITLES[n - 1], videoUrl: `${COOKING_BASE}/v${n}.mp4` });

// Mode & Style
export const FASHION_24_BASE = 'https://api.ameora.fun/content/GalaxiWebsite/FASHION-24';
export const FASHION_26_BASE = 'https://api.ameora.fun/content/GalaxiWebsite/FASHION-26';

export const FASHION_24_TITLES = [
  "10 idées de coiffures plaquées sur un carré mi-long lisse","4 Tuto Turban Facile À Faire","Acne Routine","Anti-Imperfections (Routine & Conseils)","Cheveux longs (Routine)","Chignon base traie au milieu [Tuto Coiffure]","Cocooning de routine","Comment faire une perruque facile & rapide","Contouring rapide et pas cher","Easy Eye Liner pour les nuls","Éliminez correctement les faux ongles","Épiler ses sourcils","Halloween Sugar Skull - Tuto Maquillage","Hijab simple à réaliser (5 méthodes)","Je coupe et refais mes cheveux SEUL","Je me maquille UNIQUEMENT avec la trousse de ma sœur","Je me tatoue les lèvres (Test du Rouge)","Jolie compilation de maquillage pour les yeux","La meilleure astuce pour un eyeliner","Lápiz Labial Tutorial Compilación","Le meilleur maquillage cheveux bouclés","Le meilleur masque - DIY","Les formes d'ongles sur capsules faux ongles","Les meilleurs tutoriels de maquillage",
];
export const FASHION_26_TITLES = [
  "Lisser cheveux avec un lisseur fer","Lisser ses Cheveux sans Chaleur","Lisse toiles cheveux sans","Maquillage Melanin - Transformation","Maquillage nude pour peau foncée","Maquillage pour les yeux pailleté violet","Maquillage quotidien simple","Maquillage simple","Maquillage tutorial de Kylie Jenner","Maquiller ses sourcils","Masque détox (tous types de peau)","Masque noir anti points noirs","Meilleurs tutoriels de maquillage","Mettre des faux cils [7 méthodes]","Morning Routine Printemps","Orange Makeup (Dégradé pour les débutants)","Poser des faux cils pour les débutants","Routine Soins Corps - Printemps Été","Smokey eyes makeup (for beginner)","Solide anti-frisottis - DIY Shampoing","Teint Unifié - Cacher ses imperfections","Test Bigoudis Magique (Boucles sans chaleur)","Tuto French Manucure simple (4 techniques)","Tuto maquillage pour débutant (NAKED)","Un bronzage parfait, naturel et lumineux","Vernis semi-permanent",
];

export const fashion24Video = (n) => ({ id: `a${n}`, thumbnail: `${FASHION_24_BASE}/i${n}.jpg`, title: FASHION_24_TITLES[n - 1], videoUrl: `${FASHION_24_BASE}/v${n}.mp4` });
export const fashion26Video = (n) => ({ id: `b${n}`, thumbnail: `${FASHION_26_BASE}/i${n}.jpg`, title: FASHION_26_TITLES[n - 1], videoUrl: `${FASHION_26_BASE}/v${n}.mp4` });
