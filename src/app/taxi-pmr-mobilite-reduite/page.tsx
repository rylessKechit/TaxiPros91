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
  HelpCircle,
  Accessibility,
  Heart,
  Home,
  Calendar,
  MapPin,
  Info,
  HandHeart,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Taxi PMR Essonne : mobilité réduite 24h/24',
  description: `Taxi PMR Essonne 24h/24 : véhicule adapté, rampe, chauffeurs formés, accompagnement porte-à-porte. Conventionné CPAM. Même tarif qu'un taxi classique. ${SITE.phone.display}.`,
  openGraph: {
    title: 'Taxi PMR Essonne : mobilité réduite 24h/24',
    description: 'Service de taxi adapté aux personnes à mobilité réduite en Essonne. Véhicule équipé, chauffeurs formés, conventionné CPAM, porte-à-porte.',
    url: `${SITE.url}/taxi-pmr-mobilite-reduite`,
  },
  alternates: {
    canonical: `${SITE.url}/taxi-pmr-mobilite-reduite`,
  },
}

const usps = [
  {
    icon: Accessibility,
    title: 'Véhicule adapté',
    description: 'Van Mercedes équipé d\'une rampe d\'accès, de sangles de sécurité et d\'espace pour fauteuil roulant manuel ou électrique.',
  },
  {
    icon: HandHeart,
    title: 'Chauffeurs formés',
    description: 'Conducteurs sensibilisés à l\'accompagnement des personnes en situation de handicap : patience, écoute, bienveillance, gestes adaptés.',
  },
  {
    icon: Shield,
    title: 'Fauteuil accepté',
    description: 'Fauteuils manuels et électriques pris en charge avec sécurisation par sangles homologuées. Sortie hospitalisation possible.',
  },
  {
    icon: Home,
    title: 'Porte-à-porte',
    description: 'Prise en charge à la porte de votre domicile et accompagnement jusqu\'à votre destination finale : entrée d\'hôpital, salle d\'attente, étage.',
  },
]

const publicsConcerners = [
  {
    icon: Users,
    title: 'Personnes âgées',
    description: 'Pour vos sorties médicales, courses, visites familiales ou loisirs. Chauffeur patient et attentionné, aide à monter/descendre du véhicule.',
  },
  {
    icon: Accessibility,
    title: 'Personnes en situation de handicap moteur',
    description: 'Fauteuil roulant manuel ou électrique, déambulateur, béquilles, canne anglaise : tous les dispositifs d\'aide à la mobilité sont pris en compte.',
  },
  {
    icon: Heart,
    title: 'Sorties d\'hospitalisation',
    description: 'Retour à domicile sécurisé après une intervention, accompagnement délicat post-opératoire, gestion des perfusions ou attelles.',
  },
  {
    icon: Calendar,
    title: 'Rendez-vous médicaux',
    description: 'Trajets vers vos consultations, examens, séances de dialyse, kinésithérapie, ergothérapie. Prise en charge CPAM possible sur prescription.',
  },
  {
    icon: Users,
    title: 'Sortie loisir et famille',
    description: 'Mariage, anniversaire, déjeuner familial, sortie culturelle : la mobilité réduite ne doit pas être un frein à votre vie sociale.',
  },
]

const trajetsPMR = [
  {
    title: 'Rendez-vous médical',
    description: 'Hôpitaux, cliniques, centres de dialyse, cabinets médicaux, laboratoires d\'analyses. Prise en charge CPAM sur prescription médicale.',
    cta: 'Voir Taxi conventionné CPAM',
    link: '/taxi-conventionne-cpam-91',
  },
  {
    title: 'Sortie famille et amis',
    description: 'Déjeuner du dimanche, anniversaire, mariage, visite à des proches en Essonne ou en Île-de-France.',
  },
  {
    title: 'Événements et loisirs',
    description: 'Théâtre, cinéma accessible, sortie au restaurant, balade en parc, événements culturels avec accès PMR.',
  },
  {
    title: 'Retour à domicile',
    description: 'Après une hospitalisation, une chirurgie ambulatoire ou un séjour en convalescence. Service en douceur, accompagnement complet.',
  },
]

const etapesReservation = [
  {
    num: 1,
    title: 'Précisez votre besoin',
    description: 'Indiquez si vous utilisez un fauteuil roulant (manuel ou électrique), un déambulateur, des béquilles, ou si vous avez besoin d\'aide à la marche.',
  },
  {
    num: 2,
    title: 'Indiquez l\'environnement',
    description: 'Précisez l\'étage de votre logement, présence d\'un ascenseur, marches à franchir, accès à l\'immeuble. Le chauffeur préparera la prise en charge adaptée.',
  },
  {
    num: 3,
    title: 'Réservez 24 h à l\'avance',
    description: 'Pour garantir la disponibilité du véhicule PMR, une réservation 24 h à l\'avance est recommandée. Urgences traitées au mieux selon disponibilités.',
  },
]

const faqItems = [
  {
    q: 'Y a-t-il un supplément pour le service PMR ?',
    a: 'Non, il n\'y a aucun supplément pour le service PMR (Personne à Mobilité Réduite). Le tarif est strictement identique à celui d\'un taxi classique pour le même trajet. Le seul ajustement éventuel concerne le type de véhicule : si vous avez besoin du Van Mercedes Classe V pour transporter un fauteuil roulant, un léger supplément peut s\'appliquer comme pour toute course en Van (lié au véhicule, pas au handicap).',
  },
  {
    q: 'Pouvez-vous transporter un fauteuil roulant électrique ?',
    a: 'Oui, nous transportons les fauteuils roulants électriques. Précisez à la réservation le modèle (poids, dimensions, batterie amovible ou non). Notre Van Mercedes Classe V dispose d\'une rampe d\'accès et de sangles homologuées pour la sécurisation du fauteuil pendant le trajet. Le chauffeur peut vous aider à monter et descendre du véhicule en toute sécurité.',
  },
  {
    q: 'Un proche peut-il m\'accompagner pendant le trajet ?',
    a: 'Bien sûr ! Un accompagnant (conjoint, enfant, aide-soignant, proche) peut voyager avec vous gratuitement. Précisez à la réservation pour que le véhicule soit adapté au nombre de personnes (avec ou sans fauteuil supplémentaire). Pour les courses CPAM avec prescription médicale, seul le patient est généralement couvert par la prise en charge, mais l\'accompagnant peut voyager sans frais supplémentaire.',
  },
  {
    q: 'Combien d\'accompagnants peuvent voyager ?',
    a: 'Dans un véhicule berline standard, en plus de la personne à mobilité réduite, 2 à 3 accompagnants peuvent voyager. Dans le Van Mercedes Classe V, jusqu\'à 5 accompagnants peuvent prendre place avec un fauteuil roulant sécurisé à bord, ou 7 passagers sans fauteuil. Précisez à la réservation pour le bon dimensionnement.',
  },
  {
    q: 'Faut-il une prescription médicale pour utiliser le taxi PMR ?',
    a: 'Non, le service taxi PMR est accessible à tous, sans prescription médicale. Vous pouvez réserver un taxi adapté pour vos sorties personnelles, loisirs, démarches, visites familiales. La prescription médicale est uniquement nécessaire si vous souhaitez bénéficier de la prise en charge CPAM pour un trajet médical (consultation, examen, hospitalisation). Voir notre page dédiée Taxi conventionné CPAM 91.',
  },
  {
    q: 'Pouvez-vous m\'emmener hors de l\'Essonne en taxi PMR ?',
    a: 'Oui, nos taxis PMR peuvent vous emmener partout en Île-de-France et au-delà : Paris, autres départements franciliens, province pour des trajets longue distance. Les hôpitaux parisiens (Pitié-Salpêtrière, Cochin, Necker, Saint-Louis, Pompidou), les centres de soins spécialisés, les lieux de villégiature sont desservis. Tarification au compteur ou forfaitaire selon distance, communiquée à la réservation.',
  },
  {
    q: 'Que faire en cas de réservation urgente PMR ?',
    a: 'Pour les urgences (sortie d\'hospitalisation imprévue, rendez-vous médical de dernière minute), appelez directement le ' + SITE.phone.display + '. Nous mobilisons le véhicule PMR disponible le plus proche. La disponibilité n\'est pas garantie comme avec une réservation 24 h à l\'avance, mais nous mettons tout en œuvre pour vous prendre en charge dans les meilleurs délais (généralement 30 à 60 minutes selon zone et heure).',
  },
  {
    q: 'Êtes-vous disponibles les week-ends et jours fériés ?',
    a: 'Oui, notre service taxi PMR est disponible 24h/24, 7j/7, y compris week-ends, jours fériés, vacances scolaires. Les sorties d\'hôpital, dialyses du dimanche, rendez-vous d\'urgence et besoins ponctuels sont assurés. Les tarifs de nuit (19h-7h) et dimanche/férié appliquent les majorations légales standards des taxis.',
  },
]

export default function TaxiPMR() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: 'Taxi PMR' }]} />

      <ServiceSchema
        name="Taxi PMR Essonne : Personne à Mobilité Réduite"
        description="Service de taxi PMR adapté aux personnes à mobilité réduite en Essonne : véhicule équipé d'une rampe et de sangles, chauffeurs formés à l'accompagnement, transport de fauteuils roulants manuels et électriques. Conventionné CPAM."
        url={`${SITE.url}/taxi-pmr-mobilite-reduite`}
        areaServed={['Massy', 'Palaiseau', 'Antony', 'Longjumeau', 'Les Ulis', 'Saclay', 'Évry-Courcouronnes', 'Orsay']}
      />
      <FAQSchema faqs={faqItems} />

      <main>
        {/* Hero Banner */}
        <section className="bg-yellow-400 py-4">
          <div className="container mx-auto px-4 text-center">
            <p className="text-black font-medium">
              Taxi PMR en Essonne ? Appelez le{' '}
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
                  <Accessibility className="w-5 h-5" />
                  <span className="font-medium">Service PMR : Essonne et Île-de-France</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Taxi PMR Essonne : Personne à Mobilité Réduite &amp; Fauteuil Roulant
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Service de <strong>taxi adapté aux personnes à mobilité réduite</strong> en
                  Essonne. <strong>Véhicule équipé d&apos;une rampe</strong>, fauteuil roulant accepté,
                  chauffeurs formés à l&apos;accompagnement, prise en charge <strong>porte-à-porte</strong>.
                  Conventionné CPAM.
                </p>

                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-200">
                    <Accessibility className="w-4 h-4 text-yellow-500" />
                    <span className="font-medium text-gray-900 text-sm">Véhicule adapté</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-700">
                    <Clock className="w-4 h-4 text-yellow-500" />
                    24h/24
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-700">
                    <Shield className="w-4 h-4 text-yellow-500" />
                    Conventionné CPAM
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-700">
                    <CreditCard className="w-4 h-4 text-yellow-500" />
                    Même tarif
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Fauteuil roulant</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Chauffeur formé</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Porte-à-porte</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Pas de supplément</span>
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
                    Réserver en ligne
                  </a>
                </div>
              </div>

              <div id="reservation">
                <BookingForm compact />
              </div>
            </div>
          </div>
        </section>

        {/* USPs */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Notre service taxi PMR en Essonne
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Un service taxi pensé pour la dignité, la sécurité et le confort des personnes à
              mobilité réduite, de leurs familles et de leurs accompagnants.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {usps.map((u) => {
                const Icon = u.icon
                return (
                  <div
                    key={u.title}
                    className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-yellow-400 transition-colors text-center"
                  >
                    <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
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

        {/* Véhicules adaptés */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Véhicules adaptés au transport PMR
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  Notre flotte comprend des <strong>Vans Mercedes Classe V aménagés</strong> pour
                  le transport de personnes à mobilité réduite. Ces véhicules sont équipés d&apos;une{' '}
                  <strong>rampe d&apos;accès rétractable</strong> permettant un accès facile en
                  fauteuil roulant, manuel ou électrique, sans effort pour le passager ni
                  l&apos;accompagnant.
                </p>
                <p>
                  À l&apos;intérieur, un <strong>espace dédié au fauteuil</strong> est aménagé avec des{' '}
                  <strong>sangles d&apos;arrimage homologuées</strong> norme ISO 10542 (ou équivalent)
                  qui sécurisent le fauteuil pendant le trajet. Une <strong>ceinture de sécurité 3
                  points</strong> est utilisée pour la personne, attachée indépendamment du fauteuil.
                </p>
                <p>
                  Le véhicule offre une hauteur de plafond suffisante pour rester assis dans le
                  fauteuil pendant tout le trajet, sans transfert sur un siège classique. Les{' '}
                  <strong>portes coulissantes latérales</strong> et l&apos;accès arrière par rampe
                  permettent une montée et descente en toute sérénité, y compris dans les rues
                  étroites ou les parkings exigus.
                </p>
                <p>
                  Pour les personnes capables de monter dans une berline avec un peu d&apos;aide
                  (déambulateur, canne, fauteuil pliable que l&apos;on range dans le coffre), nos
                  <strong> berlines Mercedes Classe E ou Tesla</strong> conviennent également. Le
                  chauffeur vous aide à entrer, plie et range le fauteuil ou le déambulateur.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pour qui */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Pour qui est destiné notre service taxi PMR ?
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Notre service s&apos;adresse à toute personne ayant besoin d&apos;un accompagnement et d&apos;un
              véhicule adapté pour ses déplacements quotidiens ou ponctuels.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {publicsConcerners.map((p) => {
                const Icon = p.icon
                return (
                  <div key={p.title} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{p.title}</h3>
                    <p className="text-gray-600 text-sm">{p.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Chauffeurs formés */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Chauffeurs formés à l&apos;accompagnement
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  Le transport PMR ne s&apos;improvise pas. Nos chauffeurs sont{' '}
                  <strong>spécifiquement sensibilisés à l&apos;accueil et à l&apos;accompagnement des
                  personnes à mobilité réduite</strong>. Cela passe par des gestes simples mais
                  essentiels : <strong>parler à hauteur de la personne</strong> et non à son
                  accompagnant, respecter le rythme, demander avant d&apos;aider plutôt que d&apos;imposer.
                </p>
                <p>
                  Côté technique, ils maîtrisent le <strong>déploiement de la rampe</strong>, le{' '}
                  <strong>sanglage correct du fauteuil</strong> (manuel ou électrique), l&apos;aide au
                  transfert entre fauteuil et siège quand c&apos;est nécessaire, et la conduite douce et
                  sécurisée adaptée aux passagers fragiles.
                </p>
                <p>
                  Tous nos chauffeurs sont également <strong>conventionnés CPAM</strong> et
                  habitués aux protocoles du transport médical : présentation du bon de transport,
                  signature des documents, dépose au plus près de l&apos;entrée de l&apos;hôpital ou de la
                  clinique, attente raisonnable en cas de retard de consultation.
                </p>
                <p>
                  Au-delà de la compétence, c&apos;est l&apos;<strong>écoute, la patience et la
                  bienveillance</strong> qui font la différence. Chaque course PMR est l&apos;occasion
                  d&apos;un service personnalisé et humain.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trajets PMR */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Trajets PMR pris en charge
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Que ce soit pour la santé, la famille ou les loisirs, nos taxis PMR vous accompagnent
              dans tous vos déplacements en Essonne et en Île-de-France.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {trajetsPMR.map((t) => (
                <div
                  key={t.title}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-yellow-400 transition-colors"
                >
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{t.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{t.description}</p>
                  {t.link && (
                    <Link
                      href={t.link}
                      className="text-yellow-600 text-sm font-medium hover:text-yellow-700"
                    >
                      {t.cta} →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Accompagnement porte-à-porte */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Accompagnement porte-à-porte
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  Notre engagement principal : un service <strong>porte-à-porte complet</strong>, du
                  hall de votre logement jusqu&apos;à la salle d&apos;attente de votre rendez-vous ou au
                  salon de votre destination.
                </p>
                <p>
                  <strong>Prise en charge :</strong> le chauffeur vient sonner à votre porte ou au
                  pied de votre immeuble selon votre demande. Il vous accompagne jusqu&apos;au véhicule,
                  vous aide à monter ou installe votre fauteuil avec la rampe. Vos affaires
                  personnelles (sac, manteau, déambulateur) sont prises en charge et rangées.
                </p>
                <p>
                  <strong>Pendant le trajet :</strong> conduite douce, climatisation ajustée à votre
                  confort, possibilité de pause si trajet long. Le chauffeur reste attentif à votre
                  état tout au long du parcours.
                </p>
                <p>
                  <strong>À l&apos;arrivée :</strong> le chauffeur vous aide à sortir du véhicule, vous
                  accompagne jusqu&apos;à l&apos;entrée de votre destination, et peut même vous escorter
                  jusqu&apos;à la salle d&apos;attente du médecin ou à l&apos;accueil de l&apos;hôpital. Pour les
                  retours, même service : il vient vous chercher à l&apos;heure convenue et vous
                  raccompagne jusqu&apos;à votre logement.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mt-8">
                <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
                  <Home className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <p className="font-bold text-gray-900 text-sm">Prise en charge à domicile</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
                  <Shield className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <p className="font-bold text-gray-900 text-sm">Sécurisation fauteuil</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
                  <HandHeart className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <p className="font-bold text-gray-900 text-sm">Accompagnement final</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CPAM */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Prise en charge CPAM pour transport médical PMR
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  TAXI Pro 91 est <strong>conventionné par la CPAM</strong> (Caisse Primaire
                  d&apos;Assurance Maladie) pour le transport médical. Cela signifie que si vous
                  disposez d&apos;une <strong>prescription médicale de transport</strong> remise par
                  votre médecin, l&apos;Assurance Maladie prend en charge votre trajet en{' '}
                  <strong>tiers payant</strong>.
                </p>
                <p>
                  Concrètement, vous ne payez pas la course : nous facturons directement la CPAM,
                  qui rembourse selon les modalités prévues (généralement 65 % pris en charge par
                  l&apos;Assurance Maladie, 35 % par votre mutuelle si vous en avez une). Pour les
                  affections de longue durée (<strong>ALD</strong>), maternité, accident du travail,
                  la prise en charge peut atteindre 100 %.
                </p>
                <p>
                  Quand est-ce applicable ? Pour vos trajets vers les <strong>hôpitaux</strong>,{' '}
                  <strong>cliniques</strong>, <strong>centres de dialyse</strong>,{' '}
                  <strong>cabinets de radiologie</strong>, séances de <strong>chimiothérapie ou
                  radiothérapie</strong>, <strong>consultations spécialisées</strong> non
                  accessibles autrement.
                </p>
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/taxi-conventionne-cpam-91"
                  className="inline-flex items-center gap-3 bg-gray-900 text-white font-bold text-lg py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Shield className="w-5 h-5" />
                  Voir notre page Taxi conventionné CPAM 91
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Réserver un taxi PMR */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Comment réserver un taxi PMR
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Trois étapes simples pour garantir une prise en charge adaptée à vos besoins
              spécifiques.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {etapesReservation.map((e) => (
                <div key={e.num} className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-black">
                    {e.num}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{e.title}</h3>
                  <p className="text-gray-600 text-sm">{e.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 max-w-3xl mx-auto bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm">
                  <strong>Bon à savoir :</strong> pour les sorties d&apos;hospitalisation ou les
                  rendez-vous médicaux récurrents (dialyse, chimiothérapie), nous pouvons planifier
                  un <strong>cycle de réservations</strong> sur plusieurs semaines pour garantir
                  votre prise en charge à heure fixe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tarifs */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Tarifs taxi PMR
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  <strong>Principe clé :</strong> le tarif d&apos;un taxi PMR est{' '}
                  <strong>identique à celui d&apos;un taxi classique</strong>. Il n&apos;y a aucun
                  supplément lié au handicap ou à l&apos;utilisation du fauteuil roulant. C&apos;est une
                  règle déontologique que nous respectons strictement.
                </p>
                <p>
                  Le seul facteur de variation concerne le <strong>type de véhicule choisi</strong>{' '}
                  : si vos besoins nécessitent le Van Mercedes Classe V (fauteuil non pliable, grand
                  fauteuil électrique, plusieurs accompagnants), un léger supplément de Van peut
                  s&apos;appliquer comme pour toute course en Van, indépendamment de la situation de
                  handicap.
                </p>
                <p>
                  <strong>Prise en charge CPAM :</strong> sur présentation d&apos;une prescription
                  médicale de transport, votre trajet est facturé directement à la CPAM en tiers
                  payant. Vous n&apos;avez rien à avancer (ni à régler ensuite si vous êtes en ALD à
                  100 %).
                </p>
                <p>
                  <strong>Sans prescription médicale</strong> (sortie personnelle, loisirs, visite
                  familiale), vous réglez la course directement par carte bancaire, espèces ou
                  facturation entreprise si applicable. Les tarifs suivent la réglementation
                  préfectorale des taxis 91 : prise en charge, kilométrage, attente, majorations
                  nuit et dimanche.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Questions fréquentes : Taxi PMR
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Tout ce que vous devez savoir avant de réserver votre taxi adapté en Essonne.
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
                Réservez votre taxi PMR en Essonne
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
                  href="#reservation"
                  className="inline-flex items-center gap-3 bg-gray-900 text-white font-bold text-lg py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Réserver en ligne
                </Link>
              </div>
            </div>
          </div>
        </section>

        <RelatedCities currentSlug="taxi-pmr-mobilite-reduite" />
      </main>
      <Footer />
    </>
  )
}
