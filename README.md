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
- App.css, Global CSS och media queries för mobil, surfplatta och laptop
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
I Clock.tsx använder jag ClockProps som kräver city, country och timezone. TypeScript säkerställer att dessa alltid skickas in med rätt typ.

2. Autokomplettering i editor. 
När jag använder timezones.map() får jag direkt autokomplettering för .city, .country och .timezone, vilket minskar risken för stavfel.

3. Tidigare felupptäck
Om jag skickar fel typ eller glömmer en prop till Clock får jag fel redan vid utveckling, istället för att appen kraschar vid körning.

## Besktriv hur TypeScript transpileras till JavaScript i ditt projekt

När jag kör npm run dev, använder Vite och TypeScript-plugin esbuild för att:
- Läsa alla .ts och .tsx filer
- Kontrollera typer
- Transpilera koden till ren JavaScript som webbläsaren kan förstå.
- Slutresultatet blir optimerad JavaScript i dist-mappen som fungerar i moderna webbläsare
 
## Hur gick tillväga när du använde Git, samt när du testade att programmet faktiskt fungerar som det ska.

Jag är ganska bekvämt med att använda Git eftersom vi har använt det hos tidigare kurs. Men jag är fortfarande dålig på att göra commits ofta, eftersom jag är van vid att bara köra ctrl + s för att spara allt på vscode tills allt är färdigt och sedan commit det till Github. 

Testningen gick bra för mig, jag gjorde det genom webbläsaren via npm run dev, allt funkade som det skulle och när en bug uppstod fick jag en tydlig felmeddelande från vscode som visade mig vart felet var. Men att lösa felet var en annan sak, ibland visste jag vad felet va, det kunde ha varit en stavfel. I andra fall när min kod blir rörig och jag kan inte själv lösa felet, då fick jag googla upp om hjälp eller försöka be AI att kolla igenom min kod och identifiera vad jag har gjort för fel.

## Loggbok

### 2025-08-29

Började med att planera om individuella uppgiften. Skapade en To do list samt User Stories och en enkel skiss på hur hemsidan ska se ut. 

### 2025-09-01 till 2025-09-05

Jobbade med gruppuppgift, påbörjade med att skapa map och filstruktur.

### 2025-09-08

Skapade filer för en basic startsida.

### 2025-09-10

Testade gruppuppgift för grupp 3, började skapa components och hooks.

### 2025-09-11

Fixade CSS samt la till Analog Klockan från react-rapide och justera det till mitt projekt. Fixade responsive media screens för mobil, surfplattor och laptops

### 2025-09-12

La till min dokumentantion från Google Docs och Notes till min README, fixade de till Markdown style. Försökte göra Github Page, hittade ingen lösning till problemet och stängde ner den.
