export const manifest = {
  screens: {
    scr_cr904o: { name: "Home", route: "/", position: { "x": 0, "y": 0 }, isDefaultRow: true },
    scr_o7uiyo: { name: "Plan My Trip", route: "/plan-my-trip", position: { "x": 160, "y": 1820 } },
    scr_3p1iod: { name: "Airport Services", route: "/airport-services", position: { "x": 1560, "y": 1820 } },
    scr_5kam8f: { name: "Accommodation", route: "/accommodation", position: { "x": 2960, "y": 1820 } },
    scr_rehnoj: { name: "Safaris & Experiences", route: "/safaris", position: { "x": 4360, "y": 1820 } },
    scr_ve0p9q: { name: "Kenya Travel Guide", route: "/travel-guide", position: { "x": 160, "y": 3800 } },
    scr_c65ku7: { name: "Article", route: "/travel-guide/first-time-visiting-kenya", position: { "x": 1560, "y": 3800 } },
    scr_nl06y2: { name: "About Us", route: "/about", position: { "x": 160, "y": 5780 } },
    scr_t70nq9: { name: "Contact", route: "/contact", position: { "x": 1560, "y": 5780 } }
  },
  sections: {
    sec_naakrh: { name: "Trip Planning Flow", x: 0, y: 1600, width: 5720, height: 1180 },
    sec_ab5zi5: { name: "Travel Guide", x: 0, y: 3580, width: 2920, height: 1180 },
    sec_pmoowy: { name: "Company Info", x: 0, y: 5560, width: 2920, height: 1180 }
  },
  layers: [
  { kind: "screen", id: "scr_cr904o" },
  { kind: "section", id: "sec_naakrh", children: [
    { kind: "screen", id: "scr_o7uiyo" },
    { kind: "screen", id: "scr_3p1iod" },
    { kind: "screen", id: "scr_5kam8f" },
    { kind: "screen", id: "scr_rehnoj" }]
  },
  { kind: "section", id: "sec_ab5zi5", children: [
    { kind: "screen", id: "scr_ve0p9q" },
    { kind: "screen", id: "scr_c65ku7" }]
  },
  { kind: "section", id: "sec_pmoowy", children: [
    { kind: "screen", id: "scr_nl06y2" },
    { kind: "screen", id: "scr_t70nq9" }]
  }]

};