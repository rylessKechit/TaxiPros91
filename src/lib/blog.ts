export interface BlogPost {
  slug: string
  title: string
  description: string
  excerpt: string
  category: string
  date: string // ISO YYYY-MM-DD
  readingMinutes: number
  content: string // markdown-style string
  faqs?: { q: string; a: string }[]
}

// ============================================================================
// ARTICLE 1 Comment aller à Orly depuis Massy
// ============================================================================
const post1: BlogPost = {
  slug: 'comment-aller-orly-depuis-massy',
  title: "Comment aller à l'aéroport d'Orly depuis Massy : taxi, RER, Orlyval comparés",
  description:
    "Comparatif complet pour aller de Massy à Orly : taxi (15 min, 25-35€), RER + Orlyval (35 min, 13€), bus 91-10 (50 min, 4€), VTC. Choisissez la meilleure option selon votre profil.",
  excerpt:
    "Vous partez de Massy pour Orly ? Découvrez les 4 options de transport (taxi, RER+Orlyval, bus, VTC), leurs prix réels et nos recommandations selon votre profil de voyageur.",
  category: 'Aéroports',
  date: '2026-05-10',
  readingMinutes: 12,
  content: `Vous habitez Massy ou y avez un rendez-vous, et vous devez rejoindre l'aéroport d'Orly ? Bonne nouvelle : Massy est l'une des villes d'Île-de-France les mieux connectées à Orly, avec quatre options principales à votre disposition. Mais laquelle choisir selon votre budget, votre horaire ou vos bagages ?

Dans ce guide, nous comparons en détail le **taxi**, le **RER B + Orlyval**, le **RER C + bus 91-10** et les **VTC** (Uber, Bolt). Spoiler : la meilleure option dépend beaucoup de votre profil et de l'heure de votre vol.

## Les 4 options pour aller de Massy à Orly

### Option 1 Le taxi
Le taxi reste l'option la plus directe et la plus confortable. Depuis Massy, il faut compter **15 minutes** pour rejoindre l'aéroport via l'autoroute A10, hors trafic. Le tarif est fixe et oscille entre **25 et 35 €** selon l'heure (jour ou nuit) et le terminal de destination (Orly 1, 2, 3 ou 4).

L'avantage majeur du taxi, c'est la prise en charge à votre adresse et la dépose directement devant votre terminal pas de marche, pas de correspondance, pas de bagages à porter dans les escaliers.

### Option 2 RER B + Orlyval
Le combo RER B + Orlyval est la solution la plus utilisée par les voyageurs qui veulent éviter la voiture. Depuis la gare Massy-Palaiseau, prenez le **RER B direction Mitry-Claye ou Aéroport CDG**, descendez à **Antony**, puis basculez sur l'**Orlyval** (métro automatique).

- Trajet RER B Massy → Antony : 6 minutes
- Correspondance Orlyval : 5 minutes
- Trajet Orlyval Antony → Orly : 8 minutes
- **Total porte-à-porte : environ 35 minutes**
- **Coût : 13 €** (billet combiné Orlyval inclus)

### Option 3 RER C + bus 91-10
La solution la plus économique mais aussi la plus lente. Depuis la gare Massy-Palaiseau RER C, descendez à **Pont de Rungis** puis prenez le bus **91-10** vers Orly. Comptez environ **50 minutes** au total pour seulement **4 €**.

Cette option est intéressante uniquement si vous voyagez léger, sans contrainte horaire forte, et que vous cherchez à minimiser le budget.

### Option 4 Uber / VTC
Les VTC type Uber, Bolt ou Heetch desservent Massy avec des prix qui varient fortement selon l'heure et la demande : **28 à 40 €** en heures creuses, et **jusqu'à 70 €** en heures de pointe ou en cas de "surge pricing".

Le confort est proche du taxi, mais les prix sont moins prévisibles et le délai de prise en charge plus long, surtout aux heures matinales.

## Comparatif des prix

| Mode de transport | Prix (aller) | Bagages inclus |
|---|---|---|
| Taxi | 25-35 € | Oui, sans supplément |
| RER B + Orlyval | 13 € | Oui mais à porter |
| RER C + bus 91-10 | 4 € | Petits bagages uniquement |
| Uber / VTC | 28-70 € | Oui |

Pour un couple ou un groupe de 3-4 personnes, **le taxi devient souvent moins cher que le combo RER + Orlyval** une fois additionné le coût par personne (4 × 13 € = 52 € contre 25-35 € en taxi).

## Comparatif des temps porte-à-porte

Le temps "porte-à-porte" inclut la marche jusqu'à la gare, l'attente, le trajet et la marche jusqu'au terminal.

- **Taxi** : 15 minutes (sans correspondance)
- **RER B + Orlyval** : 35 minutes (1 correspondance)
- **RER C + bus 91-10** : 50 minutes (1 correspondance + temps d'attente bus)
- **VTC** : 15-20 minutes (selon délai de prise en charge)

## Confort et bagages : ce qui change vraiment

Le taxi est imbattable sur ce critère : prise en charge à votre porte, dépose au terminal, aide aux bagages, climatisation, possibilité de réserver à l'avance. Pas d'escaliers, pas de portes à passer avec une valise, pas de stress.

L'Orlyval est confortable mais nécessite de manipuler vos bagages dans les escaliers et dans les couloirs. À éviter si vous avez plus de deux valises ou un fauteuil roulant.

Le bus 91-10 est l'option la moins confortable, surtout aux heures de pointe : pas d'espace bagages dédié, pas de climatisation puissante.

## Notre recommandation par profil

### Voyageur professionnel
**Taxi**. Vous avez un vol tôt le matin ou tard le soir, vous portez peu de bagages mais vous avez besoin de prévisibilité absolue. Réservez la veille pour bénéficier d'un tarif fixe et d'une prise en charge à votre hôtel ou domicile.

### Famille avec enfants
**Taxi (ou Van)**. Sièges enfants à demander à la réservation, pas de manipulation de poussette dans les escaliers de l'Orlyval. Le supplément par rapport au RER est largement compensé par le confort et le gain de temps.

### Étudiant en sac à dos
**RER C + bus 91-10**. À 4 €, c'est imbattable si vous n'êtes pas pressé. Sinon, le RER B + Orlyval (13 €) reste un excellent compromis.

### Rendez-vous urgent ou vol en correspondance serrée
**Taxi**, sans hésitation. Le délai garanti et l'absence de correspondance valent largement les quelques euros supplémentaires.

### Voyage de nuit (avant 6h ou après 23h)
**Taxi**. Le RER B et l'Orlyval ne circulent pas la nuit. Les VTC sont rares et chers en dehors des heures classiques.

## Conseils pour optimiser votre trajet

- **Réservez votre taxi au moins 2h à l'avance** pour les vols matinaux : vous aurez un chauffeur dédié et un tarif fixe.
- **Vérifiez les travaux RER** : la ligne B subit régulièrement des perturbations le week-end.
- **Comptez 30-45 minutes de marge** à l'aéroport pour un vol domestique et 1h30 pour un vol international.
- **Demandez le terminal exact** au chauffeur (Orly 1, 2, 3 ou 4) : Orly est grand et la marche entre terminaux peut prendre 10 minutes.
`,
  faqs: [
    {
      q: 'Combien coûte un taxi de Massy à Orly ?',
      a: "Le tarif d'un taxi Massy → Orly est compris entre 25 et 35 €, selon l'heure (tarif jour ou nuit) et le terminal de destination. Le prix est fixe et communiqué à la réservation.",
    },
    {
      q: 'Quel est le moyen le plus rapide pour aller de Massy à Orly ?',
      a: "Le taxi est le plus rapide avec 15 minutes porte-à-porte via l'A10. Le RER B + Orlyval prend environ 35 minutes et le bus 91-10 environ 50 minutes.",
    },
    {
      q: 'Le RER B fonctionne-t-il la nuit pour aller à Orly ?',
      a: "Non. Le RER B s'arrête vers 0h30 et reprend vers 5h. L'Orlyval suit les mêmes horaires. Pour un vol très matinal ou tardif, le taxi est la seule option fiable.",
    },
    {
      q: 'Peut-on payer le taxi Massy-Orly par carte bancaire ?',
      a: "Oui, tous nos taxis sont équipés d'un terminal de paiement. Vous pouvez régler en CB (Visa, Mastercard), en espèces, par bon CPAM ou par facture entreprise.",
    },
    {
      q: 'Faut-il réserver le taxi à l\'avance pour Orly ?',
      a: "Pour un vol matinal ou en heure de pointe, oui : réservez la veille pour garantir un chauffeur disponible. Pour une course en journée, 1-2h d'avance suffisent généralement.",
    },
  ],
}

// ============================================================================
// ARTICLE 2 Prix taxi Massy → Orly 2026
// ============================================================================
const post2: BlogPost = {
  slug: 'prix-taxi-massy-orly-2026',
  title: "Prix d'un taxi Massy → Orly : tarifs détaillés 2026",
  description:
    "Tarifs taxi Massy → Orly en 2026 : entre 25 et 35 € selon l'heure. Décomposition du prix, tarif jour/nuit, forfaits, astuces pour économiser. Guide complet.",
  excerpt:
    "Combien coûte vraiment un taxi de Massy à Orly en 2026 ? Décomposition complète du prix, tarif jour vs nuit, aller-retour, et nos conseils pour payer le moins cher.",
  category: 'Tarifs',
  date: '2026-05-12',
  readingMinutes: 10,
  content: `Vous cherchez à connaître le **prix exact d'un taxi entre Massy et l'aéroport d'Orly en 2026** ? Vous êtes au bon endroit. Dans ce guide, nous décomposons le tarif, expliquons pourquoi il varie selon l'heure et le jour, et partageons quelques astuces pour réduire la facture.

## Combien coûte un taxi Massy-Orly en 2026 ?

Le tarif moyen d'une course Massy → Orly en 2026 est compris entre **25 € et 35 €**. Cette fourchette dépend principalement de trois facteurs :

- L'**heure de la prise en charge** (jour ou nuit)
- Le **jour de la semaine** (semaine, dimanche, jour férié)
- Le **terminal de destination** (Orly 1, 2, 3 ou 4)

Pour un trajet en journée, en semaine, vers le terminal 4, comptez environ **27 €**. Pour un trajet de nuit un dimanche, vers le terminal 1, on peut atteindre **35 €**.

## Décomposition du prix

Le tarif d'un taxi en Île-de-France est encadré par un arrêté préfectoral. Voici comment se construit le prix :

### 1. La prise en charge
C'est le tarif forfaitaire de départ, appliqué dès que vous montez à bord. Il est de **4,40 €** en 2026.

### 2. Le prix au kilomètre
Le kilomètre est facturé selon un tarif horokilométrique qui dépend du créneau horaire :

- **Tarif A** (jour, lundi-samedi 10h-17h, retour à vide) : environ 1,14 €/km
- **Tarif B** (nuit 17h-10h, dimanche, retour à vide) : environ 1,53 €/km
- **Tarif C** (jour, course aller) : environ 1,80 €/km
- **Tarif D** (nuit, dimanche, course aller) : environ 2,17 €/km

La distance Massy → Orly étant d'environ **14 km**, le prix kilométrique représente la majeure partie de la course.

### 3. Les suppléments éventuels

- **4e passager adulte** : 4,50 €
- **Bagages volumineux** (au-delà de 5 par personne) : facultatif selon le chauffeur
- **Animaux** (hors chien guide) : 1 € environ

## Tarif jour vs nuit vs dimanche : les différences

| Créneau | Trajet Massy → Orly |
|---|---|
| Jour semaine (10h-17h) | 25-28 € |
| Soir semaine (17h-22h) | 28-32 € |
| Nuit profonde (22h-7h) | 30-35 € |
| Dimanche / jour férié | 30-35 € |

La différence entre tarif jour et tarif nuit est d'environ **20 à 25 %**. Sur Massy-Orly, cela représente environ 5-7 € d'écart.

## Aller simple vs aller-retour : faut-il négocier ?

Pour un **aller-retour Massy-Orly dans la journée** (par exemple : aller le matin, retour le soir), il est possible d'obtenir un tarif préférentiel auprès de votre chauffeur, surtout si vous laissez le véhicule attendre sur place ou si la course retour est garantie.

Comptez environ **45-60 €** pour un aller-retour ferme, contre 50-70 € si vous payez deux courses séparées. L'économie peut atteindre 15-20 %.

## Forfaits Paris-Orly : pourquoi ne s'appliquent pas à Massy

Vous avez peut-être entendu parler des **forfaits taxi Paris-Orly** : 36 € rive gauche, 44 € rive droite. Ces tarifs sont fixés par arrêté ministériel et concernent **uniquement les courses entre Paris intra-muros et l'aéroport d'Orly**.

Massy n'étant pas Paris, ces forfaits ne s'appliquent pas. La course est facturée au compteur (sauf accord préalable de prix fixe avec le chauffeur lors d'une réservation à l'avance).

## Comment économiser sur votre course Massy-Orly

### 1. Réservez à l'avance
Réserver votre taxi 24h à l'avance permet souvent de bénéficier d'un **prix fixe et négocié** (généralement le bas de la fourchette : 25-28 €), sans surprise.

### 2. Évitez les heures de pointe
Le tarif horaire en attente (embouteillage) peut faire grimper la note. Si possible, partez avant 7h ou après 9h30 pour les vols du matin.

### 3. Partagez la course
Si vous voyagez avec un collègue ou un voisin allant aussi à l'aéroport, partager le taxi divise le coût. C'est largement moins cher que deux billets de RER + Orlyval (2 × 13 € = 26 €).

### 4. Profitez des comptes entreprise
Si vous voyagez régulièrement pour le travail, ouvrez un **compte entreprise** : facturation mensuelle, tarifs négociés, suivi des dépenses simplifié pour la comptabilité.

### 5. Demandez un devis ferme
Pour les courses planifiées, demandez systématiquement un **devis ferme à la réservation**. Cela bloque le prix et évite toute mauvaise surprise au compteur en cas d'embouteillage.

## Conclusion : un tarif transparent et compétitif

Le taxi Massy-Orly reste, en 2026, **l'option la plus rentable et la plus rapide** dès lors que vous voyagez à deux ou plus, ou que vous avez des bagages. Le tarif est encadré, transparent et compétitif par rapport aux VTC dont les prix peuvent flamber en heures de pointe.

Pour réserver, un simple appel suffit : disponibilité 24h/24, prix communiqué à l'avance, paiement par carte ou espèces.
`,
  faqs: [
    {
      q: 'Quel est le prix moyen d\'un taxi Massy-Orly en 2026 ?',
      a: 'Le tarif moyen est compris entre 25 et 35 €, selon l\'heure (jour/nuit), le jour de la semaine et le terminal de destination. Une course en journée semaine coûte environ 27 €.',
    },
    {
      q: 'Le forfait Paris-Orly s\'applique-t-il depuis Massy ?',
      a: 'Non. Le forfait à 36 € (rive gauche) ou 44 € (rive droite) ne concerne que les courses entre Paris intra-muros et Orly. Pour Massy, le tarif est au compteur ou en devis ferme négocié à la réservation.',
    },
    {
      q: 'Y a-t-il un supplément pour la nuit ou le dimanche ?',
      a: 'Oui, le tarif nuit (19h-7h) et le tarif dimanche/jour férié sont environ 20-25 % plus élevés que le tarif jour. Sur Massy-Orly, l\'écart est de 5 à 7 €.',
    },
    {
      q: 'Peut-on négocier un tarif aller-retour ?',
      a: 'Oui, pour un aller-retour dans la même journée, un tarif préférentiel peut être proposé. Comptez environ 45-60 € au lieu de 50-70 € pour deux courses indépendantes.',
    },
    {
      q: 'Comment obtenir le tarif le plus bas ?',
      a: 'Réservez 24h à l\'avance pour un devis ferme, évitez les heures de pointe, partagez la course si possible, et ouvrez un compte entreprise si vous voyagez régulièrement.',
    },
  ],
}

// ============================================================================
// ARTICLE 3 Guide gare Massy TGV
// ============================================================================
const post3: BlogPost = {
  slug: 'guide-gare-massy-tgv',
  title: 'Gare Massy TGV : guide complet (parking, accès, horaires)',
  description:
    "Guide complet de la gare Massy TGV : accès en taxi, voiture, RER, bus. Parkings et tarifs, dépose-minute, destinations TGV, conseils pratiques pour voyager sereinement.",
  excerpt:
    "Tout savoir sur la gare Massy TGV : comment y accéder, où se garer, où prendre/déposer un taxi, quelles destinations sont desservies et nos conseils pour ne pas rater votre train.",
  category: 'Gares',
  date: '2026-05-15',
  readingMinutes: 9,
  content: `La **gare Massy TGV** est l'un des hubs ferroviaires les plus stratégiques d'Île-de-France. Avec plus de **10 millions de voyageurs par an**, elle dessert les principales villes françaises sans passer par Paris. Que vous y veniez pour la première fois ou que vous l'utilisiez régulièrement, ce guide pratique répond à toutes vos questions.

## Présentation de la gare Massy TGV

Située à **Massy (91300)** dans l'Essonne, la gare Massy TGV a été inaugurée en 1991 pour relier directement le sud, l'ouest et le nord de la France sans avoir à passer par Paris. C'est aujourd'hui un nœud essentiel pour les voyageurs d'affaires et les habitants du sud francilien.

La gare TGV ne doit pas être confondue avec la **gare Massy-Palaiseau RER** (B et C), située à 500 mètres à pied. Une passerelle couverte les relie.

**Adresse :** Place Maurice Schumann, 91300 Massy.

## Comment s'y rendre

### En taxi
C'est l'option la plus simple et la plus directe, surtout avec des bagages. La dépose se fait à seulement quelques mètres de l'entrée principale, sans escaliers ni grand parcours à pied. Compter 5-10 minutes depuis le centre de Massy, 15-20 minutes depuis Palaiseau ou Antony.

### En voiture
La gare est accessible par la **N20**, la **N118** (sortie 9 ou 10) et l'**A10** (sortie 8 ou 9). Le GPS vous guidera vers Place Maurice Schumann. Attention : la circulation peut être dense aux heures de pointe.

### En RER
La **gare Massy-Palaiseau (RER B et C)** est connectée à la gare TGV par une passerelle couverte de 5 minutes à pied. C'est l'option la plus écologique mais la plus contraignante avec des bagages.

### En bus
Plusieurs lignes Albatrans desservent la gare : **91-06, 91-08, 91-10, 91-11, et le Noctilien N122**. Renseignez-vous sur les horaires car la fréquence varie le soir et le week-end.

## Parkings : tarifs et durée

La gare Massy TGV dispose de plusieurs parkings gérés par **Effia** :

| Type | Tarif indicatif | Idéal pour |
|---|---|---|
| Dépose-minute | Gratuit (10 min) | Dépose éclair |
| Parking courte durée (P1) | ~4 €/h | Stationnement < 4h |
| Parking longue durée (P2) | ~14 €/jour, dégressif | Voyage de plusieurs jours |
| Parking abonné | Tarif mensuel | Voyageurs réguliers |

**Astuce économique :** pour un voyage de plus de 3 jours, **prendre un taxi peut revenir moins cher que de laisser sa voiture au parking**. Un aller-retour Massy intra-ville coûte 20-30 €, alors qu'une semaine de parking longue durée dépasse souvent 80 €.

## Dépose-minute taxi : où exactement ?

La **dépose-minute taxis** se situe sur le **parvis principal de la gare**, côté Place Maurice Schumann. Le chauffeur peut s'arrêter quelques minutes pour vous laisser descendre avec vos bagages un agent veille à la fluidité du flux.

Si vous arrivez **en taxi commandé**, votre chauffeur peut vous accompagner jusqu'à l'entrée du hall, voire jusqu'au quai en cas d'aide aux personnes à mobilité réduite (sur demande à la réservation).

## Destinations desservies depuis Massy TGV

Voici les principales liaisons depuis Massy TGV (durées indicatives) :

- **Lyon Part-Dieu** : 1h55, jusqu'à 12 trains/jour
- **Bordeaux Saint-Jean** : 2h30, environ 6 trains/jour
- **Marseille Saint-Charles** : 3h, jusqu'à 8 trains/jour
- **Lille Europe** : 1h20, plusieurs trains/jour
- **Rennes** : 2h, environ 8 trains/jour
- **Strasbourg** : 2h30 (avec correspondance souvent)
- **Nantes** : 2h20, jusqu'à 10 trains/jour
- **Toulouse Matabiau** : 4h25, plusieurs trains/jour
- **Montpellier Saint-Roch** : 3h15

Massy TGV propose également des **liaisons internationales** : Bruxelles (via Lille), Londres (avec correspondance), et certaines destinations en TGV Lyria vers la Suisse.

## Services disponibles dans la gare

- **Distributeurs de billets** SNCF
- **Salons d'attente** (Salon Grand Voyageur pour les abonnés)
- **Restauration rapide** (boulangerie, café, snacks)
- **Boutique presse**
- **Wifi gratuit** dans la gare et à bord (selon train)
- **Accueil PMR** (Service Accès Plus, à réserver 48h avant)
- **Consigne à bagages** (selon disponibilité)

## Conseils pratiques pour voyager sereinement

### Arriver à l'avance
La SNCF recommande d'arriver **20 à 30 minutes avant le départ**. En cas de fort affluence (week-end, ponts, vacances), comptez **45 minutes**, notamment si vous prenez le RER en correspondance.

### Anticiper les contrôles
Depuis 2024, des **contrôles de billets systématiques** sont effectués sur les quais. Préparez votre billet (papier ou téléphone) à l'avance.

### Penser à la météo
La gare est partiellement à ciel ouvert sur certains quais. En cas de mauvais temps, prévoyez une tenue adaptée pour le trajet du hall vers le quai.

### Réserver son taxi à l'arrivée
Si vous arrivez à Massy en TGV et avez besoin d'un taxi pour rentrer ou rejoindre une autre destination (Orly à 15 min, Saclay à 20 min, Paris à 30 min), **réservez-le pendant votre trajet** : votre chauffeur vous attendra avec une pancarte à votre nom à la sortie.
`,
  faqs: [
    {
      q: 'Comment réserver un taxi à la gare Massy TGV ?',
      a: "Vous pouvez appeler 24h/24 ou réserver en ligne. Pour une arrivée en TGV, indiquez votre numéro de train : le chauffeur vous attendra à la sortie avec une pancarte à votre nom, sans frais d'attente.",
    },
    {
      q: 'Quel parking choisir à la gare Massy TGV ?',
      a: 'Pour un trajet de moins de 4h, le parking courte durée P1 (~4 €/h). Pour plusieurs jours, le P2 longue durée (~14 €/jour). Pour les voyages réguliers, l\'abonnement mensuel est rentable dès 6 jours/mois.',
    },
    {
      q: 'Quelles villes peut-on rejoindre depuis Massy TGV ?',
      a: 'Lyon (1h55), Bordeaux (2h30), Marseille (3h), Lille (1h20), Rennes (2h), Nantes (2h20), Toulouse (4h25), Montpellier (3h15) et des liaisons internationales vers Bruxelles et la Suisse.',
    },
    {
      q: 'La gare Massy TGV est-elle accessible aux personnes à mobilité réduite ?',
      a: 'Oui, la gare est équipée d\'ascenseurs et de rampes. Le service SNCF Accès Plus est disponible sur réservation 48h à l\'avance pour l\'assistance aux voyageurs PMR.',
    },
    {
      q: 'Combien de temps faut-il pour aller de Massy TGV à Orly ?',
      a: 'En taxi, comptez 15 minutes via l\'A10. En transports en commun (RER B + Orlyval), environ 35 minutes avec une correspondance à Antony.',
    },
  ],
}

// ============================================================================
// ARTICLE 4 Taxi de nuit en Essonne
// ============================================================================
const post4: BlogPost = {
  slug: 'taxi-de-nuit-essonne',
  title: 'Taxi de nuit en Essonne : tarifs, disponibilité, conseils',
  description:
    "Tout savoir sur le taxi de nuit en Essonne : horaires, tarifs majorés, cas d'usage (boîte, train tardif, urgence), comment réserver et sécurité. Disponible 24h/24.",
  excerpt:
    "Besoin d'un taxi la nuit en Essonne ? Découvrez les tarifs majorés, les horaires \"nuit\", les cas d'usage typiques (TGV tardif, sortie, urgence) et comment réserver en toute sécurité.",
  category: 'Nuit',
  date: '2026-05-18',
  readingMinutes: 8,
  content: `Quand le RER s'arrête, le métro ferme et les VTC se font rares, le taxi reste la solution la plus fiable pour vos déplacements nocturnes en Essonne. Ce guide répond à toutes vos questions : tarifs, disponibilité, sécurité, et cas d'usage typiques.

## Pourquoi un taxi de nuit ?

La nuit pose des défis particuliers en termes de mobilité, surtout en banlieue :

- **Le RER B s'arrête vers 0h30** et reprend vers 5h
- Les **bus de jour** ne circulent plus après 22h-23h
- Les **Noctiliens** existent mais sont peu fréquents et ne couvrent pas tous les axes
- Les **VTC** sont disponibles mais avec des tarifs souvent multipliés par 2 ou 3 en pleine nuit
- La **sécurité** : marcher seul·e dans la nuit n'est pas toujours rassurant

Le taxi de nuit, disponible 24h/24 et 7j/7, garantit une prise en charge rapide à un tarif encadré.

## Horaires "nuit" en taxi : ce que dit la réglementation

En Île-de-France, les tarifs taxi sont fixés par arrêté préfectoral. Le **tarif "nuit"** s'applique :

- **Du lundi au samedi : de 17h à 10h**
- **Le dimanche et les jours fériés : toute la journée**

Concrètement, le tarif majoré s'applique dès **17h en semaine**, ce qui inclut la fin d'après-midi, la soirée et la nuit profonde.

## Tarifs nuit en Essonne : ce que ça change

Le tarif au kilomètre en "nuit" est environ **20 à 25 %** plus élevé qu'en journée. Sur quelques courses typiques en Essonne :

| Trajet | Tarif jour | Tarif nuit |
|---|---|---|
| Massy → Orly | 25-28 € | 30-35 € |
| Palaiseau → Massy TGV | 12-15 € | 15-20 € |
| Massy → Paris centre | 45-55 € | 55-70 € |
| Antony → Orly | 20-25 € | 25-30 € |

L'écart représente en moyenne **5 à 10 €** sur les trajets courants. C'est le prix de la **disponibilité immédiate, du confort et de la sécurité** quand aucune autre option n'est viable.

## Cas d'usage typiques

### 1. Sortie de boîte ou de restaurant
Vous sortez d'un dîner à Massy, d'une soirée sur le plateau de Saclay ou d'un cinéma à Antony à 1h du matin. Le RER est fermé, vous ne souhaitez pas conduire après avoir bu. Le taxi vous ramène en toute sécurité, sans risque de contrôle ni d'accident.

### 2. Retour de TGV tardif
Vous arrivez à Massy TGV à 23h45 en provenance de Lyon ou Marseille. Le dernier RER B vers le sud de l'Essonne est déjà parti. Un taxi commandé pendant votre trajet vous attend à la sortie.

### 3. Urgence médicale non vitale
Pour une consultation aux urgences (Hôpital Privé d'Antony, Hôpital de Longjumeau, etc.) en pleine nuit, sans appeler le SAMU, le taxi conventionné CPAM peut prendre en charge le transport. Conservez votre prescription pour le remboursement.

### 4. Vol matinal à Orly ou CDG
Pour un vol à 6h30, il faut être à l'aéroport vers 5h. Le RER ne reprend pas à temps. Le taxi est la seule solution fiable, à réserver la veille pour garantir un chauffeur.

### 5. Garde d'enfants ou trajet professionnel nocturne
Personnel hospitalier, agents de sécurité, équipes de maintenance : le taxi de nuit est un partenaire fiable pour les professionnels travaillant en horaires décalés.

## Comment réserver en pleine nuit

C'est très simple : **un seul numéro, disponible 24h/24, 7j/7**, y compris les jours fériés. Que vous soyez à Massy, Palaiseau, Antony, Les Ulis, Saclay ou ailleurs en Essonne, un chauffeur est dispatché vers votre adresse.

**Délai moyen de prise en charge la nuit :** 15 à 25 minutes selon la zone et l'heure (un peu plus long entre 3h et 5h, créneau le plus calme).

Pour optimiser votre attente :

- Donnez une **adresse précise** (numéro, rue, code d'accès si nécessaire)
- Indiquez le **nombre de passagers** et de bagages
- Précisez la **destination** pour que le chauffeur puisse vous communiquer une estimation
- Restez **joignable** sur le numéro fourni pour le rappel d'arrivée

## Sécurité : nos engagements pour vos trajets nocturnes

La nuit, la sécurité est encore plus importante. Voici nos engagements :

- **Chauffeurs professionnels** identifiés, titulaires de la carte professionnelle de taxi
- **Véhicules signalisés** (lumineux taxi, taximètre)
- **Suivi en temps réel** de la course
- **Plaque d'immatriculation** et **numéro de chauffeur** communicables avant l'arrivée
- **Paiement sécurisé** par CB, espèces ou facture
- **Reçu remis systématiquement** en fin de course

Si vous êtes seul·e la nuit, n'hésitez pas à **partager le trajet en direct** avec un proche (envoi du numéro de plaque et de l'estimation d'arrivée).

## Conseils pratiques

- **Anticipez si possible** : un taxi réservé à l'avance, c'est une prise en charge garantie même un soir de Nouvel An.
- **Prévoyez un peu d'espèces** : en cas de panne du terminal CB en pleine nuit, c'est plus serein.
- **Communiquez votre arrivée** : envoyez un SMS à un proche quand vous montez à bord et à votre arrivée.
- **Vérifiez le compteur** au démarrage pour éviter tout malentendu sur le tarif appliqué.

En Essonne, la nuit n'est plus un obstacle à vos déplacements. Avec un service taxi 24h/24, vous voyagez en toute sérénité, quels que soient l'heure et le lieu.
`,
  faqs: [
    {
      q: 'À partir de quelle heure s\'applique le tarif "nuit" en taxi ?',
      a: 'Le tarif nuit s\'applique du lundi au samedi de 17h à 10h, et toute la journée le dimanche et les jours fériés. C\'est environ 20-25 % plus cher que le tarif jour.',
    },
    {
      q: 'Y a-t-il toujours un taxi disponible la nuit en Essonne ?',
      a: 'Oui. Notre service est disponible 24h/24, 7j/7. Le délai moyen de prise en charge la nuit est de 15 à 25 minutes selon la zone et l\'heure.',
    },
    {
      q: 'Peut-on payer en carte bancaire la nuit ?',
      a: 'Oui, tous nos véhicules sont équipés de terminaux CB fonctionnels 24h/24. Nous acceptons aussi les espèces et les bons CPAM pour les courses conventionnées.',
    },
    {
      q: 'Combien coûte un taxi de nuit Massy-Paris ?',
      a: 'Comptez 55 à 70 € pour un trajet Massy → Paris centre en tarif nuit, contre 45-55 € en tarif jour. L\'écart est lié au tarif kilométrique majoré applicable de 17h à 10h.',
    },
    {
      q: 'Que faire en cas de retard du taxi de nuit ?',
      a: 'Appelez le standard pour avoir une mise à jour en temps réel. En cas de gros retard imprévu (incident sur la route), un autre véhicule peut être dépêché. Restez joignable sur le numéro fourni à la réservation.',
    },
  ],
}

// ============================================================================
// EXPORTS
// ============================================================================
export const posts: BlogPost[] = [post1, post2, post3, post4]

export const getPost = (slug: string): BlogPost | undefined =>
  posts.find((p) => p.slug === slug)

export const getRelatedPosts = (slug: string, limit = 3): BlogPost[] =>
  posts.filter((p) => p.slug !== slug).slice(0, limit)
