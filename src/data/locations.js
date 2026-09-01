/**
 * UK Location data for Kensley Aesthetics location pages.
 * Each entry drives /locations/:slug with fully tailored SEO + copy.
 *
 * Fields
 * ──────
 * slug          URL segment  e.g. "newcastle-upon-tyne"
 * name          Display name e.g. "Newcastle upon Tyne"
 * county        County / ceremonial county
 * council       Local authority / council name
 * region        English region or nation
 * distanceMiles Approx. miles from the Jesmond clinic (0 = home city)
 * heroHeadline  H1 displayed in the page hero
 * intro         2–3 sentence opening, location-specific
 * body          Longer paragraph with local context + travel note
 * cta           Short closing call-to-action line
 * nearbyAreas   Array of local neighbourhoods / towns to mention
 */

export const LOCATIONS = [
  /* ═══════════════════════════════════════════
     NORTH EAST ENGLAND — primary catchment
  ═══════════════════════════════════════════ */
  {
    slug: 'newcastle-upon-tyne',
    name: 'Newcastle upon Tyne',
    county: 'Tyne and Wear',
    council: 'Newcastle City Council',
    region: 'North East England',
    distanceMiles: 0,
    heroHeadline: 'Premier Aesthetic Clinic in Newcastle',
    intro:
      'Kensley Aesthetics is based right here in Newcastle upon Tyne — in the beautiful neighbourhood of Jesmond — making us your closest doctor-led aesthetic clinic. Whether you live in Gosforth, Heaton, Jesmond itself, or anywhere across the city, world-class aesthetic care is never far away.',
    body:
      'Newcastle is our home, and we are proud to serve its vibrant, discerning community. From the bustling Quayside to the leafy residential streets of Ponteland and Brunton Park, clients across Newcastle trust Dr. Tiru Matla for results that look natural and feel transformative. Our Jesmond clinic is easily accessible by Metro, bus, or car, with parking available nearby.',
    cta: 'Book your Newcastle consultation with Dr. Matla today — we look forward to welcoming you.',
    nearbyAreas: ['Jesmond', 'Gosforth', 'Heaton', 'Fenham', 'Ponteland', 'Quayside', 'Brunton Park'],
  },
  {
    slug: 'gateshead',
    name: 'Gateshead',
    county: 'Tyne and Wear',
    council: 'Gateshead Council',
    region: 'North East England',
    distanceMiles: 3,
    heroHeadline: 'Aesthetic Treatments for Gateshead',
    intro:
      'Just across the iconic Millennium Bridge, Kensley Aesthetics in Jesmond, Newcastle is only minutes away from Gateshead. Our doctor-led clinic is the natural choice for Gateshead residents seeking premium, medically-led aesthetic care without travelling far.',
    body:
      'Clients from Whickham, Birtley, Felling, Low Fell, and the Team Valley area regularly visit us for treatments including anti-wrinkle injections, dermal fillers, Profhilo, and HIFU. With excellent road links via the A167 and quick Metro access, reaching our Jesmond clinic from Gateshead takes under ten minutes.',
    cta: 'Book your Gateshead-to-Jesmond consultation today — exceptional results are just over the bridge.',
    nearbyAreas: ['Whickham', 'Birtley', 'Felling', 'Low Fell', 'Team Valley', 'Bensham', 'Saltwell'],
  },
  {
    slug: 'sunderland',
    name: 'Sunderland',
    county: 'Tyne and Wear',
    council: 'Sunderland City Council',
    region: 'North East England',
    distanceMiles: 12,
    heroHeadline: 'Aesthetic Clinic Near Sunderland',
    intro:
      'Kensley Aesthetics serves clients from Sunderland and the wider Wearside area, welcoming you to our doctor-led clinic in Jesmond, Newcastle — just 20–25 minutes away on the A19. Dr. Tiru Matla\'s medical expertise and eye for natural results make the short journey well worthwhile.',
    body:
      'From Roker and Seaburn on the coast to Houghton-le-Spring and Washington inland, our Sunderland clients value the clinical standard and personalised care they receive at Kensley Aesthetics. Popular treatments include dermal fillers, anti-wrinkle injections, skin boosters, and RF microneedling — all carried out by a GMC-registered medical doctor.',
    cta: 'Sunderland clients: book your free consultation and discover why so many Wearsiders choose Kensley.',
    nearbyAreas: ['Roker', 'Seaburn', 'Houghton-le-Spring', 'Pallion', 'Hendon', 'Washington', 'Pennywell'],
  },
  {
    slug: 'durham',
    name: 'Durham',
    county: 'County Durham',
    council: 'Durham County Council',
    region: 'North East England',
    distanceMiles: 15,
    heroHeadline: 'Premium Aesthetic Treatments Near Durham',
    intro:
      'Set in one of England\'s most historic cities, Durham residents deserve care that matches their high standards — which is exactly what Dr. Tiru Matla provides at Kensley Aesthetics, just 20 minutes north on the A167. Our clinic brings clinical precision and artistry together in every treatment.',
    body:
      'Whether you\'re based in the Cathedral Quarter, Belmont, Framwellgate, or the surrounding villages of Brandon and Bowburn, Kensley Aesthetics is a short drive along the A167 or A690. Many Durham clients combine their appointment with a trip to Newcastle, making it a seamless part of their day.',
    cta: 'Durham clients: experience the Kensley difference — book your consultation with Dr. Matla today.',
    nearbyAreas: ['Belmont', 'Framwellgate', 'Brandon', 'Bowburn', 'Sherburn', 'Langley Moor'],
  },
  {
    slug: 'washington',
    name: 'Washington',
    county: 'Tyne and Wear',
    council: 'Sunderland City Council',
    region: 'North East England',
    distanceMiles: 10,
    heroHeadline: 'Aesthetic Treatments for Washington, Tyne & Wear',
    intro:
      'Washington sits perfectly midway between Newcastle and Sunderland, making our Jesmond clinic an easy 15-minute drive via the A1231 or A194. Kensley Aesthetics welcomes clients from across Washington\'s many districts for medically-led aesthetic treatments that deliver real, lasting results.',
    body:
      'From Usworth and Fatfield to Donwell and Albany, Washington clients appreciate the clinical expertise of Dr. Tiru Matla — a GMC-registered medical doctor with over 20 years of clinical experience. Whether you\'re considering anti-wrinkle treatments for the first time or looking to maintain an existing routine, we\'re here to guide you.',
    cta: 'Book your Washington-area consultation at Kensley Aesthetics in Jesmond today.',
    nearbyAreas: ['Usworth', 'Fatfield', 'Donwell', 'Albany', 'Oxclose', 'Concord', 'Pattinson'],
  },
  {
    slug: 'south-shields',
    name: 'South Shields',
    county: 'Tyne and Wear',
    council: 'South Tyneside Council',
    region: 'North East England',
    distanceMiles: 10,
    heroHeadline: 'Aesthetic Clinic for South Shields',
    intro:
      'South Shields clients travel to our Jesmond, Newcastle clinic in under 20 minutes via the Tyne Tunnel — or enjoy a scenic route via the A1058 coast road. Kensley Aesthetics brings doctor-led, medically precise aesthetic care to South Tyneside residents who want the very best results.',
    body:
      'From the seafront at Sandhaven Beach to the residential streets of Harton and Cleadon, clients from across South Shields trust Dr. Tiru Matla\'s expertise for treatments including lip filler, cheek enhancement, Profhilo skin booster, and anti-wrinkle injections. The Tyne Tunnel gives you direct access — it\'s closer than you might think.',
    cta: 'South Shields residents: book with Dr. Matla at Kensley Aesthetics and discover natural-looking results.',
    nearbyAreas: ['Harton', 'Cleadon', 'Simonside', 'Tyne Dock', 'Westoe', 'Whitburn'],
  },
  {
    slug: 'jarrow',
    name: 'Jarrow',
    county: 'Tyne and Wear',
    council: 'South Tyneside Council',
    region: 'North East England',
    distanceMiles: 8,
    heroHeadline: 'Aesthetic Treatments for Jarrow',
    intro:
      'From Jarrow to Jesmond takes less than 15 minutes by car via the A185, making Kensley Aesthetics one of the most accessible doctor-led clinics for Jarrow residents. Dr. Tiru Matla and his team are proud to serve clients from across South Tyneside.',
    body:
      'Jarrow\'s community is rich in pride and history, and its residents deserve aesthetic care that reflects those same values: honest, expert, and built on trust. At Kensley Aesthetics, every treatment plan is personalised by Dr. Matla — a medical doctor with over two decades of clinical experience — ensuring outcomes that enhance your natural features.',
    cta: 'Book your consultation at Kensley Aesthetics — Jarrow is just a short drive from our Jesmond clinic.',
    nearbyAreas: ['Hebburn', 'Fellgate', 'Primrose', 'Leam Lane', 'Monkton'],
  },
  {
    slug: 'hebburn',
    name: 'Hebburn',
    county: 'Tyne and Wear',
    council: 'South Tyneside Council',
    region: 'North East England',
    distanceMiles: 7,
    heroHeadline: 'Aesthetic Clinic Near Hebburn',
    intro:
      'Kensley Aesthetics in Jesmond is just 12 minutes from Hebburn via the A185 — a short journey for premium, doctor-led aesthetic results. Whether it\'s anti-wrinkle injections, dermal fillers, or a full skin transformation, we have the expertise and the artistry to help.',
    body:
      'Hebburn clients value quality and trust — values that are central to everything Dr. Tiru Matla does at Kensley Aesthetics. As a GMC-registered medical doctor specialising in aesthetic medicine, Dr. Matla ensures that every consultation is thorough, honest, and tailored to your individual goals.',
    cta: 'Visit Kensley Aesthetics from Hebburn — book your consultation online today.',
    nearbyAreas: ['Jarrow', 'South Shields', 'Pelaw', 'Wardley', 'Bill Quay'],
  },
  {
    slug: 'wallsend',
    name: 'Wallsend',
    county: 'Tyne and Wear',
    council: 'North Tyneside Council',
    region: 'North East England',
    distanceMiles: 4,
    heroHeadline: 'Aesthetic Treatments for Wallsend',
    intro:
      'Wallsend is just four miles from our Jesmond clinic — a quick journey on the Metro or a short drive along the Shields Road. Kensley Aesthetics is North Tyneside\'s premier choice for doctor-led aesthetic medicine, with Dr. Tiru Matla overseeing every treatment personally.',
    body:
      'Named after the eastern terminus of Hadrian\'s Wall, Wallsend has a proud and distinct identity — and its residents deserve aesthetic care that\'s equally distinguished. From anti-wrinkle injections to skin boosters and advanced RF microneedling, Kensley Aesthetics offers the full range of medically-led non-surgical treatments close to home.',
    cta: 'Wallsend residents: book your Kensley Aesthetics consultation today — we\'re just four miles away.',
    nearbyAreas: ['Byker', 'Walker', 'Willington Quay', 'Hadrian Park', 'Battle Hill'],
  },
  {
    slug: 'north-shields',
    name: 'North Shields',
    county: 'Tyne and Wear',
    council: 'North Tyneside Council',
    region: 'North East England',
    distanceMiles: 5,
    heroHeadline: 'Aesthetic Clinic for North Shields',
    intro:
      'North Shields is just 10 minutes from Kensley Aesthetics in Jesmond — a short drive or Metro ride to the North East\'s leading doctor-led aesthetic clinic. Dr. Tiru Matla and his team welcome clients from across North Tyneside for transformative, natural-looking results.',
    body:
      'From the Fish Quay to the Ridges, North Shields has a vibrant community that increasingly recognises the benefits of medically-led aesthetic care. Whether you\'re exploring anti-wrinkle treatments for the first time or refreshing your filler routine, Kensley Aesthetics offers clinical expertise and genuine artistry in equal measure.',
    cta: 'North Shields clients: discover the Kensley difference. Book your consultation in Jesmond today.',
    nearbyAreas: ['Tynemouth', 'Cullercoats', 'Preston Village', 'Chirton', 'Billy Mill'],
  },
  {
    slug: 'tynemouth',
    name: 'Tynemouth',
    county: 'Tyne and Wear',
    council: 'North Tyneside Council',
    region: 'North East England',
    distanceMiles: 7,
    heroHeadline: 'Premium Aesthetics Near Tynemouth',
    intro:
      'Tynemouth is one of the North East\'s most desirable coastal villages, and its residents expect the very best — which is exactly what Dr. Tiru Matla delivers at Kensley Aesthetics. Our Jesmond clinic is just a 12-minute drive along the coast road.',
    body:
      'Tynemouth\'s discerning clientele includes professionals, creatives, and families who value quality above all else. At Kensley Aesthetics, that same standard defines every treatment: precise, personalised, and carried out by a doctor with 20 years of clinical experience. Popular treatments among coastal clients include skin boosters, Profhilo, and natural lip enhancement.',
    cta: 'Tynemouth residents: visit our Jesmond clinic and experience what doctor-led aesthetics truly means.',
    nearbyAreas: ['Cullercoats', 'Whitley Bay', 'North Shields', 'Monkseaton', 'Preston Village'],
  },
  {
    slug: 'whitley-bay',
    name: 'Whitley Bay',
    county: 'Tyne and Wear',
    council: 'North Tyneside Council',
    region: 'North East England',
    distanceMiles: 8,
    heroHeadline: 'Aesthetic Treatments Near Whitley Bay',
    intro:
      'Whitley Bay\'s cosmopolitan community on the Tyne coast is well-served by Kensley Aesthetics — just 15 minutes inland in Jesmond, Newcastle. Our doctor-led clinic provides premium aesthetic treatments for clients who want natural, lasting results overseen by a medical expert.',
    body:
      'From Spanish City to the seafront and the leafy residential areas of Monkseaton and Cullercoats, Whitley Bay clients regularly make the short journey to our Jesmond clinic. Dr. Tiru Matla\'s approach is always clinical first — ensuring safety, appropriate treatment selection, and results that genuinely enhance your features.',
    cta: 'Whitley Bay clients: book your Kensley Aesthetics consultation in Jesmond today.',
    nearbyAreas: ['Monkseaton', 'Cullercoats', 'Seaton Sluice', 'Blyth', 'Shiremoor'],
  },
  {
    slug: 'cramlington',
    name: 'Cramlington',
    county: 'Northumberland',
    council: 'Northumberland County Council',
    region: 'North East England',
    distanceMiles: 10,
    heroHeadline: 'Aesthetic Clinic Near Cramlington',
    intro:
      'Cramlington\'s modern new-town community is just 15 minutes from Kensley Aesthetics via the A189 — making doctor-led aesthetic treatments easily accessible for Northumberland residents on the southern edge of the county.',
    body:
      'With strong retail links to both Newcastle and Blyth, Cramlington clients often combine their Kensley Aesthetics appointment with a day out in the city. We offer the full range of medically-led aesthetic treatments, from anti-wrinkle injections and dermal fillers to advanced HIFU and RF microneedling, all personally overseen by Dr. Tiru Matla.',
    cta: 'Cramlington residents: visit Kensley Aesthetics in Jesmond — 15 minutes away, world-class results.',
    nearbyAreas: ['Seaton Delaval', 'Blyth', 'Seghill', 'Hartley', 'Annitsford'],
  },
  {
    slug: 'blyth',
    name: 'Blyth',
    county: 'Northumberland',
    council: 'Northumberland County Council',
    region: 'North East England',
    distanceMiles: 15,
    heroHeadline: 'Aesthetic Treatments Near Blyth',
    intro:
      'Blyth on the Northumberland coast is just 25 minutes from Kensley Aesthetics in Jesmond. Our doctor-led clinic provides premium aesthetic care for clients across the south-east Northumberland coast who deserve clinical expertise close to home.',
    body:
      'Blyth clients appreciate the direct route along the A189 to our Jesmond clinic, where Dr. Tiru Matla takes a personalised, medically grounded approach to every treatment. From first-time consultations for anti-wrinkle injections to advanced skin rejuvenation with polynucleotides or exosome therapy, we offer a full range of expert aesthetic services.',
    cta: 'Blyth residents: book with Dr. Matla at Kensley Aesthetics — the North East\'s premier aesthetic clinic.',
    nearbyAreas: ['Newsham', 'Cowpen', 'Cramlington', 'Bebside', 'Seaton Delaval'],
  },
  {
    slug: 'bedlington',
    name: 'Bedlington',
    county: 'Northumberland',
    council: 'Northumberland County Council',
    region: 'North East England',
    distanceMiles: 14,
    heroHeadline: 'Aesthetic Treatments Near Bedlington',
    intro:
      'Bedlington is just 20 minutes from Kensley Aesthetics in Jesmond via the A192 and A1056. Dr. Tiru Matla\'s clinic is the destination of choice for Bedlington residents seeking doctor-led aesthetic treatments with a genuine medical foundation.',
    body:
      'Known as the home of the Bedlington Terrier, this Northumberland market town has a strong community identity. At Kensley Aesthetics, we serve that community with the same values: trustworthy, expert care that delivers real results. Whether you\'re considering skin boosters for a radiant glow or jawline filler for facial definition, we\'re here to help.',
    cta: 'Bedlington clients: book your consultation at Kensley Aesthetics — just 20 minutes away in Jesmond.',
    nearbyAreas: ['Ashington', 'Morpeth', 'Cramlington', 'Guide Post', 'Stannington'],
  },
  {
    slug: 'ashington',
    name: 'Ashington',
    county: 'Northumberland',
    council: 'Northumberland County Council',
    region: 'North East England',
    distanceMiles: 18,
    heroHeadline: 'Aesthetic Clinic for Ashington',
    intro:
      'Known as the birthplace of Bobby and Jack Charlton, Ashington is a proud Northumberland town — and its residents deserve aesthetic care of equal quality. Kensley Aesthetics is just 25–30 minutes south in Jesmond, Newcastle, easily reached via the A1068 and A189.',
    body:
      'Ashington clients regularly make the short journey to our clinic for treatments including anti-wrinkle injections, lip and cheek fillers, Profhilo, and more. Dr. Tiru Matla\'s 20+ years of clinical experience ensures every treatment is safe, appropriate, and designed specifically for your unique facial structure and goals.',
    cta: 'Ashington residents: visit Kensley Aesthetics in Jesmond. Book your consultation today.',
    nearbyAreas: ['Newbiggin-by-the-Sea', 'Bedlington', 'Pegswood', 'Guide Post', 'Bothal'],
  },
  {
    slug: 'morpeth',
    name: 'Morpeth',
    county: 'Northumberland',
    council: 'Northumberland County Council',
    region: 'North East England',
    distanceMiles: 15,
    heroHeadline: 'Aesthetic Treatments Near Morpeth',
    intro:
      'Morpeth — the county town of Northumberland — is just 20 minutes from Kensley Aesthetics in Jesmond via the A1. This charming market town\'s residents are well-served by our doctor-led aesthetic clinic, which combines clinical precision with an artistic eye for natural results.',
    body:
      'Morpeth clients include professionals, executives, and families who value quality and discretion. Our clinic in Jesmond provides a calm, private environment where Dr. Tiru Matla takes time to understand your concerns and create a bespoke treatment plan. With direct A1 access, the drive is straightforward and the results are worth every mile.',
    cta: 'Morpeth clients: book your personalised aesthetic consultation with Dr. Matla today.',
    nearbyAreas: ['Ponteland', 'Pegswood', 'Stannington', 'Mitford', 'Longhorsley'],
  },
  {
    slug: 'hexham',
    name: 'Hexham',
    county: 'Northumberland',
    council: 'Northumberland County Council',
    region: 'North East England',
    distanceMiles: 20,
    heroHeadline: 'Aesthetic Clinic for Hexham',
    intro:
      'Hexham — the historic market town and Abbey town of the Tyne Valley — is under 30 minutes from Kensley Aesthetics via the A69 and A6115. Dr. Tiru Matla\'s clinic is the trusted choice for Hexham and Tynedale residents seeking premium aesthetic medicine.',
    body:
      'The Tyne Valley\'s residents have access to some of England\'s finest countryside — and now its finest doctor-led aesthetics too. At Kensley Aesthetics, we provide the full range of non-surgical treatments, from subtle anti-wrinkle injections that preserve your expressiveness to advanced HIFU and RF microneedling for visible skin tightening.',
    cta: 'Hexham and Tynedale clients: visit Kensley Aesthetics in Jesmond — just 25 minutes away.',
    nearbyAreas: ['Corbridge', 'Haydon Bridge', 'Acomb', 'Allendale', 'Riding Mill'],
  },
  {
    slug: 'consett',
    name: 'Consett',
    county: 'County Durham',
    council: 'Durham County Council',
    region: 'North East England',
    distanceMiles: 20,
    heroHeadline: 'Aesthetic Treatments Near Consett',
    intro:
      'Consett in County Durham is around 30 minutes from Kensley Aesthetics via the A693 and A1058 — a manageable drive to the North East\'s leading doctor-led aesthetic clinic. Dr. Tiru Matla and his team welcome Consett clients with warmth and clinical expertise.',
    body:
      'Consett\'s community is known for its resilience and community spirit — values Dr. Matla deeply respects. At Kensley Aesthetics, we match that spirit with straightforward, honest consultations and treatments that genuinely work. Our most popular treatments for Consett clients include anti-wrinkle injections, dermal fillers, and Profhilo skin boosters.',
    cta: 'Consett residents: book your Kensley Aesthetics consultation in Jesmond, Newcastle today.',
    nearbyAreas: ['Stanley', 'Lanchester', 'Medomsley', 'Blackhill', 'Leadgate'],
  },
  {
    slug: 'stanley',
    name: 'Stanley',
    county: 'County Durham',
    council: 'Durham County Council',
    region: 'North East England',
    distanceMiles: 15,
    heroHeadline: 'Aesthetic Clinic Near Stanley, County Durham',
    intro:
      'Stanley in County Durham is approximately 20 minutes from Kensley Aesthetics in Jesmond via the A693. Our doctor-led clinic serves the wider Derwentside community, providing premium aesthetic medicine close to home.',
    body:
      'Clients from Stanley, Annfield Plain, Craghead, and the surrounding Derwentside villages trust Kensley Aesthetics for safe, expertly administered treatments. Dr. Tiru Matla takes a fully personalised approach — no cookie-cutter protocols — ensuring each treatment plan reflects your unique anatomy and aspirations.',
    cta: 'Stanley and Derwentside residents: book your consultation with Dr. Matla at Kensley Aesthetics.',
    nearbyAreas: ['Annfield Plain', 'Craghead', 'South Moor', 'Burnopfield', 'Dipton'],
  },
  {
    slug: 'chester-le-street',
    name: 'Chester-le-Street',
    county: 'County Durham',
    council: 'Durham County Council',
    region: 'North East England',
    distanceMiles: 10,
    heroHeadline: 'Aesthetic Treatments for Chester-le-Street',
    intro:
      'Chester-le-Street is just 15 minutes from Kensley Aesthetics via the A167 — a quick and easy journey for some of County Durham\'s most accessible premium aesthetic care. Our Jesmond clinic is the natural choice for Chester-le-Street residents.',
    body:
      'Situated between Newcastle and Durham, Chester-le-Street offers the best of both worlds — and Kensley Aesthetics offers the best of aesthetic medicine to its community. Whether it\'s anti-wrinkle injections, lip enhancement, cheek fillers, or advanced skin rejuvenation, Dr. Tiru Matla delivers results that look natural and feel right for you.',
    cta: 'Chester-le-Street clients: visit Kensley Aesthetics in Jesmond — just 15 minutes away on the A167.',
    nearbyAreas: ['Pelton', 'Great Lumley', 'Sacriston', 'Ouston', 'Kimblesworth'],
  },
  {
    slug: 'blaydon',
    name: 'Blaydon',
    county: 'Tyne and Wear',
    council: 'Gateshead Council',
    region: 'North East England',
    distanceMiles: 5,
    heroHeadline: 'Aesthetic Clinic for Blaydon',
    intro:
      'Blaydon — famous for its race and its riverside heritage — is just 10 minutes from Kensley Aesthetics via the A695 and Western Bypass. Our doctor-led clinic in Jesmond provides premium aesthetic treatments to clients from across west Gateshead.',
    body:
      'Whether you\'re looking for subtle lip enhancement, jawline definition, or a full facial rejuvenation programme, Kensley Aesthetics has the clinical expertise to deliver. Dr. Tiru Matla personally oversees every treatment plan, ensuring safety and results that stand the test of time. Clients from Blaydon, Winlaton, and Ryton are always welcome.',
    cta: 'Blaydon residents: book your consultation at Kensley Aesthetics — Jesmond is just 10 minutes away.',
    nearbyAreas: ['Winlaton', 'Ryton', 'Crawcrook', 'Clara Vale', 'Highfield'],
  },
  {
    slug: 'prudhoe',
    name: 'Prudhoe',
    county: 'Northumberland',
    council: 'Northumberland County Council',
    region: 'North East England',
    distanceMiles: 15,
    heroHeadline: 'Aesthetic Treatments Near Prudhoe',
    intro:
      'Prudhoe in the Tyne Valley is just 25 minutes from Kensley Aesthetics in Jesmond via the A695. Dr. Tiru Matla\'s doctor-led clinic is the premier destination for Prudhoe and Tyne Valley residents seeking expert aesthetic medicine.',
    body:
      'From Prudhoe\'s hilltop views over the Tyne to the surrounding communities of Mickley and Ovingham, clients across the Tyne Valley trust Kensley Aesthetics for honest, medically-grounded aesthetic care. Our treatments range from anti-wrinkle injections and dermal fillers to advanced regenerative treatments using polynucleotides and PRP.',
    cta: 'Prudhoe and Tyne Valley clients: book your Kensley Aesthetics consultation in Jesmond today.',
    nearbyAreas: ['Mickley', 'Ovingham', 'Stocksfield', 'Broomley', 'Heddon-on-the-Wall'],
  },
  {
    slug: 'peterlee',
    name: 'Peterlee',
    county: 'County Durham',
    council: 'Durham County Council',
    region: 'North East England',
    distanceMiles: 20,
    heroHeadline: 'Aesthetic Clinic Near Peterlee',
    intro:
      'Peterlee, the planned new town on the Durham coast, is around 30 minutes from Kensley Aesthetics in Jesmond via the A19. Dr. Tiru Matla welcomes clients from East Durham for doctor-led aesthetic treatments that are safe, personalised, and genuinely effective.',
    body:
      'East Durham communities including Peterlee, Horden, Easington, and Wingate are increasingly turning to Kensley Aesthetics for treatments that make a real difference. From Profhilo skin hydration to HIFU face lifting, our clinic provides the full spectrum of non-surgical aesthetic medicine — all with the medical oversight you deserve.',
    cta: 'Peterlee and East Durham clients: visit Kensley Aesthetics in Jesmond. Book your consultation today.',
    nearbyAreas: ['Horden', 'Easington', 'Wingate', 'Shotton Colliery', 'Castle Eden'],
  },
  {
    slug: 'seaham',
    name: 'Seaham',
    county: 'County Durham',
    council: 'Durham County Council',
    region: 'North East England',
    distanceMiles: 15,
    heroHeadline: 'Aesthetic Treatments Near Seaham',
    intro:
      'Seaham\'s stunning clifftop location on the Durham Heritage Coast is just 25 minutes from Kensley Aesthetics via the A19 and A1231. Our Jesmond clinic is a trusted destination for Seaham residents seeking premium, doctor-led aesthetic care.',
    body:
      'Seaham\'s community is growing and evolving — and so is demand for high-quality aesthetic medicine. At Kensley Aesthetics, Dr. Tiru Matla provides the clinical expertise and artistic judgement to deliver results that feel completely natural. Treatments popular with coastal Durham clients include skin boosters, anti-wrinkle injections, and jawline contouring.',
    cta: 'Seaham clients: make the 25-minute journey to Kensley Aesthetics in Jesmond. You won\'t regret it.',
    nearbyAreas: ['Murton', 'Houghton-le-Spring', 'Easington', 'Dalton-le-Dale', 'Cold Hesledon'],
  },
  {
    slug: 'bishop-auckland',
    name: 'Bishop Auckland',
    county: 'County Durham',
    council: 'Durham County Council',
    region: 'North East England',
    distanceMiles: 25,
    heroHeadline: 'Aesthetic Clinic Near Bishop Auckland',
    intro:
      'Bishop Auckland — the gateway to Weardale and home to the magnificent Auckland Castle — is around 40 minutes from Kensley Aesthetics via the A688 and A167. For County Durham\'s western communities, Dr. Tiru Matla\'s clinic is well worth the journey.',
    body:
      'Clients from Bishop Auckland, Spennymoor, Newton Aycliffe, and the surrounding Wear Valley trust Kensley Aesthetics for aesthetic treatments that are clinically grounded and individually tailored. Dr. Matla\'s 20+ years of medical experience means your safety and natural results are always the priority — never a one-size-fits-all approach.',
    cta: 'Bishop Auckland residents: book your Kensley Aesthetics consultation in Jesmond today.',
    nearbyAreas: ['Spennymoor', 'Newton Aycliffe', 'Shildon', 'Crook', 'Willington'],
  },
  {
    slug: 'middlesbrough',
    name: 'Middlesbrough',
    county: 'North Yorkshire',
    council: 'Middlesbrough Council',
    region: 'North East England',
    distanceMiles: 40,
    heroHeadline: 'Aesthetic Treatments for Middlesbrough',
    intro:
      'Middlesbrough clients increasingly travel to Kensley Aesthetics in Jesmond — just 45–50 minutes via the A19 — for a quality of doctor-led aesthetic care that\'s hard to match locally. Dr. Tiru Matla\'s clinical expertise and natural results philosophy attract clients from across the Teesside area.',
    body:
      'From Linthorpe and Marton to Acklam and Nunthorpe, Teesside clients tell us the journey is more than worth it. Our clinic offers a full range of non-surgical aesthetic treatments — anti-wrinkle injections, dermal fillers, skin boosters, Profhilo, HIFU, RF microneedling, and advanced regenerative therapies — all administered personally by Dr. Matla.',
    cta: 'Middlesbrough and Teesside clients: book your consultation at Kensley Aesthetics — the journey is worth it.',
    nearbyAreas: ['Linthorpe', 'Marton', 'Acklam', 'Nunthorpe', 'Stockton-on-Tees', 'Hartlepool'],
  },
  {
    slug: 'hartlepool',
    name: 'Hartlepool',
    county: 'County Durham',
    council: 'Hartlepool Borough Council',
    region: 'North East England',
    distanceMiles: 35,
    heroHeadline: 'Aesthetic Clinic for Hartlepool',
    intro:
      'Hartlepool is around 45 minutes from Kensley Aesthetics via the A19, and our growing number of Hartlepool clients tell us the drive is absolutely worth it. Dr. Tiru Matla provides a standard of aesthetic medicine that sets Kensley Aesthetics apart from any local alternatives.',
    body:
      'Hartlepool\'s community is diverse and proud, and its residents deserve aesthetic care of the highest calibre. Whether you\'re considering your first consultation for anti-wrinkle injections or exploring more advanced skin tightening with HIFU, Dr. Matla takes the time to understand your goals and create a treatment plan that\'s right for you.',
    cta: 'Hartlepool clients: visit Kensley Aesthetics in Newcastle. Book your consultation with Dr. Matla today.',
    nearbyAreas: ['Billingham', 'Greatham', 'Seaton Carew', 'Owton Manor', 'Throston'],
  },
  {
    slug: 'darlington',
    name: 'Darlington',
    county: 'County Durham',
    council: 'Darlington Borough Council',
    region: 'North East England',
    distanceMiles: 35,
    heroHeadline: 'Aesthetic Treatments for Darlington',
    intro:
      'Darlington — where the world\'s first passenger railway began — is approximately 45 minutes from Kensley Aesthetics via the A167 or A1(M). Clients from Darlington and south County Durham regularly make the journey for Dr. Tiru Matla\'s doctor-led aesthetic expertise.',
    body:
      'Darlington has long been a place of innovation and forward thinking. At Kensley Aesthetics, we carry that same progressive spirit into aesthetic medicine — using clinically proven treatments and advanced techniques to deliver results that look genuinely natural. Popular treatments with Darlington clients include lip filler, cheek enhancement, Profhilo, and jawline contouring.',
    cta: 'Darlington clients: book your Kensley Aesthetics consultation in Jesmond, Newcastle today.',
    nearbyAreas: ['Cockerton', 'Hurworth', 'Croft-on-Tees', 'Newton Aycliffe', 'Shildon'],
  },
  {
    slug: 'stockton-on-tees',
    name: 'Stockton-on-Tees',
    county: 'North Yorkshire',
    council: 'Stockton-on-Tees Borough Council',
    region: 'North East England',
    distanceMiles: 38,
    heroHeadline: 'Aesthetic Clinic for Stockton-on-Tees',
    intro:
      'Stockton-on-Tees is around 50 minutes from Kensley Aesthetics via the A19 — a journey our Teesside clients make gladly for the quality of Dr. Tiru Matla\'s doctor-led aesthetic care. Our Jesmond clinic is the destination of choice for those who want the very best.',
    body:
      'Stockton\'s historic High Street is one of the widest in England, and the town\'s community is equally expansive in its ambitions. At Kensley Aesthetics, we provide the clinical expertise and personalised attention that Stockton clients deserve — from first-time consultations to advanced multi-treatment programmes.',
    cta: 'Stockton-on-Tees clients: visit Kensley Aesthetics in Jesmond. Book your consultation with Dr. Matla.',
    nearbyAreas: ['Thornaby', 'Eaglescliffe', 'Norton', 'Billingham', 'Yarm'],
  },
  {
    slug: 'alnwick',
    name: 'Alnwick',
    county: 'Northumberland',
    council: 'Northumberland County Council',
    region: 'North East England',
    distanceMiles: 35,
    heroHeadline: 'Aesthetic Treatments Near Alnwick',
    intro:
      'Alnwick — Northumberland\'s historic county town and home to the famous castle — is approximately 45 minutes from Kensley Aesthetics via the A1. Many of our Alnwick and north Northumberland clients tell us the drive through beautiful Northumberland countryside is part of the experience.',
    body:
      'North Northumberland\'s communities stretch from Alnwick to Amble and Warkworth along the coast, and inward to Rothbury and the National Park. Clients from across this stunning region trust Kensley Aesthetics for the kind of premium, medically-led aesthetic care that reflects the quality of their surroundings. Dr. Matla welcomes every client with a thorough, unhurried consultation.',
    cta: 'Alnwick and north Northumberland clients: book your Kensley Aesthetics consultation today.',
    nearbyAreas: ['Amble', 'Warkworth', 'Rothbury', 'Alnmouth', 'Longhoughton'],
  },

  /* ═══════════════════════════════════════════
     YORKSHIRE — secondary catchment
  ═══════════════════════════════════════════ */
  {
    slug: 'leeds',
    name: 'Leeds',
    county: 'West Yorkshire',
    council: 'Leeds City Council',
    region: 'Yorkshire',
    distanceMiles: 95,
    heroHeadline: 'Kensley Aesthetics — Serving Leeds Clients',
    intro:
      'Leeds is a vibrant, cosmopolitan city, and its residents have high expectations — expectations that Kensley Aesthetics is proud to meet. Many Leeds clients travel to our Jesmond, Newcastle clinic (around 90 minutes by train or car) specifically for Dr. Tiru Matla\'s clinical expertise and reputation for natural results.',
    body:
      'We understand that travelling to Newcastle from Leeds is a commitment, which is why we make every visit count. Dr. Matla conducts a thorough initial consultation, creates a detailed treatment plan, and ensures you leave with visible results and a clear aftercare plan. For our Leeds clients, the journey is part of the luxury.',
    cta: 'Leeds clients: book your Kensley Aesthetics consultation — an investment in results that genuinely last.',
    nearbyAreas: ['Headingley', 'Roundhay', 'Chapel Allerton', 'Horsforth', 'Harrogate'],
  },
  {
    slug: 'sheffield',
    name: 'Sheffield',
    county: 'South Yorkshire',
    council: 'Sheffield City Council',
    region: 'Yorkshire',
    distanceMiles: 125,
    heroHeadline: 'Kensley Aesthetics — Serving Sheffield Clients',
    intro:
      'Sheffield\'s steel-city confidence is matched by our commitment to premium aesthetic results. Clients from Sheffield travel to Kensley Aesthetics in Jesmond, Newcastle — around two hours by car or train — for a level of doctor-led care that is genuinely exceptional.',
    body:
      'Dr. Tiru Matla\'s 20+ years of clinical experience, combined with an artistic approach to facial aesthetics, draws clients from across the UK. For Sheffield residents who want more than a local clinic can offer, Kensley Aesthetics represents a step change in quality, care, and clinical rigour.',
    cta: 'Sheffield clients: when only the best will do, book your consultation with Dr. Matla at Kensley Aesthetics.',
    nearbyAreas: ['Rotherham', 'Barnsley', 'Chesterfield', 'Dronfield', 'Ecclesfield'],
  },
  {
    slug: 'york',
    name: 'York',
    county: 'North Yorkshire',
    council: 'City of York Council',
    region: 'Yorkshire',
    distanceMiles: 85,
    heroHeadline: 'Aesthetic Treatments for York Clients',
    intro:
      'York — England\'s most historic city — is around 90 minutes from Kensley Aesthetics by train or car. Clients from York and the Vale of York increasingly choose Dr. Tiru Matla for aesthetic treatments that meet the same high standards the city itself demands.',
    body:
      'York\'s heritage and elegance are reflected in its residents\' taste for quality. At Kensley Aesthetics, we provide that same standard in aesthetic medicine: treatments that are clinically sound, artistically refined, and individually crafted. From subtle anti-wrinkle work to Profhilo and advanced skin rejuvenation, our York clients receive world-class care.',
    cta: 'York clients: book your Kensley Aesthetics consultation in Jesmond and experience the difference quality makes.',
    nearbyAreas: ['Harrogate', 'Selby', 'Malton', 'Thirsk', 'Knaresborough'],
  },
  {
    slug: 'harrogate',
    name: 'Harrogate',
    county: 'North Yorkshire',
    council: 'North Yorkshire Council',
    region: 'Yorkshire',
    distanceMiles: 90,
    heroHeadline: 'Premium Aesthetics for Harrogate Clients',
    intro:
      'Harrogate — one of England\'s most affluent and sophisticated spa towns — is around 90 minutes from Kensley Aesthetics by car via the A1(M). Clients from Harrogate travel to our Newcastle clinic for the same reason they travel for anything: only the very best will do.',
    body:
      'Harrogate\'s discerning clientele has excellent options locally, yet many choose Kensley Aesthetics because Dr. Tiru Matla\'s reputation precedes him. His combination of 20 years of clinical experience and a genuine eye for natural, proportionate results is a rare and highly sought-after combination. Our Harrogate clients rarely look elsewhere once they\'ve experienced the Kensley standard.',
    cta: 'Harrogate clients: experience why clients travel to Kensley Aesthetics. Book your consultation today.',
    nearbyAreas: ['Knaresborough', 'Ripon', 'Wetherby', 'Boroughbridge', 'Pateley Bridge'],
  },
  {
    slug: 'bradford',
    name: 'Bradford',
    county: 'West Yorkshire',
    council: 'Bradford Metropolitan District Council',
    region: 'Yorkshire',
    distanceMiles: 100,
    heroHeadline: 'Aesthetic Clinic for Bradford Clients',
    intro:
      'Bradford is around two hours from Kensley Aesthetics in Jesmond, Newcastle — but for clients who want doctor-led aesthetic medicine at the highest level, it\'s a journey that makes complete sense. Dr. Tiru Matla\'s clinical precision and artistic approach are worth travelling for.',
    body:
      'Bradford\'s diverse and ambitious community is increasingly turning to aesthetic medicine for confidence and wellbeing. At Kensley Aesthetics, we serve that community with the clinical expertise and personalised care it deserves — treatments that are safe, proven, and tailored to your individual facial anatomy.',
    cta: 'Bradford clients: book your Kensley Aesthetics consultation with Dr. Matla — results that speak for themselves.',
    nearbyAreas: ['Shipley', 'Bingley', 'Keighley', 'Ilkley', 'Guiseley'],
  },
  {
    slug: 'wakefield',
    name: 'Wakefield',
    county: 'West Yorkshire',
    council: 'Wakefield Metropolitan District Council',
    region: 'Yorkshire',
    distanceMiles: 100,
    heroHeadline: 'Aesthetic Treatments for Wakefield Clients',
    intro:
      'Wakefield — the cathedral city at the heart of West Yorkshire — is around two hours from Kensley Aesthetics via the A1(M). Clients from Wakefield and the wider Pontefract and Castleford area choose our Newcastle clinic for the exceptional standard of Dr. Tiru Matla\'s work.',
    body:
      'Whether you\'re visiting from Wakefield, Ossett, Horbury, or the surrounding villages, Kensley Aesthetics offers the kind of doctor-led aesthetic expertise that truly justifies the journey. Every treatment plan is created from scratch based on your unique anatomy and personal aspirations.',
    cta: 'Wakefield clients: book your consultation with Dr. Matla at Kensley Aesthetics in Jesmond, Newcastle.',
    nearbyAreas: ['Ossett', 'Horbury', 'Pontefract', 'Castleford', 'Normanton'],
  },

  /* ═══════════════════════════════════════════
     NORTH WEST ENGLAND
  ═══════════════════════════════════════════ */
  {
    slug: 'manchester',
    name: 'Manchester',
    county: 'Greater Manchester',
    council: 'Manchester City Council',
    region: 'North West England',
    distanceMiles: 135,
    heroHeadline: 'Kensley Aesthetics — Serving Manchester Clients',
    intro:
      'Manchester — the capital of the North — has no shortage of aesthetic clinics. Yet Kensley Aesthetics in Newcastle continues to attract Manchester clients who want something different: doctor-led care, genuine medical expertise, and results that look undeniably natural, administered by Dr. Tiru Matla.',
    body:
      'Manchester to Newcastle takes around 90 minutes by direct train from Piccadilly — making a Kensley Aesthetics appointment an elegant day out. Dr. Matla\'s 20+ years of clinical experience, combined with a philosophy of "less is more", produce results that are exceptional even by Manchester\'s high aesthetic standards.',
    cta: 'Manchester clients: book your Kensley Aesthetics consultation — 90 minutes by train, a world away in quality.',
    nearbyAreas: ['Salford', 'Trafford', 'Didsbury', 'Altrincham', 'Stockport'],
  },
  {
    slug: 'liverpool',
    name: 'Liverpool',
    county: 'Merseyside',
    council: 'Liverpool City Council',
    region: 'North West England',
    distanceMiles: 155,
    heroHeadline: 'Kensley Aesthetics — Serving Liverpool Clients',
    intro:
      'Liverpool\'s bold, vibrant culture is matched by its residents\' appreciation for quality — which is why a growing number of Liverpool clients make the journey to Kensley Aesthetics in Newcastle. Dr. Tiru Matla\'s reputation for natural, clinical excellence speaks for itself.',
    body:
      'Whether you\'re from the Wirral, Sefton, or the city itself, Dr. Matla\'s approach to aesthetic medicine — medically grounded, individually crafted, and focused on natural beauty — offers something that many clinics simply cannot. Liverpool clients particularly appreciate the thoroughness of the initial consultation and the visible results that follow.',
    cta: 'Liverpool clients: visit Kensley Aesthetics in Newcastle. Book your consultation with Dr. Matla today.',
    nearbyAreas: ['Wirral', 'Sefton', 'Knowsley', 'St Helens', 'Southport'],
  },
  {
    slug: 'preston',
    name: 'Preston',
    county: 'Lancashire',
    council: 'Preston City Council',
    region: 'North West England',
    distanceMiles: 120,
    heroHeadline: 'Aesthetic Clinic for Preston Clients',
    intro:
      'Preston — Lancashire\'s proud county town — is around 90 minutes from Kensley Aesthetics via the M6 and A1(M). For Preston and Fylde Coast residents who demand clinical excellence in aesthetic medicine, Dr. Tiru Matla\'s Newcastle clinic is a destination worth the drive.',
    body:
      'From the vibrant city centre of Preston to the historic surroundings of the Ribble Valley, clients from across Lancashire choose Kensley Aesthetics for anti-wrinkle treatments, dermal fillers, skin boosters, and more. Dr. Matla\'s clinical approach ensures every treatment is appropriate, safe, and uniquely tailored to you.',
    cta: 'Preston and Lancashire clients: book your Kensley Aesthetics consultation in Jesmond, Newcastle.',
    nearbyAreas: ['Blackpool', 'Blackburn', 'Lancaster', 'Chorley', 'Leyland'],
  },
  {
    slug: 'blackpool',
    name: 'Blackpool',
    county: 'Lancashire',
    council: 'Blackpool Council',
    region: 'North West England',
    distanceMiles: 135,
    heroHeadline: 'Aesthetic Treatments for Blackpool Clients',
    intro:
      'Blackpool\'s energy and ambition are well-known — and for clients who want aesthetic care that matches that ambition, Kensley Aesthetics in Newcastle is two hours away via the M6. Dr. Tiru Matla offers the kind of doctor-led, clinical aesthetic medicine that makes a real and lasting difference.',
    body:
      'Blackpool clients visiting Kensley Aesthetics discover a calm, luxurious clinic environment that\'s a world away from high-street aesthetics. Dr. Matla\'s medical training and 20+ years of experience ensure every treatment is approached with rigour and care, whether it\'s a first-time lip filler or a comprehensive facial rejuvenation programme.',
    cta: 'Blackpool clients: visit Kensley Aesthetics in Jesmond, Newcastle. Book your consultation today.',
    nearbyAreas: ['Lytham St Annes', 'Fleetwood', 'Cleveleys', 'Poulton-le-Fylde', 'Preston'],
  },
  {
    slug: 'carlisle',
    name: 'Carlisle',
    county: 'Cumbria',
    council: 'Cumberland Council',
    region: 'North West England',
    distanceMiles: 60,
    heroHeadline: 'Aesthetic Clinic for Carlisle Clients',
    intro:
      'Carlisle — England\'s most northern city — is just one hour from Kensley Aesthetics in Jesmond via the A69 or M6/A1. Cumbrian clients are among our most dedicated travellers, appreciating the quality of Dr. Tiru Matla\'s doctor-led aesthetic care that simply isn\'t available closer to home.',
    body:
      'Cumberland\'s communities stretch from Carlisle to the Eden Valley and the western coast, and many find that Newcastle\'s Kensley Aesthetics is the nearest clinic offering truly medical-grade aesthetic treatments. Dr. Matla personally oversees every consultation and treatment, ensuring you receive expert, individualised care.',
    cta: 'Carlisle and Cumbria clients: book your Kensley Aesthetics consultation — just one hour from Jesmond.',
    nearbyAreas: ['Brampton', 'Wigton', 'Longtown', 'Haltwhistle', 'Brampton'],
  },
  {
    slug: 'penrith',
    name: 'Penrith',
    county: 'Cumbria',
    council: 'Westmorland and Furness Council',
    region: 'North West England',
    distanceMiles: 65,
    heroHeadline: 'Aesthetic Treatments Near Penrith',
    intro:
      'Penrith — the gateway to the northern Lake District — is around 75 minutes from Kensley Aesthetics via the A66 and A69. The Eden Valley\'s communities include many who appreciate quality and craftsmanship in everything they choose — including their aesthetic treatments.',
    body:
      'Clients from Penrith, Appleby, and the Eden Valley trust Kensley Aesthetics for the kind of considered, personalised aesthetic medicine that matches their own values. Dr. Tiru Matla\'s approach — thorough, honest, and always medically grounded — is exactly what Cumbrian clients are looking for in a practitioner.',
    cta: 'Penrith and Eden Valley clients: visit Kensley Aesthetics in Jesmond. Book your consultation today.',
    nearbyAreas: ['Appleby', 'Kirkby Stephen', 'Shap', 'Pooley Bridge', 'Alston'],
  },

  /* ═══════════════════════════════════════════
     SCOTLAND
  ═══════════════════════════════════════════ */
  {
    slug: 'edinburgh',
    name: 'Edinburgh',
    county: 'City of Edinburgh',
    council: 'City of Edinburgh Council',
    region: 'Scotland',
    distanceMiles: 105,
    heroHeadline: 'Kensley Aesthetics — Serving Edinburgh Clients',
    intro:
      'Edinburgh — Scotland\'s magnificent capital — is just 90 minutes by train from Newcastle, making Kensley Aesthetics a genuinely accessible destination for Scottish clients who want doctor-led aesthetic medicine at the highest level. Dr. Tiru Matla\'s clinical reputation draws clients from across Scotland.',
    body:
      'Edinburgh\'s discerning, cultured population has high expectations, and Dr. Tiru Matla is well-equipped to meet them. With 20+ years of clinical experience and a philosophy rooted in natural, proportionate results, Kensley Aesthetics provides a standard of aesthetic care that Edinburgh clients find difficult to match at home. Many Edinburgh clients book two or three appointments in advance, treating each visit as a curated experience.',
    cta: 'Edinburgh clients: 90 minutes by train to Kensley Aesthetics — book your consultation with Dr. Matla today.',
    nearbyAreas: ['Leith', 'Morningside', 'Corstorphine', 'Portobello', 'Musselburgh'],
  },
  {
    slug: 'glasgow',
    name: 'Glasgow',
    county: 'City of Glasgow',
    council: 'Glasgow City Council',
    region: 'Scotland',
    distanceMiles: 145,
    heroHeadline: 'Kensley Aesthetics — Serving Glasgow Clients',
    intro:
      'Glasgow — Scotland\'s largest and most dynamic city — is around two hours from Kensley Aesthetics by car or train. Glasgow clients who choose Dr. Tiru Matla\'s clinic in Newcastle are seeking something specific: a medical doctor with deep expertise in aesthetic medicine, a track record of natural results, and a clinical approach that prioritises your wellbeing.',
    body:
      'Dr. Matla\'s reputation for honest, clinical aesthetic medicine resonates particularly strongly with Glasgow\'s no-nonsense, quality-focused clientele. Whether you\'re visiting for the first time or maintaining a regular treatment programme, you\'ll find Kensley Aesthetics to be everything you were hoping for — and more.',
    cta: 'Glasgow clients: make the journey to Kensley Aesthetics in Jesmond, Newcastle. Book your consultation today.',
    nearbyAreas: ['Paisley', 'Hamilton', 'Motherwell', 'East Kilbride', 'Coatbridge'],
  },
  {
    slug: 'berwick-upon-tweed',
    name: 'Berwick-upon-Tweed',
    county: 'Northumberland',
    council: 'Northumberland County Council',
    region: 'North East England',
    distanceMiles: 65,
    heroHeadline: 'Aesthetic Clinic for Berwick-upon-Tweed',
    intro:
      'Berwick-upon-Tweed — England\'s northernmost town, uniquely positioned on the Scottish border — is around an hour from Kensley Aesthetics via the A1. For Berwick and the surrounding Border communities, our Jesmond clinic is the nearest destination for truly doctor-led aesthetic medicine.',
    body:
      'Berwick\'s unique border identity gives its residents a dual perspective — and when it comes to aesthetic care, they choose the best of both worlds: the convenience of the North East and the premium quality of Kensley Aesthetics. Dr. Tiru Matla warmly welcomes Berwick clients and those from the Scottish Borders seeking expert aesthetic medicine south of the border.',
    cta: 'Berwick-upon-Tweed and Border clients: book your Kensley Aesthetics consultation in Jesmond today.',
    nearbyAreas: ['Alnwick', 'Wooler', 'Jedburgh', 'Coldstream', 'Seahouses'],
  },

  /* ═══════════════════════════════════════════
     MIDLANDS
  ═══════════════════════════════════════════ */
  {
    slug: 'birmingham',
    name: 'Birmingham',
    county: 'West Midlands',
    council: 'Birmingham City Council',
    region: 'West Midlands',
    distanceMiles: 200,
    heroHeadline: 'Kensley Aesthetics — Serving Birmingham Clients',
    intro:
      'Birmingham — England\'s second city and one of the UK\'s most vibrant cosmopolitan centres — is around two hours from Newcastle by direct train. Kensley Aesthetics in Jesmond continues to attract Birmingham clients who want the precision, clinical expertise, and natural results philosophy of Dr. Tiru Matla.',
    body:
      'Birmingham has an outstanding range of aesthetic options — so the fact that clients travel to Kensley Aesthetics speaks volumes. Dr. Matla\'s comprehensive medical background, combined with an artistic approach to facial aesthetics, delivers results that clients from the UK\'s most competitive market recognise as genuinely exceptional.',
    cta: 'Birmingham clients: when standards matter, choose Kensley Aesthetics. Book your consultation with Dr. Matla.',
    nearbyAreas: ['Solihull', 'Sutton Coldfield', 'Wolverhampton', 'Coventry', 'Dudley'],
  },
  {
    slug: 'nottingham',
    name: 'Nottingham',
    county: 'Nottinghamshire',
    council: 'Nottingham City Council',
    region: 'East Midlands',
    distanceMiles: 185,
    heroHeadline: 'Aesthetic Treatments for Nottingham Clients',
    intro:
      'Nottingham is approximately two hours from Kensley Aesthetics in Jesmond by train, making a day trip to our Newcastle clinic a practical and worthwhile investment. Dr. Tiru Matla\'s clinical reputation and approach to natural results is what brings clients from the East Midlands to the North East.',
    body:
      'From the Lace Market to West Bridgford and Mapperley, Nottingham\'s style-conscious community is well-represented among our travelling clients. Kensley Aesthetics offers a comprehensive range of non-surgical aesthetic treatments, all carried out by a GMC-registered medical doctor with over 20 years of clinical experience.',
    cta: 'Nottingham clients: book your Kensley Aesthetics consultation — the journey rewards itself in results.',
    nearbyAreas: ['West Bridgford', 'Beeston', 'Arnold', 'Long Eaton', 'Derby'],
  },
  {
    slug: 'derby',
    name: 'Derby',
    county: 'Derbyshire',
    council: 'Derby City Council',
    region: 'East Midlands',
    distanceMiles: 195,
    heroHeadline: 'Aesthetic Clinic for Derby Clients',
    intro:
      'Derby is around two hours from Kensley Aesthetics in Jesmond by car or train, and our Derby clients consistently tell us that the journey to see Dr. Tiru Matla is one of the best decisions they\'ve made. Doctor-led aesthetic medicine at this standard is exceptional wherever you find it.',
    body:
      'Derby\'s engineering heritage reflects precision and reliability — exactly the values Dr. Matla brings to aesthetic medicine. Every treatment is clinically justified, precisely administered, and designed to enhance your natural features. For Derby clients who appreciate that approach, Kensley Aesthetics is the natural choice.',
    cta: 'Derby clients: book your Kensley Aesthetics consultation in Jesmond, Newcastle. Precision you can trust.',
    nearbyAreas: ['Burton upon Trent', 'Belper', 'Ilkeston', 'Ripley', 'Heanor'],
  },

  /* ═══════════════════════════════════════════
     SOUTH OF ENGLAND
  ═══════════════════════════════════════════ */
  {
    slug: 'london',
    name: 'London',
    county: 'Greater London',
    council: 'Greater London Authority',
    region: 'London',
    distanceMiles: 280,
    heroHeadline: 'Kensley Aesthetics — Serving London Clients',
    intro:
      'London is home to some of the world\'s finest aesthetic clinics — yet a growing number of London clients travel to Kensley Aesthetics in Newcastle to see Dr. Tiru Matla. The reason is simple: his combination of deep medical expertise, an artist\'s eye, and a commitment to natural results is genuinely rare, regardless of postcode.',
    body:
      'London to Newcastle takes as little as 2 hours 45 minutes on the East Coast Main Line from King\'s Cross. For London clients who have experienced clinics across the capital and want something different — something that feels truly clinical, unhurried, and personalised — Kensley Aesthetics offers that, and more. Dr. Matla\'s 20+ years of clinical experience include working with clients of diverse backgrounds and aesthetic goals, making him one of the most experienced and versatile aesthetic practitioners in the UK.',
    cta: 'London clients: take the train north and experience Kensley Aesthetics. Book your consultation with Dr. Matla.',
    nearbyAreas: ['Westminster', 'Chelsea', 'Kensington', 'Mayfair', 'Notting Hill', 'Richmond'],
  },
  {
    slug: 'bristol',
    name: 'Bristol',
    county: 'Bristol',
    council: 'Bristol City Council',
    region: 'South West England',
    distanceMiles: 295,
    heroHeadline: 'Kensley Aesthetics — Serving Bristol Clients',
    intro:
      'Bristol is one of the UK\'s most creative and forward-thinking cities — and its residents are increasingly seeking aesthetic care that matches that progressive outlook. A number of our Bristol clients make the journey to Kensley Aesthetics in Newcastle specifically for Dr. Tiru Matla\'s clinical expertise and results philosophy.',
    body:
      'Bristol to Newcastle by direct train takes around three and a half hours from Temple Meads. For Bristol clients who want the very best in doctor-led aesthetic medicine, that journey represents excellent value. Dr. Matla\'s comprehensive consultation process, personalised treatment plans, and commitment to natural-looking results make every visit worthwhile.',
    cta: 'Bristol clients: when you want the very best, book your Kensley Aesthetics consultation with Dr. Matla.',
    nearbyAreas: ['Clifton', 'Redland', 'Bishopston', 'Cotham', 'Bath'],
  },
];

/** Map of slug → location data for O(1) lookup */
export const LOCATIONS_BY_SLUG = Object.fromEntries(
  LOCATIONS.map(loc => [loc.slug, loc])
);
