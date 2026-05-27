import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente',
  description: 'Conditions Générales de Vente de TAXI Pro 91 : réservation, tarifs, annulation, paiement, bagages. Service de taxi en Essonne.',
  alternates: { canonical: `${SITE.url}/cgv` },
  robots: { index: true, follow: true },
}

const articles = [
  {
    title: 'Article 1 : Objet',
    body: (
      <p>
        Les présentes Conditions Générales de Vente (CGV) ont pour objet de définir les modalités de prestation de
        services de <strong>transport de personnes par taxi</strong> assurées par {SITE.legalName}, conformément à la
        réglementation applicable aux taxis (Code des transports, articles L.3121-1 et suivants, et décret n° 2017-483
        du 6 avril 2017). Le Prestataire s&apos;engage à fournir un service conforme aux règles de la profession.
      </p>
    ),
  },
  {
    title: 'Article 2 : Réservation',
    body: (
      <>
        <p>
          Le Client peut réserver une course par les moyens suivants :
        </p>
        <ul className="list-disc pl-6 space-y-1 my-3">
          <li>par téléphone au <a href={SITE.phone.tel} className="text-yellow-600 hover:underline">{SITE.phone.display}</a>, disponible 24h/24 et 7j/7 ;</li>
          <li>via le formulaire de réservation en ligne disponible sur le site <strong>{SITE.url}</strong> ;</li>
          <li>par email à <a href={`mailto:${SITE.email}`} className="text-yellow-600 hover:underline">{SITE.email}</a>.</li>
        </ul>
        <p>
          La réservation devient ferme et définitive après confirmation par le Prestataire (par téléphone, SMS ou email).
          Toute modification doit être signalée au plus tard <strong>2 heures avant l&apos;heure de prise en charge</strong>
          {' '}prévue. Le Prestataire se réserve le droit de refuser une réservation pour motif légitime
          (indisponibilité, comportement antérieur du Client, etc.).
        </p>
      </>
    ),
  },
  {
    title: 'Article 3 : Tarifs',
    body: (
      <>
        <p>
          Les courses non réservées (prises en charge à la volée ou à une station) sont facturées selon la
          <strong> tarification réglementée du taxi</strong> (compteur horokilométrique), fixée annuellement par arrêté
          préfectoral. Le tarif comprend une prise en charge forfaitaire, un prix au kilomètre et un prix horaire en
          cas d&apos;attente ou de circulation lente.
        </p>
        <p className="mt-3">
          Pour les courses réservées à l&apos;avance, le Prestataire peut proposer des <strong>forfaits négociés à
          tarif fixe</strong> (notamment pour les liaisons aéroports et gares). Le prix est alors communiqué et accepté
          par le Client lors de la réservation.
        </p>
        <p className="mt-3">
          Des suppléments peuvent s&apos;appliquer : 4e passager, animal (hors chien guide), bagages volumineux,
          tarif de nuit (19h-7h), dimanches et jours fériés.
        </p>
      </>
    ),
  },
  {
    title: 'Article 4 : Annulation',
    body: (
      <>
        <p>
          Le Client peut annuler sa réservation sans frais jusqu&apos;à <strong>1 heure avant l&apos;heure de prise en
          charge</strong> prévue. Au-delà de ce délai :
        </p>
        <ul className="list-disc pl-6 space-y-1 my-3">
          <li>Pour une course inférieure ou égale à 30 km : aucun frais d&apos;annulation, mais le Prestataire se réserve le droit de refuser une nouvelle réservation immédiate.</li>
          <li>Pour une course supérieure à 30 km (notamment liaisons aéroport) : <strong>100 % du montant de la course est facturable</strong> en cas d&apos;annulation à moins d&apos;1 heure du départ ou de no-show.</li>
        </ul>
        <p>
          En cas d&apos;annulation par le Prestataire pour cause indépendante de sa volonté (panne, accident, force
          majeure), aucun frais ne sera facturé au Client et une solution de remplacement sera proposée dans la mesure
          du possible.
        </p>
      </>
    ),
  },
  {
    title: 'Article 5 : Paiement',
    body: (
      <>
        <p>
          Le paiement s&apos;effectue à la fin de la course. Les modes de paiement acceptés sont :
        </p>
        <ul className="list-disc pl-6 space-y-1 my-3">
          <li><strong>Espèces</strong> (jusqu&apos;à 1 000 € selon la réglementation en vigueur) ;</li>
          <li><strong>Carte bancaire</strong> (Visa, Mastercard, American Express) via terminal embarqué ;</li>
          <li><strong>Bon de transport CPAM</strong> pour les courses conventionnées (transport médical) ;</li>
          <li><strong>Facturation entreprise</strong> sur compte client préalablement ouvert, paiement à 30 jours fin de mois.</li>
        </ul>
        <p>
          Toute facture impayée à son échéance entraînera des pénalités de retard au taux légal en vigueur,
          conformément aux articles L.441-10 et suivants du Code de commerce.
        </p>
      </>
    ),
  },
  {
    title: 'Article 6 : Bagages',
    body: (
      <p>
        Le transport des bagages standards (valise cabine, valise soute, sac à dos) est inclus dans le tarif, dans la
        limite de la capacité du véhicule (généralement 3 à 4 grosses valises pour une berline). Pour les bagages
        <strong> volumineux, encombrants ou très nombreux</strong> (skis, vélo, déménagement partiel, groupe), le Client
        est invité à demander un véhicule <strong>Van</strong> lors de la réservation. Aucun supplément n&apos;est
        appliqué pour la mise à disposition d&apos;un Van, mais le tarif kilométrique peut être différent.
      </p>
    ),
  },
  {
    title: 'Article 7 : Animaux',
    body: (
      <p>
        Les animaux de compagnie sont acceptés à bord, à condition d&apos;être signalés lors de la réservation et
        transportés dans un panier ou cage adapté(e). Les <strong>chiens guides d&apos;aveugle et chiens d&apos;assistance
        sont prioritaires</strong> et acceptés sans condition ni supplément, conformément à l&apos;article 88 de la loi
        n° 87-588 du 30 juillet 1987. Pour les autres animaux, un supplément de propreté peut être appliqué.
      </p>
    ),
  },
  {
    title: 'Article 8 : Transport de mineurs',
    body: (
      <p>
        Les enfants de moins de 10 ans doivent être installés dans un dispositif de retenue homologué adapté à leur
        morphologie (siège auto, rehausseur). Le Client doit le préciser <strong>lors de la réservation</strong> afin
        que le Prestataire mette à disposition l&apos;équipement adéquat. Les mineurs voyageant seuls doivent faire
        l&apos;objet d&apos;une autorisation écrite des parents ou tuteurs légaux.
      </p>
    ),
  },
  {
    title: 'Article 9 : Retards et tolérance',
    body: (
      <p>
        En cas de retard du Client, une <strong>tolérance de 15 minutes</strong> est accordée après l&apos;heure de
        prise en charge réservée, sans frais supplémentaires. Au-delà, le temps d&apos;attente sera facturé au tarif
        horaire en vigueur. En cas de retard du Prestataire (causé par le trafic, un incident, etc.), celui-ci
        s&apos;engage à prévenir le Client par téléphone ou SMS dans les meilleurs délais.
      </p>
    ),
  },
  {
    title: 'Article 10 : Force majeure',
    body: (
      <p>
        Le Prestataire ne saurait être tenu pour responsable en cas de non-exécution ou de retard d&apos;exécution
        résultant d&apos;un événement de force majeure : grève des transports, intempéries exceptionnelles
        (neige, verglas, inondation), manifestations bloquant la circulation, accident sur l&apos;itinéraire,
        décision administrative, pandémie. Dans ces cas, le Prestataire s&apos;engage à informer le Client dans
        les meilleurs délais et à proposer une solution alternative si possible.
      </p>
    ),
  },
  {
    title: 'Article 11 : Responsabilité et assurance',
    body: (
      <p>
        Le Prestataire est couvert par une <strong>assurance professionnelle taxi</strong> (responsabilité civile
        professionnelle et exploitation) conforme à la réglementation. Sa responsabilité ne saurait être engagée en
        cas d&apos;oubli d&apos;effets personnels par le Client à bord du véhicule, étant précisé que tout objet
        retrouvé sera conservé pendant 30 jours puis remis aux objets trouvés. Le Client est invité à vérifier ses
        affaires avant de quitter le véhicule.
      </p>
    ),
  },
  {
    title: 'Article 12 : Données personnelles',
    body: (
      <p>
        Les données personnelles communiquées par le Client lors de la réservation (nom, téléphone, email, adresses)
        sont traitées conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique
        et Libertés. Pour plus d&apos;informations, consultez notre{' '}
        <Link href="/politique-confidentialite" className="text-yellow-600 hover:underline font-medium">
          Politique de confidentialité
        </Link>.
      </p>
    ),
  },
  {
    title: 'Article 13 : Réclamations',
    body: (
      <p>
        Toute réclamation doit être adressée par email à <a href={`mailto:${SITE.email}`} className="text-yellow-600 hover:underline">{SITE.email}</a>
        {' '}en précisant la date de la course, l&apos;itinéraire et la nature de la réclamation. Le Prestataire
        s&apos;engage à apporter une réponse motivée dans un délai de <strong>5 jours ouvrés</strong>. Pour un suivi
        optimal, il est recommandé de conserver le reçu de la course.
      </p>
    ),
  },
  {
    title: 'Article 14 : Médiation de la consommation',
    body: (
      <p>
        Conformément aux dispositions de l&apos;article L. 612-1 du Code de la consommation, le Client consommateur
        a le droit, en cas de litige non résolu à l&apos;amiable, de recourir gratuitement à un <strong>médiateur de
        la consommation</strong> en vue d&apos;une résolution amiable. Les coordonnées du médiateur compétent seront
        communiquées sur simple demande à <a href={`mailto:${SITE.email}`} className="text-yellow-600 hover:underline">{SITE.email}</a>.
        Le Client peut également saisir la plateforme européenne de règlement en ligne des litiges (ODR) accessible
        à l&apos;adresse <a href="https://ec.europa.eu/consumers/odr" className="text-yellow-600 hover:underline">ec.europa.eu/consumers/odr</a>.
      </p>
    ),
  },
  {
    title: 'Article 15 : Droit applicable',
    body: (
      <p>
        Les présentes CGV sont soumises au <strong>droit français</strong>. En cas de litige et à défaut d&apos;accord
        amiable, les tribunaux français seront seuls compétents. Pour les clients professionnels, compétence est
        attribuée au tribunal de commerce d&apos;Évry-Courcouronnes.
      </p>
    ),
  },
]

export default function CgvPage() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: 'CGV' }]} />

      <main className="bg-white">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Conditions Générales de Vente
              </h1>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-10">
                <p className="text-gray-700 leading-relaxed text-sm">
                  Les présentes Conditions Générales de Vente (ci-après les <strong>« CGV »</strong>) sont conclues
                  entre, d&apos;une part, la société <strong>{SITE.legalName}</strong>
                  {/* TODO: remplacer par les vraies valeurs client */}
                  {' '}(SIRET <em className="text-gray-500">[À compléter]</em>), exploitant une activité de transport de
                  personnes par taxi, ayant son siège social au {SITE.address.street}, {SITE.address.postalCode}
                  {' '}{SITE.address.locality} (ci-après le <strong>« Prestataire »</strong>), et d&apos;autre part,
                  toute personne physique ou morale réservant ou utilisant ses services (ci-après le <strong>« Client »</strong>).
                </p>
                <p className="text-gray-700 leading-relaxed text-sm mt-3">
                  Toute réservation implique l&apos;acceptation pleine et entière des présentes CGV, accessibles à
                  tout moment sur le site <strong>{SITE.url}</strong>.
                </p>
              </div>

              <div className="space-y-10">
                {articles.map((article) => (
                  <section key={article.title}>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{article.title}</h2>
                    <div className="text-gray-600 leading-relaxed space-y-2">
                      {article.body}
                    </div>
                  </section>
                ))}
              </div>

              <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
                <p className="text-gray-700 text-sm">
                  <strong>Dernière mise à jour :</strong> {new Date().getFullYear()}.
                  Le Prestataire se réserve le droit de modifier les présentes CGV à tout moment. La version applicable
                  est celle en vigueur à la date de la réservation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
