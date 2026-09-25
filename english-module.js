(() => {
  const STORAGE_KEY = "raghav-learning-english-progress-v1";
  const PRACTICE_LENGTH = 8;
  const QUIZ_LENGTH = 10;

  function makeWords(pattern, entries) {
    return entries.map(([word, emoji, sentence]) => ({
      id: `${pattern}:${word}`,
      pattern,
      word,
      emoji,
      sentence
    }));
  }

  const soundGroups = [
    {
      id: "ai",
      topic: "vowels",
      title: "Long A",
      sound: "long a",
      color: "#725de8",
      words: makeWords("ai", [
        ["air", "🌬️", "Fresh air fills my lungs."],
        ["hair", "💇", "Mira brushes her hair."],
        ["pair", "👟", "I have a pair of shoes."],
        ["sail", "⛵", "We sail the blue boat."],
        ["nail", "🔨", "Dad taps the nail."],
        ["pail", "🪣", "Fill the pail with sand."],
        ["tail", "🐕", "The dog wags its tail."],
        ["rain", "🌧️", "We jump in the rain."],
        ["pain", "🤕", "The ice helps my pain."],
        ["paint", "🎨", "I paint a bright sun."],
        ["saint", "😇", "The kind saint helped everyone."],
        ["faint", "😵", "I felt faint after the race."]
      ])
    },
    {
      id: "ay",
      topic: "vowels",
      title: "Long A",
      sound: "long a",
      color: "#ee5675",
      words: makeWords("ay", [
        ["bay", "🏖️", "The boat rests in the bay."],
        ["pay", "💵", "We pay for the new book."],
        ["ray", "☀️", "A ray of sun came in."],
        ["way", "🛤️", "This is the way home."],
        ["hay", "🌾", "The horse eats dry hay."],
        ["lay", "🥚", "The hen will lay an egg."],
        ["say", "💬", "Please say your name."]
      ])
    },
    {
      id: "ie",
      topic: "vowels",
      title: "Long I",
      sound: "long i",
      color: "#d36b27",
      words: makeWords("ie", [
        ["lie", "🤥", "It is not kind to lie."],
        ["pie", "🥧", "The warm pie smells good."],
        ["tie", "👔", "Dad wears a blue tie."]
      ])
    },
    {
      id: "oa",
      topic: "vowels",
      title: "Long O",
      sound: "long o",
      color: "#138d79",
      words: makeWords("oa", [
        ["boat", "⛵", "The boat floats on the lake."],
        ["coat", "🧥", "Wear your coat outside."],
        ["goat", "🐐", "The goat eats green leaves."],
        ["road", "🛣️", "The long road is quiet."],
        ["toad", "🐸", "A toad sat by the pond."],
        ["load", "📦", "The truck carries a load."],
        ["goal", "🥅", "Raghav scored a goal."],
        ["coal", "⚫", "The coal is black."],
        ["oak", "🌳", "The oak is a tall tree."],
        ["oats", "🥣", "I eat oats for breakfast."],
        ["soak", "🛁", "Soak the shirt in water."],
        ["roam", "🗺️", "The sheep roam in the field."],
        ["foal", "🐴", "The little foal can run."],
        ["loaf", "🍞", "We bought a loaf of bread."],
        ["soap", "🧼", "Wash your hands with soap."]
      ])
    },
    {
      id: "ow",
      topic: "vowels",
      title: "Long O",
      sound: "long o",
      color: "#3b82c4",
      words: makeWords("ow", [
        ["bow", "🎀", "The red bow is pretty."],
        ["row", "🚣", "We row the little boat."],
        ["tow", "🛻", "The truck will tow the car."],
        ["low", "📉", "The kite is flying low."],
        ["mow", "🚜", "We mow the green grass."],
        ["sow", "🌱", "We sow seeds in the soil."],
        ["bowl", "🥣", "Keep the bowl on the table."]
      ])
    },
    {
      id: "ew",
      topic: "vowels",
      title: "Long U",
      sound: "long u",
      color: "#5662c7",
      words: makeWords("ew", [
        ["dew", "💧", "Morning dew shines on the grass."],
        ["few", "3️⃣", "A few birds sat nearby."],
        ["new", "✨", "I have a new pencil."]
      ])
    },
    {
      id: "ee",
      topic: "vowels",
      title: "Long E",
      sound: "long e",
      color: "#15966f",
      words: makeWords("ee", [
        ["bee", "🐝", "I can see a bee."],
        ["see", "👀", "I can see the moon."],
        ["fee", "🎟️", "We paid the entry fee."],
        ["meet", "🤝", "I will meet my friend."],
        ["feet", "🦶", "My feet are in the sand."],
        ["feed", "🥄", "Please feed the little bird."],
        ["seed", "🌱", "Plant the seed in soil."],
        ["need", "🙋", "I need a little help."],
        ["eel", "🐟", "The eel swims in the sea."],
        ["feel", "❤️", "I feel happy today."],
        ["heel", "🦶", "My heel is at the back of my foot."],
        ["peel", "🍌", "Peel the yellow banana."],
        ["beep", "🚌", "The bus horn goes beep."],
        ["jeep", "🚙", "The red jeep climbs the hill."],
        ["seek", "🔎", "We seek the hidden toy."]
      ])
    },
    {
      id: "ea",
      topic: "vowels",
      title: "Long E",
      sound: "long e",
      color: "#d7546d",
      words: makeWords("ea", [
        ["eat", "🍽️", "We eat fruit every day."],
        ["sea", "🌊", "The blue sea is calm."],
        ["pea", "🫛", "A green pea is in the pod."],
        ["tea", "🍵", "The tea is warm."],
        ["read", "📖", "I read a book every day."],
        ["beak", "🐦", "The bird has a small beak."],
        ["teak", "🪵", "The table is made of teak."],
        ["weak", "🪫", "The weak battery needs charging."],
        ["team", "⚽", "Our team plays together."],
        ["meal", "🍲", "It is time for our meal."],
        ["neat", "✨", "My desk is clean and neat."]
      ])
    },
    {
      id: "oo-short",
      pattern: "oo",
      topic: "digraphs",
      title: "Short OO",
      sound: "the short sound in book",
      pickerLabel: "Short sound",
      sample: "book",
      tip: "Keep the sound short, like the oo you hear in book and foot.",
      color: "#e05d72",
      words: makeWords("oo", [
        ["book", "📕", "I read a good book."],
        ["cook", "🧑‍🍳", "The cook makes hot food."],
        ["hook", "🪝", "Hang the bag on the hook."],
        ["look", "👀", "Look at the moon."],
        ["nook", "📚", "Minu reads in a quiet nook."],
        ["wood", "🪵", "The chair is made of wood."],
        ["good", "👍", "This food tastes good."],
        ["hood", "🧥", "My jacket has a hood."],
        ["foot", "🦶", "My left foot is wet."],
        ["wool", "🧶", "The warm cap is made of wool."]
      ])
    },
    {
      id: "oo-long",
      pattern: "oo",
      topic: "digraphs",
      title: "Long OO",
      sound: "the long sound in moon",
      pickerLabel: "Long sound",
      sample: "moon",
      tip: "Stretch the sound, like the oo you hear in moon and food.",
      color: "#6559d9",
      words: makeWords("oo", [
        ["cool", "😎", "The water feels cool."],
        ["loop", "➰", "Tie the ribbon in a loop."],
        ["hoop", "⭕", "She spins a hoop."],
        ["food", "🍲", "Tom ate hot food."],
        ["roof", "🏠", "The cat sits on the roof."],
        ["room", "🛏️", "My room is neat."],
        ["zoom", "🏎️", "The red car can zoom."],
        ["root", "🌱", "The root grows under the soil."],
        ["shoot", "🏀", "Shoot the ball into the hoop."]
      ])
    },
    {
      id: "oi",
      topic: "digraphs",
      title: "OI Digraph",
      sound: "oy as in coin",
      sample: "coin",
      tip: "We usually find oi inside a word, like coin and point.",
      color: "#158d76",
      words: makeWords("oi", [
        ["oil", "🛢️", "Oil floats on water."],
        ["boil", "♨️", "Boil the water in a pot."],
        ["coil", "🌀", "The rope is in a coil."],
        ["soil", "🪴", "The seed grows in the soil."],
        ["toil", "💪", "We toil together to finish the job."],
        ["oink", "🐷", "The pig says oink."],
        ["coin", "🪙", "The boy can toss a coin."],
        ["join", "🧩", "Come and join our game."],
        ["point", "👉", "Point to the red star."]
      ])
    },
    {
      id: "oy",
      topic: "digraphs",
      title: "OY Digraph",
      sound: "oy as in boy",
      sample: "boy",
      tip: "We usually find oy at the end of a word, like boy and toy.",
      color: "#d67a24",
      words: makeWords("oy", [
        ["boy", "👦", "The boy can toss a coin."],
        ["toy", "🧸", "This is my favourite toy."],
        ["joy", "😊", "The surprise filled us with joy."],
        ["enjoy", "🎉", "We enjoy playing together."],
        ["convoy", "🚚", "A convoy of trucks drove past."]
      ])
    },
    {
      id: "ou",
      topic: "digraphs",
      title: "OU Digraph",
      sound: "ow as in out",
      sample: "out",
      tip: "Open your mouth for the /ow/ sound in out, loud, and mouth.",
      color: "#3786c8",
      words: makeWords("ou", [
        ["out", "🚪", "Please come out to play."],
        ["loud", "📢", "The drum makes a loud sound."],
        ["mouth", "👄", "Open your mouth wide."],
        ["sound", "🔊", "I heard a funny sound."],
        ["round", "⭕", "The coin is round."],
        ["pouch", "👝", "The coin is in the pouch."]
      ])
    },
    {
      id: "sh-start",
      pattern: "sh",
      topic: "sh-ph",
      title: "SH at the Start",
      sound: "sh as in ship",
      pickerLabel: "Beginning",
      sample: "ship",
      tip: "Put a finger near your lips and whisper shhh. Here, sh comes at the beginning of the word.",
      color: "#d95776",
      words: makeWords("sh", [
        ["shed", "🏚️", "The tools are in the shed."],
        ["ship", "🚢", "The ship sails on the sea."],
        ["shop", "🏪", "We walk to the toy shop."],
        ["shot", "🥅", "Raghav took a shot at the goal."],
        ["shut", "🚪", "Please shut the door."],
        ["shell", "🐚", "I found a shell on the beach."],
        ["shake", "🧃", "Shake the bottle gently."],
        ["shape", "🔺", "A star is a fun shape."],
        ["shade", "⛱️", "We sat in the shade."],
        ["shack", "🛖", "The small shack is near the field."],
        ["shore", "🏖️", "The boat came back to the shore."],
        ["short", "📏", "This pencil is short."],
        ["shock", "😲", "The loud bang gave me a shock."],
        ["shine", "✨", "The stars shine at night."]
      ])
    },
    {
      id: "sh-end",
      pattern: "sh",
      topic: "sh-ph",
      title: "SH at the End",
      sound: "sh as in fish",
      pickerLabel: "Ending",
      sample: "fish",
      tip: "Listen for shhh at the end. The letters s and h still work together to make one sound.",
      color: "#6559d9",
      words: makeWords("sh", [
        ["cash", "💵", "Dad paid with cash."],
        ["dash", "🏃", "I made a quick dash to the gate."],
        ["mash", "🥔", "Please mash the soft potato."],
        ["rash", "🩹", "The doctor checked the rash."],
        ["dish", "🍽️", "Put the fruit in the dish."],
        ["fish", "🐟", "The fish swims in the pond."],
        ["wish", "🌠", "Make a wish on your birthday."],
        ["rush", "⏰", "There is no need to rush."]
      ])
    },
    {
      id: "ph",
      topic: "sh-ph",
      title: "PH Digraph",
      sound: "f as in phone",
      pickerLabel: "Sounds like F",
      sample: "phone",
      tip: "The letters p and h team up to make the /f/ sound, just like the first sound in phone.",
      color: "#158d76",
      words: makeWords("ph", [
        ["phone", "📱", "The phone is on the table."],
        ["photo", "🖼️", "We took a family photo."],
        ["phonics", "🔤", "We learn phonics at school."],
        ["phase", "🌒", "The moon is in a new phase."],
        ["dolphin", "🐬", "The dolphin jumps over the waves."]
      ])
    },
    {
      id: "ack",
      topic: "ck",
      title: "CK Family",
      sound: "ack",
      color: "#7358d9",
      words: makeWords("ack", [
        ["back", "🔙", "Put the book back on the shelf."],
        ["pack", "🎒", "Pack your bag for school."],
        ["rack", "🗄️", "The shoes are on the rack."],
        ["sack", "🧸", "The sack is full of toys."]
      ])
    },
    {
      id: "eck",
      topic: "ck",
      title: "CK Family",
      sound: "eck",
      color: "#d95776",
      words: makeWords("eck", [
        ["deck", "🛳️", "The deck is wet."],
        ["neck", "🧣", "The scarf is around my neck."],
        ["peck", "🐦", "The hen will peck the grain."]
      ])
    },
    {
      id: "ick",
      topic: "ck",
      title: "CK Family",
      sound: "ick",
      color: "#267fb5",
      words: makeWords("ick", [
        ["kick", "⚽", "Kick the ball to me."],
        ["lick", "🍭", "Do not lick the spoon yet."],
        ["pick", "🏀", "Rick went to pick a ball."],
        ["sick", "🤒", "The sick child is resting."],
        ["tick", "✅", "Put a tick beside the answer."],
        ["wick", "🕯️", "The candle wick is short."]
      ])
    },
    {
      id: "ock",
      topic: "ck",
      title: "CK Family",
      sound: "ock",
      color: "#158d76",
      words: makeWords("ock", [
        ["cock", "🐓", "The cock crows at sunrise."],
        ["dock", "⚓", "The boat waits at the dock."],
        ["lock", "🔒", "She has to lock the door."],
        ["mock", "🎭", "It is unkind to mock a friend."],
        ["rock", "🪨", "The rock is beside the path."]
      ])
    },
    {
      id: "uck",
      topic: "ck",
      title: "CK Family",
      sound: "uck",
      color: "#c76826",
      words: makeWords("uck", [
        ["buck", "🦌", "A buck ran through the woods."],
        ["duck", "🦆", "I saw a duck in the pond."],
        ["luck", "🍀", "Good luck with your game."],
        ["suck", "🥤", "Use the straw to suck the juice."],
        ["tuck", "🛏️", "Tuck the blanket around me."]
      ])
    }
  ];

  const readingSentences = [
    { id: "vowels-1", category: "vowels", text: "Keep the bowl of seeds in the box.", targets: ["bowl", "seeds"], emoji: "🥣🌱" },
    { id: "vowels-2", category: "vowels", text: "I can see a bee.", targets: ["see", "bee"], emoji: "👀🐝" },
    { id: "vowels-3", category: "vowels", text: "The horn on the bus says ‘Beep, beep’.", targets: ["beep"], emoji: "🚌📣" },
    { id: "vowels-4", category: "vowels", text: "The peas are in a pod.", targets: ["peas"], emoji: "🫛" },
    { id: "vowels-5", category: "vowels", text: "It is time for our meal.", targets: ["meal"], emoji: "👨‍👩‍👦🍲" },
    { id: "digraphs-1", category: "digraphs", text: "Minu sat in a nook with a cook book.", targets: ["nook", "cook", "book"], emoji: "👧📚" },
    { id: "digraphs-2", category: "digraphs", text: "Sita went up to the roof to see the moon.", targets: ["roof", "moon"], emoji: "🏠🌙" },
    { id: "digraphs-3", category: "digraphs", text: "The boy can toss a coin.", targets: ["boy", "coin"], emoji: "👦🪙" },
    { id: "digraphs-4", category: "digraphs", text: "The book fell with a loud sound.", targets: ["book", "loud", "sound"], emoji: "📕💥" },
    { id: "digraphs-5", category: "digraphs", text: "Tom ate hot food in his room.", targets: ["food", "room"], emoji: "👦🍲" },
    { id: "sh-ph-1", category: "sh-ph", text: "The ship sailed close to the shore.", targets: ["ship", "shore"], emoji: "🚢🏖️" },
    { id: "sh-ph-2", category: "sh-ph", text: "The shell has a bright shine.", targets: ["shell", "shine"], emoji: "🐚✨" },
    { id: "sh-ph-3", category: "sh-ph", text: "The fish is in the dish.", targets: ["fish", "dish"], emoji: "🐟🍽️" },
    { id: "sh-ph-4", category: "sh-ph", text: "The phone has a photo of a dolphin.", targets: ["phone", "photo", "dolphin"], emoji: "📱🐬" },
    { id: "sh-ph-5", category: "sh-ph", text: "We learn phonics one sound at a time.", targets: ["phonics"], emoji: "🔤👂" },
    { id: "sh-ph-6", category: "sh-ph", text: "The moon is in a new phase.", targets: ["phase"], emoji: "🌒🌙" },
    { id: "ck-1", category: "ck", text: "The sack is full of toys.", targets: ["sack"], emoji: "🧸🪀" },
    { id: "ck-2", category: "ck", text: "The deck is wet.", targets: ["deck"], emoji: "🛳️💧" },
    { id: "ck-3", category: "ck", text: "Rick went to pick a ball.", targets: ["Rick", "pick"], emoji: "🧒🏀" },
    { id: "ck-4", category: "ck", text: "She has to lock the door.", targets: ["lock"], emoji: "🚪🔒" },
    { id: "ck-5", category: "ck", text: "I saw a duck in the pond.", targets: ["duck"], emoji: "🦆🌿" }
  ];

  const articleWords = [
    { id: "article-kite", word: "kite", article: "A", emoji: "🪁" },
    { id: "article-elephant", word: "elephant", article: "An", emoji: "🐘" },
    { id: "article-cat", word: "cat", article: "A", emoji: "🐈" },
    { id: "article-apple", word: "apple", article: "An", emoji: "🍎" },
    { id: "article-dog", word: "dog", article: "A", emoji: "🐕" },
    { id: "article-ant", word: "ant", article: "An", emoji: "🐜" },
    { id: "article-ball", word: "ball", article: "A", emoji: "⚽" },
    { id: "article-egg", word: "egg", article: "An", emoji: "🥚" },
    { id: "article-book", word: "book", article: "A", emoji: "📘" },
    { id: "article-engine", word: "engine", article: "An", emoji: "🚂" },
    { id: "article-car", word: "car", article: "A", emoji: "🚗" },
    { id: "article-insect", word: "insect", article: "An", emoji: "🐞" },
    { id: "article-flower", word: "flower", article: "A", emoji: "🌻" },
    { id: "article-orange", word: "orange", article: "An", emoji: "🍊" },
    { id: "article-monkey", word: "monkey", article: "A", emoji: "🐒" },
    { id: "article-owl", word: "owl", article: "An", emoji: "🦉" },
    { id: "article-pencil", word: "pencil", article: "A", emoji: "✏️" },
    { id: "article-umbrella", word: "umbrella", article: "An", emoji: "☂️" },
    { id: "article-rabbit", word: "rabbit", article: "A", emoji: "🐇" },
    { id: "article-octopus", word: "octopus", article: "An", emoji: "🐙" }
  ];

  const topics = [
    { id: "vowels", label: "🌈 Long vowel sounds", readLabel: "🌈 Long vowels", description: "Two letters can team up to make one long vowel sound." },
    { id: "digraphs", label: "🧩 Vowel digraphs", readLabel: "🧩 Vowel digraphs", description: "Explore short and long oo, then practise the oi, oy, and ou letter teams." },
    { id: "sh-ph", label: "🐚 SH & PH digraphs", readLabel: "🐚 SH & PH", description: "Practise sh at the beginning and end of words, then learn how ph makes the /f/ sound." },
    { id: "ck", label: "🚀 CK word families", readLabel: "🚀 CK families", description: "Read words that end with the strong /k/ sound." }
  ];

  const groupPattern = (group) => group.pattern || group.id;

  const allWords = soundGroups.flatMap((group) => group.words.map((item) => ({ ...item, group })));
  const groupById = new Map(soundGroups.map((group) => [group.id, group]));
  const validWordIds = new Set(allWords.map((item) => item.id));
  const validSentenceIds = new Set(readingSentences.map((item) => item.id));
  const validArticleIds = new Set(articleWords.map((item) => item.id));

  const elements = {
    stage: document.querySelector("#englishStage"),
    familyStage: document.querySelector("#wordFamiliesStage"),
    stageButtons: [...document.querySelectorAll("[data-english-stage]")],
    totalStars: document.querySelector("#englishTotalStars"),
    progressFill: document.querySelector("#englishProgressFill"),
    learnedStat: document.querySelector("#englishLearnedStat"),
    practisedStat: document.querySelector("#englishPractisedStat"),
    readStat: document.querySelector("#englishReadStat"),
    articleStat: document.querySelector("#englishArticleStat"),
    quizStat: document.querySelector("#englishQuizStat"),
    topProgress: document.querySelector("#progressLabel")
  };

  const state = {
    stage: "learn",
    topic: "vowels",
    groupId: "ai",
    wordIndex: 0,
    practice: null,
    readingCategory: "vowels",
    readingIndex: 0,
    articleOrder: shuffle(articleWords),
    articleIndex: 0,
    quiz: null,
    revisionWords: shuffle(allWords),
    revisionIndex: 0,
    revealedPictures: new Set()
  };

  let progress = loadProgress();

  function createElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function createButton(className, text, onClick) {
    const button = createElement("button", className, text);
    button.type = "button";
    if (onClick) button.addEventListener("click", onClick);
    return button;
  }

  function shuffle(items) {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
    }
    return copy;
  }

  function uniqueRandom(items, count, key = (item) => item) {
    const seen = new Set();
    const result = [];
    for (const item of shuffle(items)) {
      const value = key(item);
      if (seen.has(value)) continue;
      seen.add(value);
      result.push(item);
      if (result.length === count) break;
    }
    return result;
  }

  function loadProgress() {
    const empty = { learned: [], practised: [], read: [], articles: [], bestQuiz: 0 };
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "null");
      if (!saved || typeof saved !== "object") return empty;
      return {
        learned: Array.isArray(saved.learned) ? saved.learned.filter((id) => validWordIds.has(id)) : [],
        practised: Array.isArray(saved.practised) ? saved.practised.filter((id) => validWordIds.has(id)) : [],
        read: Array.isArray(saved.read) ? saved.read.filter((id) => validSentenceIds.has(id)) : [],
        articles: Array.isArray(saved.articles) ? saved.articles.filter((id) => validArticleIds.has(id)) : [],
        bestQuiz: Number.isInteger(saved.bestQuiz) ? Math.min(Math.max(saved.bestQuiz, 0), QUIZ_LENGTH) : 0
      };
    } catch {
      return empty;
    }
  }

  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // The activities still work when browser storage is unavailable.
    }
  }

  function addProgress(kind, id) {
    if (progress[kind].includes(id)) return false;
    progress[kind].push(id);
    saveProgress();
    updateProgress();
    celebrate();
    return true;
  }

  function totalStars() {
    return progress.learned.length + progress.practised.length + progress.read.length + progress.articles.length + progress.bestQuiz;
  }

  function updateProgress() {
    const stars = totalStars();
    const maximum = allWords.length * 2 + readingSentences.length + articleWords.length + QUIZ_LENGTH;
    elements.totalStars.textContent = `⭐ ${stars}`;
    elements.progressFill.style.width = `${Math.min((stars / maximum) * 100, 100)}%`;
    elements.learnedStat.textContent = `${progress.learned.length}/${allWords.length}`;
    elements.practisedStat.textContent = `${progress.practised.length}/${allWords.length}`;
    elements.readStat.textContent = `${progress.read.length}/${readingSentences.length}`;
    elements.articleStat.textContent = `${progress.articles.length}/${articleWords.length}`;
    elements.quizStat.textContent = `${progress.bestQuiz}/${QUIZ_LENGTH}`;
    elements.topProgress.textContent = `⭐ ${stars} ${stars === 1 ? "star" : "stars"}`;
  }

  function celebrate() {
    const layer = createElement("div", "english-celebration");
    for (let index = 0; index < 5; index += 1) layer.append(createElement("span", "", "⭐"));
    document.body.append(layer);
    window.setTimeout(() => layer.remove(), 950);
  }

  function speakText(text, rate = 0.76) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-GB";
    utterance.rate = rate;
    utterance.pitch = 1.06;
    window.speechSynthesis.speak(utterance);
  }

  function appendHighlightedWord(container, item, className = "english-big-word") {
    const word = item.word;
    const matchIndex = word.toLowerCase().indexOf(item.pattern.toLowerCase());
    const wrapper = createElement("p", className);
    wrapper.style.setProperty("--group-color", item.group?.color ?? soundGroups.find((group) => groupPattern(group) === item.pattern)?.color ?? "#ee5675");
    if (matchIndex < 0) {
      wrapper.textContent = word;
    } else {
      wrapper.append(document.createTextNode(word.slice(0, matchIndex)));
      wrapper.append(createElement("span", "english-highlight", word.slice(matchIndex, matchIndex + item.pattern.length)));
      wrapper.append(document.createTextNode(word.slice(matchIndex + item.pattern.length)));
    }
    container.append(wrapper);
    return wrapper;
  }

  function fitEnglishWord(wordElement) {
    wordElement.style.fontSize = "";
    const maximumSize = Number.parseFloat(getComputedStyle(wordElement).fontSize);
    if (wordElement.scrollWidth <= wordElement.clientWidth) return;

    let minimumSize = 72;
    let upperSize = maximumSize;
    while (upperSize - minimumSize > 1) {
      const candidateSize = (minimumSize + upperSize) / 2;
      wordElement.style.fontSize = `${candidateSize}px`;
      if (wordElement.scrollWidth <= wordElement.clientWidth) minimumSize = candidateSize;
      else upperSize = candidateSize;
    }
    wordElement.style.fontSize = `${Math.floor(minimumSize)}px`;
  }

  function appendHighlightedSentence(container, sentence) {
    const escapedTargets = [...sentence.targets]
      .sort((first, second) => second.length - first.length)
      .map((target) => target.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    const matcher = new RegExp(`(${escapedTargets.join("|")})`, "gi");
    sentence.text.split(matcher).forEach((part) => {
      const isTarget = sentence.targets.some((target) => target.toLowerCase() === part.toLowerCase());
      container.append(isTarget ? createElement("span", "english-target-word", part) : document.createTextNode(part));
    });
  }

  function currentGroup() {
    return groupById.get(state.groupId) ?? soundGroups[0];
  }

  function createStageHeader(kicker, title, description, countText) {
    const header = createElement("header", "english-stage-header");
    const copy = createElement("div");
    copy.append(createElement("p", "english-stage-kicker", kicker));
    copy.append(createElement("h3", "", title));
    copy.append(createElement("p", "english-stage-description", description));
    header.append(copy);
    if (countText) header.append(createElement("strong", "english-stage-count", countText));
    return header;
  }

  function appendCurriculumPickers(container, onChange) {
    const topicPicker = createElement("div", "english-topic-picker");
    topics.forEach((topic) => {
      const button = createButton("english-topic-button", topic.label, () => {
        state.topic = topic.id;
        state.groupId = soundGroups.find((group) => group.topic === topic.id).id;
        state.wordIndex = 0;
        state.practice = null;
        onChange();
      });
      button.classList.toggle("is-active", state.topic === topic.id);
      button.setAttribute("aria-pressed", state.topic === topic.id ? "true" : "false");
      topicPicker.append(button);
    });
    container.append(topicPicker);

    const topic = topics.find((item) => item.id === state.topic);
    container.append(createElement("p", "english-stage-description", topic.description));

    const soundPicker = createElement("div", "english-sound-picker");
    soundGroups.filter((group) => group.topic === state.topic).forEach((group) => {
      const button = createButton("english-sound-button", "", () => {
        state.groupId = group.id;
        state.wordIndex = 0;
        state.practice = null;
        onChange();
      });
      button.style.setProperty("--group-color", group.color);
      button.classList.toggle("is-active", state.groupId === group.id);
      button.setAttribute("aria-pressed", state.groupId === group.id ? "true" : "false");
      button.append(createElement("strong", "", groupPattern(group)));
      button.append(createElement("small", "", group.pickerLabel ? `${group.pickerLabel} · ${group.words.length} words` : `${group.words.length} words`));
      soundPicker.append(button);
    });
    container.append(soundPicker);
  }

  function renderLearn() {
    const group = currentGroup();
    const item = group.words[state.wordIndex % group.words.length];
    const pictureRevealed = state.revealedPictures.has(item.id);
    const card = createElement("section", "english-stage-card");
    card.style.setProperty("--group-color", group.color);
    card.append(createStageHeader("Step 1 · Learn", `Meet ${group.title}: “${groupPattern(group)}”`, "Read the big word aloud first. Then reveal only this word’s picture.", `${state.wordIndex + 1} of ${group.words.length}`));
    appendCurriculumPickers(card, renderLearn);

    const layout = createElement("div", "english-learn-layout");
    const wordCard = createElement("article", `english-word-card ${pictureRevealed ? "is-picture-revealed" : "is-picture-hidden"}`);
    let picture;
    if (pictureRevealed) {
      picture = createButton("english-picture-button", "", () => speakText(item.word, 0.65));
      picture.style.setProperty("--group-color", group.color);
      picture.setAttribute("aria-label", `Picture for ${item.word}. Tap to hear the word.`);
      picture.append(createElement("span", "english-picture-emoji", item.emoji));
    }

    const copy = createElement("div", "english-word-copy");
    copy.append(createElement("p", "english-pattern-label", `${group.title} · “${groupPattern(group)}” says ${group.sound}`));
    const wordElement = appendHighlightedWord(copy, { ...item, group });
    copy.append(createElement("p", "english-example-sentence", item.sentence));

    if (group.tip) {
      const soundClue = createElement("aside", "english-sound-clue");
      soundClue.append(createElement("span", "english-sound-clue-icon", "👂"));
      const clueCopy = createElement("div");
      clueCopy.append(createElement("strong", "", "Sound clue"));
      clueCopy.append(createElement("p", "", group.tip));
      soundClue.append(clueCopy);
      soundClue.append(createButton("english-sound-clue-button", `Hear “${group.sample}”`, () => speakText(group.sample, 0.62)));
      copy.append(soundClue);
    }

    const actions = createElement("div", "english-card-actions");
    if (!pictureRevealed) {
      actions.append(createButton("english-secondary-button english-reveal-picture-button", "I read it — show picture", () => {
        state.revealedPictures.add(item.id);
        renderLearn();
      }));
    }
    actions.append(createButton("english-secondary-button", "🔊 Hear word", () => speakText(item.word, 0.65)));
    actions.append(createButton("english-secondary-button", "🗣️ Hear sentence", () => speakText(item.sentence, 0.78)));
    const learned = progress.learned.includes(item.id);
    const learnedButton = createButton(`english-primary-button${learned ? " is-complete" : ""}`, learned ? "⭐ Learned!" : "I know this! + ⭐", () => {
      addProgress("learned", item.id);
      renderLearn();
    });
    learnedButton.disabled = learned;
    actions.append(learnedButton);
    copy.append(actions);
    if (picture) wordCard.append(picture, copy);
    else wordCard.append(copy);

    const bank = createElement("aside", "english-word-bank");
    const wordBankLabel = group.pickerLabel
      ? `${group.pickerLabel.replace(/ sound$/i, "").toLowerCase()} “${groupPattern(group)}”`
      : `“${groupPattern(group)}”`;
    bank.append(createElement("h4", "", `More ${wordBankLabel} words`));
    bank.append(createElement("p", "", "Tap one to change the big word."));
    const wordGrid = createElement("div", "english-word-grid");
    group.words.forEach((wordItem, index) => {
      const button = createButton("english-word-chip", wordItem.word, () => {
        state.wordIndex = index;
        renderLearn();
      });
      button.style.setProperty("--group-color", group.color);
      button.classList.toggle("is-active", index === state.wordIndex);
      button.classList.toggle("is-learned", progress.learned.includes(wordItem.id));
      button.setAttribute("aria-current", index === state.wordIndex ? "true" : "false");
      wordGrid.append(button);
    });
    bank.append(wordGrid);
    layout.append(wordCard, bank);
    card.append(layout);

    const controls = createElement("div", "english-stage-controls");
    controls.append(createButton("english-secondary-button", "← Previous", () => {
      state.wordIndex = (state.wordIndex - 1 + group.words.length) % group.words.length;
      renderLearn();
    }));
    controls.append(createButton("english-primary-button", "Next word →", () => {
      state.wordIndex = (state.wordIndex + 1) % group.words.length;
      renderLearn();
    }));
    card.append(controls);
    elements.stage.replaceChildren(card);
    requestAnimationFrame(() => fitEnglishWord(wordElement));
    document.fonts?.ready.then(() => fitEnglishWord(wordElement));
  }

  function blankWord(item) {
    const index = item.word.toLowerCase().indexOf(item.pattern.toLowerCase());
    return `${item.word.slice(0, index)}${"_".repeat(item.pattern.length)}${item.word.slice(index + item.pattern.length)}`;
  }

  function blankSentence(item) {
    const matcher = new RegExp(`\\b${item.word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
    return item.sentence.replace(matcher, "_____");
  }

  function createWordChoices(target) {
    const sameGroup = target.group.words
      .filter((item) => item.word !== target.word)
      .map((item) => ({ ...item, group: target.group }));
    const otherWords = allWords.filter((item) => item.word !== target.word);
    const distractors = uniqueRandom([...sameGroup, ...shuffle(otherWords)], 3, (item) => item.word);
    return shuffle([target.word, ...distractors.map((item) => item.word)]);
  }

  function createPatternChoices(target) {
    const otherPatterns = [...new Set(soundGroups.map(groupPattern))].filter((pattern) => pattern !== target.pattern);
    return shuffle([target.pattern, ...uniqueRandom(otherPatterns, 3)]);
  }

  function buildEnglishQuestion(target, type) {
    if (type === "picture") {
      return {
        target,
        kind: "Picture match",
        clue: target.emoji,
        clueType: "picture",
        prompt: "Which word matches this picture?",
        answer: target.word,
        choices: createWordChoices(target)
      };
    }
    if (type === "sound") {
      return {
        target,
        kind: "Listen carefully",
        clue: "🔊",
        clueType: "listen",
        prompt: "Tap the speaker, then choose the word you hear.",
        answer: target.word,
        choices: createWordChoices(target)
      };
    }
    if (type === "pattern") {
      return {
        target,
        kind: "Find the missing sound",
        clue: blankWord(target),
        clueType: "word",
        prompt: "Which letter team completes this word?",
        answer: target.pattern,
        choices: createPatternChoices(target)
      };
    }
    return {
      target,
      kind: "Finish the sentence",
      clue: blankSentence(target),
      clueType: "sentence",
      prompt: "Which word belongs in the blank?",
      answer: target.word,
      choices: createWordChoices(target)
    };
  }

  function createPracticeSession(group) {
    const pool = shuffle(group.words.map((item) => ({ ...item, group })));
    const types = ["picture", "pattern", "sound", "sentence"];
    const questions = Array.from({ length: PRACTICE_LENGTH }, (_, index) => {
      const target = pool[index % pool.length];
      return buildEnglishQuestion(target, types[index % types.length]);
    });
    return { groupId: group.id, questions, index: 0, firstTryCorrect: 0, hadWrongAnswer: false, finished: false };
  }

  function renderQuestionCard(session, mode, onNext) {
    const question = session.questions[session.index];
    const card = createElement("article", "english-question-card");
    card.style.setProperty("--group-color", question.target.group.color);

    const toolbar = createElement("div", "english-question-toolbar");
    const progressTrack = createElement("div", "english-question-progress");
    const progressBar = createElement("span");
    progressBar.style.width = `${((session.index + 1) / session.questions.length) * 100}%`;
    progressTrack.append(progressBar);
    toolbar.append(progressTrack, createElement("strong", "english-question-count", `${session.index + 1} of ${session.questions.length}`));
    card.append(toolbar);
    card.append(createElement("p", "english-question-kind", question.kind));

    const clue = createElement("div", `english-question-clue${question.clueType === "picture" ? " is-picture" : ""}${question.clueType === "sentence" ? " is-sentence" : ""}`);
    if (question.clueType === "listen") {
      const listenButton = createButton("english-listen-clue", "🔊", () => speakText(question.target.word, 0.64));
      listenButton.setAttribute("aria-label", "Hear the mystery word");
      clue.append(listenButton);
    } else {
      clue.textContent = question.clue;
    }
    card.append(clue, createElement("p", "english-question-prompt", question.prompt));

    const choices = createElement("div", "english-choice-grid");
    const feedback = createElement("p", "english-feedback");
    feedback.setAttribute("role", "status");
    const nextButton = createButton("english-next-button", session.index === session.questions.length - 1 ? "See my result →" : "Next challenge →", onNext);
    nextButton.hidden = true;

    question.choices.forEach((choice) => {
      const button = createButton("english-choice", choice, () => {
        if (button.disabled) return;
        if (choice === question.answer) {
          button.classList.add("is-correct");
          [...choices.children].forEach((choiceButton) => {
            choiceButton.disabled = true;
            if (choiceButton.textContent === question.answer) choiceButton.classList.add("is-correct");
          });
          feedback.className = "english-feedback is-good";
          feedback.textContent = mode === "practice" ? "Brilliant! You found it. ⭐" : "Correct! Great listening. ⭐";
          if (!session.hadWrongAnswer) session.firstTryCorrect += 1;
          if (mode === "practice") addProgress("practised", question.target.id);
          else celebrate();
          nextButton.hidden = false;
          if (mode === "quiz" && !session.hadWrongAnswer) session.score += 1;
        } else if (mode === "practice") {
          session.hadWrongAnswer = true;
          button.classList.add("is-wrong");
          button.disabled = true;
          feedback.className = "english-feedback is-try";
          feedback.textContent = "Good try. Look and try one more time!";
        } else {
          session.hadWrongAnswer = true;
          button.classList.add("is-wrong");
          [...choices.children].forEach((choiceButton) => {
            choiceButton.disabled = true;
            if (choiceButton.textContent === question.answer) choiceButton.classList.add("is-correct");
          });
          feedback.className = "english-feedback is-try";
          feedback.textContent = `The answer is “${question.answer}”. You can get the next one!`;
          nextButton.hidden = false;
        }
      });
      choices.append(button);
    });
    card.append(choices, feedback, nextButton);
    return card;
  }

  function renderPractice() {
    const group = currentGroup();
    if (!state.practice || state.practice.groupId !== group.id) state.practice = createPracticeSession(group);
    const session = state.practice;
    const card = createElement("section", "english-stage-card");
    card.append(createStageHeader("Step 2 · Practise", `Play with ${group.title}: “${groupPattern(group)}”`, "Pictures, missing sounds, listening, and sentences help the words stick.", session.finished ? "Finished!" : `${session.index + 1} of ${PRACTICE_LENGTH}`));
    appendCurriculumPickers(card, renderPractice);

    if (session.finished) {
      const summary = createElement("article", "english-summary-card");
      const copy = createElement("div");
      copy.append(createElement("p", "english-summary-emoji", session.firstTryCorrect >= 6 ? "🌟" : "💪"));
      copy.append(createElement("h4", "", "Practice complete!"));
      copy.append(createElement("p", "", `You solved all ${PRACTICE_LENGTH} challenges and got ${session.firstTryCorrect} right on your first try.`));
      const actions = createElement("div", "english-card-actions");
      actions.append(createButton("english-secondary-button", "Practise again", () => {
        state.practice = createPracticeSession(group);
        renderPractice();
      }));
      actions.append(createButton("english-primary-button", "Read sentences →", () => setStage("read", true)));
      copy.append(actions);
      summary.append(copy);
      card.append(summary);
    } else {
      card.append(renderQuestionCard(session, "practice", () => {
        session.index += 1;
        session.hadWrongAnswer = false;
        if (session.index >= session.questions.length) session.finished = true;
        renderPractice();
      }));
    }
    elements.stage.replaceChildren(card);
  }

  function renderRead() {
    const sentences = readingSentences.filter((sentence) => sentence.category === state.readingCategory);
    state.readingIndex %= sentences.length;
    const sentence = sentences[state.readingIndex];
    const card = createElement("section", "english-stage-card");
    card.append(createStageHeader("Step 3 · Read", "Read a whole sentence", "Point to each word, read slowly, then listen to check yourself.", `${state.readingIndex + 1} of ${sentences.length}`));

    const filters = createElement("div", "english-reading-filter");
    topics.forEach(({ id: category, readLabel: label }) => {
      const button = createButton("", label, () => {
        state.readingCategory = category;
        state.readingIndex = 0;
        renderRead();
      });
      button.classList.toggle("is-active", state.readingCategory === category);
      button.setAttribute("aria-pressed", state.readingCategory === category ? "true" : "false");
      filters.append(button);
    });
    card.append(filters);

    const readingCard = createElement("article", "english-reading-card");
    readingCard.append(createElement("div", "english-reading-picture", sentence.emoji));
    const copy = createElement("div", "english-reading-copy");
    copy.append(createElement("p", "english-reading-number", `Sentence ${state.readingIndex + 1}`));
    const sentenceElement = createElement("p", "english-reading-sentence");
    appendHighlightedSentence(sentenceElement, sentence);
    copy.append(sentenceElement);

    const actions = createElement("div", "english-reading-actions");
    actions.append(createButton("english-secondary-button", "🔊 Hear sentence", () => speakText(sentence.text, 0.72)));
    const hasRead = progress.read.includes(sentence.id);
    const readButton = createButton(`english-primary-button${hasRead ? " is-complete" : ""}`, hasRead ? "⭐ I read this!" : "I read it! + ⭐", () => {
      addProgress("read", sentence.id);
      renderRead();
    });
    readButton.disabled = hasRead;
    actions.append(readButton);
    copy.append(actions);
    readingCard.append(copy);
    card.append(readingCard);

    const dots = createElement("div", "english-reading-dots");
    sentences.forEach((item, index) => {
      const dot = createButton("english-reading-dot", "", () => {
        state.readingIndex = index;
        renderRead();
      });
      dot.classList.toggle("is-active", index === state.readingIndex);
      dot.classList.toggle("is-read", progress.read.includes(item.id) && index !== state.readingIndex);
      dot.setAttribute("aria-label", `Go to sentence ${index + 1}`);
      dots.append(dot);
    });
    card.append(dots);

    const controls = createElement("div", "english-stage-controls");
    controls.append(createButton("english-secondary-button", "← Previous", () => {
      state.readingIndex = (state.readingIndex - 1 + sentences.length) % sentences.length;
      renderRead();
    }));
    controls.append(createButton("english-primary-button", "Next sentence →", () => {
      state.readingIndex = (state.readingIndex + 1) % sentences.length;
      renderRead();
    }));
    card.append(controls);
    elements.stage.replaceChildren(card);
  }

  function renderArticles() {
    const item = state.articleOrder[state.articleIndex];
    const phraseText = `${item.article.toLowerCase()} ${item.word}`;
    const startsWithVowel = /^[aeiou]/i.test(item.word);
    const card = createElement("section", "english-stage-card");
    card.append(createStageHeader(
      "Step 4 · A or An",
      "What comes before the word?",
      "Look at the next word and listen to its first sound. Then choose A or An.",
      `${progress.articles.length}/${articleWords.length} mastered`
    ));

    const rules = createElement("section", "english-article-rules");
    rules.setAttribute("aria-label", "A and An rules");
    [
      ["A", "before a consonant sound", "a kite", "🪁"],
      ["An", "before a vowel sound", "an elephant", "🐘"]
    ].forEach(([article, rule, example, emoji]) => {
      const ruleCard = createElement("article", "english-article-rule");
      ruleCard.append(createElement("strong", "", article));
      const ruleCopy = createElement("div");
      ruleCopy.append(createElement("p", "", rule));
      ruleCopy.append(createElement("span", "", `${emoji} ${example}`));
      ruleCard.append(ruleCopy);
      rules.append(ruleCard);
    });
    card.append(rules);

    const activity = createElement("article", "english-article-card");
    activity.append(createElement("p", "english-article-round", `Word ${state.articleIndex + 1} of ${state.articleOrder.length}`));
    const emoji = createElement("div", "english-article-emoji", item.emoji);
    emoji.setAttribute("aria-hidden", "true");
    activity.append(emoji);

    const phrase = createElement("p", "english-article-phrase");
    phrase.setAttribute("aria-label", `Blank ${item.word}`);
    const blank = createElement("span", "english-article-blank", "___");
    const noun = createElement("span", "english-article-noun");
    noun.append(createElement("span", "english-article-first-letter", item.word[0]), document.createTextNode(item.word.slice(1)));
    phrase.append(blank, document.createTextNode(" "), noun);
    activity.append(phrase);
    activity.append(createElement("p", "english-article-prompt", "Choose the word for the blank."));
    activity.append(createButton("english-secondary-button english-article-listen", `🔊 Hear “${item.word}”`, () => speakText(item.word, 0.65)));

    const choices = createElement("div", "english-article-choices");
    const feedback = createElement("p", "english-article-feedback");
    feedback.setAttribute("role", "status");
    const nextButton = createButton(
      "english-next-button english-article-next",
      state.articleIndex === state.articleOrder.length - 1 ? "Mix and play again ↻" : "Next word →",
      showNextArticle
    );
    nextButton.hidden = true;
    let solved = false;

    ["A", "An"].forEach((choice) => {
      const button = createButton("english-article-choice", choice, () => {
        if (button.disabled || solved) return;
        if (choice === item.article) {
          solved = true;
          blank.textContent = choice;
          blank.classList.add("is-solved");
          phrase.setAttribute("aria-label", phraseText);
          [...choices.children].forEach((choiceButton) => {
            choiceButton.disabled = true;
            if (choiceButton.textContent === item.article) choiceButton.classList.add("is-correct");
          });
          feedback.className = "english-article-feedback is-good";
          feedback.textContent = `Yes! “${item.word}” starts with ${startsWithVowel ? "a vowel" : "a consonant"} sound, so we say “${phraseText}”. ⭐`;
          if (!addProgress("articles", item.id)) celebrate();
          speakText(phraseText, 0.68);
          nextButton.hidden = false;
        } else {
          button.classList.add("is-wrong");
          button.disabled = true;
          feedback.className = "english-article-feedback is-try";
          feedback.textContent = `Listen to the first sound in “${item.word}”. Try again.`;
          speakText(item.word, 0.65);
        }
      });
      choices.append(button);
    });

    activity.append(choices, feedback, nextButton);
    card.append(activity);
    elements.stage.replaceChildren(card);
  }

  function showNextArticle() {
    if (state.articleIndex < state.articleOrder.length - 1) {
      state.articleIndex += 1;
    } else {
      const currentId = state.articleOrder[state.articleIndex].id;
      const mixed = shuffle(articleWords);
      if (mixed.length > 1 && mixed[0].id === currentId) mixed.push(mixed.shift());
      state.articleOrder = mixed;
      state.articleIndex = 0;
    }
    renderArticles();
  }

  function createQuizSession() {
    const targets = uniqueRandom(allWords, QUIZ_LENGTH, (item) => item.id);
    const types = shuffle(["picture", "pattern", "sound", "sentence", "picture", "pattern", "sound", "sentence", "picture", "pattern"]);
    return {
      questions: targets.map((target, index) => buildEnglishQuestion(target, types[index])),
      index: 0,
      score: 0,
      firstTryCorrect: 0,
      hadWrongAnswer: false,
      finished: false
    };
  }

  function renderQuiz() {
    if (!state.quiz) state.quiz = createQuizSession();
    const session = state.quiz;
    const card = createElement("section", "english-stage-card");
    card.append(createStageHeader("Step 5 · Quiz", "The English Star Quiz", "Ten surprises from every sound. Do your best and win a trophy!", session.finished ? `${session.score}/${QUIZ_LENGTH}` : `${session.index + 1} of ${QUIZ_LENGTH}`));

    if (session.finished) {
      const previousBest = progress.bestQuiz;
      if (session.score > progress.bestQuiz) {
        progress.bestQuiz = session.score;
        saveProgress();
        updateProgress();
        if (session.score > previousBest) celebrate();
      }
      const summary = createElement("article", "english-summary-card");
      const copy = createElement("div");
      const badge = session.score === QUIZ_LENGTH ? "🏆" : session.score >= 7 ? "🌟" : "💪";
      const title = session.score === QUIZ_LENGTH ? "Perfect score!" : session.score >= 7 ? "Super work!" : "Great practice!";
      copy.append(createElement("p", "english-summary-emoji", badge));
      copy.append(createElement("h4", "", title));
      copy.append(createElement("p", "", `You answered ${session.score} of ${QUIZ_LENGTH} questions correctly. Your best score is ${Math.max(progress.bestQuiz, session.score)}.`));
      const actions = createElement("div", "english-card-actions");
      actions.append(createButton("english-secondary-button", "Review words", () => setStage("learn", true)));
      actions.append(createButton("english-primary-button", "Try another quiz", () => {
        state.quiz = createQuizSession();
        renderQuiz();
      }));
      copy.append(actions);
      summary.append(copy);
      card.append(summary);
    } else {
      card.append(renderQuestionCard(session, "quiz", () => {
        session.index += 1;
        session.hadWrongAnswer = false;
        if (session.index >= session.questions.length) session.finished = true;
        renderQuiz();
      }));
    }
    elements.stage.replaceChildren(card);
  }

  function renderRevision() {
    const item = state.revisionWords[state.revisionIndex];
    const card = createElement("section", "english-stage-card");
    card.style.setProperty("--group-color", item.group.color);
    card.append(createStageHeader(
      "Step 6 · Revise",
      "Mixed-up revision",
      "Read the big word aloud, listen if you need help, then move to the next surprise.",
      `${state.revisionIndex + 1} of ${state.revisionWords.length}`
    ));

    const focus = createElement("article", "english-revision-card");
    focus.style.setProperty("--group-color", item.group.color);
    focus.append(createElement("p", "english-revision-pattern", `${item.group.title} · “${groupPattern(item.group)}” says ${item.group.sound}`));
    const wordElement = appendHighlightedWord(focus, item, "english-revision-word");
    focus.append(createElement("p", "english-revision-sentence", item.sentence));

    const audioActions = createElement("div", "english-revision-audio");
    audioActions.append(createButton("english-secondary-button", "🔊 Hear word", () => speakText(item.word, 0.65)));
    audioActions.append(createButton("english-secondary-button", "🗣️ Hear sentence", () => speakText(item.sentence, 0.78)));
    focus.append(audioActions);
    card.append(focus);

    const controls = createElement("div", "english-revision-controls");
    controls.append(createButton("english-secondary-button", "← Previous", () => moveRevision(-1)));
    controls.append(createButton("english-revision-mix", "↻ Mix again", mixRevisionWords));
    controls.append(createButton("english-primary-button", "Next word →", () => moveRevision(1)));
    card.append(controls);
    elements.stage.replaceChildren(card);
    requestAnimationFrame(() => fitEnglishWord(wordElement));
    document.fonts?.ready.then(() => fitEnglishWord(wordElement));
  }

  function moveRevision(amount) {
    state.revisionIndex = (state.revisionIndex + amount + state.revisionWords.length) % state.revisionWords.length;
    renderRevision();
  }

  function mixRevisionWords() {
    const currentId = state.revisionWords[state.revisionIndex]?.id;
    const mixed = shuffle(allWords);
    if (mixed.length > 1 && mixed[0].id === currentId) mixed.push(mixed.shift());
    state.revisionWords = mixed;
    state.revisionIndex = 0;
    renderRevision();
  }

  function renderStage() {
    const showingFamilies = state.stage === "families";
    elements.stage.hidden = showingFamilies;
    elements.familyStage.hidden = !showingFamilies;
    if (showingFamilies) {
      window.wordFamiliesLearning?.activate();
      return;
    }
    updateProgress();
    if (state.stage === "learn") renderLearn();
    else if (state.stage === "practice") renderPractice();
    else if (state.stage === "read") renderRead();
    else if (state.stage === "articles") renderArticles();
    else if (state.stage === "quiz") renderQuiz();
    else renderRevision();
  }

  function setStage(stage, shouldScroll = false) {
    state.stage = stage;
    elements.stageButtons.forEach((button) => {
      const active = button.dataset.englishStage === stage;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
    renderStage();
    if (shouldScroll) {
      const target = stage === "families" ? elements.familyStage : elements.stage;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function runDataChecks() {
    const errors = [];
    const seenIds = new Set();
    const seenGroupIds = new Set();
    soundGroups.forEach((group) => {
      if (seenGroupIds.has(group.id)) errors.push(`Duplicate English sound group: ${group.id}`);
      if (!topics.some((topic) => topic.id === group.topic)) errors.push(`Unknown topic for ${group.id}`);
      if (group.words.length < 3) errors.push(`${group.id} needs at least three words`);
      group.words.forEach((item) => {
        if (seenIds.has(item.id)) errors.push(`Duplicate English word: ${item.id}`);
        if (item.pattern !== groupPattern(group)) errors.push(`${item.word} has the wrong pattern for ${group.id}`);
        if (!item.word.includes(item.pattern)) errors.push(`${item.word} does not contain ${item.pattern}`);
        if (!item.sentence.toLowerCase().includes(item.word.toLowerCase())) errors.push(`Sentence does not include ${item.word}`);
        seenIds.add(item.id);
      });
      seenGroupIds.add(group.id);
    });
    readingSentences.forEach((sentence) => {
      if (!topics.some((topic) => topic.id === sentence.category)) errors.push(`Unknown reading category for ${sentence.id}`);
      sentence.targets.forEach((target) => {
        if (!sentence.text.toLowerCase().includes(target.toLowerCase())) errors.push(`Reading sentence ${sentence.id} is missing ${target}`);
      });
    });
    const seenArticleIds = new Set();
    articleWords.forEach((item) => {
      const expectedArticle = /^[aeiou]/i.test(item.word) ? "An" : "A";
      if (seenArticleIds.has(item.id)) errors.push(`Duplicate article word: ${item.id}`);
      if (item.article !== expectedArticle) errors.push(`${item.word} should use ${expectedArticle}`);
      seenArticleIds.add(item.id);
    });
    if (errors.length) throw new Error(`English content checks failed:\n${errors.join("\n")}`);
    return { groups: soundGroups.length, words: allWords.length, sentences: readingSentences.length, articles: articleWords.length };
  }

  elements.stageButtons.forEach((button) => {
    button.addEventListener("click", () => setStage(button.dataset.englishStage, true));
  });
  window.addEventListener("resize", () => {
    const wordElement = elements.stage.querySelector(".english-big-word, .english-revision-word");
    if (wordElement) fitEnglishWord(wordElement);
  });
  document.addEventListener("keydown", (event) => {
    if (state.stage !== "revision" || elements.stage.closest("[hidden]")) return;
    if (event.key === "ArrowLeft") moveRevision(-1);
    if (event.key === "ArrowRight") moveRevision(1);
    if (event.code === "Space" && event.target === document.body) {
      event.preventDefault();
      speakText(state.revisionWords[state.revisionIndex].word, 0.65);
    }
  });

  window.runEnglishDataChecks = runDataChecks;
  function activate() {
    if (state.stage === "families") window.wordFamiliesLearning?.activate();
    else updateProgress();
  }

  window.englishLearning = { activate, setStage };

  runDataChecks();
  updateProgress();
  renderStage();
})();
