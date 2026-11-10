/* =====================================================================
   DAY 30: THE DELIVERIES. Every word on the page lives here.
   Change text freely. Keep the quotes around each line.

   Inside each package, things appear from top to bottom:
   big       a line in larger type                   { big: "..." }
   line      a softer line                           { line: "..." }
   h         a stand-out line                        { h: "..." }
   note      a handwritten annotation                { note: "..." }
   wait      a pause, in milliseconds                { wait: 1200 }
   slips     little paper slips                      { slips: ["...", "..."] }
   postcards tiny postcards. draw = which drawing    { postcards: [{ text: "...", draw: "city" }] }
             to use your own picture instead, add img: "folder/picture.jpg"
   snaps     tiny snapshots, no words. alt = what    { snaps: [{ draw: "cups", alt: "..." }] }
             the drawing shows, read aloud by screen readers (img works here too)
   empty     the box looks empty for a moment        { empty: true }
   glow      a glowing card                          { glow: "..." }
   wishes    a list that appears one by one          { wishes: ["...", "..."] }

   look picks the wrapping: shape (box, tall, wide, flat, round), paper
   (kraft, lavender, cream, pink, plum, stripe) and ribbon (lav, plum,
   gold, pink, twine).
   ===================================================================== */
window.DAY30 = {
  opening: {
    day: "DAY 30",
    title: "THINGS I HOPE YOU GET TO EXPERIENCE",
    sub: "“not things you need. just things i hope life is kind enough to give you.”",
    label: "SPECIAL DELIVERY FOR: AMMU",
    selfish: "“some of these are for you. some of them are selfish.”",
    button: "open the delivery room →",
  },
  back: "back to the room",

  packages: [
    {
      label: "FOR WHEN YOU NEED A BREAK",
      look: { shape: "box", paper: "kraft", ribbon: "lav" },
      blocks: [
        { big: "“I hope you get a day where absolutely nothing is waiting for you.”" },
        { line: "“no company things." }, { line: "no work things." }, { line: "no community things." }, { line: "no ‘i'll just do this one quick thing.’”" },
        { big: "“just sleep. eat properly. disappear for a bit. exist.”" },
        { note: "“yes, I am prescribing you an irresponsible amount of sleep.”" },
        { wait: 900 },
        { big: "“and if I'm around, I'm probably stealing a little bit of that peaceful day for myself too.”" },
      ],
    },
    {
      label: "FOR THE DAY YOU REALISE YOU BUILT IT",
      look: { shape: "tall", paper: "lavender", ribbon: "gold" },
      blocks: [
        { big: "“I hope one day you stop, look at something you built, and have that tiny…”" },
        { wait: 700 },
        { h: "“wait. i actually made this.”" },
        { line: "“I want you to have that feeling.”" },
        { line: "“and when you do, I hope I get to look at you being ridiculously proud of yourself and think…”" },
        { wait: 700 },
        { h: "“yep. I DID IT!!!.” 💜" },
      ],
    },
    {
      label: "FOR A RANDOM TUESDAY",
      look: { shape: "flat", paper: "cream", ribbon: "twine" },
      blocks: [
        { big: "“I hope you get a completely normal Tuesday that somehow becomes one of your favourite days.”" },
        { slips: ["good food.", "a stupid conversation.", "something unexpectedly funny.", "a peaceful evening.", "a really good night's sleep.", "someone making you smile."] },
        { big: "“nothing particularly important.”" },
        { big: "“just one of those days where life quietly feels nice.”" },
        { wait: 700 },
        { big: "“and maybe, somewhere in that ordinary Tuesday, there's a tiny ‘hey Ammu’ from me.”" },
      ],
    },
    {
      label: "FOR THE LIFE YOU'RE BUILDING",
      look: { shape: "wide", paper: "plum", ribbon: "gold" },
      blocks: [
        { big: "“I hope the life you're building becomes bigger than the version of it you can currently imagine.”" },
        { line: "“more freedom." }, { line: "more choices." }, { line: "more adventures." }, { line: "more things you're proud of.”" },
        { big: "“but not so busy that you forget how to enjoy it.”" },
        { big: "“I want you to have a life you're excited to wake up to…”" },
        { wait: 1100 },
        { big: "“…and one where there's still room for me to randomly show up and annoy you.”" },
      ],
    },
    {
      label: "FOR YOUR NEXT ADVENTURE",
      look: { shape: "box", paper: "stripe", ribbon: "plum" },
      blocks: [
        { big: "“I hope life takes you places you've never seen.”" },
        { postcards: [
          { text: "“new cities.”", draw: "city" },
          { text: "“new food.”", draw: "food" },
          { text: "“ridiculous stories.”", draw: "stories" },
          { text: "“unexpected adventures.”", draw: "compass" },
          { text: "“places you never thought you'd end up.”", draw: "mountain" },
        ] },
        { big: "“and selfishly…”" },
        { wait: 1100 },
        { h: "“I hope I get to be there for some of them.”" },
        { note: "“preferably causing at least 23% of the ridiculous stories.” 💜" },
      ],
    },
    {
      label: "FOR YOUR HOME",
      look: { shape: "round", paper: "pink", ribbon: "lav" },
      blocks: [
        { big: "“I hope you get a place that feels completely, unmistakably yours.”" },
        { line: "“somewhere you can shut the door, put your things down, breathe, and think…”" },
        { h: "“yeah. this is mine.”" },
        { big: "“somewhere peaceful.”" },
        { wait: 1100 },
        { big: "“and maybe, on some days, somewhere I get to come home to too.”" },
      ],
    },
    {
      label: "FOR THE PEOPLE WHO LOVE YOU",
      look: { shape: "tall", paper: "cream", ribbon: "pink" },
      blocks: [
        { big: "“I hope you always have people who see the effort behind what you do.”" },
        { line: "“the things you build.”" }, { line: "“the things you carry quietly.”" }, { line: "“the things you fix.”" }, { line: "“the things you do without announcing them.”" },
        { big: "“I hope you get people who notice.”" },
        { wait: 900 },
        { big: "“and I hope you never forget that at least one person already does.”" },
      ],
    },
    {
      label: "FOR YOUR SILLY SIDE",
      look: { shape: "box", paper: "lavender", ribbon: "pink" },
      blocks: [
        { big: "“I hope you never become too busy, successful, responsible, or grown-up to be completely stupid sometimes.”" },
        { line: "“keep the nonsense.”" }, { line: "“keep the weird jokes.”" }, { line: "“keep the ridiculous smiles.”" }, { line: "“keep being annoying.”" },
        { big: "“because honestly, I have absolutely no intention of becoming too mature for you either.” " },
        { note: "“someone has to keep the nonsense department running.”" },
      ],
    },
    {
      label: "FOR THE DAYS WE DON'T PLAN",
      look: { shape: "flat", paper: "pink", ribbon: "lav" },
      soft: true,
      blocks: [
        { snaps: [
          { draw: "cups", alt: "two cups on a table" },
          { draw: "foodstop", alt: "a random food stop" },
          { draw: "walk", alt: "walking somewhere" },
          { draw: "bench", alt: "sitting somewhere doing absolutely nothing" },
          { draw: "laugh", alt: "laughing at something stupid" },
          { draw: "send", alt: "sending each other something from across the room" },
          { draw: "wait", alt: "one person waiting while the other finishes something" },
          { draw: "evening", alt: "a quiet evening" },
        ] },
        { big: "“I hope we get lots of days that weren't supposed to become memories.”" },
        { big: "“the random ones.”" },
        { big: "“the boring ones.”" },
        { big: "“the ‘what are we even doing?’ ones.”" },
        { big: "“the days where nothing special happened…”" },
        { wait: 1400 },
        { h: "“…except that I was with you.”" },
      ],
    },
    {
      label: "FOR WHEN LIFE GETS REALLY GOOD",
      look: { shape: "wide", paper: "kraft", ribbon: "gold" },
      blocks: [
        { big: "“I hope there are moments in your life where you suddenly realise…”" },
        { wait: 700 },
        { h: "“oh. this is it.”" },
        { line: "“a dream finally working.”" }, { line: "“something you've worked for finally happening.”" }, { line: "“a place you've always wanted to see.”" }, { line: "“a ridiculous celebration.”" }, { line: "“a completely unexpected happy day.”" },
        { big: "“and I hope when those moments happen, you have someone beside you who knows exactly how much it took to get there.”" },
        { wait: 1100 },
        { h: "“I'd really like to be that person.” 💜" },
      ],
    },
    {
      label: "FOR THE FUTURE YOU",
      look: { shape: "round", paper: "lavender", ribbon: "gold" },
      blocks: [
        { big: "“I hope future-you gets to look back at current-you and feel ridiculously proud.”" },
        { big: "“not just because of what you achieved.”" },
        { big: "“because of the person you stayed while building it.”" },
        { big: "“and I hope future-you still has the same stupid smile sometimes.”" },
        { note: "please retain this feature. " },
      ],
    },
    {
      label: "FOR ALL THE THINGS WE HAVEN'T EVEN IMAGINED YET",
      look: { shape: "box", paper: "cream", ribbon: "gold" },
      blocks: [
        { empty: true },
        { glow: "“something we can't write down yet.”" },
        { big: "“because there are good things waiting in the future that neither of us knows about yet.”" },
        { big: "“places we haven't been.”" },
        { big: "“memories we haven't made.”" },
        { big: "“jokes we haven't invented.”" },
        { big: "“ordinary days we haven't lived.”" },
        { big: "“little versions of us we haven't met yet.”" },
        { wait: 1100 },
        { h: "“I kind of love that we don't know them yet.”" },
      ],
    },
  ],

  /* Appears once all the packages above are open. */
  last: {
    label: "FOR AMMU — OPEN LAST",
    blocks: [
      { big: "“I know I can't control what life gives you.”" },
      { big: "“I can't predict every twist, every place you'll end up, or exactly what the next few years will look like.”" },
      { big: "“but if I could send little wishes ahead of you…”" },
      { wait: 1500 },
      { h: "“I'd send these.”" },
      { wishes: ["a life you're proud of.", "work that excites you.", "people who see you.", "places that surprise you.", "days that feel peaceful.", "ridiculous amounts of sleep.", "reasons to laugh.", "adventures worth remembering.", "ordinary days that somehow become favourites."] },
      { wait: 900 },
      { h: "“and lots of moments where you don't have to wonder whether someone is happy to be there beside you.”" },
      { wait: 1800 },
      { glow: "“because I am.” 💜" },
    ],
  },

  /* Appears after that, very small. */
  kanmani: {
    label: "FROM: KANMANI",
    blocks: [
      { big: "“okay fine.”" },
      { big: "“I hope I get to be there for a stupidly large amount of this.”" },
      { line: "“the big things.”" }, { line: "“the little things.”" }, { line: "“the adventures.”" }, { line: "“the boring Tuesdays.”" }, { line: "“the celebrations.”" }, { line: "“the sleepy days.”" }, { line: "“all of it.”" },
      { wait: 900 },
      { h: "“basically, I am reserving a suspicious amount of future space. ”" },
    ],
  },

  end: {
    day: "DAY 30",
    title: "delivery complete.",
    sub: ["“some wishes are for you.", "some are secretly for us.”"],
    bye: "“see you tomorrow, Ammu. 💜”",
  },
};
