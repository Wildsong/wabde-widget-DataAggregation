define({
  "_widgetLabel": "Dataaggregering",
  "startPage": {
    "defaultStartPageInstructions": "Dette miniprogrammet gjør det enkelt å behandle og sende data fra en fil til laget som er valgt i kartet.<br/> <br/> Verdiene i filen må være skilt med komma, tabulator, semikolon eller en loddrett strek.",
    "dragDrop": "Dra og slipp",
    "browse": "Bla etter fil",
    "or": "ELLER",
    "userPrivilege": "Kontoen har ikke rettigheter til å opprette eller endre data.",
    "userCredits": "${widgetName} krever credits for å bruke posisjonsindiktatoren ${locator}.",
    "contactAdmin": "Kontakt administratoren for organisasjonen for å be om flere credits.",
    "contactAdminEdit": "Kontakt administratoren for organisasjonen for å be om redigeringstillatelse.",
    "canUseLocator": "Posisjonsindikator ${locator} brukes til å lokalisere geoobjekter.",
    "notEnoughCredits": "Ikke nok credits.",
    "locationAndField": "Lokasjon- og feltinformasjon",
    "locationAndFieldHint": "Velg verdiene fra filen som skal brukes til å oppdatere mållaget.",
    "cannotUseLocator": "Kan ikke bruke ${widgetName}",
    "noAnonymousEdit": "Laget ${layerName} støtter ikke anonym redigering.",
    "pleaseLogin": "Logg på organsiasjonen ${org}, eller kontakt administratoren for organsiasjonen og be om at anonym redigering aktiveres.",
    "invalidEdit": "Ugyldige rettigheter",
    "unableToAccess": "Får ikke tilgang til ${layerName}",
    "appropriateCredentials": "Kontroller at du har logget på med riktig brukernavn og passord.",
    "shared": "Kontakt administratoren for organisasjonen for å få tilgang til laget ${layerName}.",
    "targetLayerLabel": "Mållag",
    "homeButtonLabel": "Hjem",
    "mappingErrorMsg": "Klikk på neste-pilen for å definere feltene"
  },
  "mapping": {
    "schemaMapping": "Feltinformasjon",
    "schemaMappingHint": "Velg felt i filen som er knyttet til feltene i laget.",
    "locationMapping": "Lokasjonsinformasjon",
    "locationMappingHint": "Velg typen adresse- eller koordinatinformasjon som forventes fra filen."
  },
  "locationMapping": {
    "locationMappingPageHint": "Velg lokasjonstype",
    "useAddress": "Finn ved hjelp av en adresse",
    "useAddressHint": "Data inneholder adresseinformasjon",
    "useCoordinates": "Finn ved hjelp av koordinater",
    "useCoordinatesHint": "Data inneholder X/Y-koordinatverdier"
  },
  "address": {
    "addressPageHint": "Velg adressetype",
    "singleField": "Ett felt",
    "singleFieldHint": "Velg feltet som inneholder adresseinformasjonen",
    "multiField": "Flere felt",
    "multiFieldHint": "Velg feltene som inneholder adresseinformasjonen"
  },
  "coordinates": {
    "coordinatesPageHint": "Velg feltene som inneholder koordinatdataene"
  },
  "fieldMapping": {
    "fieldMappingPageHint": "Velg kildefeltet som er knyttet til målfeltet",
    "sourceField": "Samsvarende kildefelt",
    "targetField": "Målfelt"
  },
  "buttons": {
    "addToMap": "Legg til i kart",
    "submit": "Send inn",
    "download": "Last ned"
  },
  "review": {
    "matched": "Funnet",
    "reviewMatched": "Lokasjoner funnet",
    "reviewMatchedHint": "Se gjennom lokasjonene som ble funnet.",
    "unMatched": "ikke funnet",
    "reviewUnMatched": "Lokasjoner ikke funnet",
    "reviewUnMatchedHint": "Se gjennom lokasjonene som ikke ble funnet. Elementer som ikke korrigeres, blir ikke sendt.",
    "duplicate": "Dupliser",
    "reviewDuplicate": "Duplikate lokasjoner",
    "reviewDuplicateHint": "Se gjennom lokasjonene som allerede var funnet i laget. Elementer som ikke adresseres, blir ikke sendt.",
    "reviewLabelWithCount": "${totalMatchedFeatures} ${headerString} ${headerStringHint}",
    "use": "Bruk:",
    "fromLayer": "Målinformasjon",
    "target": "Mål",
    "source": "Kilde",
    "fromFile": "Kildeinformasjon",
    "locationControlHint": "Se gjennom adresseinformasjon",
    "duplicateAction": "Velg en handling",
    "item": "Post:",
    "locateFeature": "Finn geoobjekt",
    "removeFeature": "Fjern geoobjekt",
    "featureLocated": "Lokasjon funnet",
    "valuesDoNotMatch": "Matcher ikke eksisterende verdi",
    "sync": "Synkroniser adresseinformasjon med feltinformasjon",
    "noFeaturesSaved": "Ingen geoobjekter ble lagret",
    "someFeaturesSaved": "${num} geoobjekt(er) ble lagret.",
    "someFeaturesNotSaved": "${num} geoobjekt(er) ble ikke lagret.",
    "feature": "Se gjennom geoobjektinformasjon",
    "locationInfo": "Se gjennom lokasjonsinformasjon",
    "selectValue": "Velg en verdi",
    "reviewData": "Se gjennom data",
    "reviewDataHint": "Se gjennom dataene før du sender dem til laget.",
    "reviewFeatureHint": "Se gjennom eller rediger geoobjekt- og lokasjonsinformasjon.",
    "duplicateModify": "Duplikat, må endres",
    "duplicateSave": "Lagre som nytt geoobjekt"
  },
  "warningsAndErrors": {
    "invalidCSV": "Feil under henting av elementer fra CSV. Kontroller om gyldig CSV-fil er valgt.",
    "noLayersWarning": "Ingen gyldige mållag er konfigurert. Sjekk konfigurasjonen.",
    "loadWarning": "Dette miniprogrammet krever Geoobjekttjeneste som datakilde. Konfigurer miniprogrammet for å definere en datakilde.",
    "saveError": "Feil ved lagring av geoobjekter.",
    "consumesCredits": "Dette verktøyet bruker credits når det brukes sammen med tjenesten ArcGIS Online World Geocoding",
    "noValue": "Velg et felt",
    "mappingTitle": "",
    "locationMappingComplete": "Lokasjonstilordning er fullført",
    "fieldMappingComplete": "Felttilordning er fullført",
    "settingsCleared": "Innstillingene fjernes.",
    "proceed": "Vil du fortsette?",
    "itemMoveMatch": "Element ble funnet og flyttet til listen over lokasjoner som er funnet",
    "itemMoveUnMatched": "Finner ikke elementet. Flyttet til listen over lokasjoner som ikke er funnet.",
    "itemWillBeLocated": "Elementet fjernes fra listen over duplikate lokasjoner.",
    "cannotLocate": "Finner ikke elementet. Kontroller lokasjonsinformasjonen.",
    "invalidMessage": "Ugyldig verdi.",
    "rangeMessage": "Verdien må ha færre enn ${num} tegn.",
    "locatorError": "Posisjonsindikatoren er ugyldig eller utilgjengelig.",
    "notConfigured": "poisjonsindikator er ikke konfigurert for gjeldende lokaliseringsinnstillinger",
    "noMoreLocators": "ingen ekstra posisjonsindikatorer er konfigurert"
  },
  "featureToolbar": {
    "locate": "Finn",
    "save": "Lagre post",
    "cancel": "Avbryt redigeringer",
    "cancelTitle": "Avbryt redigeringer",
    "cancelMessage": "Avbryt redigeringer i gjeldende post?"
  }
});