# Dokumentation av arbetsprocessen

## Hur tänkte du när du skissade gränssnitt?

Länk till Figma skiss: https://www.figma.com/design/rgieUrUCacJZdZCnb8ejlq/World-Clock?node-id=0-1&t=j9GrBxa9UFhOkVSa-1

När jag skissade tänkte jag på hur appen ska vara användarvänlig samt enkelt att navigera.

Hos Navbaren har jag gjort:
- En länk till startsidan (Home)
- En länk till formulärsidan där man kan lägga till sin egen tidzon och spara det via localStorage (AddTimezone)

Hos Startsidan (Home) har jag gjort:
- En dropdown där man kan välja mellan tidzoner som redans finns eller tidzoner som man själv har lagt till i localStorage
- En tydlig rubrik som visar att det här appen är en "World Clock" app   
- En digital/analog klocka som visar tiden för den valda staden
- En text under tiden som visar vilken stad samt land som är vald
- En knapp för att byta mellan digital och analog klockan

Hos formulärsidan (AddTimezone) har jag gjort:
- En enkel formulär där det finns olika inputs:
- Land (vilken land tidzonen är från)
- Stad (vilken stad tidzonen är från)
- Tidzon (Här ska man lägga till en speciell text som ska fälja denna format: Kontinent/Stad, det gör så att man kan updatera klockan för den tidzonen)
- Bakgrundsbild (En URL länk för en bakgrundsbild, kan vara för staden men man kan lägga till vad som helst om man vill)
- Till sist finns det en knapp som sparar alla input data till localStorage

## Hur har du valt att dela upp din applikation?

Jag har uppdelat mitt applikation genom att skapa och sortera alla filer i olika folders.

Hos components foldern finns:
- Clock.tsx (det är en klocka komponent som visar en digital klocka för den valda staden)
- Navbar.tsx (det här är navbaren komponenten, här ligger länkarna til startsidan och formulärsidan)
- TimezoneForm.tsx (En komponent som skapar formulären till att lägga till sin egen tidzon och spara det i sin localStorage)

Hos css foldern finns:
- AddTimezone.css (CSS för komponenter i formulärsidan)
- App.css (CSS för allmänt grejer och media screens för mobil, surfplatta samt laptopskärmar)
- Home.css (CSS för komponenter i startsidan)

Hos hooks foldern finns:
- useBackground.tsx (En custom hook för att ändra sidans bakgrundsbild baserat på vald stad)
- useClockType.tsx (En custom hook för att hålla reda på om användaren använder analog eller digital klocka)
- useLocalStorage.tsx (En custom hook för att hantera läsningar och skrivning til localStorage)
- use Timezones.tsx (En custom hook för att uppdatera och hålla koll på bilka tidzoner som är tillgängliga samt vilken som är vald)

Hos interfaces foldern finns:
- AnalogClock.ts (tagen från react-rapide, en interface för analog klockan)
- timezone.ts (En interface för tidzoner)

Hos json foldern finns:
- timezones.json (En json fil som håller data för tidzoner)

hos pages foldern finns: 
- AddTimezone.tsx (Formulärsidan)
- Home.tsx (Startsidan)

Hos utils foldern finns:
- AnalogClock.tsx (tagen från react-rapide, komponent för analog klockan)
- AnalogSettings.tsx (tagen från react-rapide, inställningar för analog klockan)
- clockAnimation.ts (tagen från react-rapide, animation för analog klockan)

Jag har valt att: 
1. Dela upp komponenterna för göra det mer tydligare och mer skalbar.
2. Lägga till logik i custom hooks för att hålla UI-komponenter fokuserade på rendering. 
3. Ha interfaces i seperata filer för att håll koden ren och möjliggöra återanvändning.

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