(function () {
  const TEACHERS = [
    { name: 'Ms. Byte', subject: 'Coding', emoji: '👩‍💻', color: '#00ffff', pitch: 1.3, rate: 1.05, facts: [
      [['variable', 'let', 'const'], 'A variable is a labeled box that holds a value. Use const when it will not change, and let when it will.'],
      [['function'], 'A function is a reusable recipe. It takes inputs, runs steps, and returns an output.']
    ]},
    { name: 'Dr. Quark', subject: 'Physics', emoji: '🧑‍🔬', color: '#ff7a00', pitch: 0.9, rate: 0.95, facts: [
      [['gravity'], 'Gravity pulls objects with mass toward each other. On Earth it speeds falling objects up by about 9.8 meters per second every second.'],
      [['force', 'newton'], "Newton's second law says force equals mass times acceleration: F = m × a."]
    ]},
    { name: 'Prof. Flask', subject: 'Chemistry', emoji: '👩‍🔬', color: '#39ffb0', pitch: 1.15, rate: 1.0, facts: [
      [['atom'], 'An atom is the smallest unit of an element. It has protons and neutrons in the nucleus, with electrons around it.'],
      [['acid', 'base', 'ph'], 'The pH scale runs from 0 to 14. Below 7 is acidic, 7 is neutral, and above 7 is basic.']
    ]},
    { name: 'Dr. Fern', subject: 'Biology', emoji: '👨‍🔬', color: '#51cf66', pitch: 0.85, rate: 1.0, facts: [
      [['cell'], 'Cells are the basic building blocks of life. Plants and animals are made of trillions of them.'],
      [['photosynthesis', 'plant'], 'Photosynthesis is how plants turn sunlight, water, and carbon dioxide into sugar and oxygen.']
    ]},
    { name: 'Mr. Chronos', subject: 'History', emoji: '👨‍🏫', color: '#ffd93d', pitch: 0.75, rate: 0.9, facts: [
      [['rome', 'roman'], 'The Roman Republic became an empire in 27 BCE, when Augustus became its first emperor.'],
      [['world war', 'war'], 'World War II lasted from 1939 to 1945 and involved most of the world’s nations.']
    ]},
    { name: 'Ms. Atlas', subject: 'Geography', emoji: '👩‍🏫', color: '#4dabf7', pitch: 1.2, rate: 1.1, facts: [
      [['capital', 'country'], 'A capital city is where a country’s government is based. Ask me about a country and I will share what I know.'],
      [['ocean', 'sea'], 'Earth has five oceans: Pacific, Atlantic, Indian, Southern, and Arctic.']
    ]},
    { name: 'Prof. Nova', subject: 'Astronomy', emoji: '🧑‍🚀', color: '#845ef7', pitch: 0.95, rate: 0.9, facts: [
      [['star', 'sun'], 'Stars are giant balls of hot gas that make their own light through nuclear fusion. Our Sun is one of them.'],
      [['planet', 'mars', 'jupiter'], 'There are eight planets in our solar system. Jupiter is the largest and Mercury is the smallest.']
    ]},
    { name: 'Señora Luna', subject: 'Spanish', emoji: '👩‍🦰', color: '#ff6b6b', pitch: 1.25, rate: 1.0, facts: [
      [['hello', 'hola'], '¡Hola! “Hola” means “hello.” Try “¿Cómo estás?” which means “How are you?”'],
      [['thank', 'gracias'], '“Gracias” means “thank you.” You can answer “De nada,” which means “You’re welcome.”']
    ]},
    { name: 'Monsieur Bonjour', subject: 'French', emoji: '🧔', color: '#f06595', pitch: 0.8, rate: 0.95, facts: [
      [['hello', 'bonjour'], '“Bonjour” means “hello” and is used during the day. In the evening, say “bonsoir.”'],
      [['thank', 'merci'], '“Merci” means “thank you.” Add “beaucoup” for “thank you very much.”']
    ]},
    { name: 'Maestro Tempo', subject: 'Music', emoji: '🧑‍🎤', color: '#e599f7', pitch: 1.05, rate: 1.0, facts: [
      [['note', 'scale'], 'A major scale has seven notes: do, re, mi, fa, sol, la, ti, then back to do.'],
      [['rhythm', 'beat', 'tempo'], 'Tempo is how fast a piece is played. It is often measured in beats per minute, or BPM.']
    ]},
    { name: 'Ms. Palette', subject: 'Art', emoji: '👩‍🎨', color: '#ff8787', pitch: 1.35, rate: 1.05, facts: [
      [['color', 'colour'], 'The primary colors are red, yellow, and blue. Mixing them makes the secondary colors: orange, green, and purple.'],
      [['perspective'], 'Linear perspective makes things look smaller as they get farther away, and lines meet at a vanishing point.']
    ]},
    { name: 'Dr. Digit', subject: 'Math', emoji: '👨‍🦳', color: '#FAB005', pitch: 0.9, rate: 0.95, facts: [
      [['pythagor', 'triangle'], 'In a right triangle, a² + b² = c², where c is the longest side, called the hypotenuse.'],
      [['prime'], 'A prime number has exactly two factors: 1 and itself. The first few are 2, 3, 5, 7, and 11.']
    ]},
    { name: 'Mr. Logic', subject: 'Logic & Puzzles', emoji: '👨‍💻', color: '#22b8cf', pitch: 1.0, rate: 1.0, facts: [
      [['and', 'or', 'not', 'boolean'], 'In logic, AND is true only if both inputs are true. OR is true if at least one input is true. NOT flips the value.'],
      [['puzzle', 'riddle'], 'A good way to solve puzzles is to list what you know, then eliminate the options that break a rule.']
    ]},
    { name: 'Dr. Pulse', subject: 'Health & Anatomy', emoji: '👩‍⚕️', color: '#ff5a7a', pitch: 1.1, rate: 1.0, facts: [
      [['heart'], 'The human heart beats about 100,000 times a day and pumps roughly 7,500 liters of blood.'],
      [['sleep', 'brain'], 'Most adults need 7 to 9 hours of sleep a night. Sleep helps the brain store memories.']
    ]},
    { name: 'Ms. Sage', subject: 'Philosophy', emoji: '🧓', color: '#adb5bd', pitch: 0.7, rate: 0.85, facts: [
      [['truth', 'know'], 'Philosophers have long asked what we can truly know. Socrates said that knowing you do not know is a start.'],
      [['good', 'ethic', 'moral'], 'Ethics asks how we should act. Different schools of thought answer this differently.']
    ]},
    { name: 'Dr. Psyche', subject: 'Psychology', emoji: '🧑‍⚕️', color: '#b197fc', pitch: 1.0, rate: 0.95, facts: [
      [['habit'], 'Habits form through repetition. Doing a behavior in the same context again and again makes it automatic.'],
      [['memory', 'remember'], 'Spacing out study sessions helps memory more than cramming, because you practice recall over time.']
    ]},
    { name: 'Ms. Quill', subject: 'Writing', emoji: '👨‍🎨', color: '#fcc419', pitch: 1.2, rate: 1.1, facts: [
      [['essay', 'thesis'], 'A strong essay has a clear thesis, the main claim, and each paragraph supports it with evidence.'],
      [['story', 'plot'], 'Most stories have a setup, a conflict, a climax, and a resolution.']
    ]},
    { name: 'Mr. Terra', subject: 'Geology', emoji: '🧑‍🌾', color: '#a0522d', pitch: 0.8, rate: 0.9, facts: [
      [['rock', 'mineral'], 'There are three main rock types: igneous, sedimentary, and metamorphic. Each forms in a different way.'],
      [['volcano', 'earthquake'], 'Earthquakes and volcanoes mostly happen where tectonic plates meet, at their edges.']
    ]},
    { name: 'Grandmaster Rook', subject: 'Chess', emoji: '🧙', color: '#9775fa', pitch: 0.95, rate: 0.9, facts: [
      [['castle', 'rook'], 'A rook moves in straight lines, any number of squares horizontally or vertically. Castling moves your king to safety.'],
      [['opening', 'start'], 'In the opening, control the center, develop your knights and bishops, and castle early.']
    ]},
    { name: 'Mr. Ledger', subject: 'Economics', emoji: '👨‍💼', color: '#69db7c', pitch: 1.0, rate: 1.0, facts: [
      [['supply', 'demand', 'price'], 'When demand rises and supply stays the same, prices usually go up. When supply rises, prices tend to fall.'],
      [['interest', 'save', 'money'], 'Compound interest means you earn interest on your interest, so savings grow faster the longer they stay invested.']
    ]}
  ];

  const EXTRA = {
    'Ms. Byte': [
      [['loop', 'for', 'while'], 'A loop repeats steps. A for loop runs a set number of times, and a while loop runs as long as a condition stays true.'],
      [['array', 'list'], 'An array is an ordered list of values. You reach each item by its position, and counting starts at 0.'],
      [['if', 'condition'], 'An if statement runs code only when a condition is true. Add else to handle the other case.'],
      [['bug', 'debug'], 'Debugging means finding why code misbehaves. Print values or step through one line at a time.'],
      [['object'], 'An object groups related values under named keys, like {name: "Sam", age: 9}.'],
      [['html'], 'HTML describes a page: headings, paragraphs, and buttons. CSS styles it, and JavaScript makes it interactive.'],
      [['git', 'commit'], 'Git saves snapshots of your project called commits, so you can see its history and undo mistakes.'],
      [['api'], 'An API is a set of rules that lets one program ask another for data or services.']
    ],
    'Dr. Quark': [
      [['newton', 'law'], "Newton's third law says every action has an equal and opposite reaction."],
      [['energy'], 'Energy cannot be created or destroyed, only changed from one form into another.'],
      [['light', 'speed'], 'Light travels at about 300,000 kilometers per second in a vacuum.'],
      [['electric', 'current', 'volt'], 'Voltage pushes electric current through a circuit, and resistance slows the current down.'],
      [['magnet'], 'Magnets have a north and south pole. Opposite poles attract, and matching poles repel.'],
      [['heat', 'temperature'], 'Heat flows from hotter objects to cooler ones until they reach the same temperature.'],
      [['wave', 'sound'], 'Sound is a wave of vibrations moving through matter. Higher frequency means a higher pitch.'],
      [['motion', 'velocity', 'speed'], 'Speed is distance divided by time. Velocity also includes direction.']
    ],
    'Prof. Flask': [
      [['molecule', 'bond'], 'Molecules form when atoms share or transfer electrons to form bonds, as in H2O for water.'],
      [['element', 'periodic'], 'The periodic table lists elements by atomic number, the number of protons in each atom.'],
      [['reaction', 'react'], 'In a chemical reaction, reactants turn into products. Atoms are rearranged, not destroyed.'],
      [['ion'], 'An ion is an atom with a charge, because it has gained or lost electrons.'],
      [['mole'], 'A mole is 6.022 × 10²³ particles, a counting unit that links atoms to grams.'],
      [['gas'], 'Gas particles move fast and far apart. Warming a gas makes its particles move even faster.'],
      [['salt', 'sodium'], 'Table salt is sodium chloride, formed when sodium and chlorine atoms bond.'],
      [['density'], 'Density is mass divided by volume. Objects less dense than water float on it.']
    ],
    'Dr. Fern': [
      [['dna', 'gene'], 'DNA carries the instructions for building and running an organism. Genes are segments of DNA.'],
      [['evolution', 'natural selection'], 'Natural selection favors traits that help organisms survive and reproduce, so those traits spread over generations.'],
      [['ecosystem', 'food chain'], 'An ecosystem includes living things and their environment. Energy flows through food chains from producers to consumers.'],
      [['virus', 'bacteria', 'germ'], 'Bacteria are single-celled living things. Viruses are much smaller and need a host cell to reproduce.'],
      [['mitochondria'], 'Mitochondria release energy from food to power the cell, which is why they are called its powerhouse.'],
      [['immune'], 'Your immune system defends the body from germs using white blood cells and antibodies.'],
      [['heredity', 'inherit'], 'You inherit traits through genes. Each parent passes on one copy of each gene.'],
      [['mammal', 'animal'], 'Mammals have hair and feed their young milk. Birds have feathers, and reptiles have scales.']
    ],
    'Mr. Chronos': [
      [['egypt', 'pyramid'], 'The Great Pyramid of Giza was built around 2560 BCE as a tomb for the pharaoh Khufu.'],
      [['revolution', 'american'], 'The American Revolution, from 1775 to 1783, won independence from Britain and created the United States.'],
      [['medieval', 'middle ages'], 'The Middle Ages lasted roughly from the 5th to the 15th century in Europe.'],
      [['renaissance'], 'The Renaissance was a period of renewed interest in art, science, and learning that began in Italy in the 1300s.'],
      [['cold war'], 'The Cold War was a tense rivalry between the United States and the Soviet Union from about 1947 to 1991.'],
      [['silk road'], 'The Silk Road was a network of trade routes linking China with the Mediterranean world.'],
      [['industrial'], 'The Industrial Revolution moved work from farms and homes into factories, starting in Britain in the late 1700s.'],
      [['ancient', 'civilization'], 'Early civilizations like Mesopotamia, Egypt, and the Indus Valley grew along rivers.']
    ],
    'Ms. Atlas': [
      [['mountain', 'everest'], 'Mount Everest, on the Nepal and China border, is Earth’s highest mountain above sea level, at about 8,849 meters.'],
      [['river', 'nile', 'amazon'], 'The Nile and the Amazon are often named as the longest and largest rivers, though their exact lengths are debated.'],
      [['continent'], 'There are seven continents: Africa, Antarctica, Asia, Australia, Europe, North America, and South America.'],
      [['desert'], 'Antarctica is technically the largest desert, because it gets very little precipitation.'],
      [['climate'], 'Climate is the usual weather in a place over many years. Latitude and altitude strongly shape it.'],
      [['latitude', 'longitude', 'map'], 'Latitude measures north and south of the equator. Longitude measures east and west of the prime meridian.'],
      [['population'], 'India and China are the most populous countries, together home to over a third of all people.'],
      [['island'], 'Greenland is the world’s largest island that is not a continent.']
    ],
    'Prof. Nova': [
      [['moon'], 'The Moon orbits Earth about once every 27 days, and we always see the same side of it.'],
      [['galaxy', 'milky way'], 'The Milky Way is our home galaxy, a spiral of billions of stars, including our Sun.'],
      [['black hole'], 'A black hole has gravity so strong that not even light can escape from it.'],
      [['comet', 'asteroid'], 'Comets are icy bodies that grow tails near the Sun. Asteroids are rocky leftovers from the early solar system.'],
      [['light year', 'distance'], 'A light year is the distance light travels in one year, about 9.46 trillion kilometers.'],
      [['eclipse'], 'A solar eclipse happens when the Moon passes between Earth and the Sun.'],
      [['telescope'], 'Telescopes collect light to see faint objects. Bigger mirrors and lenses gather more light.'],
      [['universe', 'big bang'], 'The Big Bang theory says the universe began about 13.8 billion years ago and has been expanding ever since.']
    ],
    'Señora Luna': [
      [['ser', 'estar', 'verb'], 'In Spanish, ser and estar both mean "to be." Use ser for lasting traits and estar for states and locations.'],
      [['number', 'uno', 'dos'], 'Spanish numbers: uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez.'],
      [['color', 'rojo'], 'Colors in Spanish: rojo (red), azul (blue), verde (green), amarillo (yellow).'],
      [['food', 'comida'], 'Useful food words: pan (bread), agua (water), leche (milk), and manzana (apple).'],
      [['please', 'por favor'], '"Por favor" means "please." Use it when asking for something politely.'],
      [['goodbye', 'adiós'], '"Adiós" means "goodbye." Casually you can say "hasta luego," which means "see you later."'],
      [['yes', 'no', 'sí'], '"Sí" means "yes" and "no" means "no."'],
      [['name', 'llamo'], 'To say your name in Spanish, say "Me llamo" followed by your name, like "Me llamo Ana."']
    ],
    'Monsieur Bonjour': [
      [['please', 'plaît'], '"S\'il vous plaît" means "please." It is the polite way to ask for something.'],
      [['yes', 'oui', 'non'], '"Oui" means "yes" and "non" means "no."'],
      [['number', 'deux', 'trois'], 'French numbers start: un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix.'],
      [['goodbye', 'au revoir'], '"Au revoir" means "goodbye." Use it when you are leaving.'],
      [['name', 'appelle'], 'To say your name in French, say "Je m\'appelle" followed by your name.'],
      [['food', 'pain', 'eau'], 'Some food words: pain (bread), eau (water), fromage (cheese), and pomme (apple).'],
      [['color', 'rouge', 'bleu'], 'Colors in French: rouge (red), bleu (blue), vert (green), jaune (yellow).'],
      [['how are you', 'comment'], '"Comment allez-vous?" means "How are you?" A common reply is "Très bien, merci," meaning "Very well, thanks."']
    ],
    'Maestro Tempo': [
      [['chord'], 'A chord is three or more notes played together. Major chords sound bright, and minor chords sound more somber.'],
      [['key signature', 'key'], 'The key signature shows which notes are sharp or flat throughout a piece.'],
      [['time signature', '4/4', 'meter'], 'A time signature like 4/4 means four beats per measure, with a quarter note getting one beat.'],
      [['sharp', 'flat'], 'A sharp raises a note by a half step. A flat lowers it by a half step.'],
      [['octave'], 'An octave is the distance from one note to the next note with the same name, and it doubles the frequency.'],
      [['instrument', 'piano', 'guitar'], 'A piano has 88 keys. A standard guitar has six strings, tuned E, A, D, G, B, E.'],
      [['melody'], 'A melody is a sequence of single notes that forms the main tune of a song.'],
      [['harmony'], 'Harmony is notes played together in a pleasing way, usually built from chords.']
    ],
    'Ms. Palette': [
      [['shade', 'tint', 'tone'], 'A tint is a color with white added. A shade is a color with black added.'],
      [['contrast'], 'Contrast is the difference between light and dark or between colors. It helps the eye find what matters.'],
      [['composition', 'thirds'], 'The rule of thirds splits an image into a 3×3 grid. Placing key subjects on the lines makes a picture balanced.'],
      [['warm', 'cool'], 'Warm colors like red and orange feel energetic. Cool colors like blue and green feel calm.'],
      [['sketch', 'draw'], 'Start drawing with basic shapes: circles, squares, and triangles, then build the details on top.'],
      [['complementary'], 'Complementary colors sit opposite each other on the color wheel, like blue and orange.'],
      [['texture'], 'Texture is how a surface looks or feels. Artists show it with brushstrokes, lines, and shading.'],
      [['impression'], 'Impressionist painters used visible brushstrokes to capture light and movement.']
    ],
    'Dr. Digit': [
      [['fraction'], 'A fraction shows part of a whole. To add fractions, make the denominators match first.'],
      [['percent', '%'], 'Percent means per hundred. To find 25% of 80, multiply 80 by 0.25 to get 20.'],
      [['area'], 'Area is the space inside a shape. A rectangle’s area is length times width.'],
      [['perimeter'], 'Perimeter is the distance around a shape. Add up all of its sides.'],
      [['equation', 'solve'], 'To solve for x, do the same operation to both sides until x is alone.'],
      [['multiply', 'times', '×'], 'Multiplication is repeated addition: 4 × 3 means 4 added three times, which is 12.'],
      [['divide', 'division'], 'Division splits a number into equal groups. 12 ÷ 3 = 4, because 3 groups of 4 make 12.'],
      [['average', 'mean'], 'The mean is the sum of the numbers divided by how many numbers there are.']
    ],
    'Mr. Logic': [
      [['pattern', 'sequence'], 'To find a pattern, look at how each term changes from the one before it.'],
      [['sudoku'], 'In Sudoku, each row, column, and 3×3 box must contain 1 to 9 with no repeats. Start with cells that have only one possible number.'],
      [['venn'], 'A Venn diagram shows how groups overlap. The middle section holds things that belong to both groups.'],
      [['if then', 'implies'], 'If A then B means that whenever A is true, B must be true. But B being true does not prove A.'],
      [['truth table'], 'A truth table lists every combination of true and false inputs to show a statement’s output.'],
      [['binary', 'bit'], 'Binary uses only 0 and 1. Each place doubles, so 101 in binary equals 5.'],
      [['deduce', 'clue'], 'To deduce, start with the strictest clues, then rule out the options they cannot be.'],
      [['fallacy'], 'A fallacy is a flawed argument, such as attacking the person instead of answering their point.']
    ],
    'Dr. Pulse': [
      [['exercise', 'workout'], 'Adults should aim for about 150 minutes of moderate exercise a week, plus strength work twice a week.'],
      [['water', 'hydrat'], 'Drinking water helps regulate body temperature and blood pressure. Thirst is a good signal to drink.'],
      [['breath', 'lung'], 'Your lungs swap oxygen and carbon dioxide. Slow, deep breathing can help calm your body.'],
      [['bone', 'skeleton'], 'Adults have 206 bones. Babies have more, and some fuse together as they grow.'],
      [['food', 'nutrition', 'vegetable'], 'A balanced plate includes vegetables, fruit, whole grains, lean protein, and healthy fats.'],
      [['stress'], 'Short-term stress can help you focus. Long-term stress can affect sleep, mood, and heart health.'],
      [['wash', 'hand'], 'Washing your hands with soap for about 20 seconds removes germs effectively.'],
      [['muscle'], 'Muscles work in pairs. One contracts while the other relaxes to move a joint.']
    ],
    'Ms. Sage': [
      [['plato'], 'Plato wrote dialogues in which Socrates questions people to search for the truth.'],
      [['mind', 'consciousness'], 'Philosophers debate whether the mind is the same thing as the brain.'],
      [['free will'], 'Free will asks whether we truly choose our actions, or whether earlier events cause them.'],
      [['meaning'], 'Existentialists argue that people create meaning through the choices they make.'],
      [['argument', 'logic'], 'A valid argument has a conclusion that follows from its premises. A sound argument is valid and has true premises.'],
      [['beauty'], 'Philosophers ask whether beauty is in the object or in the experience of the viewer.'],
      [['justice', 'fair'], 'Justice often means giving each person what they are due, though people disagree about what that is.'],
      [['why'], 'Asking why again and again is a classic way to dig deeper into any idea.']
    ],
    'Dr. Psyche': [
      [['emotion', 'feel'], 'Emotions are short reactions to events. Naming a feeling can help reduce its intensity.'],
      [['motivation', 'goal'], 'Small, specific goals are easier to stick with than vague, big ones.'],
      [['dream'], 'Many dreams happen during REM sleep, a stage of the sleep cycle with rapid eye movements.'],
      [['anxiety', 'worry'], 'Anxiety is a normal response to threat. Slow breathing and facing fears in small steps can help.'],
      [['personality'], 'Personality traits like openness are measured on spectrums, not as all-or-nothing types.'],
      [['pavlov', 'conditioning'], 'Classical conditioning pairs a neutral cue with a meaningful event until the cue alone triggers a response.'],
      [['friend', 'social'], 'People tend to like others who are similar to them and who show interest in them.'],
      [['confidence', 'self-esteem'], 'Self-esteem grows from doing what you set out to do and finishing it.']
    ],
    'Ms. Quill': [
      [['paragraph'], 'A good paragraph starts with a topic sentence, adds supporting details, and ends by tying it all together.'],
      [['verb', 'adjective', 'noun'], 'Nouns name things, verbs show action, and adjectives describe nouns.'],
      [['punctuation', 'comma'], 'Use a comma to separate items in a list, and before a joining word between two complete sentences.'],
      [['character'], 'Strong characters want something and face obstacles to get it.'],
      [['show', 'tell'], 'Show, don’t tell means letting actions and details reveal feelings instead of stating them.'],
      [['poem', 'rhyme'], 'A poem can rhyme or not. Rhythm and imagery matter as much as rhyme.'],
      [['revise', 'edit', 'draft'], 'Revision means rewriting for clarity. Reading your work aloud helps you catch awkward sentences.'],
      [['hook', 'opening'], 'A strong opening hook grabs the reader with a question, a surprising fact, or a vivid image.']
    ],
    'Mr. Terra': [
      [['fossil'], 'Fossils are preserved remains or traces of ancient life, usually found in sedimentary rock.'],
      [['layer', 'crust', 'mantle', 'core'], 'Earth has layers: the crust, the mantle, the outer core, and the inner core.'],
      [['erosion', 'weather'], 'Erosion wears rock away with water, wind, and ice, and carries the sediment to new places.'],
      [['tectonic', 'plate'], 'Tectonic plates are huge slabs of Earth’s crust that slowly drift on the mantle.'],
      [['diamond', 'gem'], 'Diamonds form deep underground under extreme heat and pressure, from carbon atoms.'],
      [['cave', 'limestone'], 'Caves often form in limestone, when slightly acidic water slowly dissolves the rock.'],
      [['mountain'], 'Mountains like the Himalayas form when tectonic plates collide and push up the crust.'],
      [['time', 'age', 'date'], 'Geologists use rock layers and fossils to date events, going back billions of years.']
    ],
    'Grandmaster Rook': [
      [['pawn'], 'Pawns move forward one square, or two on their first move. They capture diagonally.'],
      [['bishop'], 'Bishops move diagonally any number of squares, and each stays on the same color all game.'],
      [['knight'], 'Knights move in an L shape and can jump over other pieces.'],
      [['queen'], 'The queen is the strongest piece. It moves like a rook and a bishop combined.'],
      [['checkmate', 'check'], 'Checkmate happens when the king is attacked and has no legal move to escape.'],
      [['endgame'], 'In the endgame, the king becomes active and helps push pawns toward promotion.'],
      [['stalemate', 'draw'], 'Stalemate is a draw: a player has no legal moves but is not in check.'],
      [['fork'], 'A fork is when one piece attacks two enemy pieces at once.']
    ],
    'Mr. Ledger': [
      [['inflation'], 'Inflation is a general rise in prices over time, so each dollar buys less.'],
      [['budget'], 'A budget lists your income and expenses so you can plan where money goes.'],
      [['trade', 'import', 'export'], 'Trade lets countries specialize. Each exports what it makes efficiently and imports what it does not.'],
      [['opportunity cost', 'scarcity'], 'Opportunity cost is what you give up when you choose one option over another.'],
      [['stock', 'share'], 'A share of stock is a small piece of ownership in a company.'],
      [['gdp'], 'GDP measures the total value of goods and services a country produces in a year.'],
      [['loan', 'debt', 'credit'], 'A loan must be paid back with interest. Paying only the minimum on a credit card can make debt grow fast.'],
      [['tax'], 'Taxes fund public services like roads, schools, and emergency services.']
    ]
  };
  TEACHERS.forEach(t => { t.facts = t.facts.concat(EXTRA[t.name] || []); });

  const overlay = document.getElementById('tchOverlay');
  const grid = document.getElementById('tchGrid');
  const chat = document.getElementById('tchChat');
  const logEl = document.getElementById('tchLog');
  const faceEl = document.getElementById('tchFace');
  const nameEl = document.getElementById('tchName');
  const subEl = document.getElementById('tchSub');
  const callBtn = document.getElementById('tchCall');
  const form = document.getElementById('tchForm');
  const input = document.getElementById('tchInput');
  const camEl = document.getElementById('tchCam');
  const micEl = document.getElementById('tchMic');
  const callScreen = document.getElementById('callScreen');
  const csFace = document.getElementById('csFace');
  const csName = document.getElementById('csName');
  const csSub = document.getElementById('csSub');
  const csStatus = document.getElementById('csStatus');
  const csTimer = document.getElementById('csTimer');
  const csCam = document.getElementById('csCam');
  const csMic = document.getElementById('csMic');
  let micOff = false;
  let timerHandle = null;
  let callSeconds = 0;

  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const GOOD_VOICE = /premium|enhanced|natural|neural|google|samantha|daniel|karen|moira|serena|tessa/i;

  let current = null;
  let onCall = false;
  let speaking = false;
  let voices = [];
  let recog = null;
  let camStream = null;

  function loadVoices() {
    if (!('speechSynthesis' in window)) return;
    const all = speechSynthesis.getVoices();
    const en = all.filter(v => /^en/i.test(v.lang));
    const good = en.filter(v => GOOD_VOICE.test(v.name));
    voices = (good.length ? good : en).concat(all.filter(v => !en.includes(v)));
  }
  if ('speechSynthesis' in window) {
    speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
  }

  let lastSpoken = '';
  let speakEndedAt = 0;

  function afterSpeech() {
    speaking = false;
    speakEndedAt = Date.now();
    setMic(onCall);
    if (onCall) startListening();
  }

  function speak(text, t) {
    if (!('speechSynthesis' in window) || (window.Arcade && Arcade.isMuted())) {
      afterSpeech();
      return;
    }
    stopListening();
    speechSynthesis.cancel();
    lastSpoken = text;
    const u = new SpeechSynthesisUtterance(text);
    const idx = TEACHERS.indexOf(t);
    if (voices.length) u.voice = voices[idx % voices.length];
    u.pitch = t.pitch;
    u.rate = t.rate;
    speaking = true;
    setMic(false, true);
    u.onend = afterSpeech;
    u.onerror = afterSpeech;
    speechSynthesis.speak(u);
  }

  function setMic(listening, talking) {
    if (!micEl) return;
    micEl.hidden = !onCall;
    micEl.textContent = talking ? '🔊 Teacher speaking…' : '🎤 Listening…';
    if (csStatus) {
      csStatus.textContent = !onCall ? '' : talking ? '🔊 Speaking…' : micOff ? 'Mic off — tap Mic on to talk' : '🎤 Listening…';
    }
  }

  function startListening() {
    if (!SR) {
      if (csStatus && onCall) csStatus.textContent = "This browser can't listen to speech. Try Chrome, Edge, or Safari.";
      return;
    }
    if (!onCall || speaking || micOff) return;
    if (!recog) {
      recog = new SR();
      recog.lang = 'en-US';
      recog.continuous = false;
      recog.interimResults = false;
      recog.onresult = (e) => {
        const text = e.results[0][0].transcript.trim();
        if (!text) return;
        // Ignore the mic hearing the teacher's own voice (echo), which caused loops.
        if (Date.now() - speakEndedAt < 2000) return;
        if (lastSpoken && lastSpoken.toLowerCase().includes(text.toLowerCase())) return;
        sendMessage(text, true);
      };
      recog.onend = () => {
        if (onCall && !speaking) setTimeout(startListening, 300);
      };
      recog.onerror = (e) => {
        const msgs = {
          'not-allowed': 'Mic blocked. Click the lock icon in the address bar and allow the microphone.',
          'service-not-allowed': 'Speech recognition is blocked by this browser. Try Chrome or Safari.',
          'no-speech': 'I did not hear anything. Tap Mic on and try again.',
          'audio-capture': 'No microphone found.',
          'network': 'Speech recognition needs an internet connection.'
        };
        if (csStatus && onCall) csStatus.textContent = msgs[e.error] || `Mic error: ${e.error}`;
      };
    }
    try { recog.start(); } catch (e) { /* already running */ }
  }

  function stopListening() {
    if (recog) {
      try { recog.onend = null; recog.abort(); } catch (e) { /* ignore */ }
      recog = null;
    }
  }

  async function startCam() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return;
    try {
      const mic = await navigator.mediaDevices.getUserMedia({ audio: true });
      mic.getTracks().forEach(t => t.stop());
    } catch (e) {
      if (csStatus) csStatus.textContent = 'Mic blocked. Allow the microphone for this site, then try again.';
    }
    try {
      camStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      camEl.srcObject = camStream;
      camEl.hidden = false;
      csCam.srcObject = camStream;
      csCam.hidden = false;
    } catch (e) {
      addBubble('them', "I can't see you yet because camera access was blocked. We can still talk!");
    }
  }

  function stopCam() {
    if (camStream) camStream.getTracks().forEach(t => t.stop());
    camStream = null;
    camEl.srcObject = null;
    camEl.hidden = true;
    csCam.srcObject = null;
    csCam.hidden = true;
  }

  let lastFallback = -1;

  function answer(t, text) {
    const q = text.toLowerCase();
    for (const [keys, reply] of t.facts) {
      if (keys.some(k => q.includes(k))) return reply;
    }
    const fallbacks = [
      `That's a great question about ${t.subject}! I only have a few lessons loaded right now, so try asking me about ${t.facts[0][0][0]}.`,
      `Let's keep going with ${t.subject}. Ask me about ${t.facts[1] ? t.facts[1][0][0] : t.facts[0][0][0]} and I'll explain.`,
      `I'm still learning this one. Try a different ${t.subject} question, or ask about ${t.facts[0][0][0]}.`
    ];
    fallbacks.push(`Interesting! Ask me about ${t.facts[0][0][0]} or ${t.facts[t.facts.length - 1][0][0]}.`);
    fallbacks.push(`Tell me what part of ${t.subject} you're curious about, and I'll do my best.`);
    fallbacks.push(`Good thinking! Try asking me something specific, like ${t.facts[0][0][0]}.`);
    lastFallback = (lastFallback + 1) % fallbacks.length;
    return fallbacks[lastFallback];
  }

  function addBubble(who, text) {
    const div = document.createElement('div');
    div.className = 'tch-bubble ' + who;
    div.textContent = text;
    logEl.appendChild(div);
    logEl.scrollTop = logEl.scrollHeight;
  }

  function sendMessage(text, spoken) {
    if (!current) return;
    addBubble('me', text);
    const reply = answer(current, text);
    setTimeout(() => {
      addBubble('them', reply);
      if (onCall) speak(reply, current);
    }, 350);
  }

  function renderGrid() {
    grid.innerHTML = '';
    TEACHERS.forEach(t => {
      const card = document.createElement('button');
      card.className = 'tch-card';
      card.style.setProperty('--c', t.color);
      card.innerHTML = `<div class="tch-face-big">${t.emoji}</div><b></b><span></span>`;
      card.querySelector('b').textContent = t.name;
      card.querySelector('span').textContent = t.subject;
      card.addEventListener('click', () => openChat(t));
      grid.appendChild(card);
    });
  }

  function openChat(t) {
    current = t;
    endCall(false);
    grid.hidden = true;
    chat.hidden = false;
    faceEl.textContent = t.emoji;
    faceEl.style.setProperty('--c', t.color);
    nameEl.textContent = t.name;
    subEl.textContent = t.subject + ' teacher';
    logEl.innerHTML = '';
    addBubble('them', `Hi! I'm ${t.name}, your ${t.subject} teacher. Message me or hit Call to talk out loud.`);
    input.focus();
  }

  function closeChat() {
    endCall(false);
    chat.hidden = true;
    grid.hidden = false;
    current = null;
  }

  function startCall() {
    if (!current) return;
    onCall = true;
    micOff = false;
    csMic.textContent = '🎤 Mic on';
    callBtn.textContent = '📴 Hang up';
    callBtn.classList.add('live');
    csFace.textContent = current.emoji;
    csFace.style.setProperty('--c', current.color);
    csName.textContent = current.name;
    csSub.textContent = current.subject + ' teacher';
    callSeconds = 0;
    csTimer.textContent = '0:00';
    clearInterval(timerHandle);
    timerHandle = setInterval(() => {
      callSeconds++;
      csTimer.textContent = `${Math.floor(callSeconds / 60)}:${String(callSeconds % 60).padStart(2, '0')}`;
    }, 1000);
    callScreen.hidden = false;
    startCam();
    speak(`Hi! This is ${current.name}. I can hear you now, so ask me anything about ${current.subject}.`, current);
  }

  function endCall(speakBye) {
    if (!onCall) return;
    onCall = false;
    clearInterval(timerHandle);
    callScreen.hidden = true;
    callBtn.textContent = '📞 Call';
    callBtn.classList.remove('live');
    stopListening();
    stopCam();
    speaking = false;
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    setMic(false);
    if (speakBye && current) addBubble('them', 'Call ended. Keep learning!');
  }

  callBtn.addEventListener('click', () => (onCall ? endCall(true) : startCall()));
  document.getElementById('csEnd').addEventListener('click', () => endCall(true));
  csMic.addEventListener('click', () => {
    micOff = !micOff;
    csMic.textContent = micOff ? '🔇 Mic off' : '🎤 Mic on';
    if (micOff) {
      stopListening();
      setMic(true);
    } else {
      setMic(true);
      startListening();
    }
  });
  document.getElementById('tchBack').addEventListener('click', closeChat);
  document.getElementById('tchClose').addEventListener('click', () => { closeChat(); overlay.hidden = true; });
  overlay.addEventListener('click', (e) => { if (e.target === overlay) { closeChat(); overlay.hidden = true; } });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !overlay.hidden) { closeChat(); overlay.hidden = true; } });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    sendMessage(text, false);
  });

  const csForm = document.getElementById('csForm');
  const csInput = document.getElementById('csInput');
  csForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = csInput.value.trim();
    if (!text) return;
    csInput.value = '';
    sendMessage(text, false);
  });

  ['teachersBtn', 'teachersNav'].forEach(id => {
    document.getElementById(id).addEventListener('click', () => {
      renderGrid();
      closeChat();
      overlay.hidden = false;
    });
  });
})();
