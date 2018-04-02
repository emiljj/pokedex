export const type = {
  name: 'poison',
  generation: {
    url: 'https://pokeapi.co/api/v2/generation/1/',
    name: 'generation-i',
  },
  damage_relations: {
    half_damage_from: [
      {
        url: 'https://pokeapi.co/api/v2/type/2/',
        name: 'fighting',
      },
      {
        url: 'https://pokeapi.co/api/v2/type/4/',
        name: 'poison',
      },
      {
        url: 'https://pokeapi.co/api/v2/type/7/',
        name: 'bug',
      },
      {
        url: 'https://pokeapi.co/api/v2/type/12/',
        name: 'grass',
      },
      {
        url: 'https://pokeapi.co/api/v2/type/18/',
        name: 'fairy',
      },
    ],
    no_damage_from: [],
    half_damage_to: [
      {
        url: 'https://pokeapi.co/api/v2/type/4/',
        name: 'poison',
      },
      {
        url: 'https://pokeapi.co/api/v2/type/5/',
        name: 'ground',
      },
      {
        url: 'https://pokeapi.co/api/v2/type/6/',
        name: 'rock',
      },
      {
        url: 'https://pokeapi.co/api/v2/type/8/',
        name: 'ghost',
      },
    ],
    double_damage_from: [
      {
        url: 'https://pokeapi.co/api/v2/type/5/',
        name: 'ground',
      },
      {
        url: 'https://pokeapi.co/api/v2/type/14/',
        name: 'psychic',
      },
    ],
    no_damage_to: [
      {
        url: 'https://pokeapi.co/api/v2/type/9/',
        name: 'steel',
      },
    ],
    double_damage_to: [
      {
        url: 'https://pokeapi.co/api/v2/type/12/',
        name: 'grass',
      },
      {
        url: 'https://pokeapi.co/api/v2/type/18/',
        name: 'fairy',
      },
    ],
  },
  game_indices: [
    {
      generation: {
        url: 'https://pokeapi.co/api/v2/generation/1/',
        name: 'generation-i',
      },
      game_index: 3,
    },
    {
      generation: {
        url: 'https://pokeapi.co/api/v2/generation/2/',
        name: 'generation-ii',
      },
      game_index: 3,
    },
    {
      generation: {
        url: 'https://pokeapi.co/api/v2/generation/3/',
        name: 'generation-iii',
      },
      game_index: 3,
    },
    {
      generation: {
        url: 'https://pokeapi.co/api/v2/generation/4/',
        name: 'generation-iv',
      },
      game_index: 3,
    },
    {
      generation: {
        url: 'https://pokeapi.co/api/v2/generation/5/',
        name: 'generation-v',
      },
      game_index: 3,
    },
    {
      generation: {
        url: 'https://pokeapi.co/api/v2/generation/6/',
        name: 'generation-vi',
      },
      game_index: 3,
    },
  ],
  move_damage_class: {
    url: 'https://pokeapi.co/api/v2/move-damage-class/2/',
    name: 'physical',
  },
  moves: [
    {
      url: 'https://pokeapi.co/api/v2/move/40/',
      name: 'poison-sting',
    },
    {
      url: 'https://pokeapi.co/api/v2/move/51/',
      name: 'acid',
    },
    {
      url: 'https://pokeapi.co/api/v2/move/77/',
      name: 'poison-powder',
    },
    {
      url: 'https://pokeapi.co/api/v2/move/92/',
      name: 'toxic',
    },
    {
      url: 'https://pokeapi.co/api/v2/move/123/',
      name: 'smog',
    },
    {
      url: 'https://pokeapi.co/api/v2/move/124/',
      name: 'sludge',
    },
    {
      url: 'https://pokeapi.co/api/v2/move/139/',
      name: 'poison-gas',
    },
    {
      url: 'https://pokeapi.co/api/v2/move/151/',
      name: 'acid-armor',
    },
    {
      url: 'https://pokeapi.co/api/v2/move/188/',
      name: 'sludge-bomb',
    },
    {
      url: 'https://pokeapi.co/api/v2/move/305/',
      name: 'poison-fang',
    },
    {
      url: 'https://pokeapi.co/api/v2/move/342/',
      name: 'poison-tail',
    },
    {
      url: 'https://pokeapi.co/api/v2/move/380/',
      name: 'gastro-acid',
    },
    {
      url: 'https://pokeapi.co/api/v2/move/390/',
      name: 'toxic-spikes',
    },
    {
      url: 'https://pokeapi.co/api/v2/move/398/',
      name: 'poison-jab',
    },
    {
      url: 'https://pokeapi.co/api/v2/move/440/',
      name: 'cross-poison',
    },
    {
      url: 'https://pokeapi.co/api/v2/move/441/',
      name: 'gunk-shot',
    },
    {
      url: 'https://pokeapi.co/api/v2/move/474/',
      name: 'venoshock',
    },
    {
      url: 'https://pokeapi.co/api/v2/move/482/',
      name: 'sludge-wave',
    },
    {
      url: 'https://pokeapi.co/api/v2/move/489/',
      name: 'coil',
    },
    {
      url: 'https://pokeapi.co/api/v2/move/491/',
      name: 'acid-spray',
    },
    {
      url: 'https://pokeapi.co/api/v2/move/499/',
      name: 'clear-smog',
    },
    {
      url: 'https://pokeapi.co/api/v2/move/562/',
      name: 'belch',
    },
    {
      url: 'https://pokeapi.co/api/v2/move/599/',
      name: 'venom-drench',
    },
    {
      url: 'https://pokeapi.co/api/v2/move/628/',
      name: 'acid-downpour--physical',
    },
    {
      url: 'https://pokeapi.co/api/v2/move/629/',
      name: 'acid-downpour--special',
    },
    {
      url: 'https://pokeapi.co/api/v2/move/661/',
      name: 'baneful-bunker',
    },
    {
      url: 'https://pokeapi.co/api/v2/move/672/',
      name: 'toxic-thread',
    },
    {
      url: 'https://pokeapi.co/api/v2/move/685/',
      name: 'purify',
    },
  ],
  pokemon: [
    {
      slot: 2,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/1/',
        name: 'bulbasaur',
      },
    },
    {
      slot: 2,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/2/',
        name: 'ivysaur',
      },
    },
    {
      slot: 2,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/3/',
        name: 'venusaur',
      },
    },
    {
      slot: 2,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/13/',
        name: 'weedle',
      },
    },
    {
      slot: 2,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/14/',
        name: 'kakuna',
      },
    },
    {
      slot: 2,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/15/',
        name: 'beedrill',
      },
    },
    {
      slot: 1,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/23/',
        name: 'ekans',
      },
    },
    {
      slot: 1,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/24/',
        name: 'arbok',
      },
    },
    {
      slot: 1,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/29/',
        name: 'nidoran-f',
      },
    },
    {
      slot: 1,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/30/',
        name: 'nidorina',
      },
    },
    {
      slot: 1,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/31/',
        name: 'nidoqueen',
      },
    },
    {
      slot: 1,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/32/',
        name: 'nidoran-m',
      },
    },
    {
      slot: 1,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/33/',
        name: 'nidorino',
      },
    },
    {
      slot: 1,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/34/',
        name: 'nidoking',
      },
    },
    {
      slot: 1,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/41/',
        name: 'zubat',
      },
    },
    {
      slot: 1,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/42/',
        name: 'golbat',
      },
    },
    {
      slot: 2,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/43/',
        name: 'oddish',
      },
    },
    {
      slot: 2,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/44/',
        name: 'gloom',
      },
    },
    {
      slot: 2,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/45/',
        name: 'vileplume',
      },
    },
    {
      slot: 2,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/48/',
        name: 'venonat',
      },
    },
    {
      slot: 2,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/49/',
        name: 'venomoth',
      },
    },
    {
      slot: 2,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/69/',
        name: 'bellsprout',
      },
    },
    {
      slot: 2,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/70/',
        name: 'weepinbell',
      },
    },
    {
      slot: 2,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/71/',
        name: 'victreebel',
      },
    },
    {
      slot: 2,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/72/',
        name: 'tentacool',
      },
    },
    {
      slot: 2,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/73/',
        name: 'tentacruel',
      },
    },
    {
      slot: 1,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/88/',
        name: 'grimer',
      },
    },
    {
      slot: 1,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/89/',
        name: 'muk',
      },
    },
    {
      slot: 2,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/92/',
        name: 'gastly',
      },
    },
    {
      slot: 2,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/93/',
        name: 'haunter',
      },
    },
    {
      slot: 2,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/94/',
        name: 'gengar',
      },
    },
    {
      slot: 1,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/109/',
        name: 'koffing',
      },
    },
    {
      slot: 1,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/110/',
        name: 'weezing',
      },
    },
    {
      slot: 2,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/167/',
        name: 'spinarak',
      },
    },
    {
      slot: 2,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/168/',
        name: 'ariados',
      },
    },
    {
      slot: 1,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/169/',
        name: 'crobat',
      },
    },
    {
      slot: 2,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/211/',
        name: 'qwilfish',
      },
    },
    {
      slot: 2,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/269/',
        name: 'dustox',
      },
    },
    {
      slot: 2,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/315/',
        name: 'roselia',
      },
    },
    {
      slot: 1,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/316/',
        name: 'gulpin',
      },
    },
    {
      slot: 1,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/317/',
        name: 'swalot',
      },
    },
    {
      slot: 1,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/336/',
        name: 'seviper',
      },
    },
    {
      slot: 2,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/406/',
        name: 'budew',
      },
    },
    {
      slot: 2,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/407/',
        name: 'roserade',
      },
    },
    {
      slot: 1,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/434/',
        name: 'stunky',
      },
    },
    {
      slot: 1,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/435/',
        name: 'skuntank',
      },
    },
    {
      slot: 1,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/451/',
        name: 'skorupi',
      },
    },
    {
      slot: 1,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/452/',
        name: 'drapion',
      },
    },
    {
      slot: 1,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/453/',
        name: 'croagunk',
      },
    },
    {
      slot: 1,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/454/',
        name: 'toxicroak',
      },
    },
    {
      slot: 2,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/543/',
        name: 'venipede',
      },
    },
    {
      slot: 2,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/544/',
        name: 'whirlipede',
      },
    },
    {
      slot: 2,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/545/',
        name: 'scolipede',
      },
    },
    {
      slot: 1,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/568/',
        name: 'trubbish',
      },
    },
    {
      slot: 1,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/569/',
        name: 'garbodor',
      },
    },
    {
      slot: 2,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/590/',
        name: 'foongus',
      },
    },
    {
      slot: 2,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/591/',
        name: 'amoonguss',
      },
    },
    {
      slot: 1,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/690/',
        name: 'skrelp',
      },
    },
    {
      slot: 1,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/691/',
        name: 'dragalge',
      },
    },
    {
      slot: 1,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/747/',
        name: 'mareanie',
      },
    },
    {
      slot: 1,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/748/',
        name: 'toxapex',
      },
    },
    {
      slot: 1,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/757/',
        name: 'salandit',
      },
    },
    {
      slot: 1,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/758/',
        name: 'salazzle',
      },
    },
    {
      slot: 2,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/793/',
        name: 'nihilego',
      },
    },
    {
      slot: 2,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/10033/',
        name: 'venusaur-mega',
      },
    },
    {
      slot: 2,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/10038/',
        name: 'gengar-mega',
      },
    },
    {
      slot: 2,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/10090/',
        name: 'beedrill-mega',
      },
    },
    {
      slot: 1,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/10112/',
        name: 'grimer-alola',
      },
    },
    {
      slot: 1,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/10113/',
        name: 'muk-alola',
      },
    },
    {
      slot: 1,
      pokemon: {
        url: 'https://pokeapi.co/api/v2/pokemon/10129/',
        name: 'salazzle-totem',
      },
    },
  ],
  id: 4,
  names: [
    {
      name: 'どく',
      language: {
        url: 'https://pokeapi.co/api/v2/language/1/',
        name: 'ja-Hrkt',
      },
    },
    {
      name: '독',
      language: {
        url: 'https://pokeapi.co/api/v2/language/3/',
        name: 'ko',
      },
    },
    {
      name: 'Poison',
      language: {
        url: 'https://pokeapi.co/api/v2/language/5/',
        name: 'fr',
      },
    },
    {
      name: 'Gift',
      language: {
        url: 'https://pokeapi.co/api/v2/language/6/',
        name: 'de',
      },
    },
    {
      name: 'Veneno',
      language: {
        url: 'https://pokeapi.co/api/v2/language/7/',
        name: 'es',
      },
    },
    {
      name: 'Veleno',
      language: {
        url: 'https://pokeapi.co/api/v2/language/8/',
        name: 'it',
      },
    },
    {
      name: 'Poison',
      language: {
        url: 'https://pokeapi.co/api/v2/language/9/',
        name: 'en',
      },
    },
  ],
};
