import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import RelatedCities from '@/components/RelatedCities'
import BookingForm from '@/components/BookingForm'
import { ServiceSchema, FAQSchema } from '@/components/seo/Schemas'
import { SITE } from '@/lib/site'
import {
  Phone,
  ShieldCheck,
  HeartPulse,
  FileText,
  Building2,
  Accessibility,
  Repeat,
  CheckCircle,
  Clock,
  CreditCard,
  HelpCircle,
  Stethoscope,
  MapPin,
  Users,
} from 'lucide-react'

const PAGE_URL = `${SITE.url}/taxi-conventionne-cpam-91`

export const metadata: Metadata = {
  title: 'Taxi conventionné CPAM Essonne 91 : Transport médical 24h/24',
  description: `Taxi conventionné CPAM en Essonne (91). Tiers payant, 0 avance de frais sur prescription médicale. Dialyse, chimio, hôpitaux. Appelez ${SITE.phone.display}.`,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Taxi conventionné CPAM Essonne (91) : Transport médical assis 24h/24',
    description:
      'Service de taxi conventionné CPAM 91. Tiers payant sur prescription médicale, transports vers hôpitaux Essonne et Paris. Disponible 24h/24, 7j/7.',
    url: PAGE_URL,
  },
}

const hopitaux = [
  {
    name: "Hôpital Privé de l'Essonne",
    city: 'Massy',
    desc: 'Centre médico-chirurgical, consultations spécialistes, chirurgie ambulatoire.',
  },
  {
    name: 'Hôpital de Longjumeau (GHNE)',
    city: 'Longjumeau',
    desc: "Urgences, maternité, cardiologie, oncologie, imagerie médicale.",
  },
  {
    name: "Hôpital d'Orsay",
    city: 'Orsay',
    desc: 'Médecine, soins de suite et de réadaptation, gériatrie.',
  },
  {
    name: 'Centre Hospitalier Sud Francilien',
    city: 'Corbeil-Essonnes',
    desc: 'CHU régional, plateaux techniques complets, dialyse et oncologie.',
  },
  {
    name: 'Hôpital Antoine Béclère (AP-HP)',
    city: 'Clamart',
    desc: 'AP-HP, gynécologie-obstétrique, pédiatrie, néonatologie.',
  },
  {
    name: 'Institut Gustave Roussy',
    city: 'Villejuif',
    desc: 'Premier centre européen de lutte contre le cancer, chimiothérapie et radiothérapie.',
  },
  {
    name: 'Institut Curie',
    city: 'Paris',
    desc: "Centre de référence en oncologie, chirurgie et protonthérapie.",
  },
  {
    name: 'Hôpital Cochin (AP-HP)',
    city: 'Paris 14e',
    desc: 'Diabétologie, rhumatologie, maternité Port-Royal.',
  },
  {
    name: 'Hôpital Necker : Enfants malades',
    city: 'Paris 15e',
    desc: 'Hôpital pédiatrique de référence, maladies rares.',
  },
  {
    name: 'Hôpital Bicêtre (AP-HP)',
    city: 'Le Kremlin-Bicêtre',
    desc: 'Neurologie, néphrologie, hépato-gastro, dialyse.',
  },
  {
    name: 'Hôpital Saint-Joseph',
    city: 'Paris 14e',
    desc: 'Cardiologie, oncologie, chirurgie, hôpital de jour.',
  },
  {
    name: 'Hôpital Européen Georges-Pompidou (HEGP)',
    city: 'Paris 15e',
    desc: 'AP-HP, cardiologie, cancérologie, urologie, plateau technique de pointe.',
  },
]

const trajetsPrisEnCharge = [
  'Consultations spécialistes (cardiologue, oncologue, néphrologue, etc.)',
  "Examens hospitaliers : IRM, scanner, radiographie, échographie",
  'Séances de dialyse (3 fois par semaine en moyenne)',
  'Chimiothérapie et radiothérapie',
  'Soins post-opératoires et pansements',
  "Kinésithérapie sur prescription médicale",
  'Affection Longue Durée (ALD) : prise en charge 100 %',
  "Hospitalisations programmées et sorties d'hospitalisation",
  "Transports vers centres de rééducation fonctionnelle",
  "Cures thermales sur prescription",
]

const etapesPrescription = [
  {
    n: 1,
    title: 'Obtenez votre prescription',
    desc: "Demandez à votre médecin traitant ou spécialiste un bon de transport (formulaire CERFA n° 11574*04). Sans cette prescription médicale, aucune prise en charge CPAM n'est possible.",
  },
  {
    n: 2,
    title: 'Réservez votre taxi conventionné',
    desc: `Appelez le ${SITE.phone.display} ou réservez en ligne. Précisez le motif médical, l'établissement de destination et l'horaire de rendez-vous.`,
  },
  {
    n: 3,
    title: 'Présentez vos justificatifs',
    desc: 'Le jour du trajet, remettez au chauffeur votre prescription, votre carte Vitale et votre attestation de mutuelle si vous en disposez.',
  },
  {
    n: 4,
    title: 'Tiers payant appliqué',
    desc: "Aucune avance de frais à régler : nous nous occupons de la facturation directement auprès de l'Assurance Maladie et de votre complémentaire santé.",
  },
]

const faqs = [
  {
    q: "Qui prend en charge le coût d'un taxi conventionné CPAM ?",
    a: `L'Assurance Maladie (CPAM) prend en charge tout ou partie du transport sur présentation d'une prescription médicale de transport (formulaire CERFA). Le taux de prise en charge est de 65 % en règle générale, 100 % pour les patients en Affection Longue Durée (ALD), accident du travail, maladie professionnelle, maternité (à partir du 6e mois) ou hospitalisation. Le solde éventuel (ticket modérateur) peut être pris en charge par votre mutuelle.`,
  },
  {
    q: "Combien coûte un taxi conventionné CPAM en Essonne ?",
    a: `Les tarifs des taxis conventionnés sont strictement réglementés par convention nationale entre les taxis et l'Assurance Maladie. Ils sont identiques quel que soit le taxi conventionné choisi : vous ne payez jamais plus que le tarif officiel. Avec le tiers payant, vous n'avez aucune avance de frais à effectuer si vous êtes pris en charge à 100 %. Sinon, seul le ticket modérateur reste à votre charge (souvent couvert par votre mutuelle).`,
  },
  {
    q: "Quels documents dois-je présenter au chauffeur ?",
    a: "Présentez au chauffeur votre prescription médicale de transport (bon de transport CERFA signé par votre médecin), votre carte Vitale à jour et votre attestation de mutuelle si vous en avez une. Pour les patients en ALD, accident du travail ou maternité, précisez-le clairement afin que le tiers payant intégral soit appliqué.",
  },
  {
    q: "Puis-je réserver un aller-retour avec mon taxi conventionné ?",
    a: "Oui, l'aller-retour est très courant pour les consultations, examens et soins ambulatoires. Le chauffeur vous dépose à l'établissement et revient vous chercher à l'heure prévue. Pour les soins itératifs (dialyse, chimiothérapie, radiothérapie, kinésithérapie), nous mettons en place un planning récurrent personnalisé avec le même chauffeur quand c'est possible.",
  },
  {
    q: "Transportez-vous les personnes à mobilité réduite (PMR) ?",
    a: "Oui, nous disposons de véhicules adaptés au transport de personnes à mobilité réduite. Nos chauffeurs sont formés à l'accompagnement porte-à-porte, à l'aide à la marche, au transfert depuis un fauteuil roulant et à la manipulation des aides techniques. Précisez vos besoins lors de la réservation pour que nous envoyions le véhicule le plus adapté.",
  },
  {
    q: "Le transport CPAM est-il pris en charge en dehors de l'Essonne ?",
    a: "Oui. Le taxi conventionné CPAM 91 peut vous emmener dans tout établissement de santé en France, à condition que le trajet soit justifié médicalement (prescription) et corresponde au principe de l'établissement approprié le plus proche. Les trajets vers Paris (Gustave Roussy, Curie, Cochin, Necker, HEGP, etc.) sont quotidiennement effectués.",
  },
  {
    q: "Quel délai pour réserver un taxi conventionné ?",
    a: `Pour un trajet programmé (consultation, examen, soin), nous vous recommandons de réserver au moins 24 à 48 heures à l'avance afin de garantir la disponibilité d'un véhicule adapté. Pour une sortie d'hospitalisation ou un soin urgent, appelez-nous au ${SITE.phone.display} : nous mettons tout en œuvre pour vous prendre en charge rapidement, 24h/24 et 7j/7.`,
  },
  {
    q: "Peut-on me refuser le tiers payant sans bon de transport ?",
    a: "Oui. Sans prescription médicale de transport rédigée par votre médecin, l'Assurance Maladie ne prend pas en charge le trajet, et le tiers payant ne peut pas être appliqué. Vous devrez alors régler la course comme une course de taxi classique. Pensez à demander votre bon de transport en amont à votre médecin traitant, spécialiste ou médecin hospitalier.",
  },
  {
    q: "La carte Vitale est-elle obligatoire ?",
    a: "Oui, la carte Vitale (ou son attestation de droits papier) est indispensable pour activer le tiers payant. Si votre carte n'est pas à jour, le tiers payant peut être suspendu : pensez à la mettre à jour régulièrement en pharmacie ou dans une borne CPAM avant un trajet médical.",
  },
  {
    q: "Comment ça se passe pour les patients en Affection Longue Durée (ALD) ?",
    a: "Les patients en ALD bénéficient d'une prise en charge à 100 % par la CPAM pour les transports liés à leur affection. Le tiers payant intégral s'applique : aucune avance de frais, aucun reste à charge sur la course (sauf cas particulier de dépassement). Munissez-vous de votre prescription mentionnant le motif ALD et de votre carte Vitale à jour pour bénéficier automatiquement de la prise en charge complète.",
  },
  {
    q: "Quelle différence entre taxi conventionné, VSL et ambulance ?",
    a: "Le taxi conventionné transporte un patient autonome en position assise. Le VSL (Véhicule Sanitaire Léger) est un véhicule blanc dédié au transport de personnes assises avec un transporteur sanitaire formé. L'ambulance est destinée aux patients devant être transportés allongés ou nécessitant une surveillance médicale. C'est votre médecin qui détermine le mode de transport adapté à votre état de santé en cochant la case correspondante sur la prescription.",
  },
  {
    q: 'Puis-je choisir mon taxi conventionné CPAM ?',
    a: "Oui, vous avez le libre choix de votre transporteur sanitaire, y compris pour les soins itératifs (dialyse, chimio, etc.). Vous pouvez demander à toujours avoir le même chauffeur si vous le souhaitez, dans la mesure de nos disponibilités. C'est un confort important, notamment pour les patients fragiles ou âgés.",
  },
]

export default function TaxiConventionneCPAM91() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: 'Taxi conventionné CPAM 91' }]} />

      <ServiceSchema
        name="Taxi conventionné CPAM Essonne"
        description="Service de taxi conventionné CPAM en Essonne (91). Transport médical assis avec tiers payant sur prescription. Dialyse, chimiothérapie, examens hospitaliers, ALD. Disponible 24h/24."
        url={PAGE_URL}
        areaServed={['Massy', 'Palaiseau', 'Antony', 'Longjumeau', 'Les Ulis', 'Saclay', 'Verrières-le-Buisson', 'Ballainvilliers']}
      />
      <FAQSchema faqs={faqs} />

      <main>
        {/* Bandeau tiers payant */}
        <section className="bg-yellow-400 py-3">
          <div className="container mx-auto px-4 text-center">
            <p className="text-black font-medium text-sm md:text-base">
              <ShieldCheck className="w-4 h-4 inline-block mr-1 -mt-0.5" />
              Tiers payant <span className="mx-2">•</span> Pas d&apos;avance de frais <span className="mx-2">•</span> Conventionné CPAM 91
            </p>
          </div>
        </section>

        {/* Hero */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-yellow-700 px-3 py-1.5 rounded-full text-sm font-medium mb-4">
                  <HeartPulse className="w-4 h-4" />
                  Transport médical assis : Essonne (91)
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Taxi conventionné CPAM Essonne (91) : Transport médical assis 24h/24
                </h1>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  <strong>{SITE.name}</strong> est <strong>agréé CPAM 91</strong> pour le transport médical assis.
                  Sur prescription de votre médecin, bénéficiez du <strong>tiers payant intégral</strong> : aucune avance de frais
                  pour vos trajets vers consultations, examens, dialyse, chimiothérapie ou hospitalisations,
                  en Essonne comme à Paris.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Agréé CPAM 91</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Tiers payant intégral</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Disponible 24h/24, 7j/7</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Chauffeurs formés au transport médical</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Véhicules adaptés PMR</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Accompagnement porte-à-porte</span>
                  </div>
                </div>

                <a
                  href={SITE.phone.tel}
                  className="inline-flex items-center gap-3 bg-gray-900 text-white font-bold text-xl py-4 px-8 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Phone className="w-6 h-6" />
                  {SITE.phone.display}
                </a>
                <p className="text-sm text-gray-500 mt-3">
                  Réponse immédiate. Réservation possible 24 à 48h à l&apos;avance pour vos rendez-vous médicaux.
                </p>
              </div>

              <div>
                <BookingForm compact />
              </div>
            </div>
          </div>
        </section>

        {/* Qu'est-ce qu'un taxi conventionné ? */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Qu&apos;est-ce qu&apos;un taxi conventionné CPAM&nbsp;?
              </h2>
              <div className="prose prose-lg text-gray-600 max-w-none space-y-4">
                <p>
                  Un <strong>taxi conventionné CPAM</strong> est un taxi ayant signé une convention nationale avec
                  l&apos;Assurance Maladie. Cette convention l&apos;autorise à assurer le transport médical assis des patients
                  bénéficiaires d&apos;une prescription médicale de transport, en appliquant un tarif réglementé et
                  le <strong>tiers payant</strong>. Le patient n&apos;a donc aucune avance de frais à effectuer lorsque
                  sa prise en charge par la Sécurité sociale est complète.
                </p>
                <p>
                  Ce dispositif, encadré par l&apos;arrêté du 17 octobre 2017 et la convention nationale des transporteurs
                  sanitaires privés et taxis conventionnés, vise à garantir <strong>l&apos;accès aux soins pour tous</strong>,
                  notamment pour les patients qui ne peuvent pas utiliser les transports en commun en raison de leur
                  état de santé.
                </p>
                <p>
                  Il convient de bien distinguer trois modes de transport sanitaire&nbsp;:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Le taxi conventionné</strong> transporte un patient autonome, en position assise, capable
                    de monter et descendre du véhicule seul ou avec une aide légère.
                  </li>
                  <li>
                    <strong>Le VSL (Véhicule Sanitaire Léger)</strong> est un véhicule blanc dédié au transport sanitaire,
                    conduit par un auxiliaire ambulancier diplômé. Il peut accueillir jusqu&apos;à trois patients
                    en position assise.
                  </li>
                  <li>
                    <strong>L&apos;ambulance</strong> est réservée aux patients qui doivent être transportés en position allongée,
                    ou qui nécessitent une surveillance médicale pendant le trajet.
                  </li>
                </ul>
                <p>
                  C&apos;est <strong>votre médecin qui décide</strong> du mode de transport adapté en cochant la case
                  correspondante sur la prescription. Pour la grande majorité des consultations, examens et soins de suite,
                  le taxi conventionné est la solution la plus souple et la plus économique pour l&apos;Assurance Maladie.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Notre agrément */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Notre agrément CPAM en Essonne
              </h2>
              <div className="prose prose-lg text-gray-600 max-w-none space-y-4">
                <p>
                  <strong>{SITE.name}</strong> est <strong>conventionné par la CPAM de l&apos;Essonne (91)</strong>.
                  Cet agrément officiel garantit que nous respectons l&apos;ensemble des engagements de la convention nationale&nbsp;:
                  tarification réglementée, application stricte du tiers payant, qualité de service, formation des chauffeurs
                  et adaptation du parc de véhicules.
                </p>
                <p>
                  Tous nos chauffeurs sont titulaires de la <strong>carte professionnelle de taxi</strong> et sont
                  <strong> formés au transport médical assis</strong>&nbsp;: aide à la marche, transfert de fauteuil roulant,
                  manipulation des aides techniques (déambulateur, canne, oxygène portable), accompagnement administratif
                  à l&apos;accueil de l&apos;établissement de santé, gestion du stress et de la fatigue des patients fragiles.
                </p>
                <p>
                  Nos véhicules sont régulièrement contrôlés, parfaitement entretenus et adaptés au transport de personnes
                  malades ou à mobilité réduite. Nous disposons également d&apos;un véhicule de type <strong>Van</strong>
                  permettant le transport en groupe ou avec accompagnant et un large volume de bagages médicaux.
                </p>
                <div className="bg-white border border-gray-200 rounded-xl p-5 not-prose">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-gray-900 mb-1">Engagement qualité</p>
                      <p className="text-sm text-gray-600">
                        Ponctualité, discrétion, respect du secret médical, accompagnement bienveillant des
                        patients fragiles, âgés ou en fin de vie. Nous traitons chaque trajet comme un service
                        essentiel à votre santé.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tiers payant */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Tiers payant&nbsp;: zéro avance de frais
              </h2>
              <div className="prose prose-lg text-gray-600 max-w-none space-y-4">
                <p>
                  Le <strong>tiers payant</strong> est le mécanisme qui vous évite d&apos;avancer le coût du transport.
                  Sur présentation de votre <strong>prescription médicale de transport</strong> et de votre
                  <strong> carte Vitale à jour</strong>, nous facturons directement l&apos;Assurance Maladie et,
                  le cas échéant, votre mutuelle.
                </p>
                <p>
                  Concrètement&nbsp;:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Si vous êtes pris en charge à <strong>100&nbsp;%</strong> (ALD, accident du travail, maladie professionnelle,
                    maternité à partir du 6e mois, hospitalisation), vous <strong>ne payez rien</strong>.
                  </li>
                  <li>
                    Si vous êtes pris en charge à <strong>65&nbsp;%</strong>, seul le <strong>ticket modérateur (35&nbsp;%)</strong>
                    reste à votre charge. Il est très souvent couvert par votre mutuelle, auquel cas vous ne payez rien non plus.
                  </li>
                  <li>
                    Sans mutuelle et hors prise en charge à 100&nbsp;%, vous réglez uniquement le ticket modérateur,
                    soit une part très réduite du coût total.
                  </li>
                </ul>
                <p>
                  Aucun document complexe à remplir&nbsp;: nous gérons l&apos;ensemble des formalités administratives
                  pour vous. Vous vous concentrez sur ce qui compte&nbsp;: vos soins.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trajets pris en charge */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                Quels trajets sont pris en charge&nbsp;?
              </h2>
              <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
                Tout transport médicalement justifié et prescrit par votre médecin est éligible à la prise en charge CPAM.
              </p>

              <div className="grid md:grid-cols-2 gap-3">
                {trajetsPrisEnCharge.map((trajet) => (
                  <div
                    key={trajet}
                    className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-200"
                  >
                    <Stethoscope className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{trajet}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-5 max-w-3xl mx-auto">
                <p className="text-gray-800 text-sm">
                  <strong>Bon à savoir&nbsp;:</strong> la prescription doit toujours mentionner le motif médical
                  et indiquer le mode de transport préconisé. Pour les trajets longue distance (plus de 150 km aller)
                  ou en série (plus de 4 trajets de plus de 50 km sur 2 mois), un accord préalable du service médical
                  de l&apos;Assurance Maladie peut être nécessaire&nbsp;: votre médecin connaît la procédure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comment obtenir une prescription */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                Comment obtenir une prescription de transport
              </h2>
              <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
                Sans prescription médicale, aucune prise en charge CPAM n&apos;est possible. Voici la marche à suivre.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {etapesPrescription.map((etape) => (
                  <div
                    key={etape.n}
                    className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-black">
                        {etape.n}
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg">{etape.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{etape.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 bg-gray-900 text-white rounded-xl p-6 flex flex-col sm:flex-row items-center gap-6">
                <FileText className="w-12 h-12 text-yellow-400 flex-shrink-0" />
                <div className="flex-1 text-center sm:text-left">
                  <p className="font-bold text-lg mb-1">Pas de prescription = pas de prise en charge</p>
                  <p className="text-gray-300 text-sm">
                    Pensez à demander votre bon de transport (CERFA n° 11574*04) lors de la consultation,
                    en amont du rendez-vous. Sans ce document, le tiers payant ne peut pas être appliqué.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hôpitaux desservis */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Hôpitaux et établissements desservis
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Nous assurons quotidiennement les transports vers les principaux hôpitaux et centres de soins
              de l&apos;Essonne, des Hauts-de-Seine et de Paris.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
              {hopitaux.map((h) => (
                <div
                  key={h.name}
                  className="bg-white rounded-xl p-5 border border-gray-200 hover:border-yellow-400 transition-colors"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <Building2 className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 leading-tight">{h.name}</h3>
                      <p className="text-sm text-yellow-600 mt-0.5">{h.city}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mt-3">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transport PMR */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Accessibility className="w-8 h-8 text-yellow-500" />
                Transport PMR (personne à mobilité réduite)
              </h2>
              <div className="prose prose-lg text-gray-600 max-w-none space-y-4">
                <p>
                  Nous proposons un service dédié aux <strong>personnes à mobilité réduite</strong>&nbsp;: véhicules adaptés,
                  chauffeurs formés à l&apos;accompagnement, prise en charge porte-à-porte et aide aux formalités d&apos;accueil
                  à l&apos;hôpital ou en clinique.
                </p>
                <p>
                  Selon vos besoins, nous mettons à disposition&nbsp;:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Une assistance au lever, à la marche et au transfert vers le véhicule</li>
                  <li>Un véhicule de type Van pour le transport avec un accompagnant et un fauteuil roulant pliable</li>
                  <li>Un accompagnement à l&apos;intérieur de l&apos;établissement de santé jusqu&apos;à l&apos;accueil ou au service</li>
                  <li>Le retour au domicile dans les mêmes conditions, avec aide à l&apos;installation</li>
                </ul>
                <p>
                  Pour les patients en fauteuil roulant non transférable, le transport relève généralement d&apos;un VSL
                  ou d&apos;une ambulance&nbsp;: votre médecin vous orientera vers le mode de transport adapté.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Aller-retour soins itératifs */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Repeat className="w-8 h-8 text-yellow-500" />
                Aller-retour pour examens et soins itératifs
              </h2>
              <div className="prose prose-lg text-gray-600 max-w-none space-y-4">
                <p>
                  Les patients suivis pour <strong>dialyse</strong> (3 séances par semaine en moyenne),
                  <strong> chimiothérapie</strong>, <strong>radiothérapie</strong>, <strong>kinésithérapie</strong> ou
                  rééducation fonctionnelle ont besoin d&apos;un transport fiable, ponctuel et organisé sur la durée.
                </p>
                <p>
                  Nous mettons en place pour ces patients un <strong>planning de transport récurrent</strong>&nbsp;:
                  mêmes jours, mêmes horaires, et dans la mesure du possible <strong>le même chauffeur</strong>.
                  Cette continuité est essentielle pour le confort et la sécurité des patients fragiles.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Dialyse</strong>&nbsp;: prise en charge 3 fois par semaine sur 6 à 12 mois, avec horaires fixes
                    et coordination avec le centre de dialyse.
                  </li>
                  <li>
                    <strong>Chimiothérapie / radiothérapie</strong>&nbsp;: trajets planifiés à l&apos;avance, retour adapté à
                    l&apos;état du patient après la séance.
                  </li>
                  <li>
                    <strong>Kinésithérapie</strong>&nbsp;: aller-retour 2 à 5 fois par semaine selon la prescription.
                  </li>
                </ul>
                <p>
                  Sur prescription, l&apos;ensemble de ces trajets est intégralement pris en charge par l&apos;Assurance Maladie&nbsp;:
                  <strong> aucune avance de frais</strong>, aucune démarche administrative à effectuer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comment réserver */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Comment réserver votre taxi conventionné
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Trois manières simples de réserver, 24h/24 et 7j/7.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Par téléphone</h3>
                <p className="text-gray-600 mb-3 text-sm">Conseillé pour les trajets médicaux</p>
                <a href={SITE.phone.tel} className="text-lg font-bold text-yellow-600 hover:text-yellow-700 block">
                  {SITE.phone.display}
                </a>
                <p className="text-xs text-gray-500 mt-2">24h/24, 7j/7</p>
              </div>

              <div className="text-center bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">En ligne</h3>
                <p className="text-gray-600 mb-3 text-sm">
                  Formulaire de pré-réservation disponible en haut de page
                </p>
                <span className="text-yellow-600 font-medium text-sm">Réponse rapide</span>
              </div>

              <div className="text-center bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Repeat className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Soins récurrents</h3>
                <p className="text-gray-600 mb-3 text-sm">
                  Mise en place d&apos;un planning fixe pour dialyse, chimio, kiné
                </p>
                <span className="text-yellow-600 font-medium text-sm">Même chauffeur si possible</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Questions fréquentes : Taxi CPAM Essonne
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Tout ce que vous devez savoir sur le transport médical conventionné CPAM en Essonne.
            </p>

            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((item, index) => (
                <details
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden group"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      <span className="font-medium text-gray-900">{item.q}</span>
                    </div>
                    <span className="text-yellow-500 group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 pt-0 pl-12 text-gray-600 leading-relaxed">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Toute l'Essonne */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-3">
                <MapPin className="w-8 h-8 text-yellow-500" />
                Toute l&apos;Essonne desservie pour le transport médical
              </h2>
              <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
                Notre service de taxi conventionné CPAM intervient dans toutes les communes de l&apos;Essonne&nbsp;:
                Massy, Palaiseau, Antony, Longjumeau, Les Ulis, Saclay, Verrières-le-Buisson, Ballainvilliers,
                Orsay, Bures-sur-Yvette, Gif-sur-Yvette, Chilly-Mazarin, Champlan, Igny, Vauhallan, et bien d&apos;autres.
                Pour tout besoin de transport médical assis dans le département 91, nous sommes à votre disposition
                24h/24.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8 not-prose">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex items-start gap-3">
                  <Users className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div className="text-left">
                    <p className="font-bold text-gray-900 mb-1">Patients fragiles</p>
                    <p className="text-sm text-gray-600">
                      Personnes âgées, ALD, post-opératoires&nbsp;: un service attentionné et patient.
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex items-start gap-3">
                  <CreditCard className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div className="text-left">
                    <p className="font-bold text-gray-900 mb-1">Aucun frais avancés</p>
                    <p className="text-sm text-gray-600">
                      Tiers payant intégral CPAM + mutuelle. Vous ne sortez pas votre carte bancaire.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={SITE.phone.tel}
                  className="inline-flex items-center gap-3 bg-yellow-400 text-black font-bold text-lg py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {SITE.phone.display}
                </a>
                <Link
                  href="/tarifs"
                  className="inline-flex items-center gap-3 bg-gray-900 text-white font-bold text-lg py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Voir tous nos tarifs
                </Link>
              </div>
            </div>
          </div>
        </section>

        <RelatedCities currentSlug="taxi-conventionne-cpam-91" />
      </main>
      <Footer />
    </>
  )
}
