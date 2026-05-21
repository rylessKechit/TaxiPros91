import { Metadata } from 'next'
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité et protection des données personnelles de TAXI Pro 91. Vos droits RGPD, cookies, durée de conservation.',
  alternates: { canonical: `${SITE.url}/politique-confidentialite` },
  robots: { index: true, follow: true },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: 'Politique de confidentialité' }]} />

      <main className="bg-white">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Politique de confidentialité
              </h1>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-10">
                <p className="text-gray-700 leading-relaxed text-sm">
                  La présente politique de confidentialité décrit la manière dont <strong>{SITE.legalName}</strong>
                  {' '}collecte, utilise et protège vos données personnelles, conformément au <strong>Règlement Général
                  sur la Protection des Données (RGPD)</strong> n° 2016/679 et à la loi Informatique et Libertés
                  n° 78-17 du 6 janvier 1978 modifiée.
                </p>
              </div>

              {/* Responsable du traitement */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Responsable du traitement</h2>
                <p className="text-gray-600 leading-relaxed">
                  Le responsable du traitement des données personnelles est :
                </p>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 mt-3 space-y-1 text-gray-700">
                  <p><strong>{SITE.legalName}</strong></p>
                  <p>{SITE.address.street}, {SITE.address.postalCode} {SITE.address.locality}</p>
                  <p>Contact : <a href={`mailto:${SITE.email}`} className="text-yellow-600 hover:underline">{SITE.email}</a></p>
                  <p>Téléphone : <a href={SITE.phone.tel} className="text-yellow-600 hover:underline">{SITE.phone.display}</a></p>
                </div>
              </section>

              {/* Données collectées */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Données collectées</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Nous collectons uniquement les données strictement nécessaires à la fourniture de nos services :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>
                    <strong>Via le formulaire de réservation :</strong> nom, prénom, numéro de téléphone, adresse email,
                    adresse de prise en charge et de destination, date et heure souhaitées, nombre de passagers,
                    informations complémentaires (bagages, animal, PMR).
                  </li>
                  <li>
                    <strong>Lors d&apos;un appel téléphonique :</strong> numéro de téléphone appelant (pour le suivi
                    de la réservation et le rappel), enregistrement éventuel à des fins de qualité (avec information
                    préalable).
                  </li>
                  <li>
                    <strong>Cookies analytiques :</strong> données de navigation anonymisées (pages vues, temps passé,
                    type d&apos;appareil) collectées sous réserve de votre consentement.
                  </li>
                  <li>
                    <strong>Facturation :</strong> pour les clients professionnels, raison sociale, SIRET, adresse de
                    facturation.
                  </li>
                </ul>
              </section>

              {/* Finalités */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Finalités du traitement</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Vos données sont utilisées pour les finalités suivantes :
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-600">
                  <li>Gestion et suivi de vos réservations de course ;</li>
                  <li>Émission et conservation des factures (obligation comptable) ;</li>
                  <li>Communication avec vous (confirmation, rappel SMS, modification, annulation) ;</li>
                  <li>Suivi de la qualité de service et traitement des réclamations ;</li>
                  <li>Production de statistiques anonymes d&apos;utilisation du site ;</li>
                  <li>Le cas échéant, envoi d&apos;informations commerciales (avec votre consentement préalable).</li>
                </ul>
              </section>

              {/* Base légale */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Base légale du traitement</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li><strong>Exécution du contrat</strong> de transport (art. 6.1.b RGPD) : pour le traitement des réservations et des courses.</li>
                  <li><strong>Obligation légale</strong> (art. 6.1.c RGPD) : pour la conservation des factures.</li>
                  <li><strong>Intérêt légitime</strong> (art. 6.1.f RGPD) : pour la prévention de la fraude et l&apos;amélioration de nos services.</li>
                  <li><strong>Consentement</strong> (art. 6.1.a RGPD) : pour les cookies analytiques et les communications commerciales.</li>
                </ul>
              </section>

              {/* Durée de conservation */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Durée de conservation</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-bold text-gray-900">Type de données</th>
                        <th className="text-left py-3 px-4 font-bold text-gray-900">Durée</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Factures (obligation comptable)</td>
                        <td className="py-3 px-4"><strong>10 ans</strong></td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Données de réservation</td>
                        <td className="py-3 px-4"><strong>3 ans</strong> après la dernière course</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Données prospect (formulaire sans suite)</td>
                        <td className="py-3 px-4"><strong>3 ans</strong> après le dernier contact</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Cookies</td>
                        <td className="py-3 px-4"><strong>13 mois</strong> maximum</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Destinataires */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Destinataires des données</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Vos données sont strictement réservées à un usage interne et ne sont jamais vendues à des tiers.
                  Elles peuvent être communiquées aux destinataires suivants :
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-600">
                  <li>L&apos;équipe de {SITE.legalName} (dispatcher, chauffeurs concernés, comptabilité) ;</li>
                  <li>Notre hébergeur Vercel Inc. (stockage technique uniquement) ;</li>
                  <li>Notre prestataire d&apos;emailing transactionnel (pour les confirmations et rappels) ;</li>
                  <li>Les autorités publiques sur demande légale (justice, fisc, URSSAF, CPAM pour les courses conventionnées).</li>
                </ul>
              </section>

              {/* Transferts hors UE */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Transferts de données hors Union européenne</h2>
                <p className="text-gray-600 leading-relaxed">
                  Notre hébergeur <strong>Vercel Inc.</strong> est basé aux États-Unis. Le transfert des données est
                  encadré par les <strong>clauses contractuelles types</strong> approuvées par la Commission européenne,
                  garantissant un niveau de protection équivalent à celui prévu par le RGPD.
                </p>
              </section>

              {/* Vos droits */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Vos droits</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-4">
                  <li><strong>Droit d&apos;accès</strong> : obtenir la confirmation et une copie des données vous concernant ;</li>
                  <li><strong>Droit de rectification</strong> : corriger des données inexactes ou incomplètes ;</li>
                  <li><strong>Droit à l&apos;effacement</strong> (« droit à l&apos;oubli ») : demander la suppression de vos données ;</li>
                  <li><strong>Droit d&apos;opposition</strong> : vous opposer au traitement pour motif légitime ;</li>
                  <li><strong>Droit à la portabilité</strong> : récupérer vos données dans un format structuré ;</li>
                  <li><strong>Droit à la limitation</strong> du traitement ;</li>
                  <li><strong>Droit de retirer votre consentement</strong> à tout moment (cookies, newsletter).</li>
                </ul>
                <p className="text-gray-600 leading-relaxed">
                  Pour exercer ces droits, contactez-nous à{' '}
                  <a href={`mailto:${SITE.email}`} className="text-yellow-600 hover:underline font-medium">{SITE.email}</a>
                  {' '}en joignant un justificatif d&apos;identité. Nous répondrons dans un délai maximum d&apos;un mois.
                </p>
              </section>

              {/* Cookies */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Cookies</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Notre site utilise uniquement des <strong>cookies analytiques</strong> (mesure d&apos;audience anonymisée)
                  destinés à comprendre l&apos;usage du site et à l&apos;améliorer. Nous <strong>n&apos;utilisons aucun
                  cookie publicitaire</strong>.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Le dépôt de ces cookies est soumis à votre consentement préalable, recueilli via le bandeau présent
                  lors de votre première visite. Vous pouvez à tout moment modifier votre choix via le paramétrage de
                  votre navigateur.
                </p>
              </section>

              {/* Réclamation */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Réclamation auprès de la CNIL</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez
                  adresser une réclamation à la <strong>Commission Nationale de l&apos;Informatique et des Libertés (CNIL)</strong> :
                </p>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 space-y-1 text-gray-700">
                  <p><strong>CNIL</strong></p>
                  <p>3 Place de Fontenoy, TSA 80715</p>
                  <p>75334 Paris Cedex 07</p>
                  <p>Site web : <a href="https://www.cnil.fr" className="text-yellow-600 hover:underline">www.cnil.fr</a></p>
                </div>
              </section>

              {/* Modifications */}
              <section className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">Modifications de la présente politique</h2>
                <p className="text-gray-700 text-sm">
                  Cette politique peut être mise à jour à tout moment pour refléter l&apos;évolution de nos pratiques
                  ou de la réglementation. La date de dernière mise à jour est indiquée en bas du document.
                </p>
                <p className="text-gray-700 text-sm mt-3">
                  <strong>Dernière mise à jour :</strong> {new Date().getFullYear()}.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
