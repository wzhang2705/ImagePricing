const descriptions = [
    {
        "title":"Strawberries and Currants",
        "artist": "Pieter Claesz",
        "description":"This piece was generated using this following prompt: painting by pieter claesz, basket with fruits on table, lovecraftian, realism, painting, silver plates and cutlery",
        "artist_description":"Pieter Claesz was a Dutch painter who achieved a striking simplicity and atmospheric quality in still-life representations. Avoiding the crowded compositions and strong local colouring of the Mannerist tradition, he concentrated on the monochrome “breakfast piece,” the depiction of a simple meal set near the corner of a table.",
        "value":"1,500,000 CAD"
    },
    {
        "title":"The Coming Darkness",
        "artist": "Noah Bradley",
        "description":"This piece was generated using this following prompt: digital landscape painting by noah bradley, seige of castle, fantasy, last stand, armies, magic --ar 3:2",
        "artist_description":"Noah Bradley is an artist known for his work on Dungeons & Dragons, Magic: The Gathering and his The Sin of Man project. In 2020 he admitted to multiple incidents of sexual misconduct, resulting in Wizards of the Coast and Fantasy Flight Games, among others, stating they condemned Bradley's actions and would cut all ties with him.",
        "value":"50 CAD"
    },
    {
        "title":"Our Grasp of Heaven",
        "artist": "Noah Bradley",
        "description":"This piece contains some of the most ground-breaking improvements in Bradley's art at the time, and it is one of many entries in pieces that are a part of the artist's world \"The Sin of Man\".",
        "artist_description":"Noah Bradley is an artist known for his work on Dungeons & Dragons, Magic: The Gathering and his The Sin of Man project. In 2020 he admitted to multiple incidents of sexual misconduct, resulting in Wizards of the Coast and Fantasy Flight Games, among others, stating they condemned Bradley's actions and would cut all ties with him.",
        "value":"50 CAD"
    },
    {
        "title":"GODZILLA: HISTORY'S GREATEST MONSTER Cover",
        "artist": "Bob Eggleton",
        "description":"This piece was generated using this following prompt: outer space giant glowing red moon with sci-fi spaceships and asteroids, glowing stars, oil painting --ar 2",
        "artist_description":"Fine artist/painter Bob Eggleton is a successful science fiction, fantasy and landscape artist. Winner of 9 Hugo Awards, 12 Chesley Awards, The 1999 Skylark Award and 2 Locus Awards his art can be seen on many magazines and books. He has won nine Hugo awards for his depiction of sci-fi and horror themed art, particularly his favorite subject, Godzilla. ",
        "value":"9000 CAD"
    },
    {
        "title":"Asleep in the Library",
        "artist": "Abigail Larson",
        "description":"This piece was generated using this following prompt: asleep in the library, abigail larson, --ar 2:3",
        "artist_description":"Hugo Award winning illustrator Abigail Larson specializes in dark fantasy illustration using a unique mix of traditional and digital media. She's worked with Netflix, Disney Publishing, Sideshow Collectibles, SYFY, Universal, Titan Comics, Llewellyn Worldwide, DC/Vertigo, and Dark Horse. Abigail has illustrated three tarot decks, \"The Dark Wood Tarot\", \"The Nightmare Before Christmas Tarot\", and \"The Horror Tarot\"",
        "value":"20 CAD"
    },
    {
        "title":"North Shore, Lake Superior",
        "artist": "Lawren Stewart Harris",
        "description":"This piece was generated using this following prompt: group of seven painting by lawren harris of rocky landscape, trees, clouds",
        "artist_description":"Canadian artist Lawren Stewart Harris is best known as a member of the Group of Seven, and is considered the main driving force that brought together and joined the varying talents and temperaments which formed the Group. He was also the founder of the now famous Canadian Group of Painters which succeeded the Group of Seven in 1933.",
        "value":"1,000,000 CAD"
    },
    {
        "title":"Silver and Glassware",
        "artist": "Pieter Claesz",
        "description":"Ontbijt of silver and glassware on a draped table, with vines, fruits and baked goods",
        "artist_description":"Pieter Claesz was a Dutch painter who achieved a striking simplicity and atmospheric quality in still-life representations. Avoiding the crowded compositions and strong local colouring of the Mannerist tradition, he concentrated on the monochrome “breakfast piece,” the depiction of a simple meal set near the corner of a table.",
        "value":"100,000 CAD"
    },
    {
        "title":"Mountain and Glacier",
        "artist": "Lawren Stewart Harris",
        "description":"This piece was generated using this following prompt: group of seven painting by lawren harris of mountain and glacier --ar 3:2",
        "artist_description":"Canadian artist Lawren Stewart Harris is best known as a member of the Group of Seven, and is considered the main driving force that brought together and joined the varying talents and temperaments which formed the Group. He was also the founder of the now famous Canadian Group of Painters which succeeded the Group of Seven in 1933.",
        "value":"4,600,000 CAD"
    },
    {
        "title":"Mary Shelley and Her Creation",
        "artist": "Abigail Larson",
        "description":"This piece was generated using this following prompt: mary shelley and her creation, abigail larson, --ar 2:3",
        "artist_description":"Hugo Award winning illustrator Abigail Larson specializes in dark fantasy illustration using a unique mix of traditional and digital media. She's worked with Netflix, Disney Publishing, Sideshow Collectibles, SYFY, Universal, Titan Comics, Llewellyn Worldwide, DC/Vertigo, and Dark Horse. Abigail has illustrated three tarot decks, \"The Dark Wood Tarot\", \"The Nightmare Before Christmas Tarot\", and \"The Horror Tarot\"",
        "value":"20 CAD"
    },
    {
        "title":"Sunburst in the Riesengebirge",
        "artist": "Caspar David Friedrich",
        "description":"This piece was generated using this following prompt: sunburst in the riesengebirge, caspar david friedrich, --ar 2:3",
        "artist_description":"Caspar David Friedrich was a 19th-century German Romantic landscape painter, generally considered the most important German artist of his generation. He is best known for his mid-period allegorical landscapes, which typically feature contemplative figures silhouetted against night skies, morning mists, barren trees or Gothic ruins. His primary interest was the contemplation of nature, and his often symbolic and anti-classical work seeks to convey a subjective, emotional response to the natural world.",
        "value":"940,000 CAD"
    },
    {
        "title":"Dragon Spring",
        "artist": "Bob Eggleton",
        "description":"This piece was generated using this following prompt: fantasy world with dragons and dark grey mountains and dark blue oceans with mystic cloudy skies, comic book cover style, muted colourful --ar 2:1",
        "artist_description":"Fine artist/painter Bob Eggleton is a successful science fiction, fantasy and landscape artist. Winner of 9 Hugo Awards, 12 Chesley Awards, The 1999 Skylark Award and 2 Locus Awards his art can be seen on many magazines and books. He has won nine Hugo awards for his depiction of sci-fi and horror themed art, particularly his favorite subject, Godzilla.",
        "value":"7000 CAD"
    },
    {
        "title":"Asleep in the Library",
        "artist": "Abigail Larson",
        "description":"The artists shares the description: \"One more recent piece from my \"Beauty and the Beast\" side project!\"",
        "artist_description":"Hugo Award winning illustrator Abigail Larson specializes in dark fantasy illustration using a unique mix of traditional and digital media. She's worked with Netflix, Disney Publishing, Sideshow Collectibles, SYFY, Universal, Titan Comics, Llewellyn Worldwide, DC/Vertigo, and Dark Horse. Abigail has illustrated three tarot decks, \"The Dark Wood Tarot\", \"The Nightmare Before Christmas Tarot\", and \"The Horror Tarot\"",
        "value":"20 CAD"
    },
    {
        "title":"GODZILLA: HISTORY'S GREATEST MONSTER Cover",
        "artist": "Bob Eggleton",
        "description":"The painting features five of Godzilla's most awesome enemies, Rodan, Hedorah, Gigan, Space Godzilla, and Anguirus, and of course, the king himself. This masterpiece was produced as a wraparound cover and finished in acrylic on canvas by Bob Eggleton. Published in 2014, it's a joy to behold due to its detail and bold colors.",
        "artist_description":"Fine artist/painter Bob Eggleton is a successful science fiction, fantasy and landscape artist. Winner of 9 Hugo Awards, 12 Chesley Awards, The 1999 Skylark Award and 2 Locus Awards his art can be seen on many magazines and books. He has won nine Hugo awards for his depiction of sci-fi and horror themed art, particularly his favorite subject, Godzilla. ",
        "value":"9000 CAD"
    },
    {
        "title":"Our Grasp of Heaven",
        "artist": "Noah Bradley",
        "description":"This piece was generated using this following prompt: digital painting by noah bradley, fantasy landscape, ancient civilization, nature, magic, otherworldly --ar 4:3",
        "artist_description":"Noah Bradley is an artist known for his work on Dungeons & Dragons, Magic: The Gathering and his The Sin of Man project. In 2020 he admitted to multiple incidents of sexual misconduct, resulting in Wizards of the Coast and Fantasy Flight Games, among others, stating they condemned Bradley's actions and would cut all ties with him.",
        "value":"50 CAD"
    },
    {
        "title":"Strawberries and Currants",
        "artist": "Pieter Claesz",
        "description":"Strawberries, currants and bread on a pewter platter, a roemer filled with wine, strawberries, cherries and currants in a porcelain bowl, a cheese basket, bread, nuts, a tazza, a silver knife and a knife-case, on a partly draped table",
        "artist_description":"Pieter Claesz was a Dutch painter who achieved a striking simplicity and atmospheric quality in still-life representations. Avoiding the crowded compositions and strong local colouring of the Mannerist tradition, he concentrated on the monochrome “breakfast piece,” the depiction of a simple meal set near the corner of a table.",
        "value":"1,500,000 CAD"
    },
    {
        "title":"Mountain and Glacier",
        "artist": "Lawren Stewart Harris",
        "description":"This oil on canvas painting is a distinct representation of the Group of Seven style of painting popularized in Canada in the early 20th century. Lawren Harris created this painting in 1930 to depict northen Canadian landscapes.",
        "artist_description":"Canadian artist Lawren Stewart Harris is best known as a member of the Group of Seven, and is considered the main driving force that brought together and joined the varying talents and temperaments which formed the Group. He was also the founder of the now famous Canadian Group of Painters which succeeded the Group of Seven in 1933.",
        "value":"4,600,000 CAD"
    },
    {
        "title":"Mary Shelley and Her Creation",
        "artist": "Abigail Larson",
        "description":"The artists shares the description: \"Today's Drawlloween prompt is Mary Shelley! This year is the 200th anniversary of Mary Shelley's 1818 novel, \"Frankenstein; or The Modern Prometheus\" which she wrote at just eighteen years old!\""
        ,"artist_description":"Hugo Award winning illustrator Abigail Larson specializes in dark fantasy illustration using a unique mix of traditional and digital media. She's worked with Netflix, Disney Publishing, Sideshow Collectibles, SYFY, Universal, Titan Comics, Llewellyn Worldwide, DC/Vertigo, and Dark Horse. Abigail has illustrated three tarot decks, \"The Dark Wood Tarot\", \"The Nightmare Before Christmas Tarot\", and \"The Horror Tarot\"",
        "value":"20 CAD"
    },
    {
        "title":"The Coming Darkness",
        "artist": "Noah Bradley",
        "description":"This piece, inspired by Lord of the Rings, is a depiction of the darkness that precedes the coming of the forces of Mordor to Minas Tirith (the white city). The orcs of Mordor are sapped of strength in the daylight, so Sauron darkens the sky for them to fight in twilight.",
        "artist_description":"Noah Bradley is an artist known for his work on Dungeons & Dragons, Magic: The Gathering and his The Sin of Man project. In 2020 he admitted to multiple incidents of sexual misconduct, resulting in Wizards of the Coast and Fantasy Flight Games, among others, stating they condemned Bradley's actions and would cut all ties with him.",
        "value":"50 CAD"
    },
    {
        "title":"Landscape with Mountain Lake, Morning",
        "artist": "Caspar David Friedrich",
        "description":"This piece was generated using this following prompt: landscape with mountain lake, morning, caspar david friedrich, --ar 2:3",
        "artist_description":"Caspar David Friedrich was a 19th-century German Romantic landscape painter, generally considered the most important German artist of his generation. He is best known for his mid-period allegorical landscapes, which typically feature contemplative figures silhouetted against night skies, morning mists, barren trees or Gothic ruins. His primary interest was the contemplation of nature, and his often symbolic and anti-classical work seeks to convey a subjective, emotional response to the natural world.",
        "value":"4,000,000 CAD"
    },
    {
        "title":"Silver and Glassware",
        "artist": "Pieter Claesz",
        "description":"This piece was generated using this following prompt: oil painting by pieter claesz, glass and silverware on table, bread, grapes, charcuterie, neutral tones --ar 3:2",
        "artist_description":"Pieter Claesz was a Dutch painter who achieved a striking simplicity and atmospheric quality in still-life representations. Avoiding the crowded compositions and strong local colouring of the Mannerist tradition, he concentrated on the monochrome “breakfast piece,” the depiction of a simple meal set near the corner of a table.",
        "value":"100,000 CAD"
    },
    {
        "title":"Sunburst in the Riesengebirge",
        "artist": "Caspar David Friedrich",
        "description":"Sunlight bursts over distant hills as a blue sky dispels gathering storm clouds. The hut at top left indicates a human presence within this vast landscape. Caspar David Friedrich based this scene on the Riesengebirge, a mountain range on the present-day border of the Czech Republic and Poland. Friedrich hiked in this area in 1810, nearly 25 years before he painted this work. Elements of the landscape held strong symbolism for Friedrich and his audience. The fir tree represented life and vitality; the dead tree, mortality; and the illuminated hills, an aspiration toward the promise of eternity.",
        "artist_description":"Caspar David Friedrich was a 19th-century German Romantic landscape painter, generally considered the most important German artist of his generation. He is best known for his mid-period allegorical landscapes, which typically feature contemplative figures silhouetted against night skies, morning mists, barren trees or Gothic ruins. His primary interest was the contemplation of nature, and his often symbolic and anti-classical work seeks to convey a subjective, emotional response to the natural world.",
        "value":"940,000 CAD"
    },
    {
        "title":"Dragon Spring",
        "artist": "Bob Eggleton",
        "description":"Inspired by Magic: the Gathering, this piece depicts a green dragon in a wooded landscape surrounded by mountain waterfalls and a small pond. \"They're mythical, great animals, and we don't know if they're related to dinosaurs or some other kind of other animal. We just really don't know where they came from. They appeal to our psyche and to our love of mythology. And I think it's great when you don't explain where these things come from,\" artist Bob Eggleton says.",
        "artist_description":"Fine artist/painter Bob Eggleton is a successful science fiction, fantasy and landscape artist. Winner of 9 Hugo Awards, 12 Chesley Awards, The 1999 Skylark Award and 2 Locus Awards his art can be seen on many magazines and books. He has won nine Hugo awards for his depiction of sci-fi and horror themed art, particularly his favorite subject, Godzilla. ",
        "value":"7000 CAD"
    },
    {
        "title":"North Shore, Lake Superior",
        "artist": "Lawren Stewart Harris",
        "description":"North Shore, Lake Superior, an oil on canvas painting created in 1926, depicts the grand landscape of Lake Surperior, one of the great lakes in Canada. It is one of the most notable works of Lawren Harris, a prominent artist from the famous Group of Seven. With the piece, Harris aims to capture the dramatic, simplified compusure of rocks, water, and light, to bring out a more spiritual quality to the overall landscape.",
        "artist_description":"Canadian artist Lawren Stewart Harris is best known as a member of the Group of Seven, and is considered the main driving force that brought together and joined the varying talents and temperaments which formed the Group. He was also the founder of the now famous Canadian Group of Painters which succeeded the Group of Seven in 1933.",
        "value":"1,000,000 CAD"
    },
    {
        "title":"Landscape with Mountain Lake, Morning",
        "artist": "Caspar David Friedrich",
        "description":"Landscape with Mountain Lake, Morning is an exemplary image of landscape painting of the Romantic era, expressing mood and meaning through landscape. A lone wanderer in a frock coat, dwarfed by the expanse of the lake and the mountains beyond, pauses for a moment and, leaning on his stick, takes in the vista. His lonely silhouette is counterbalanced by three upright firs, his only other company three cattle on the gently undulating pastureland.",
        "artist_description":"Caspar David Friedrich was a 19th-century German Romantic landscape painter, generally considered the most important German artist of his generation. He is best known for his mid-period allegorical landscapes, which typically feature contemplative figures silhouetted against night skies, morning mists, barren trees or Gothic ruins. His primary interest was the contemplation of nature, and his often symbolic and anti-classical work seeks to convey a subjective, emotional response to the natural world.",
        "value":"4,000,000 CAD"
    }
]

export default descriptions;