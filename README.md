# Dokumentation av arbetsprocessen

## Hur tänkte du när du skissade gränssnitt?

Länk till Figma skiss: https://www.figma.com/design/rgieUrUCacJZdZCnb8ejlq/World-Clock?node-id=0-1&t=j9GrBxa9UFhOkVSa-1

När jag skissade gränssnittet fokuserade jag på att göra appen enkel att använda och lätt att navigera.

Hos Navbaren har jag gjort:
- En länk till startsidan (Home)
- En länk till formulärsidan där man kan lägga till egena tidzoner och spara dem via localStorage (AddTimezone)

Hos Startsidan (Home) har jag gjort:
- En dropdown där man kan välja mellan fördefinierade tidszoner eller de som sparats i localStorage
- En tydlig rubrik som visar att det här appen är en "World Clock" app   
- En digital eller analog klocka som visar tiden för den valda staden
- En text under klockan som visar vilken stad samt land som är vald
- En knapp som låter användaren att växla mellan digital och analog klockan

Hos formulärsidan (AddTimezone) har jag gjort:
- En enkel formulär där det finns olika inputs:
- Land (vilken land tidzonen är från)
- Stad (vilken stad tidzonen är från)
- Tidzon (ska följa formatet Kontinent/Stad, t.ex. Europe/Stockholm, vilket gör att klockan kan uppdateras korrekt)
- Bakgrundsbild (URL till en bakgrundsbild, kan vara en bild på staden eller valfri bild)
- Till sist finns det en knapp som sparar alla input data till localStorage

## Hur har du valt att dela upp din applikation?

Jag har strukturerat projektet genom att lägga filer i separata mappar baserat på deras syfte.

components/

- Clock.tsx,  Visar en digital klocka för vald stad
- Navbar.tsx, Håller länkarna till startsidan och formulärsidan
- TimezoneForm.tsx, Skapar formuläret för att lägga till egna tidszoner och spara dem i localStorage

css/

- AddTimezone.css, CSS för formulärsidan
- App.css, Global CSS och media queries för mobil, surfplatta och desktop
- Home.css, CSS för startsidan

hooks/

- useBackground.tsx, Custom hook för att uppdatera sidans bakgrund baserat på vald stad
- useClockType.tsx, Custom hook som hanterar om klockan är digital eller analog
- useLocalStorage.tsx, Custom hook som hanterar läsning/skrivning från localStorage
- useTimezones.tsx, Custom hook som håller koll på tillgängliga tidszoner och vilken som är vald

interfaces/

- AnalogClock.ts, Typdefinitioner för analogklockans inställningar
- timezone.ts, Typdefinition för en tidszon (stad, land, timezone, bakgrund)

json/

- timezones.json, Lista med fördefinierade tidszoner

pages/

- AddTimezone.tsx, Formulärsidan
- Home.tsx, Startsidan

utils/

- AnalogClock.tsx, Analog klockkomponent (importerad från react-rapide)
- AnalogSettings.tsx, Inställningar för analog klocka
- clockAnimation.ts, Animationer för analog klocka

Motivering:

- Att dela upp komponenterna gör det enklare att hålla koden ren och underhållbar
- Custom hooks används för att separera logik från presentation, vilket gör komponenterna mer fokuserade
- Interfaces ligger i egna filer för att göra dem återanvändbara och förhindra cirkulära beroenden

## Förklara minst 3 ställen där TypeScript ger fördelar jämfört med Javascriåt i din kod

1. Typsäkerhet. 
Som hos min Clock komponent använder den sig av Clockprops där det måste innehålla city, country och timezone. Typescript ser till att dessa alltid finns och är av rätt typ.

2. Autokomplettering i editor. 
När jag använder till exempel timezones.map, får jag direkt förslag på .city, .country, .timezone. Vilket minsar risken för stavfel.

3. Tidigare felupptäck
Om jag skulle försöka skicka felatkigt prop till Clock eller fel typ till useState, får jag fel redan av utvecklingfasen istället för att få en runtime-buggar 

## Besktriv hur TypeScript transpileras till JavaScript i ditt projekt

När jag kör npm run dev, använder Vite och TypeScript-plugin esbuild för att:
- Läsa alla .ts och .tsx filer
- Kontrollera typer
- Transpilera koden till ren JavaScript som webbläsaren kan förstå.
- Slutresultatet blir optimerad JavaScript i dist-mappen som fungerar i moderna webbläsare