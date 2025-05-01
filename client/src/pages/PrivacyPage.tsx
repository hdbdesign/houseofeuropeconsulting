import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const PrivacyPage = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = [
    {
      id: 'intro',
      title: 'Datenschutz',
      content: `Wir freuen uns sehr über Ihr Interesse an unserem Unternehmen. Datenschutz hat einen besonders hohen Stellenwert für die Geschäftsleitung der House of Europe Consulting. Eine Nutzung der Internetseiten der House of Europe Consulting ist grundsätzlich ohne jede Angabe personenbezogener Daten möglich. Sofern eine betroffene Person besondere Services unseres Unternehmens über unsere Internetseite in Anspruch nehmen möchte, könnte jedoch eine Verarbeitung personenbezogener Daten erforderlich werden. Ist die Verarbeitung personenbezogener Daten erforderlich und besteht für eine solche Verarbeitung keine gesetzliche Grundlage, holen wir generell eine Einwilligung der betroffenen Person ein.`,
      bgColor: 'bg-black'
    },
    {
      id: 'definitions',
      title: '1. Begriffsbestimmungen',
      content: `Die Datenschutzerklärung der House of Europe Consulting beruht auf den Begrifflichkeiten, die durch den Europäischen Richtlinien- und Verordnungsgeber beim Erlass der Datenschutz-Grundverordnung (DSGVO) verwendet wurden. Unsere Datenschutzerklärung soll sowohl für die Öffentlichkeit als auch für unsere Kunden und Geschäftspartner einfach lesbar und verständlich sein. Um dies zu gewährleisten, möchten wir vorab die verwendeten Begrifflichkeiten erläutern.`,
      bgColor: 'bg-gray-900'
    },
    {
      id: 'responsible',
      title: '2. Name und Anschrift des Verantwortlichen',
      content: `Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:

House of Europe Consulting
Inhaber: Washington L. De-Sousa
Köln - Deutschland
E-Mail: info@houseofeuropeconsulting.de
Webseite: www.houseofeuropeconsulting.de`,
      bgColor: 'bg-black'
    },
    {
      id: 'data-collection',
      title: '3. Erfassung von allgemeinen Daten und Informationen',
      content: `Die Internetseite der House of Europe Consulting erfasst mit jedem Aufruf der Internetseite durch eine betroffene Person oder ein automatisiertes System eine Reihe von allgemeinen Daten und Informationen. Diese allgemeinen Daten und Informationen werden in den Logfiles des Servers gespeichert. Erfasst werden können die (1) verwendeten Browsertypen und Versionen, (2) das vom zugreifenden System verwendete Betriebssystem, (3) die Internetseite, von welcher ein zugreifendes System auf unsere Internetseite gelangt (sogenannte Referrer), (4) die Unterwebseiten, welche über ein zugreifendes System auf unserer Internetseite angesteuert werden, (5) das Datum und die Uhrzeit eines Zugriffs auf die Internetseite, (6) eine Internet-Protokoll-Adresse (IP-Adresse), (7) der Internet-Service-Provider des zugreifenden Systems und (8) sonstige ähnliche Daten und Informationen, die der Gefahrenabwehr im Falle von Angriffen auf unsere informationstechnologischen Systeme dienen.

Bei der Nutzung dieser allgemeinen Daten und Informationen zieht die House of Europe Consulting keine Rückschlüsse auf die betroffene Person. Diese Informationen werden vielmehr benötigt, um (1) die Inhalte unserer Internetseite korrekt auszuliefern, (2) die Inhalte unserer Internetseite sowie die Werbung für diese zu optimieren, (3) die dauerhafte Funktionsfähigkeit unserer informationstechnologischen Systeme und der Technik unserer Internetseite zu gewährleisten sowie (4) um Strafverfolgungsbehörden im Falle eines Cyberangriffes die zur Strafverfolgung notwendigen Informationen bereitzustellen.`,
      bgColor: 'bg-gray-900'
    },
    {
      id: 'contact',
      title: '4. Kontaktmöglichkeit über die Internetseite',
      content: `Die Internetseite der House of Europe Consulting enthält aufgrund von gesetzlichen Vorschriften Angaben, die eine schnelle elektronische Kontaktaufnahme zu unserem Unternehmen sowie eine unmittelbare Kommunikation mit uns ermöglichen, was ebenfalls eine allgemeine Adresse der sogenannten elektronischen Post info@houseofeuropeconsulting.de umfasst. Sofern eine betroffene Person per E-Mail oder über ein Kontaktformular den Kontakt mit dem für die Verarbeitung Verantwortlichen aufnimmt, werden die von der betroffenen Person übermittelten personenbezogenen Daten automatisch gespeichert. Solche auf freiwilliger Basis von einer betroffenen Person an den für die Verarbeitung Verantwortlichen übermittelten personenbezogenen Daten werden für Zwecke der Bearbeitung oder der Kontaktaufnahme zur betroffenen Person gespeichert. Es erfolgt keine Weitergabe dieser personenbezogenen Daten an Dritte.
      <div className="mt-8 text-center">
        <a
          href="mailto:info@houseofeuropeconsulting.de"
          className="inline-block px-6 py-3 bg-[#25C9BA] text-white rounded-lg hover:bg-[#25C9BA]/90 transition-colors"
        >
          Erstgespräch anfragen
        </a>
      </div>`,
      bgColor: 'bg-black'
    },
    {
      id: 'deletion',
      title: '5. Routinemäßige Löschung und Sperrung von personenbezogenen Daten',
      content: `Der für die Verarbeitung Verantwortliche verarbeitet und speichert personenbezogene Daten der betroffenen Person nur für den Zeitraum, der zur Erreichung des Speicherungszwecks erforderlich ist oder sofern dies durch den Europäischen Richtlinien- und Verordnungsgeber oder einen anderen Gesetzgeber in Gesetzen oder Vorschriften, welchen der für die Verarbeitung Verantwortliche unterliegt, vorgesehen wurde. Entfällt der Speicherungszweck oder läuft eine vom Europäischen Richtlinien- und Verordnungsgeber oder einem anderen zuständigen Gesetzgeber vorgeschriebene Speicherfrist ab, werden die personenbezogenen Daten routinemäßig und entsprechend den gesetzlichen Vorschriften gesperrt oder gelöscht.`,
      bgColor: 'bg-gray-900'
    },
    {
      id: 'rights',
      title: '6. Rechte der betroffenen Person',
      content: `a) Recht auf Bestätigung

Jede betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber eingeräumte Recht, von dem für die Verarbeitung Verantwortlichen eine Bestätigung darüber zu verlangen, ob sie betreffende personenbezogene Daten verarbeitet werden. Möchte eine betroffene Person dieses Bestätigungsrecht in Anspruch nehmen, kann sie sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.

b) Recht auf Auskunft

Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, jederzeit von dem für die Verarbeitung Verantwortlichen unentgeltliche Auskunft über die zu seiner Person gespeicherten personenbezogenen Daten und eine Kopie dieser Auskunft zu erhalten. Ferner hat der Europäische Richtlinien- und Verordnungsgeber der betroffenen Person Auskunft über folgende Informationen zugestanden:

- die Verarbeitungszwecke
- die Kategorien personenbezogener Daten, die verarbeitet werden
- die Empfänger oder Kategorien von Empfängern, gegenüber denen die personenbezogenen Daten offengelegt worden sind oder noch offengelegt werden
- falls möglich die geplante Dauer, für die die personenbezogenen Daten gespeichert werden
- das Bestehen eines Rechts auf Berichtigung oder Löschung der sie betreffenden personenbezogenen Daten oder auf Einschränkung der Verarbeitung durch den Verantwortlichen oder eines Widerspruchsrechts gegen diese Verarbeitung
- das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde
- wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben werden: Alle verfügbaren Informationen über die Herkunft der Daten
- das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling gemäß Artikel 22 Abs.1 und 4 DS-GVO und — zumindest in diesen Fällen — aussagekräftige Informationen über die involvierte Logik sowie die Tragweite und die angestrebten Auswirkungen einer derartigen Verarbeitung für die betroffene Person

c) Recht auf Berichtigung

Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, die unverzügliche Berichtigung sie betreffender unrichtiger personenbezogener Daten zu verlangen. Ferner steht der betroffenen Person das Recht zu, unter Berücksichtigung der Zwecke der Verarbeitung, die Vervollständigung unvollständiger personenbezogener Daten — auch mittels einer ergänzenden Erklärung — zu verlangen.

Möchte eine betroffene Person dieses Berichtigungsrecht in Anspruch nehmen, kann sie sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.

d) Recht auf Löschung (Recht auf Vergessenwerden)

Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das Recht, von dem Verantwortlichen zu verlangen, dass die sie betreffenden personenbezogenen Daten unverzüglich gelöscht werden, sofern einer der folgenden Gründe zutrifft und soweit die Verarbeitung nicht erforderlich ist:

- Die personenbezogenen Daten wurden für solche Zwecke erhoben oder auf sonstige Weise verarbeitet, für welche sie nicht mehr notwendig sind.
- Die betroffene Person widerruft ihre Einwilligung, auf die sich die Verarbeitung gemäß Art. 6 Abs. 1 Buchstabe a DS-GVO oder Art. 9 Abs. 2 Buchstabe a DS-GVO stützte, und es fehlt an einer anderweitigen Rechtsgrundlage für die Verarbeitung.
- Die betroffene Person legt gemäß Art. 21 Abs. 1 DS-GVO Widerspruch gegen die Verarbeitung ein, und es liegen keine vorrangigen berechtigten Gründe für die Verarbeitung vor, oder die betroffene Person legt gemäß Art. 21 Abs. 2 DS-GVO Widerspruch gegen die Verarbeitung ein.
- Die personenbezogenen Daten wurden unrechtmäßig verarbeitet.
- Die Löschung der personenbezogenen Daten ist zur Erfüllung einer rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich, dem der Verantwortliche unterliegt.
- Die personenbezogenen Daten wurden in Bezug auf angebotene Dienste der Informationsgesellschaft gemäß Art. 8 Abs. 1 DS-GVO erhoben.

e) Recht auf Einschränkung der Verarbeitung

Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das Recht, von dem Verantwortlichen die Einschränkung der Verarbeitung zu verlangen, wenn eine der folgenden Voraussetzungen gegeben ist:

- Die Richtigkeit der personenbezogenen Daten wird von der betroffenen Person bestritten, und zwar für eine Dauer, die es dem Verantwortlichen ermöglicht, die Richtigkeit der personenbezogenen Daten zu überprüfen.
- Die Verarbeitung ist unrechtmäßig, die betroffene Person lehnt die Löschung der personenbezogenen Daten ab und verlangt stattdessen die Einschränkung der Nutzung der personenbezogenen Daten.
- Der Verantwortliche benötigt die personenbezogenen Daten für die Zwecke der Verarbeitung nicht länger, die betroffene Person benötigt sie jedoch zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
- Die betroffene Person hat Widerspruch gegen die Verarbeitung gem. Art. 21 Abs. 1 DS-GVO eingelegt und es steht noch nicht fest, ob die berechtigten Gründe des Verantwortlichen gegenüber denen der betroffenen Person überwiegen.

f) Recht auf Datenübertragbarkeit

Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, die sie betreffenden personenbezogenen Daten, welche durch die betroffene Person einem Verantwortlichen bereitgestellt wurden, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten. Sie hat außerdem das Recht, diese Daten einem anderen Verantwortlichen ohne Behinderung durch den Verantwortlichen, dem die personenbezogenen Daten bereitgestellt wurden, zu übermitteln, sofern die Verarbeitung auf der Einwilligung gemäß Art. 6 Abs. 1 Buchstabe a DS-GVO oder Art. 9 Abs. 2 Buchstabe a DS-GVO oder auf einem Vertrag gemäß Art. 6 Abs. 1 Buchstabe b DS-GVO beruht und die Verarbeitung mithilfe automatisierter Verfahren erfolgt, sofern die Verarbeitung nicht für die Wahrnehmung einer Aufgabe erforderlich ist, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, welche dem Verantwortlichen übertragen wurde.

Ferner hat die betroffene Person bei der Ausübung ihres Rechts auf Datenübertragbarkeit gemäß Art. 20 Abs. 1 DS-GVO das Recht, zu erwirken, dass die personenbezogenen Daten direkt von einem Verantwortlichen zu einem anderen Verantwortlichen übermittelt werden, soweit dies technisch machbar ist und sofern hiervon nicht die Rechte und Freiheiten anderer Personen beeinträchtigt werden.

g) Recht auf Widerspruch

Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben, gegen die sie betreffende Verarbeitung personenbezogener Daten, die bei der House of Europe Consulting zu wissenschaftlichen oder historischen Forschungszwecken oder zu statistischen Zwecken gemäß Art. 89 Abs. 1 DS-GVO erfolgen, Widerspruch einzulegen, es sei denn, eine solche Verarbeitung ist zur Erfüllung einer im öffentlichen Interesse liegenden Aufgabe erforderlich.

Der betroffenen Person steht es ferner frei, im Zusammenhang mit der Nutzung von Diensten der Informationsgesellschaft, ungeachtet der Richtlinie 2002/58/EG, ihr Widerspruchsrecht mittels automatisierter Verfahren auszuüben, bei denen technische Spezifikationen verwendet werden.

Die House of Europe Consulting verarbeitet die personenbezogenen Daten im Falle des Widerspruchs nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die den Interessen, Rechten und Freiheiten der betroffenen Person überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.

Verarbeitet die House of Europe Consulting personenbezogene Daten, um Direktwerbung zu betreiben, so hat die betroffene Person das Recht, jederzeit Widerspruch gegen die Verarbeitung der personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen. Dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht.

h) Automatisierte Entscheidungen im Einzelfall einschließlich Profiling

Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung — einschließlich Profiling — beruhenden Entscheidung unterworfen zu werden, die ihr gegenüber rechtliche Wirkung entfaltet oder sie in ähnlicher Weise erheblich beeinträchtigt, sofern die Entscheidung:

- nicht für den Abschluss oder die Erfüllung eines Vertrags zwischen der betroffenen Person und dem Verantwortlichen erforderlich ist, oder
- aufgrund von Rechtsvorschriften der Union oder der Mitgliedstaaten, denen der Verantwortliche unterliegt, zulässig ist und diese Rechtsvorschriften angemessene Maßnahmen zur Wahrung der Rechte und Freiheiten sowie der berechtigten Interessen der betroffenen Person enthalten oder
- mit ausdrücklicher Einwilligung der betroffenen Person erfolgt.

i) Recht auf Widerruf einer datenschutzrechtlichen Einwilligung

Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das Recht, eine Einwilligung zur Verarbeitung personenbezogener Daten jederzeit zu widerrufen.`,
      bgColor: 'bg-black'
    },
    {
      id: 'cookies',
      title: '7. Cookies und Tracking',
      content: `Unsere Website verwendet Cookies und ähnliche Tracking-Technologien, um die Benutzerfreundlichkeit zu verbessern und bestimmte Funktionen bereitzustellen. Cookies sind Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen.

a) Arten von Cookies

Wir verwenden folgende Arten von Cookies:
- Technisch notwendige Cookies: Diese sind für den Betrieb der Website erforderlich
- Analyse-Cookies: Diese helfen uns, die Nutzung unserer Website zu verstehen und zu verbessern
- Marketing-Cookies: Diese ermöglichen es uns, Ihnen relevante Werbung anzuzeigen

b) Kontrolle über Cookies

Sie können Ihre Browser-Einstellungen so konfigurieren, dass:
- Sie über das Setzen von Cookies informiert werden
- Cookies nur im Einzelfall erlaubt werden
- Die Annahme von Cookies für bestimmte Fälle oder generell ausgeschlossen wird
- Das automatische Löschen der Cookies beim Schließen des Browsers aktiviert wird

c) Notwendigkeit von Cookies

Bitte beachten Sie, dass bei der Deaktivierung von Cookies die Funktionalität dieser Website eingeschränkt sein kann.

d) Speicherdauer

Die von uns verwendeten Cookies werden nach unterschiedlichen Zeiträumen automatisch gelöscht:
- Session-Cookies: Werden beim Schließen des Browsers gelöscht
- Temporäre Cookies: Werden nach einer vordefinierten Zeit gelöscht
- Permanente Cookies: Bleiben bis zur manuellen Löschung gespeichert

e) Tracking-Tools

Neben Cookies setzen wir auch andere Tracking-Technologien ein, um die Nutzung unserer Website zu analysieren und zu optimieren. Details zu den einzelnen Tools finden Sie in den entsprechenden Abschnitten dieser Datenschutzerklärung.`,
      bgColor: 'bg-gray-900'
    },
    {
      id: 'applications',
      title: '8. Datenschutz bei Bewerbungen und im Bewerbungsverfahren',
      content: `Der für die Verarbeitung Verantwortliche erhebt und verarbeitet die personenbezogenen Daten von Bewerbern zum Zwecke der Abwicklung des Bewerbungsverfahrens. Die Verarbeitung kann auch auf elektronischem Wege erfolgen. Dies ist insbesondere dann der Fall, wenn ein Bewerber entsprechende Bewerbungsunterlagen auf dem elektronischen Wege, beispielsweise per E-Mail oder über ein auf der Internetseite befindliches Webformular, an den für die Verarbeitung Verantwortlichen übermittelt. Schließt der für die Verarbeitung Verantwortliche einen Anstellungsvertrag mit einem Bewerber, werden die übermittelten Daten zum Zwecke der Abwicklung des Beschäftigungsverhältnisses unter Beachtung der gesetzlichen Vorschriften gespeichert. Wird von dem für die Verarbeitung Verantwortlichen kein Anstellungsvertrag mit dem Bewerber geschlossen, so werden die Bewerbungsunterlagen zwei Monate nach Bekanntgabe der Absageentscheidung automatisch gelöscht, sofern einer Löschung keine sonstigen berechtigten Interessen des für die Verarbeitung Verantwortlichen entgegenstehen.`,
      bgColor: 'bg-gray-900'
    },
    {
      id: 'analytics',
      title: '9. Datenschutzbestimmungen zu Einsatz und Verwendung von Google Analytics (mit Anonymisierungsfunktion)',
      content: `Der für die Verarbeitung Verantwortliche hat auf dieser Internetseite die Komponente Google Analytics (mit Anonymisierungsfunktion) integriert. Google Analytics ist ein Web-Analyse-Dienst. Web-Analyse ist die Erhebung, Sammlung und Auswertung von Daten über das Verhalten von Besuchern von Internetseiten. Ein Web-Analyse-Dienst erfasst unter anderem Daten darüber, von welcher Internetseite eine betroffene Person auf eine Internetseite gekommen ist (sogenannte Referrer), auf welche Unterseiten der Internetseite zugegriffen oder wie oft und für welche Verweildauer eine Unterseite betrachtet wurde. Eine Web-Analyse wird überwiegend zur Optimierung einer Internetseite und zur Kosten-Nutzen-Analyse von Internetwerbung eingesetzt.

Betreibergesellschaft der Google-Analytics-Komponente ist die Google Inc., 1600 Amphitheatre Pkwy, Mountain View, CA 94043-1351, USA. Der für die Verarbeitung Verantwortliche verwendet für die Web-Analyse über Google Analytics den Zusatz "_gat._anonymizeIp". Mittels dieses Zusatzes wird die IP-Adresse des Internetanschlusses der betroffenen Person von Google gekürzt und anonymisiert, wenn der Zugriff auf unsere Internetseiten aus einem Mitgliedstaat der Europäischen Union oder aus einem anderen Vertragsstaat des Abkommens über den Europäischen Wirtschaftsraum erfolgt.

Der Zweck der Google-Analytics-Komponente ist die Analyse der Besucherströme auf unserer Internetseite. Google nutzt die gewonnenen Daten und Informationen unter anderem dazu, die Nutzung unserer Internetseite auszuwerten, um für uns Online-Reports, welche die Aktivitäten auf unseren Internetseiten aufzeigen, zusammenzustellen, und um weitere mit der Nutzung unserer Internetseite in Verbindung stehende Dienstleistungen zu erbringen.

Die Anonymisierung der IP-Adresse erfolgt innerhalb der Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum durch Kürzung der IP-Adresse. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt.

Google Analytics setzt ein Cookie auf dem informationstechnologischen System der betroffenen Person. Was Cookies sind, wurde oben bereits erläutert. Mit Setzung des Cookies wird Google eine Analyse der Benutzung unserer Internetseite ermöglicht. Durch jeden Aufruf einer der Einzelseiten dieser Internetseite wird der Internetbrowser auf dem informationstechnologischen System der betroffenen Person automatisch durch die jeweilige Google-Analytics-Komponente veranlasst, Daten zum Zwecke der Online-Analyse an Google zu übermitteln.

Mittels des Cookies werden personenbezogene Informationen, beispielsweise die Zugriffszeit, der Ort, von welchem ein Zugriff ausging und die Häufigkeit der Besuche unserer Internetseite durch die betroffene Person, gespeichert. Bei jedem Besuch unserer Internetseiten werden diese personenbezogenen Daten, einschließlich der IP-Adresse des von der betroffenen Person genutzten Internetanschlusses, an Google in den Vereinigten Staaten von Amerika übertragen. Diese personenbezogenen Daten werden durch Google in den Vereinigten Staaten von Amerika gespeichert. Google gibt diese über das technische Verfahren erhobenen personenbezogenen Daten unter Umständen an Dritte weiter.

Die betroffene Person kann die Setzung von Cookies durch unsere Internetseite, wie oben bereits dargestellt, jederzeit mittels einer entsprechenden Einstellung des genutzten Internetbrowsers verhindern und damit der Setzung von Cookies dauerhaft widersprechen. Eine solche Einstellung des genutzten Internetbrowsers würde auch verhindern, dass Google ein Cookie auf dem informationstechnologischen System der betroffenen Person setzt. Zudem kann ein von Google Analytics bereits gesetzter Cookie jederzeit über den Internetbrowser oder andere Softwareprogramme gelöscht werden.

Ferner besteht für die betroffene Person die Möglichkeit, einer Erfassung der durch Google Analytics erzeugten, auf eine Nutzung dieser Internetseite bezogenen Daten sowie der Verarbeitung dieser Daten durch Google zu widersprechen und eine solche zu verhindern. Hierzu muss die betroffene Person ein Browser-Add-On unter dem Link https://tools.google.com/dlpage/gaoptout herunterladen und installieren. Dieses Browser-Add-On teilt Google Analytics über JavaScript mit, dass keine Daten und Informationen zu den Besuchen von Internetseiten an Google Analytics übermittelt werden dürfen. Die Installation des Browser-Add-Ons wird von Google als Widerspruch gewertet.

Die Installation des Browser-Add-Ons wird von Google als Widerspruch gewertet. Wird das informationstechnologische System der betroffenen Person zu einem späteren Zeitpunkt gelöscht, formatiert oder neu installiert, muss durch die betroffene Person eine erneute Installation des Browser-Add-Ons erfolgen, um Google Analytics zu deaktivieren. Sofern das Browser-Add-On durch die betroffene Person oder einer anderen Person, die ihrem Machtbereich zuzurechnen ist, deinstalliert oder deaktiviert wird, besteht die Möglichkeit der Neuinstallation oder der erneuten Aktivierung des Browser-Add-Ons.

Weitere Informationen und die geltenden Datenschutzbestimmungen von Google können unter https://www.google.de/intl/de/policies/privacy/ und unter http://www.google.com/analytics/terms/de.html abgerufen werden. Google Analytics wird unter diesem Link https://www.google.com/intl/de_de/analytics/ genauer erläutert.`,
      bgColor: 'bg-black'
    },
    {
      id: 'youtube',
      title: '10. Datenschutzbestimmungen zu Einsatz und Verwendung von YouTube',
      content: `Der für die Verarbeitung Verantwortliche hat auf dieser Internetseite Komponenten von YouTube integriert. YouTube ist ein Internet-Videoportal, das Video-Publishern das kostenlose Einstellen von Videoclips und anderen Nutzern die ebenfalls kostenfreie Betrachtung, Bewertung und Kommentierung dieser ermöglicht. YouTube gestattet die Publikation aller Arten von Videos, weshalb über das Internetportal komplette Film- und Fernsehsendungen, aber auch Musikvideos, Trailer oder von Nutzern selbst angefertigte Videos abrufbar sind.

Betreibergesellschaft von YouTube ist die YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA. Die YouTube, LLC ist einer Tochtergesellschaft der Google Inc., 1600 Amphitheatre Pkwy, Mountain View, CA 94043-1351, USA.

Durch jeden Aufruf einer der Einzelseiten dieser Internetseite, die durch den für die Verarbeitung Verantwortlichen betrieben wird und auf welcher eine YouTube-Komponente (YouTube-Video) integriert wurde, wird der Internetbrowser auf dem informationstechnologischen System der betroffenen Person automatisch durch die jeweilige YouTube-Komponente veranlasst, eine Darstellung der entsprechenden YouTube-Komponente von YouTube herunterzuladen. Weitere Informationen zu YouTube können unter https://www.youtube.com/yt/about/de/ abgerufen werden.

Im Rahmen dieses technischen Verfahrens erhalten YouTube und Google Kenntnis darüber, welche konkrete Unterseite unserer Internetseite durch die betroffene Person besucht wird. Sofern die betroffene Person gleichzeitig bei YouTube eingeloggt ist, erkennt YouTube mit dem Aufruf einer Unterseite, die ein YouTube-Video enthält, welche konkrete Unterseite unserer Internetseite die betroffene Person besucht.

Diese Informationen werden durch YouTube und Google gesammelt und dem jeweiligen YouTube-Account der betroffenen Person zugeordnet. YouTube und Google erhalten über die YouTube-Komponente immer dann eine Information darüber, dass die betroffene Person unsere Internetseite besucht hat, wenn die betroffene Person zum Zeitpunkt des Aufrufs unserer Internetseite gleichzeitig bei YouTube eingeloggt ist; dies findet unabhängig davon statt, ob die betroffene Person ein YouTube-Video anklickt oder nicht.

Ist eine derartige Übermittlung dieser Informationen an YouTube und Google von der betroffenen Person nicht gewollt, kann diese die Übermittlung dadurch verhindern, dass sie sich vor einem Aufruf unserer Internetseite aus ihrem YouTube-Account ausloggt.

Die von YouTube veröffentlichten Datenschutzbestimmungen, die unter https://www.google.de/intl/de/policies/privacy/ abrufbar sind, geben Aufschluss über die Erhebung, Verarbeitung und Nutzung personenbezogener Daten durch YouTube und Google.`,
      bgColor: 'bg-gray-900'
    },
    {
      id: 'paypal',
      title: '11. Zahlungsart: Datenschutzbestimmungen zu PayPal als Zahlungsart',
      content: `Der für die Verarbeitung Verantwortliche hat auf dieser Internetseite Komponenten von PayPal integriert. PayPal ist ein Online-Zahlungsdienstleister. Zahlungen werden über sogenannte PayPal-Konten abgewickelt, die virtuelle Privat- oder Geschäftskonten darstellen. Zudem besteht bei PayPal die Möglichkeit, virtuelle Zahlungen über Kreditkarten abzuwickeln, wenn ein Nutzer kein PayPal-Konto unterhält. Ein PayPal-Konto wird über eine E-Mail-Adresse geführt, weshalb es keine klassische Kontonummer gibt. PayPal ermöglicht es, Online-Zahlungen an Dritte auszulösen oder auch Zahlungen zu empfangen. PayPal übernimmt ferner Treuhänderfunktionen und bietet Käuferschutzdienste an.

Die Europäische Betreibergesellschaft von PayPal ist die PayPal (Europe) S.à r.l. et Cie, S.C.A., 22-24 Boulevard Royal, 2449 Luxembourg, Luxemburg.

Wählt die betroffene Person während des Bestellvorgangs in unserem Online-Shop als Zahlungsmöglichkeit "PayPal" aus, werden automatisiert Daten der betroffenen Person an PayPal übermittelt. Mit der Auswahl dieser Zahlungsoption willigt die betroffene Person in die zur Zahlungsabwicklung erforderliche Übermittlung personenbezogener Daten ein.

Bei den an PayPal übermittelten personenbezogenen Daten handelt es sich in der Regel um Vorname, Nachname, Adresse, E-Mail-Adresse, IP-Adresse, Telefonnummer, Mobiltelefonnummer oder andere Daten, die zur Zahlungsabwicklung notwendig sind. Zur Abwicklung des Kaufvertrages notwendig sind auch solche personenbezogenen Daten, die im Zusammenhang mit der jeweiligen Bestellung stehen.

Die Übermittlung der Daten bezweckt die Zahlungsabwicklung und die Betrugsprävention. Der für die Verarbeitung Verantwortliche wird PayPal personenbezogene Daten insbesondere dann übermitteln, wenn ein berechtigtes Interesse für die Übermittlung gegeben ist. Die zwischen PayPal und dem für die Verarbeitung Verantwortlichen ausgetauschten personenbezogenen Daten werden von PayPal unter Umständen an Wirtschaftsauskunfteien übermittelt. Diese Übermittlung bezweckt die Identitäts- und Bonitätsprüfung.

PayPal gibt die personenbezogenen Daten gegebenenfalls an verbundene Unternehmen und Dienstleister oder Subunternehmer weiter, soweit dies zur Erfüllung der vertraglichen Verpflichtungen erforderlich ist oder die Daten im Auftrag verarbeitet werden sollen.

Die betroffene Person hat die Möglichkeit, die Einwilligung zum Umgang mit personenbezogenen Daten jederzeit gegenüber PayPal zu widerrufen. Ein Widerruf wirkt sich nicht auf personenbezogene Daten aus, die zwingend zur (vertragsgemäßen) Zahlungsabwicklung verarbeitet, genutzt oder übermittelt werden müssen.

Die geltenden Datenschutzbestimmungen von PayPal können unter https://www.paypal.com/de/webapps/mpp/ua/privacy-full abgerufen werden.`,
      bgColor: 'bg-black'
    },
    {
      id: 'legal-basis',
      title: '12. Rechtsgrundlage der Verarbeitung',
      content: `Art. 6 I lit. a DS-GVO dient unserem Unternehmen als Rechtsgrundlage für Verarbeitungsvorgänge, bei denen wir eine Einwilligung für einen bestimmten Verarbeitungszweck einholen. Ist die Verarbeitung personenbezogener Daten zur Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, erforderlich, wie dies beispielsweise bei Verarbeitungsvorgängen der Fall ist, die für eine Lieferung von Waren oder die Erbringung einer sonstigen Leistung oder Gegenleistung notwendig sind, so beruht die Verarbeitung auf Art. 6 I lit. b DS-GVO.

Gleiches gilt für solche Verarbeitungsvorgänge die zur Durchführung vorvertraglicher Maßnahmen erforderlich sind, etwa in Fällen von Anfragen zur unseren Produkten oder Leistungen. Unterliegt unser Unternehmen einer rechtlichen Verpflichtung durch welche eine Verarbeitung von personenbezogenen Daten erforderlich wird, wie beispielsweise zur Erfüllung steuerlicher Pflichten, so basiert die Verarbeitung auf Art. 6 I lit. c DS-GVO.

In seltenen Fällen könnte die Verarbeitung von personenbezogenen Daten erforderlich werden, um lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen Person zu schützen. Dies wäre beispielsweise der Fall, wenn ein Besucher in unserem Betrieb verletzt werden würde und daraufhin sein Name, sein Alter, seine Krankenkassendaten oder sonstige lebenswichtige Informationen an einen Arzt, ein Krankenhaus oder sonstige Dritte weitergegeben werden müssten. Dann würde die Verarbeitung auf Art. 6 I lit. d DS-GVO beruhen.

Letztlich könnten Verarbeitungsvorgänge auf Art. 6 I lit. f DS-GVO beruhen. Auf dieser Rechtsgrundlage basieren Verarbeitungsvorgänge, die von keiner der vorgenannten Rechtsgrundlagen erfasst werden, wenn die Verarbeitung zur Wahrung eines berechtigten Interesses unseres Unternehmens oder eines Dritten erforderlich ist, sofern die Interessen, Grundrechte und Grundfreiheiten des Betroffenen nicht überwiegen.`,
      bgColor: 'bg-gray-900'
    },
    {
      id: 'legitimate-interests',
      title: '13. Berechtigte Interessen an der Verarbeitung',
      content: `Basiert die Verarbeitung personenbezogener Daten auf Artikel 6 I lit. f DS-GVO ist unser berechtigtes Interesse die Durchführung unserer Geschäftstätigkeit zugunsten des Wohlergehens all unserer Mitarbeiter und unserer Anteilseigner.`,
      bgColor: 'bg-black'
    },
    {
      id: 'storage-duration',
      title: '14. Dauer der Speicherung',
      content: `Das Kriterium für die Dauer der Speicherung von personenbezogenen Daten ist die jeweilige gesetzliche Aufbewahrungsfrist. Nach Ablauf der Frist werden die entsprechenden Daten routinemäßig gelöscht, sofern sie nicht mehr zur Vertragserfüllung oder Vertragsanbahnung erforderlich sind.`,
      bgColor: 'bg-gray-900'
    },
    {
      id: 'legal-requirements',
      title: '15. Gesetzliche oder vertragliche Vorschriften',
      content: `Wir klären Sie darüber auf, dass die Bereitstellung personenbezogener Daten zum Teil gesetzlich vorgeschrieben ist (z.B. Steuervorschriften) oder sich auch aus vertraglichen Regelungen (z.B. Angaben zum Vertragspartner) ergeben kann. Mitunter kann es zu einem Vertragsschluss erforderlich sein, dass eine betroffene Person uns personenbezogene Daten zur Verfügung stellt, die in der Folge durch uns verarbeitet werden müssen. Die betroffene Person ist beispielsweise verpflichtet uns personenbezogene Daten bereitzustellen, wenn unser Unternehmen mit ihr einen Vertrag abschließt. Eine Nichtbereitstellung der personenbezogenen Daten hätte zur Folge, dass der Vertrag mit dem Betroffenen nicht geschlossen werden könnte. Vor einer Bereitstellung personenbezogener Daten durch den Betroffenen muss sich der Betroffene an einen unserer Mitarbeiter wenden. Unser Mitarbeiter klärt den Betroffenen einzelfallbezogen darüber auf, ob die Bereitstellung der personenbezogenen Daten gesetzlich oder vertraglich vorgeschrieben oder für den Vertragsabschluss erforderlich ist, ob eine Verpflichtung besteht, die personenbezogenen Daten bereitzustellen, und welche Folgen die Nichtbereitstellung der personenbezogenen Daten hätte.`,
      bgColor: 'bg-black'
    },
    {
      id: 'automated-decision',
      title: '16. Bestehen einer automatisierten Entscheidungsfindung',
      content: `Als verantwortungsbewusstes Unternehmen verzichten wir auf eine automatische Entscheidungsfindung oder ein Profiling.

Diese Datenschutzerklärung wurde durch den Datenschutzerklärungs-Generator der DGD Deutsche Gesellschaft für Datenschutz GmbH, die als Externer Datenschutzbeauftragter tätig ist, in Kooperation mit den Datenschutz Anwälten der Kanzlei WILDE BEUGER SOLMECKE | Rechtsanwälte erstellt.`,
      bgColor: 'bg-gray-900'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>{t('privacy.pageTitle')}</title>
        <meta name="description" content={t('privacy.pageDescription')} />
      </Helmet>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-b from-[#021C26] to-black"
      >
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              {t('privacy.pageTitle')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 text-lg md:text-xl mb-8"
            >
              {t('privacy.pageDescription')}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center"
            >
              <button
                onClick={() => scrollToSection('intro')}
                className="bg-[#25C9BA] hover:bg-[#25C9BA]/90 text-black font-medium px-6 py-3 rounded-lg transition-colors"
              >
                {t('privacy.startReading')}
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {sections.map((section, index) => (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${section.bgColor} rounded-lg p-8 mb-8`}
            >
              <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
              <div className="prose prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: section.content }} />
              </div>
            </motion.section>
          ))}
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-[#25C9BA] text-black p-3 rounded-full shadow-lg hover:bg-[#25C9BA]/90 transition-colors"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PrivacyPage; 