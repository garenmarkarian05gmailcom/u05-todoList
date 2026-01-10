https://super-beignet-afa5e3.netlify.app/


## Projektöversikt

Detta projekt är en enkel Todo List-applikation byggd med TypeScript, HTML och CSS. Applikationen gör det möjligt för användaren att lägga till, visa, redigera, filtrera, markera som klar och ta bort todos. Todos sparas lokalt med hjälp av `localStorage`, vilket innebär att informationen finns kvar även efter att sidan laddas om.

Projektet är uppdelat i flera mappar och filer, såsom `types`, `services`, `utils` och `styles`. Denna struktur syftar till att separera ansvar och göra koden mer organiserad och lättare att underhålla.

---

## Styrkor i projektet

En av de största styrkorna i projektet är användningen av TypeScript. Genom att definiera en tydlig `Todo`-typ blir det klart hur en todo ska vara uppbyggd, vilket minskar risken för fel och gör koden mer konsekvent. TypeScript hjälper också till att fånga buggar tidigt genom typkontroll, vilket ökar kodens stabilitet.

Projektet är även uppdelat på ett bra sätt där olika delar av funktionaliteten har egna filer. Exempelvis hanteras lagring i en separat `storage`-fil och ID-generering i en egen utility-fil. Detta gör koden mer modulär och lättare att förstå.

Funktionellt innehåller projektet flera viktiga delar som är vanliga i verkliga applikationer, såsom sök/filter, redigering av befintliga objekt och persistent lagring. Koden är tydlig, använder beskrivande variabelnamn och är relativt lätt att följa.

---

## Svårigheter och brister

Den största svårigheten i projektet var att hålla filerna och mappstrukturen korrekt. TypeScript är känsligt för felaktiga importvägar, och om filer inte ligger exakt rätt eller om en sökväg är fel så slutar hela projektet att fungera. Detta gjorde felsökningen tidskrävande och det tog lång tid att identifiera och rätta till problemen kopplade till filstruktur och imports.

Detta visade hur viktigt det är att ha ordning på projektets struktur, särskilt i TypeScript-projekt där många filer samverkar.

---

## Lättare delar av arbetet

En del som upplevdes som relativt enkel var att skriva TypeScript-koden eftersom den till stor del liknar vanlig JavaScript. Syntaxen är nästan densamma, och i många fall handlar det bara om att lägga till typer. Detta gjorde övergången från JavaScript till TypeScript smidig och hjälpte till att snabbare förstå och skriva koden.

---





## Vad är TypeScript och varför använder man det istället för vanlig JavaScript?

TypeScript är ett programmeringsspråk som är en utbyggnad av JavaScript och som kompileras till vanlig JavaScript. Den största skillnaden är att TypeScript är statiskt typat, vilket innebär att man kan definiera typer för variabler, funktioner och objekt redan vid utveckling.

I vanlig JavaScript upptäcks många fel först när applikationen körs. Med TypeScript kan dessa fel istället fångas tidigt, direkt i editorn eller vid kompilering. Detta leder till färre buggar, stabilare kod och snabbare utveckling.

TypeScript ger även bättre stöd i utvecklingsverktyg, som autokomplettering, tydligare felmeddelanden och säkrare refaktorering. Detta är särskilt värdefullt i större projekt eller när flera utvecklare arbetar tillsammans, eftersom koden blir mer lättläst, konsekvent och underhållbar.

---

## Skillnaden mellan `unknown`, `any` och en specifik typ som `string`

I TypeScript finns olika nivåer av typkontroll beroende på vilken typ som används.

### `any`
`any` tillåter vilket värde som helst och stänger i princip av TypeScripts typkontroll. Man kan göra vad som helst med en variabel av typen `any` utan att få några fel. Detta bör undvikas eftersom det tar bort alla säkerhetsfördelar med TypeScript. `any` kan användas tillfälligt, till exempel vid migrering av gammal JavaScript-kod.

### `unknown`
`unknown` kan, precis som `any`, innehålla vilket värde som helst. Skillnaden är att TypeScript kräver att man först kontrollerar typen innan man använder värdet. Detta gör `unknown` mycket säkrare och tvingar utvecklaren att hantera data korrekt, till exempel genom `typeof`-kontroller. `unknown` är lämpligt vid hantering av osäker data, som användarinmatning eller API-svar.

### `string` (specifik typ)
En specifik typ som `string` anger exakt vilken typ av värde som är tillåtet. TypeScript säkerställer då att variabeln alltid används korrekt. Detta är den rekommenderade typen i de flesta fall eftersom den ger maximal säkerhet och tydlighet.

**Sammanfattning:**
- `string`: används när typen är känd.
- `unknown`: används när typen är okänd men måste kontrolleras.
- `any`: bör undvikas och endast användas i undantagsfall.

---

## Syftet med `types` och `interfaces` i TypeScript

`types` och `interfaces` används för att definiera strukturen på data, till exempel hur ett objekt ska se ut eller vilka typer en funktion tar emot och returnerar. De fungerar som ett kontrakt mellan olika delar av koden.

I större projekt är detta särskilt viktigt eftersom många filer och komponenter samverkar. Genom att använda tydliga typer och interfaces minskar risken för fel och missförstånd. Om en datamodell ändras kan TypeScript direkt visa vilka delar av koden som påverkas.

De förbättrar även kodens läsbarhet och fungerar som levande dokumentation. Nya utvecklare kan snabbt förstå hur systemet är uppbyggt utan att behöva läsa igenom all logik.

Sammanfattningsvis är `types` och `interfaces` avgörande för att bygga skalbara, stabila och lättunderhållna TypeScript-projekt.

