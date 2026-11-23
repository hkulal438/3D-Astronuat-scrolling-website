/**
 * Every word on the page. Astronaut Space is a fictional lunar travel
 * company — a portfolio piece designed and built by Hrithika. The footer
 * carries that credit.
 */

export const brand = {
  name: 'Astronaut Space',
  wordmark: 'ASTRONAUT SPACE',
  // `.example` is a reserved domain, so the form never mails a real stranger.
  // Swap in a real inbox if this site ever takes real enquiries.
  email: 'reservations@astronautspace.example',
  credit: 'Designed & built by Hrithika',
};

export const nav = [
  {label: 'Log', href: '#log'},
  {label: 'Trajectory', href: '#trajectory'},
  {label: 'Missions', href: '#missions'},
  {label: 'FAQ', href: '#faq'},
  {label: 'Reserve', href: '#reserve'},
];

export const hero = {
  title: 'EARTHRISE',
  kicker: 'Private lunar expeditions',
  site: 'Landing site · Mare Tranquillitatis · 0.67°N 23.47°E',
};

export const intro = {
  eyebrow: 'Mission log',
  heading: 'The first holiday that leaves the planet.',
  body: 'Three days out, a week on the surface, and one view nobody has ever forgotten. This is the trip, frame by frame.',
};

export const log = [
  {tag: 'T−0', title: 'Launch', body: 'Nine minutes of thunder, then silence and the curve of the Earth.', image: '/media/cards/m1-launch.webp'},
  {tag: 'Day 3', title: 'Lunar orbit', body: 'The far side scrolls past the window. Your hand on the glass.', image: '/media/cards/m2-orbit.webp'},
  {tag: 'Day 4', title: 'Base Tranquillity', body: 'Pressurised domes, a hot meal, and a skylight pointed home.', image: '/media/cards/m3-base.webp'},
  {tag: 'Day 5', title: 'First steps', body: 'Footprints that will outlast every building you have ever seen.', image: '/media/cards/m4-walk.webp'},
];

/** Legs of the Earth → Moon trajectory, in drawing order. */
export const trajectory = {
  eyebrow: 'Trajectory',
  heading: '384,400 km, drawn as you scroll.',
  legs: [
    {day: 'Day 0', title: 'Parking orbit', body: 'Two laps of the Earth while the crew and craft are checked.'},
    {day: 'Day 0', title: 'Trans-lunar injection', body: 'A six-minute burn and you are on your way. No turning back for three days.'},
    {day: 'Day 3', title: 'Lunar orbit insertion', body: 'The engine fires behind the Moon, out of contact with Earth. Then: capture.'},
    {day: 'Day 4', title: 'Descent', body: 'Twelve minutes from orbit to the dust of Tranquillity.'},
  ],
};

/** The numbers strip under the trajectory. */
export const facts = {
  eyebrow: 'The flight',
  items: [
    {value: '4', unit: 'seats', label: 'per capsule, every one by a window'},
    {value: '3', unit: 'days', label: 'from launch pad to lunar orbit'},
    {value: '1/6', unit: 'g', label: 'on the surface — you’ll weigh a sixth of yourself'},
    {value: '14', unit: 'weeks', label: 'of training, from first briefing to suit-up'},
  ],
};

export const missions = {
  eyebrow: 'Missions',
  heading: 'Three ways to leave.',
  note: 'Durations include launch and splashdown.',
  items: [
    {name: 'Orbiter', days: 6, lines: ['Two lunar orbits', 'Far-side flyover', 'Earthrise from orbit'], cta: 'Join the Orbiter list'},
    {name: 'Lander', days: 10, lines: ['Four nights at Base Tranquillity', 'Two surface EVAs', 'Earthrise from the surface'], cta: 'Join the Lander list', featured: true},
    {name: 'Resident', days: 28, lines: ['A full lunar day and night', 'Rover traverse to the highlands', 'Science crew rotation'], cta: 'Join the Resident list'},
  ],
};

export const faq = {
  eyebrow: 'Questions',
  heading: 'Before you pack.',
  items: [
    {
      q: 'Do I need to be an astronaut?',
      a: 'No. Every crew member goes through fourteen weeks of training with us — centrifuge runs, suit drills, emergency procedures and a lot of sitting very still. If you can climb three flights of stairs, you can start.',
    },
    {
      q: 'What are the health requirements?',
      a: 'A full medical with our flight surgeons before training begins, and another before launch. Most healthy adults between 18 and 70 qualify; we’ll tell you early if something needs a closer look.',
    },
    {
      q: 'What does it cost?',
      a: 'Pricing depends on the mission class and launch window. Join the manifest and we’ll send the full brochure, with pricing, when your window opens for booking.',
    },
    {
      q: 'Can I bring anything with me?',
      a: 'Each traveller gets a personal kit of 1.5 kg — photos, a book, a small keepsake. Everything flies through a safety check, and everything comes home with you.',
    },
    {
      q: 'What if the launch is delayed?',
      a: 'Launches move for weather and safety, and they always will. Your seat is held for the next window at no extra cost, and your training stays current for two years.',
    },
  ],
};

export const reserve = {
  eyebrow: 'Reserve',
  heading: 'Put your name on the manifest.',
  body: 'No payment, no commitment. We’ll write when the next window opens.',
  /** Next launch window for the countdown (the Apollo 11 anniversary). */
  window: '2031-07-20T20:17:00Z',
  windowLabel: 'Next launch window',
};
