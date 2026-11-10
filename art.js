/* =====================================================================
   DAY 30: THE DRAWINGS. Parcels, postcards and snapshots, all in code.
   ===================================================================== */
(() => {
const PAPER = {
  kraft:    { a: '#D8B48A', b: '#C29A6E', lid: '#E2C29B' },
  lavender: { a: '#C9BBE0', b: '#AE9DCC', lid: '#D6CAEA' },
  cream:    { a: '#F3E8D3', b: '#DDCFB4', lid: '#F9F0DF' },
  pink:     { a: '#E8C3C1', b: '#D2A2A3', lid: '#F0D2D0' },
  plum:     { a: '#6A4F86', b: '#55406E', lid: '#7A5E98' },
  stripe:   { a: '#F3E8D3', b: '#DDCFB4', lid: '#F9F0DF', stripe: '#C9BBE0' },
};
const RIBBON = { lav: ['#9C86C4', '#7E68A8'], plum: ['#5B4380', '#45325F'], gold: ['#C9A256', '#A7843D'], pink: ['#D69AA6', '#B87C89'], twine: ['#9B7A55', '#7D603F'] };
const SIZE = { box: [70, 52, 13], tall: [56, 70, 12], wide: [88, 40, 12], flat: [84, 30, 11], round: [66, 50, 12] };
let uid = 0;

/* A parcel. open = already unwrapped (lid aside, ribbon gone, tissue peeking). */
function parcel(look, open = false) {
  const p = PAPER[look.paper] || PAPER.kraft, r = RIBBON[look.ribbon] || RIBBON.lav, [w, h, lh] = SIZE[look.shape] || SIZE.box;
  const id = 'pp' + (uid++), x = 60 - w / 2, y = 112 - h, round = look.shape === 'round', twine = look.ribbon === 'twine';
  const rw = twine ? 2.4 : 7;
  const pattern = look.paper === 'stripe' ? `<pattern id="${id}" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><rect width="10" height="10" fill="${p.a}"/><rect width="4" height="10" fill="${p.stripe}"/></pattern>` : '';
  const fill = pattern ? `url(#${id})` : p.a;
  const body = round
    ? `<path d="M${x} ${y + 4}v${h - 10}a${w / 2} 7 0 0 0 ${w} 0v-${h - 10}" fill="${fill}"/><ellipse cx="60" cy="${y + 4}" rx="${w / 2}" ry="7" fill="${p.b}"/>`
    : `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2.500" fill="${fill}"/><rect x="${x}" y="${y}" width="${w}" height="5" fill="${p.b}" opacity=".55"/>`;
  const shade = round ? '' : `<rect x="${x + w - 9}" y="${y}" width="9" height="${h}" fill="#3A2830" opacity=".08"/>`;
  const stamp = (look.shape === 'box' || look.shape === 'wide') ? `<g transform="translate(${x + 6} ${y + h - 21})"><rect width="15" height="17" rx="1" fill="#FBF6EC" stroke="#FBF6EC" stroke-width="2" stroke-dasharray="1.400 1.400"/><rect x="2.500" y="2.500" width="10" height="9" fill="${look.paper === 'plum' ? '#E8C3C1' : '#B7A7CF'}"/></g><g fill="none" stroke="#5B4340" stroke-opacity=".38" stroke-width=".9"><circle cx="${x + 27}" cy="${y + h - 13}" r="7"/><path d="M${x + 21} ${y + h - 15}q6-3 12 0M${x + 21} ${y + h - 11}q6 3 12 0"/></g>` : '';
  const strapV = `<rect class="strap" x="${60 - rw / 2}" y="${y}" width="${rw}" height="${h}" fill="${r[0]}"/>`;
  const strapH = round ? '' : `<rect class="strap" x="${x}" y="${y + h * .52 - rw / 2}" width="${w}" height="${rw}" fill="${r[0]}"/>`;
  const lid = round
    ? `<g class="lid"><path d="M${x - 3} ${y - 3}v${lh - 4}a${w / 2 + 3} 7 0 0 0 ${w + 6} 0v-${lh - 4}" fill="${p.lid}"/><ellipse cx="60" cy="${y - 3}" rx="${w / 2 + 3}" ry="7" fill="${p.lid}"/><ellipse cx="60" cy="${y - 3}" rx="${w / 2 + 3}" ry="7" fill="#FFF" opacity=".18"/><rect class="strap" x="${60 - rw / 2}" y="${y - 10}" width="${rw}" height="${lh + 6}" fill="${r[0]}"/></g>`
    : `<g class="lid"><rect x="${x - 3}" y="${y - lh + 3}" width="${w + 6}" height="${lh}" rx="2" fill="${p.lid}"/><rect x="${x - 3}" y="${y + 1}" width="${w + 6}" height="2.200" fill="#3A2830" opacity=".12"/><rect class="strap" x="${60 - rw / 2}" y="${y - lh + 3}" width="${rw}" height="${lh}" fill="${r[0]}"/></g>`;
  const by = round ? y - 8 : y - lh + 3;
  const bow = twine
    ? `<g class="bow"><path d="M60 ${by}c-9-9-15-3-9 1s9-1 9-1c9-9 15-3 9 1s-9-1-9-1" fill="none" stroke="${r[0]}" stroke-width="2.200"/><path d="M60 ${by}l-5 10M60 ${by}l6 9" stroke="${r[0]}" stroke-width="2" fill="none"/></g>`
    : `<g class="bow"><path d="M60 ${by}c-17-15-30-8-24 1 5 7 18 4 24-1Z" fill="${r[0]}" stroke="${r[1]}" stroke-width="1.200"/><path d="M60 ${by}c17-15 30-8 24 1-5 7-18 4-24-1Z" fill="${r[0]}" stroke="${r[1]}" stroke-width="1.200"/><path class="tail" d="M58 ${by + 1}c-4 6-9 12-14 15l4 1M62 ${by + 1}c4 6 9 12 14 15l-4 1" fill="none" stroke="${r[0]}" stroke-width="4" stroke-linecap="round"/><rect x="55" y="${by - 4}" width="10" height="8" rx="3" fill="${r[1]}"/></g>`;
  const tissue = `<g class="tissue"><path d="M${60 - w * .38} ${y + 2}l${w * .14} -16 ${w * .12} 12 ${w * .14} -18 ${w * .1} 14 ${w * .12} -11 ${w * .16} 9Z" fill="#FBF6EC"/><path d="M${60 - w * .3} ${y + 2}l${w * .18} -11 ${w * .2} 8 ${w * .2} -12 ${w * .12} 15Z" fill="#E7DDF0"/></g>`;
  const shadow = `<ellipse cx="60" cy="113" rx="${w / 2 + 8}" ry="4" fill="#3A2830" opacity=".2"/>`;
  return `<svg viewBox="0 0 120 120" aria-hidden="true" class="${open ? 'isopen' : ''}"><defs>${pattern}</defs>${shadow}${open ? tissue : ''}${body}${shade}${strapV}${strapH}${stamp}${open ? '' : tissue}${lid}${bow}</svg>`;
}

const S = 'fill="none" stroke="#5B4380" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
/* Little drawings for postcards and snapshots: 80 x 60. */
const DRAW = {
  city: `<rect width="80" height="60" fill="#E9DCEF"/><circle cx="62" cy="15" r="7" fill="#F4CE8F"/><path d="M4 60V34h10v-8h8v34M26 60V22h12v38M42 60V30l7-6 7 6v30M60 60V36h14v24" fill="#B7A7CF"/><path d="M8 40h2M8 46h2M30 28h2M34 28h2M30 34h2M34 40h2M47 34h4M64 42h2M68 48h2" stroke="#FBF6EC" stroke-width="2"/>`,
  food: `<rect width="80" height="60" fill="#F6E1D3"/><path d="M16 32h48a24 18 0 0 1-48 0Z" fill="#FBF6EC" stroke="#9B7A55" stroke-width="2"/><path d="M22 32c6-6 14-6 20-1s12 4 16-1" fill="none" stroke="#E2A35A" stroke-width="3"/><path d="M34 8c-4 5 4 7 0 12M44 6c-4 5 4 7 0 12" ${S} stroke="#B7A7CF"/><path d="M56 8 66 30M62 6l8 22" stroke="#7B5F4C" stroke-width="2.400" stroke-linecap="round"/>`,
  stories: `<rect width="80" height="60" fill="#EFE6D5"/><path d="M12 18c10-4 20-4 28 2v32c-8-6-18-6-28-2Z" fill="#FBF6EC" stroke="#7B5F4C" stroke-width="1.800"/><path d="M68 18c-10-4-20-4-28 2v32c8-6 18-6 28-2Z" fill="#FBF6EC" stroke="#7B5F4C" stroke-width="1.800"/><path d="M18 26h14M18 32h12M48 26h14M50 32h12" stroke="#B7A7CF" stroke-width="2" stroke-linecap="round"/><path d="M58 6l2 5 5 1-5 2-2 5-2-5-5-2 5-1Z" fill="#D2A85A"/>`,
  compass: `<rect width="80" height="60" fill="#E3E7EF"/><circle cx="40" cy="30" r="20" fill="#FBF6EC" stroke="#7B5F4C" stroke-width="2"/><path d="M40 13 45 30 40 47 35 30Z" fill="#B7A7CF"/><path d="M40 13 45 30H35Z" fill="#D69AA6"/><circle cx="40" cy="30" r="2.400" fill="#5B4380"/>`,
  mountain: `<rect width="80" height="60" fill="#F1E2D8"/><path d="M0 60 26 24l14 18 12-14 28 32Z" fill="#B7A7CF"/><path d="M26 24l7 9-5-2-4 4-3-5Z" fill="#FBF6EC"/><path d="M40 60c2-8 10-10 12-18" fill="none" stroke="#FBF6EC" stroke-width="2" stroke-dasharray="3 3"/><path d="M52 28v-12l8 4-8 4" fill="#D2A85A" stroke="#7B5F4C" stroke-width="1.200"/>`,
  cups: `<rect width="80" height="60" fill="#F3E3DE"/><path d="M0 46h80v14H0Z" fill="#E0C7AE"/><path d="M14 26h20v14a6 6 0 0 1-6 6h-8a6 6 0 0 1-6-6Z" fill="#FBF6EC" stroke="#7B5F4C" stroke-width="1.800"/><path d="M34 30c6 0 6 8 0 8" ${S} stroke="#7B5F4C"/><path d="M46 26h20v14a6 6 0 0 1-6 6h-8a6 6 0 0 1-6-6Z" fill="#C9BBE0" stroke="#7B5F4C" stroke-width="1.800"/><path d="M66 30c6 0 6 8 0 8" ${S} stroke="#7B5F4C"/><path d="M22 20c-3-4 3-6 0-10M56 20c-3-4 3-6 0-10" ${S} stroke="#B7A7CF"/>`,
  foodstop: `<rect width="80" height="60" fill="#EFE3D3"/><path d="M14 22h52l-6-12H20Z" fill="#D69AA6"/><path d="M14 22h52" stroke="#B87C89" stroke-width="2"/><path d="M24 10l-2 12M36 10v12M48 10l1 12M58 10l3 12" stroke="#FBF6EC" stroke-width="2"/><rect x="18" y="22" width="44" height="26" fill="#FBF6EC" stroke="#7B5F4C" stroke-width="1.800"/><circle cx="30" cy="54" r="4" fill="#7B5F4C"/><circle cx="52" cy="54" r="4" fill="#7B5F4C"/><path d="M28 34h24" stroke="#E2A35A" stroke-width="3" stroke-linecap="round"/>`,
  walk: `<rect width="80" height="60" fill="#E7E2EE"/><path d="M0 46c20-6 50-8 80-4v18H0Z" fill="#D8CDE6"/>${[[14, 44], [24, 38], [36, 40], [46, 33], [58, 35], [68, 28]].map(([x, y], i) => `<ellipse cx="${x}" cy="${y}" rx="3" ry="4.500" fill="${i % 2 ? '#7E68A8' : '#D69AA6'}" transform="rotate(${i % 2 ? 20 : 10} ${x} ${y})"/>`).join('')}`,
  bench: `<rect width="80" height="60" fill="#EFE8D9"/><circle cx="62" cy="14" r="6" fill="#F4CE8F"/><path d="M12 30h56M12 36h56" stroke="#9B7A55" stroke-width="4" stroke-linecap="round"/><path d="M16 36v14M64 36v14M20 22v8M60 22v8M14 22h52" stroke="#7B5F4C" stroke-width="2.400" stroke-linecap="round"/><path d="M0 52h80" stroke="#C9BBA4" stroke-width="3"/>`,
  laugh: `<rect width="80" height="60" fill="#F5E6DC"/><circle cx="28" cy="30" r="15" fill="#FBF6EC" stroke="#7B5F4C" stroke-width="1.800"/><circle cx="54" cy="30" r="15" fill="#E7DDF0" stroke="#7B5F4C" stroke-width="1.800"/><path d="M20 26q3-3 6 0M31 26q3-3 6 0M46 26q3-3 6 0M57 26q3-3 6 0" ${S} stroke="#5B4340"/><path d="M21 33q7 9 14 0ZM47 33q7 9 14 0Z" fill="#D69AA6" stroke="#5B4340" stroke-width="1.600"/>`,
  send: `<rect width="80" height="60" fill="#E9E0F0"/><rect x="8" y="22" width="16" height="28" rx="3" fill="#4A3760"/><rect x="56" y="22" width="16" height="28" rx="3" fill="#4A3760"/><rect x="10" y="25" width="12" height="20" rx="1.500" fill="#DCCFE8"/><rect x="58" y="25" width="12" height="20" rx="1.500" fill="#DCCFE8"/><path d="M24 24c8-18 24-18 32 0" fill="none" stroke="#B7A7CF" stroke-width="1.600" stroke-dasharray="3 3"/><path d="M40 9c-4-3-7 0-5 3l5 4 5-4c2-3-1-6-5-3Z" fill="#D69AA6"/>`,
  wait: `<rect width="80" height="60" fill="#EEE5D6"/><circle cx="58" cy="20" r="11" fill="#FBF6EC" stroke="#7B5F4C" stroke-width="1.800"/><path d="M58 13v7l5 3" ${S} stroke="#5B4340"/><path d="M14 30h20v8H14ZM16 38v14M32 38v14M14 30V16" stroke="#9B7A55" stroke-width="3" stroke-linecap="round" fill="#D8B48A"/><path d="M44 52h28" stroke="#C9BBA4" stroke-width="3"/>`,
  evening: `<rect width="80" height="60" fill="#3E3155"/><rect x="10" y="10" width="30" height="34" rx="2" fill="#5B4A78" stroke="#8F7BB0" stroke-width="2"/><path d="M25 10v34M10 27h30" stroke="#8F7BB0" stroke-width="2"/><path d="M33 16a5 5 0 1 0 2 8 6 6 0 0 1-2-8Z" fill="#F4E2B0"/><path d="M56 30h16l-4 10h-8Z" fill="#F4CE8F"/><path d="M64 40v10M58 50h12" stroke="#C9A256" stroke-width="2.400" stroke-linecap="round"/><ellipse cx="64" cy="38" rx="20" ry="16" fill="#F4CE8F" opacity=".14"/>`,
};

/* the counter's little things */
const BELL = `<svg viewBox="0 0 60 44" aria-hidden="true"><ellipse cx="30" cy="40" rx="24" ry="4" fill="#3A2830" opacity=".2"/><rect x="6" y="34" width="48" height="6" rx="2" fill="#9B7A55"/><path d="M12 34a18 18 0 0 1 36 0Z" fill="#D9B46A"/><path d="M18 28a12 12 0 0 1 10-10" fill="none" stroke="#F6E2B0" stroke-width="2.400" stroke-linecap="round"/><circle cx="30" cy="14" r="3.200" fill="#B8954E"/></svg>`;
const STAMP = `<svg viewBox="0 0 50 56" aria-hidden="true"><ellipse cx="25" cy="52" rx="18" ry="3.500" fill="#3A2830" opacity=".2"/><rect x="8" y="38" width="34" height="12" rx="2" fill="#7B5F4C"/><rect x="21" y="18" width="8" height="20" fill="#9B7A55"/><ellipse cx="25" cy="14" rx="10" ry="9" fill="#6A4F86"/></svg>`;
const LETTERS = `<svg viewBox="0 0 80 46" aria-hidden="true"><g transform="rotate(-6 40 30)"><rect x="8" y="14" width="60" height="30" rx="2" fill="#E8C3C1"/><path d="M8 15l30 15 30-15" fill="none" stroke="#C99D9E" stroke-width="1.400"/></g><g transform="rotate(4 40 24)"><rect x="12" y="8" width="60" height="30" rx="2" fill="#FBF6EC"/><path d="M12 9l30 15 30-15" fill="none" stroke="#D8CBB4" stroke-width="1.400"/><circle cx="42" cy="23" r="3.400" fill="#9C86C4"/></g></svg>`;

window.ART = { parcel, DRAW, BELL, STAMP, LETTERS };
})();
