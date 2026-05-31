import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import RelatedCities from '@/components/RelatedCities'
import BookingForm from '@/components/BookingForm'
import { FAQSchema, ServiceSchema } from '@/components/seo/Schemas'
import { SITE } from '@/lib/site'
import {
  Phone,
  Clock,
  CheckCircle,
  Star,
  CreditCard,
  Shield,
  Users,
  Car,
  HelpCircle,
  Building2,
  FileText,
  Briefcase,
  Crown,
  Zap,
  Bus,
  Calendar,
  Receipt,
  Info,
  MapPin,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Taxi entreprise Essonne : compte pro B2B',
  description: `Taxi entreprise B2B Essonne : compte dédié, facturation mensuelle, justificatifs détaillés. Devis au ${SITE.phone.display}.`,
  openGraph: {
    title: 'Taxi entreprise Essonne : compte pro B2B',
    description: `Compte entreprise, facturation mensuelle, transferts collaborateurs et VIP. Mercedes Classe E, Tesla, Van 7 places. Devis personnalisé au ${SITE.phone.display}.`,
    url: `${SITE.url}/taxi-entreprise`,
  },
  alternates: {
    canonical: `${SITE.url}/taxi-entreprise`,
  },
}

const usps = [
  {
    icon: Receipt,
    title: 'Facturation mensuelle',
    description: 'Une seule facture par mois, détaillée par collaborateur, centre de coût ou projet. Export comptable disponible.',
  },
  {
    icon: Building2,
    title: 'Compte entreprise dédié',
    description: 'Interlocuteur unique, conditions négociées, suivi consolidé de vos déplacements. Ouverture en 48 h.',
  },
  {
    icon: FileText,
    title: 'Justificatifs détaillés',
    description: 'Reçus normés pour chaque course (trajet, date, montant, TVA), conformes à la note de frais et à la TVA déductible.',
  },
  {
    icon: Clock,
    title: 'Réservation centralisée',
    description: 'Une ligne unique 24h/24, e-réservation et planification multi-collaborateurs en quelques clics.',
  },
]

const solutions = [
  {
    icon: Building2,
    title: 'Compte entreprise',
    description: 'Profil unique pour votre société avec utilisateurs autorisés, plafonds, centres de coûts et règles de validation.',
  },
  {
    icon: Receipt,
    title: 'Facturation mensuelle',
    description: 'Facture consolidée chaque fin de mois, avec ventilation par collaborateur, projet, ou département.',
  },
  {
    icon: Calendar,
    title: 'Abonnement de courses',
    description: 'Forfait de courses récurrentes pour vos déplacements réguliers (dirigeants, navettes, transferts).',
  },
  {
    icon: Zap,
    title: 'E-réservation 24h/24',
    description: 'Plateforme en ligne ou téléphonique pour réserver, modifier, annuler en temps réel.',
  },
  {
    icon: FileText,
    title: 'Dashboard et suivi',
    description: 'Visualisez vos courses, vos coûts, vos justificatifs et exportez vos données pour la comptabilité.',
  },
  {
    icon: Shield,
    title: 'SLA et engagement',
    description: 'Engagements contractuels sur la ponctualité, la qualité véhicule et la disponibilité prioritaire.',
  },
]

const clients = [
  {
    icon: Briefcase,
    title: 'DAF, RH et services généraux',
    description: 'Centralisez tous les déplacements professionnels de vos collaborateurs avec un seul prestataire. Maîtrise des budgets, conformité TVA, reporting mensuel.',
  },
  {
    icon: Users,
    title: 'Assistantes de direction',
    description: 'Réservez en deux minutes les transferts de vos dirigeants. Confirmation immédiate, chauffeur dédié possible, gestion des imprévus.',
  },
  {
    icon: Calendar,
    title: 'Événementiel et séminaires',
    description: 'Mise à disposition d\'une flotte coordonnée pour vos séminaires, congrès, soirées d\'entreprise. Plusieurs véhicules simultanément.',
  },
  {
    icon: Crown,
    title: 'Hôtellerie et conciergerie',
    description: 'Transferts VIP pour vos clients : accueil aéroport pancarte, véhicule Premium, chauffeur en costume sur demande.',
  },
  {
    icon: Zap,
    title: 'Startups et scale-up Saclay',
    description: 'Solution flexible pour vos déplacements R&D, recrutement, investisseurs. Facturation simple, pas d\'engagement de volume.',
  },
]

const services = [
  {
    icon: Users,
    title: 'Transferts collaborateurs',
    description: 'Aéroport (Orly, CDG, Le Bourget, Beauvais), gare TGV Massy, gares parisiennes, sites clients et réunions. Suivi de vol et de train inclus.',
  },
  {
    icon: Calendar,
    title: 'Séminaires et événements',
    description: 'Mise à disposition d\'une flotte coordonnée : plusieurs Mercedes Classe E ou Vans pour transporter participants, intervenants et VIP entre lieux d\'événement.',
  },
  {
    icon: Crown,
    title: 'Transport VIP et clients',
    description: 'Mercedes Classe E ou Classe V, accueil aéroport avec pancarte, chauffeur formé au protocole, eau et chargeurs à bord, discrétion garantie.',
  },
  {
    icon: Briefcase,
    title: 'Roadshow B2B',
    description: 'Mise à disposition d\'un chauffeur dédié pour vos roadshows commerciaux ou investisseurs : itinéraire multi-RDV, attente sur place, kilométrage adapté.',
  },
]

const flotte = [
  {
    icon: Crown,
    name: 'Mercedes Classe E',
    type: 'Premium',
    description: 'Berline d\'affaires haut de gamme, intérieur cuir, climatisation tri-zone, eau offerte, chargeurs USB. Pour dirigeants et clients VIP.',
    capacity: '4 passagers + bagages',
  },
  {
    icon: Zap,
    name: 'Tesla Model Y / Model 3',
    type: 'Éco-responsable',
    description: '100 % électrique, démarche RSE valorisable, silence à bord, factures TVA bas-carbone. Idéal pour collaborateurs et engagement RSE.',
    capacity: '4 passagers + bagages',
  },
  {
    icon: Bus,
    name: 'Mercedes Classe V',
    type: 'Van Premium',
    description: 'Jusqu\'à 7 passagers en configuration équipe, ou 5 passagers avec grand espace bagages. Idéal navette aéroport pour comité de direction.',
    capacity: '7 passagers max',
  },
]

const zonesPrioritaires = [
  { name: 'Plateau de Saclay / Polytechnique', desc: 'CEA, Polytechnique, CentraleSupélec, Synchrotron SOLEIL, EDF Lab, Thales R&T' },
  { name: 'Massy', desc: 'Atlantis Business Park, Massy-Opéra, gare TGV, sièges sociaux' },
  { name: 'Évry-Courcouronnes', desc: 'Génopole, Université Paris-Saclay Évry, sièges régionaux' },
  { name: 'La Défense', desc: 'Tours du quartier d\'affaires, trajets quotidiens collaborateurs' },
  { name: 'Roissy CDG', desc: 'Tous terminaux, lounges business, parkings VIP' },
  { name: 'Orly', desc: 'Orly 1, 2, 3, 4 : terminaux affaires et vols domestiques' },
]

const etapesOuverture = [
  {
    num: 1,
    title: 'Prise de contact',
    description: 'Appelez-nous ou envoyez un email. Nous analysons vos besoins (volume, destinations types, contraintes) sous 24 h.',
  },
  {
    num: 2,
    title: 'Devis et convention',
    description: 'Vous recevez un devis personnalisé et une convention de compte entreprise précisant les tarifs, conditions de paiement et SLA.',
  },
  {
    num: 3,
    title: 'Activation du compte',
    description: 'Sous 48 h après signature : ligne dédiée, identifiants e-réservation, premier transfert possible immédiatement.',
  },
]

const faqItems = [
  {
    q: 'Comment fonctionne la facturation entreprise mensuelle ?',
    a: 'Chaque fin de mois, nous éditons une facture unique récapitulant toutes les courses réalisées par vos collaborateurs sur le compte. Le détail comprend : date, trajet, collaborateur, montant HT, TVA, total TTC. Une ventilation par centre de coût, projet ou département est possible sur demande. La facture est envoyée par email au format PDF, et un export Excel ou CSV est disponible pour votre logiciel comptable.',
  },
  {
    q: 'Quels sont vos délais de paiement pour les comptes entreprise ?',
    a: 'Notre condition standard est un paiement à 30 jours fin de mois, par virement SEPA. Pour les grands comptes ou volumes importants, nous étudions des conditions personnalisées (45 jours, mensualisation). Une RIB est demandée à l\'ouverture du compte. En cas de retard de paiement, nous appliquons les pénalités légales en vigueur, mais privilégions toujours le dialogue.',
  },
  {
    q: 'Mon entreprise a plusieurs sites en Île-de-France, est-ce possible ?',
    a: 'Absolument. Un compte unique peut couvrir tous vos sites : siège, agences, sites R&D, bureaux satellites. Vous gérez les utilisateurs autorisés et leurs droits depuis l\'interface ou par téléphone. La facturation peut être consolidée ou segmentée par site selon votre préférence.',
  },
  {
    q: 'Pouvez-vous gérer des demandes urgentes ou de dernière minute ?',
    a: 'Oui, c\'est l\'un des avantages d\'un compte entreprise : vous bénéficiez d\'une priorité de prise en charge 24h/24. Pour les courses immédiates, comptez 10 à 20 minutes selon la zone. Notre flotte est dimensionnée pour absorber les pics, et nous travaillons avec des chauffeurs partenaires en backup pour les périodes très chargées.',
  },
  {
    q: 'Quelle est votre politique d\'annulation pour les entreprises ?',
    a: 'Annulation gratuite jusqu\'à 2 heures avant l\'heure prévue, sans frais, en appelant le ' + SITE.phone.display + ' ou via votre espace de réservation. Pour les courses planifiées plus de 24 h à l\'avance, l\'annulation est gratuite jusqu\'à 1 h avant. Au-delà, des frais de course minimum peuvent s\'appliquer. Pour les mises à disposition longue durée, des conditions spécifiques sont précisées au devis.',
  },
  {
    q: 'Comment vous transmettre notre RIB et nos justificatifs ?',
    a: 'À l\'ouverture du compte, nous vous envoyons un dossier d\'inscription comprenant : convention de compte, mandat SEPA si paiement automatique, vos coordonnées bancaires (RIB), Kbis de moins de 3 mois, attestation de TVA intracommunautaire. Tout se transmet par email sécurisé ou via notre espace client. Compte activé sous 48 h après réception du dossier complet.',
  },
  {
    q: 'Vos justificatifs sont-ils conformes pour la note de frais et la TVA ?',
    a: 'Oui, chaque course génère un justificatif normalisé conforme à la réglementation française : mention TAXI Pro 91, n° SIRET, n° TVA intracommunautaire, date, trajet, montant HT, TVA 10 %, montant TTC. Ces justificatifs sont acceptés sans réserve par les services comptables et permettent la récupération de la TVA pour les déplacements professionnels éligibles.',
  },
  {
    q: 'Vos chauffeurs sont-ils formés à l\'accueil de clients professionnels ?',
    a: 'Tous nos chauffeurs sont titulaires de la carte professionnelle de conducteur de taxi, expérimentés sur les axes A6, A10, A86, N118 et RN20. Pour le service VIP, nous mobilisons des chauffeurs spécifiquement formés au protocole d\'accueil : tenue soignée, anglais professionnel sur demande, discrétion absolue, gestion des bagages, attente en lounge. Sur demande, un chauffeur attitré peut être affecté à vos dirigeants pour assurer une relation durable.',
  },
]

export default function TaxiEntreprise() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: 'Taxi entreprise B2B' }]} />

      <ServiceSchema
        name="Taxi entreprise B2B Essonne"
        description="Service de taxi entreprise en Essonne : compte dédié, facturation mensuelle, paiement à 30 jours, justificatifs détaillés, transferts collaborateurs et VIP, mise à disposition séminaires. Tesla, Mercedes Classe E et Classe V."
        url={`${SITE.url}/taxi-entreprise`}
        areaServed={['Massy', 'Palaiseau', 'Saclay', 'Les Ulis', 'Évry-Courcouronnes', 'Antony', 'Orsay', 'Gif-sur-Yvette']}
      />
      <FAQSchema faqs={faqItems} />

      <main>
        {/* Hero Banner */}
        <section className="bg-yellow-400 py-4">
          <div className="container mx-auto px-4 text-center">
            <p className="text-black font-medium">
              Ouvrir un compte entreprise ? Appelez le{' '}
              <a href={SITE.phone.tel} className="font-bold text-xl hover:underline">
                {SITE.phone.display}
              </a>
            </p>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center gap-2 text-yellow-600 mb-4">
                  <Briefcase className="w-5 h-5" />
                  <span className="font-medium">Solutions B2B : Essonne et Île-de-France</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Taxi entreprise Essonne : Facturation, comptes pro &amp; déplacements professionnels
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Confiez vos <strong>déplacements professionnels</strong> à TAXI Pro 91. Compte
                  entreprise dédié, <strong>facturation mensuelle</strong>, paiement à 30 jours,
                  justificatifs conformes TVA. Service <strong>24h/24</strong> sur l&apos;Essonne et toute
                  l&apos;Île-de-France.
                </p>

                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-200">
                    <Receipt className="w-4 h-4 text-yellow-500" />
                    <span className="font-medium text-gray-900 text-sm">Facture mensuelle</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-700">
                    <Building2 className="w-4 h-4 text-yellow-500" />
                    Compte dédié
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-700">
                    <CreditCard className="w-4 h-4 text-yellow-500" />
                    Paiement 30 j
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-700">
                    <Clock className="w-4 h-4 text-yellow-500" />
                    24h/24
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Justificatifs TVA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Réservation centralisée</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Flotte Premium</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Tarifs négociés</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={SITE.phone.tel}
                    className="inline-flex items-center gap-3 bg-gray-900 text-white font-bold text-lg py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    {SITE.phone.display}
                  </a>
                  <a
                    href="#reservation"
                    className="inline-flex items-center gap-3 bg-yellow-400 text-black font-bold text-lg py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors"
                  >
                    Demander un devis
                  </a>
                </div>
              </div>

              <div id="reservation">
                <BookingForm compact />
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi choisir TAXI Pro 91 entreprise */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Pourquoi choisir TAXI Pro 91 pour votre entreprise
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Spécialiste B2B sur l&apos;Essonne et le sud de l&apos;Île-de-France, nous avons conçu une offre
              entreprise pensée pour les directions financières, les RH et les assistantes de
              direction qui réservent au quotidien.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {usps.map((u) => {
                const Icon = u.icon
                return (
                  <div
                    key={u.title}
                    className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-yellow-400 transition-colors"
                  >
                    <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-black" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{u.title}</h3>
                    <p className="text-gray-600 text-sm">{u.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Solutions entreprise */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Solutions entreprises proposées
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Une gamme de services modulaire pour répondre à tous les besoins de déplacement
              professionnel : du compte simple à l&apos;abonnement complet.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((s) => {
                const Icon = s.icon
                return (
                  <div
                    key={s.title}
                    className="bg-white rounded-xl p-6 border border-gray-200"
                  >
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                    <p className="text-gray-600 text-sm">{s.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Pour qui */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Pour qui ? Nos clients pros
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Nous accompagnons des dizaines d&apos;entreprises de l&apos;Essonne et de l&apos;Île-de-France. Voici
              les profils qui nous font confiance au quotidien.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {clients.map((c) => {
                const Icon = c.icon
                return (
                  <div key={c.title} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                        <p className="text-gray-600 text-sm">{c.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Services entreprise détaillés */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Services entreprise détaillés
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Quatre offres principales adaptées à vos cas d&apos;usage professionnels, combinables au
              sein d&apos;un même compte entreprise.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {services.map((s) => {
                const Icon = s.icon
                return (
                  <div
                    key={s.title}
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:border-yellow-400 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-black" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg">{s.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{s.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Facturation et comptabilité */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Facturation et comptabilité
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  La <strong>simplification administrative</strong> est au cœur de notre offre
                  entreprise. Au lieu de multiplier les justificatifs papier collectés par vos
                  collaborateurs, vous recevez une seule facture consolidée par mois, parfaitement
                  conforme à la réglementation française.
                </p>
                <p>
                  Chaque ligne de la facture précise : <strong>date de la course</strong>, lieu de
                  départ, lieu d&apos;arrivée, nom du collaborateur ayant utilisé le service, type de
                  véhicule, montant HT, taux de TVA (10 % pour le transport de personnes), montant
                  TTC. Sur demande, nous ajoutons les références de centre de coût, code projet ou
                  service interne pour faciliter votre ventilation analytique.
                </p>
                <p>
                  Le <strong>paiement à 30 jours fin de mois par virement SEPA</strong> est notre
                  condition standard. Pour les grands comptes ou volumes mensuels élevés, nous
                  étudions des conditions personnalisées. Un export comptable au format Excel ou CSV
                  est joint à chaque facture pour intégration directe dans votre logiciel
                  (Sage, Cegid, EBP, QuickBooks).
                </p>
                <p>
                  En cas de besoin de récupération de TVA pour vos déplacements professionnels
                  éligibles, nos justificatifs respectent strictement la réglementation : numéro de
                  SIRET, numéro de TVA intracommunautaire, mention obligatoire et détail des
                  prestations.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 text-center">
                  <Receipt className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <p className="font-bold text-gray-900 text-sm">1 facture / mois</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 text-center">
                  <CreditCard className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <p className="font-bold text-gray-900 text-sm">Paiement 30 j</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 text-center">
                  <FileText className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <p className="font-bold text-gray-900 text-sm">Export comptable</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 text-center">
                  <Shield className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <p className="font-bold text-gray-900 text-sm">TVA 10 % récupérable</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flotte business */}
        <section className="py-12 md:py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Notre flotte business
            </h2>
            <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
              Trois gammes de véhicules récents, entretenus, équipés du nécessaire à bord pour vos
              déplacements professionnels.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {flotte.map((v) => {
                const Icon = v.icon
                return (
                  <div
                    key={v.name}
                    className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-yellow-400 transition-colors"
                  >
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-white text-lg">{v.name}</h3>
                      <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded">
                        {v.type}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">{v.description}</p>
                    <div className="flex items-center gap-2 text-yellow-400 text-sm">
                      <Users className="w-4 h-4" />
                      <span>{v.capacity}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Zones d'intervention */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Zones d&apos;intervention prioritaires
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Notre flotte est positionnée pour répondre rapidement aux principaux pôles d&apos;activité
              du sud de l&apos;Île-de-France.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {zonesPrioritaires.map((z) => (
                <div
                  key={z.name}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-yellow-400 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-yellow-500" />
                    <h3 className="font-bold text-gray-900">{z.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{z.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 max-w-3xl mx-auto bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm">
                  <strong>Bon à savoir :</strong> nous intervenons partout en Île-de-France pour les
                  comptes entreprise. Au-delà de la zone Essonne, nos tarifs longue distance sont
                  négociés au devis selon volumes et fréquences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ouvrir un compte */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Ouvrir un compte entreprise en 3 étapes
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Un processus simple et rapide : votre compte est opérationnel en moins de 48 h après
              transmission des documents.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {etapesOuverture.map((e) => (
                <div key={e.num} className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-black">
                    {e.num}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{e.title}</h3>
                  <p className="text-gray-600 text-sm">{e.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href={SITE.phone.tel}
                className="inline-flex items-center gap-3 bg-gray-900 text-white font-bold text-lg py-3 px-8 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Démarrer maintenant : {SITE.phone.display}
              </a>
            </div>
          </div>
        </section>

        {/* Tarifs B2B */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Tarifs B2B
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  Chaque compte entreprise bénéficie d&apos;un <strong>devis personnalisé</strong>{' '}
                  établi en fonction de vos volumes prévisionnels, des destinations principales, du
                  type de véhicule privilégié et de la fréquence de réservation. Aucun engagement de
                  volume minimum n&apos;est imposé.
                </p>
                <p>
                  Nos <strong>remises sur volume</strong> sont calculées sur le chiffre d&apos;affaires
                  mensuel : à partir de 1 500 € HT mensuels, des conditions préférentielles
                  s&apos;appliquent. Pour les contrats annuels, des tarifs encore plus compétitifs sont
                  disponibles.
                </p>
                <p>
                  Les tarifs incluent : prise en charge, kilométrage, temps de trajet, attente
                  raisonnable (15 minutes à l&apos;aéroport et 5 minutes en porte-à-porte). Les
                  suppléments éventuels (péages longue distance, attente prolongée, course de nuit
                  majorée) sont précisés dans la convention.
                </p>
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Info className="w-5 h-5 text-yellow-600" />
                    Devis sous 24 h
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Transmettez-nous vos besoins (volume, destinations, fréquence). Nous revenons
                    sous 24 h ouvrées avec un tarif détaillé et adapté.
                  </p>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    Remises progressives
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Plus votre volume mensuel augmente, plus le tarif unitaire baisse. Conditions
                    annuelles encore plus avantageuses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Questions fréquentes : Taxi entreprise
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Tout ce que vous devez savoir avant d&apos;ouvrir un compte entreprise chez TAXI Pro 91.
            </p>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqItems.map((item, index) => (
                <details
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden group"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      <span className="font-medium text-gray-900">{item.q}</span>
                    </div>
                    <span className="text-yellow-500 group-open:rotate-180 transition-transform">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-600 leading-relaxed">{item.a}</p>
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-12 max-w-3xl mx-auto p-6 bg-yellow-50 rounded-xl border border-yellow-200 text-center">
              <p className="text-gray-900 font-medium mb-4 text-lg">
                Prêt à simplifier vos déplacements professionnels ?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={SITE.phone.tel}
                  className="inline-flex items-center gap-3 bg-yellow-400 text-black font-bold text-lg py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {SITE.phone.display}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-gray-900 text-white font-bold text-lg py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </section>

        <RelatedCities currentSlug="taxi-entreprise" />
      </main>
      <Footer />
    </>
  )
}
