# Programmeerimine II loengutes tehtu

#  Alustuseks
* API - Application Programming Interface
  * Liides, mille kaudu süsteemid saavad omavahel infot jagada
  * Backend - frontend
  * Backend - backend
  * Andmed, mida vahetatakse on sageli JSON kujul
* NodeJS https://nodejs.org/en/
  * Serveris töötav javascript
  * Tasuta
  * Lihtne alustada
  * Asünkroonne ja sündmustepõhine
  * Ühelõimeline, kuid hästi skaleeruv
  * https://www.tutorialspoint.com/nodejs/nodejs_introduction.htm
* NPM - Node Package Manager
  * Online repositoorium Node.js projektide jaoks http://npmjs.org/
  * Käsurealt kasutatav utiliit nimetatud repositooriumiga suhtlemiseks (pakkide paigaldamiseks, versioonide ja sõltuvuste haldamiseks)
  * NPM-i käsud https://docs.npmjs.com/cli-documentation/cli
  * package.json - fail, mis sisaldab projekti kohta informatsiooni (näiteks projekti nimi, sõltuvused jne) https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/
  * npm init - uue package.json faili loomine (npm init -y loob package.json faili ilma küsimusi esitamata)
  * npm install - npm paki paigaldamine (--save-dev võtme lisamine lisab paki arenduse sõltuvusena - seda pakki on vaja ainult arendamiseks nt nodemon) Samuti projekti sõltuvuste paigaldamiseks (Näiteks laete githubist alla node projekti, siis ei ole sellega kaasas sõltuvusi, vaid need on kirjeldatud package.json failis ja seetõttu on vaja käivitada käsk npm install kaustas, kus asub package.json fail)
  * node_modules - kaust, kuhu paigaldatakse kõik npm pakid ja sõltuvused (seda kausta ei ole vaja projektiga kuhugi üles laadida, see kaust tekitatakse uuesti vastavalt package.json failile)
* Express
  * Väga populaarne Node.js veebirakenduste raamistik https://expressjs.com/
* Postman - API testimise platvorm https://www.postman.com/
* JSON - JavaScript Object Notation https://www.json.org/json-en.html
  * Lihtne ja loetav andmevahetusformaat
  * { "key": "value" }
* HTTP request meetodid https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
  * GET - määratud ressursi pärimine (näiteks GET /api/users tagastab kasutajate nimekirja)
  * POST - määratud ressursile üksuse edastamine (näiteks POST /api/users päringuga saadetakse kasutaja andmed uue kasutaja lisamiseks andmebaasi)
  * PUT - määratud ressursile üksuse edastamine olemasoleva üksuse muutmiseks (näiteks PUT /api/users päringuga saadetakse kaasa andmed olemasoleva kasutaja andmete muutmiseks)
  * DELETE - kustutab määratud ressursi (näiteks DELETE /api/users/:id kustutab kasutaja määratud id-ga) (Loengus saatsime delete requestiga id kaasa päringu bodys mitte parameetrina, nagu siin näites)
* CRUD API

Name | Http method | Image
-----|--------|------
C - Create | POST | ![Create](docs/images/CREATE.jpg)
R - Read | GET | ![Read](docs/images/READ.jpg)
U - Update | PUT | ![Put](docs/images/UPDATE.jpg)
D - Delete | DELETE | ![Delete](docs/images/DELETE.jpg)

* HTTP Respons koodid https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
  * **Edukad:**
  * 200 - OK
  * 201 - Created
  * **Vead**
  * 400 - Bad request
  * 401 - Unauthorized
  * 403 - Forbidden
  * 404 - Not Found
  * **Serveri vead**
  * 500 - Internal Server Error
  
* Selleks, et alustada projekti nii, et see oleks kohe alguses Githubis, siis soovitan teha nii:
 1. Logi Githubi sisse
 1. Vajuta Repositories nuppu
 1. Vajuta rohelist New nuppu
 1. Pane repositooriumile nimi (Repository name)
 1. Vali Private või Public
 1. Pane linnuke Add a README file ette
 1. Pane linnuke Add .gitignore ette
 1. Vali .gitignore template: Node
 1. Vajuta Create Repository nuppu
 1. Avanenud lehel vajuta rohelist Code nuppu ja kopeeri sealt repositooriumi link (näit: https://github.com/mrttlu/test.git)
 1. Mine oma arvutis terminalis (command promptis) kausta, kuhu soovid projekti kausta tekitada
 1. Kirjuta: git clone repositooriumi link (git clone https://github.com/mrttlu/test.git) ja vajuta enter klahvi
 1. Võid loodud kausta hakata koodi kirjutama 
 
* Kirjutatud koodi githubi laadimine:
  * terminalis (command promptis) kirjuta:
  * git add .
  * git commit -m 'Kirjeldus selle kohta, mida vahepeal teinud oled vms'
  * git push
  
* .gitignore fail - fail, milles kirjeldatakse failid ja kaustad, mida ei soovita üles laadida koodihalduskeskkonda
  * Node projektide puhul ei ole vaja üles laadida node_modules kausta, kuna see on tihti üsna suuremahuline ja seda on lihtne uuesti taasluua (npm install)
  * Githubi poolt loodud node .gitignore faili näidis: https://github.com/mrttlu/esimene/blob/main/.gitignore

* Career Karma .gitignore Files: A Guide for Beginners: https://careerkarma.com/blog/gitignore/

# Esimese loengu teemad (16. oktoober)
* Sissejuhatus ainesse
* Github
* Nodejs
* Npm
* Express
* Postman
* Json
* Projekti tutvustus ja alustamine.

## Esimese loengu slaidid
https://github.com/mrttlu/esimene/blob/main/docs/1.%20loeng.pdf

## Esimeses loengus tegime:
* Alustasime lihtsa Node.js API-ga kasutades express-i
* Tegime /api/ping endpoindi, mille abil saame kontrollida, kas API töötab ja mis annab vastuseks 200 - OK response ja JSON-i infoga: { success: true }
* Tegime kasutajate endpoindid:
  * GET /api/users - tagastab kõik kasutajad
  * GET /api/users/:id - tagastab kasutaja vastavalt id-le
  * POST /api/users - saab luua uue kasutaja - vajalikud väljad: firstName, lastName, email, password. Tagastab loodud kasutaja.
  * PUT /api/users - muudab kasutaja andmed - vajalikud väljad: id ja üks muudetavatest väljadest (firstName, lastName, email või password). Tagastab muudetud kasutaja andmed
  * DELETE /api/users - kustutab kasutaja - vajalik väli: id. Tagastab vastuseks 200 - OK response ja JSON-i infoga: { success: true }
  * Esimese loengu kood: https://github.com/mrttlu/esimene/tree/dc73fd29aa3c5a5d8c4d5dc1f78bc60cbeb78810
  
## Esimene kodutöö - tähtaeg enne järgmist loengut (31.10.2020)
1. Mõelda välja projekt, millel oleks vaja vähemalt 3 - 4 endpointi. Näiteks koduste tööde üle arvestamise API, mille endpoindid oleks õppejõud, õppeaine, kodune töö vms. Eriti hea ja soovitav oleks variant, kus saate seda projekti siduda mõne teise aine kodutööga.
1. Luua vastavalt oma projektile API, mis sisaldaks vajalikke endpointe koos võimalusega igast endpoindist infot välja pärida, luua, muuta ja kustutada, nii nagu loengus näidise tegime.
1. Teha minimaalne kontroll endpointidele saadetava info kontrollimiseks - kas on olemas, kas vastab mingitele nõuetele jne.
1. Hoia oma kood alusest peale Githubis - kindlasti kasuta ka .gitignore (Node template) faili.
1. Jaga oma projekti Githubi linki õppejõuga.
1. Ole valmis järgmises loengus oma tehtut tutvustama

## Esimese loengu lõpetuseks:

#### Tähelepanekud:
* Postmanist body saatmisel (POST, PUT, DELETE päringute tegemisel) märgi 'raw' ja siis 'JSON'
* Postmanist JSON-i saatmisel peavad olema nii key-d, kui valued olema topeltjutumärkide vahel: { "fistName": "Juku" }
* Praegu kasutame andmebaasi asemel lihtsalt massiive, et alguses oleks lihtsam - ei ole ideaalne lahendus, kuid testimiseks kõlbab.
* Ternary operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
* Kui kontrollid näiteks id väärtust, kas see on tõene või väär, siis 0 väärtuse puhul loetakse see vääraks.
* Me teeme ainult API-t, me ei tee frontendi :)

#### Esimeses loengus viidatud lingid
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
* https://nodejs.org/en/
* https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/
* https://expressjs.com/
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
* https://www.json.org/json-en.html

# Teise loengu teemad (31. oktoober)
* Kodutööde esitlemine
  * Mida mina kodutööna tegin?
  * Minu idee on teha kodutööde üle arvestuse pidamise API, mis sisaldab järgmisi endpointe:
  1. users - kasutajad (id, firstName, lastName, email, password)
  1. lecturers - õppejõud/õpetajad (id, firstName, lastName, email, userId)
  1. subjects - õppeaine (id, name, lecturerId, userId)
  1. homeworks - kodused tööd (id, description, dueDate, subjectId, userId)
  * Igale endpoindile saab saata päringuid nii ressursi kuvamiseks, loomiseks, muutmiseks, kui ka kustutamiseks.
  * Iga ressurss sisaldab userId-d, sest kui API-l on erinevad kasutajad, siis userId kaudu saab omavahel siduda ressursi ja kasutaja (igal kasutajal oma ressursid).
  * Minu kodutöö: https://github.com/mrttlu/esimene/tree/20ab360f2e42f77c3a1c3d9804953ebbecd87e94

## Teise loengu slaidid
https://github.com/mrttlu/esimene/blob/main/docs/2.%20loeng.pdf

* Moodulid
  * Moodulite abil on võimalik jagada kood eraldi failidesse ja vajaduse korral neid importida.
  * Mooduli tegemiseks tuleb selle sisu eksportida, näiteks:
  ```javascript
  // defineerime konfiguratsiooni objekti
  const config = {
    port: 3000,
    databasePassword: 'secret'
  };
  // Ekspordime selle objekti - ilma selleta selle faili sisu mujale importida ei saa!
  module.exports = config;
  ```
  * Teises failis saab seda faili nüüd kasutada nii:
  ```javascript
  // Impordime config faili sisu ja paneme selle myConfig konstanti
  const myConfig = require('./config'); // .js laiendit ei ole vaja kirjutada, Node saab sellest ise aru

  // Näitame konsoolis config moodulist imporditud pordi numbrit
  console.log(myConfig.port);
  ```
  * Samast kataloogist importides pannakse faili nime ette './', näiteks: const myConfig = require('./config');
  * Kataloogist, mis on samm ülevalpool pannakse nime ette '../', näiteks const myConfig = require('../config');
* API struktuur
  * Controller
  * Service
  * Routes
  * Helpers

## Milleks üldse koodi struktureerida?
* Praeguseks on API-l kokku 4 endpointi, milles saab teha päringuid andmete lugemiseks, kirjutamiseks, muutmiseks ja kustutamiseks. Programmikoodi on kokku 640 rida, kusjuures loogikat ja kontrolle on tehtud väga minimaalselt. Mis siis, kui endpointe oleks rohkem? näiteks 20 või 40 vi 100? Kokkuvõttes läheks kood väga raskelt loetavaks. Struktureerimisega saame jagada koodi vastavalt selle eesmärgile väiksemateks tükkideks, mis annab koodile parema loetavuse, taaskasutatavuse ja ka testimise.
* Algselt näeb sellest API-st päringu tegemine välja selliselt:
![API sphagetti](docs/images/spaghetti.jpeg)
* Struktureerimise eesmärk on jagada kood tükkideks vastavalt ülesannetele.
  * Kui API-le tuleb päring, siis:
  * Router saadab päringu vastavale kontrollerile
  * Kontroller teeb:
    * Esmase kontrolli (kas vajalikud andmed on olemas)
    * Vaatab, mida on vaja vastuse tegemiseks
    * Küsib vastavatelt teenustelt vajalikud andmed
    * Moodustab vastuse kliendile
    * Saadab vastuse kliendile tagasi
    * Vajadusel kirjutab logisse, jms.
  * Teenused teevad päringuid andmebaasidesse ja saadavad vastuse kontrollerile
  * Lisaks võivad olla veel erinevad abiprogrammid, middlewared jms, mida meie koodis hetkel veel ei ole
* Teises loengus tehtud struktuuri tagajärjel näeb kasutaja pärimine välja selline (hetkel meil küll puuduv teenuses kontroll selle kohta, kas selline kasutaja eksisteerib):
![API Controller and service](docs/images/ControllerAndService.jpeg)

## Teises loengus tegime
* Tegime controllerite ja teenuste jaoks eraldi kaustad
  * /api/controllers
  * /api/services
* Liigutasime index.js alt kõik mis puudutas kasutajaid /api/controllers/usersController.js faili
* Liigutasime usersController.js alt kõik mis puudutas kasutajate tegevusi 'andmebaasiga' /api/services/usersService.js faili
* Kood peale teist loengut: https://github.com/mrttlu/esimene/tree/c22fec22b5c1da5e676226e0c6b4909c796964b1

## Kodutöö
* Teha iga ressursi jaoks oma controller ja service
* Kõik ressurssidega seotud tegevused jagada controllerite ja service-te alla nii, nagu loengus tegime kasutajatega

#### Tähelepanekud
* Tuleb andmemudel korralikult läbi mõelda - mis on millega seotud
* Endpointide juures peaks hoidma ühtset stiili - kui on endpoint /api/users siis peaks siit saama kätte konkreetselt kasutajat puudutavat informatsiooni. Kui on vaja näiteks saada kätte ühe kasutajaga seotud muud andmed - näiteks kõik kodutööd, mis sellel kasutajal on, siis saab teha sellise endpoindi: /api/users/:id/homeworks , kus id on kasutaja id. Siis ei teki segadust, mida see id kusagil parasjagu tähendab.
* Giti kasutamise mured
  * Kuidas oma olemasolev projekt git-i üles laadida - https://docs.github.com/en/free-pro-team@latest/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line
  * Git cheat sheet - https://education.github.com/git-cheat-sheet-education.pdf
  * Traversy Media 33 minutit pikk video sellest, mis on git ja kuidas sellega alustada jms. - https://www.youtube.com/watch?v=SWYqp7iY_Tc
  * Teiste ja oma projekti saab oma arvutisse kloonida käsuga: git clone repositooriumi link (näiteks git clone https://github.com/mrttlu/esimene.git)
  * Giti repositooriumi lingi saab rohelise Code nupu alt:
  ![Giti repositooriumi link](docs/images/gitAadress.png)
  * Peale kloonimist pead kindlasti minema kloonitud repositooriumi kausta (näiteks cd esimene)
  * Kui oled repo alla klooninud, siis enne kui selle käivitada saad, tuleb sõltuvused alla laadida käsuga npm install (seda tuleb teha selles kaustas, kus on fail package.json)
* Node programmi saab käivitada käsuga node failinimi.js (meil siiani node index.js)
* Kui ei taha peale igat muudatust programmi seisma ja uuesti käima panna, võib kasutada sellist programmi, nagu nodemon (https://nodemon.io/), mis saab ise aru, kui failides tehakse muudatusi ja peale salvestamist paneb ise automaatselt programmi korra kinni ja kohe uuesti käima. Selleks tuleb see kõigepealt paigaldada (npm install -g nodemon (linuxi ja maci all tahab võibolla ka sudo käsku ette - sudo npm install -g nodemon)) ja peale seda käivitada node programm käsuga nodemon failinimi.js (nodemon index.js).


# Kolmanda loengu teemad (14. november)
* Kodutööde esitlemine
* Parooli hashimine
  * Bcrypt https://www.npmjs.com/package/bcrypt
* Middleware:
  * Kirjutamine: https://expressjs.com/en/guide/writing-middleware.html
  * Kasutamine: https://expressjs.com/en/guide/using-middleware.html
  * Milleks middleware'i kasutada?
  * Järjekord on oluline
* Autentimine ja autoriseerimine
  * JSON Web Token https://www.npmjs.com/package/jsonwebtoken

## Kolmandas loengus tegime
* Parooli hashimine
Praegu on meil 'andmebaasis' kasutaja parool salvestatud lihtsalt tavalise stringina. Kui pärime kasutajate andmeid, on andmete hulgas parool kenasti näha ja loetav. See ei ole hea praktika. Paroolid peavad olema andmebaasis salvestatud sellisel kujul, et neid ei oleks võimalik sellisel kujul lugeda, et on aru saada, mis parooliga tegemist on. Selleks kasutatakse parooli hashimist.
Nodes saame kasutada sellist npm pakki, nagu bcrypt (https://www.npmjs.com/package/bcrypt). Bcrypt on funktsioon andmete krüpteerimiseks. Sellest, mis bcrypt on ja kuidas see täpsemalt toimib, saate lugeda näiteks Dan Arias'e artiklist siin: https://auth0.com/blog/hashing-in-action-understanding-bcrypt/
Meie API-s peaks bcrypti kasutamine käima nii, et kui me loome uue kasutaja, siis enne, kui kasutaja andmed 'andmebaasi' salvestatakse, hashitakse parool ära ja tavalise stringi asemel salvestatakse 'andmebaasi' hashitud parool.
Selle jaoks lisame oma API-le uue teenuse 'hashService.js' ja sinna lisame kaks funktsiooni, millest üks on parooli hashimiseks ja teine on hiljem parooli võrdlemiseks hashiga.
Lisaks paigaldame bcrypt'i käsuga npm install bcrypt
hashService.js fail näeb välja selline:
```javascript
// Impordime bcrypt'i
const bcrypt = require('bcrypt');
// Järgnev muutuja määrab ära, kui palju peab tööd tegema parooli hashimiseks (mida suurem number, seda rohkem on vaja vaeva näha)
const saltRounds = 10;
// Defineerime teenuse objekti
const hashService = {};

// Funktsioon parooli hashimiseks - funktsioon tagastab hashitud parooli
hashService.hash = (password) => {
  const hash = bcrypt.hash(password, saltRounds);
  return hash;
}

// Funktsioon parooli võrdlemiseks hashiga - funktsioon tagastab true või false vastavalt võrdlemise tulemusele
hashService.compare = (password, hash) => {
  const match = bcrypt.compare(password, hash);
  return match;
}
// Ekspordime selle objekti, et saaksime seda teenust mujal kasutada
module.exports = hashService;
```
Kuna parooli hashimine on tegevus, mis võtab aega, siis node eripärast lähtudes (asünkroonsus) võib juhtuda olukord, kus parooli hashimine võtab aega nii kaua, et koodi täitmine läheb enne edasi, kui parool hashitud saab. Seetõttu peame ütlema programmi koodile, et ära enne järgmise koodirea juurde liigu, kui hashimine on tehtud. Selleks saame kasutada async/await funktsionaalsust.
```javascript
// Kui teame, et mingi funktsiooni sees toimub aeganõudev tegevus, siis peame kasutama selle funktsiooni deklareerimise juures async märksõna
const timeConsumingFunction = async () => {
  // Kui tahame ära oodata vastuse, enne kui kood edasi läheb, kasutame await märksõna
  const result = await someFunction();
  // Vastus tagastatakse alles siis, kui result on käes
  return result;
}
```
Async/await muutub eriti oluliseks siis, kui hakkame oma API-t andmebaasiga liidestama, sest andmete pärimine võtab tihtipeale aega.

Funktsioonid hashService faili sees tuleb teha selliseks:
```javascript

// Funktsioon parooli hashimiseks - funktsioon tagastab hashitud parooli
hashService.hash = async (password) => {
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
}

// Funktsioon parooli võrdlemiseks hashiga - funktsioon tagastab true või false vastavalt võrdlemise tulemusele
hashService.compare = async (password, hash) => {
  const match = await bcrypt.compare(password, hash);
  return match;
}
```
Meeles peab seejuures pidama seda, et async/await märksõnu on vaja kasutada nüüd ka nendes funktsioonides, mis hashimise funktsioone välja kutsuma hakkavad (usersService ja usersController)

Nüüd, kui meil on olemas teenud, mis oskab parooli hashida, saame seda kasutada kasutaja andmete salvestamisel.
Andmete salvestamisega tegeleb usersService funktsioon 'create'
```javascript
// Hashsimise teenuse kasutamiseks peame selle kõigepealt importima
const hashService = require('./hashService');

// Kasutaja lisamise funktsioon
usersService.create = async (user) => {
  user.id = users.length;
  // Hashime loodava kasutaja parooli ja asendame selle kasutaja objektis saadud hashiga
  user.password = await hashService.hash(user.password);
  // Lisame kasutaja 'andmebaasi'
  users.push(user);

  // Tagastame kasutaja
  return user;
}
```
Tähelepanu peab pöörama sellele, et kuna peame ootama ära hashimise teenusest tagastatava tulemuse, siis peame ka siin kasutama async/await'i

Samuti peab lisama async/await ka usersControllerisse, mis eelneva teenuse välja kutsub:
```javascript
usersController.create = async (req, res) => {
  // Uue kasutaja loomine
  const newUser = await usersService.create(user);
}
```
* Parooli hashimise projekti lisamine on näha siin videos: https://youtu.be/5AeA-T6EcLE

* Middleware
  * Mis on middleware?
  Middleware funktsioonid on funktsioonid, millel on juurdepääs päringuobjektile (req), vastuseobjektile (res) ja järgmisele funktsioonile rakenduse päringu-vastuse tsüklis. Next funktsioon on Express-ruuteri funktsioon, mis käivitamisel käivitab middleware praeguse middleware’i järel.
  * Middleware saab:
    * Käivitada koodi
    * Teha muudatusi request ja response objektides
    * Lõpetada request-response tsüklit
    * Kutsuda välja järjekorrast järgmine middleware
  * Meeles peab pidama, et kui middleware ei lõpeta päringu-vastuse tsüklit (näiteks res.status(200).json…), siis peab middleware kutsuma välja next() funktsiooni, muidu jääb rakendus ‘rippuma’

  Logimise middleware näide:
  ```javascript
  // Funktsioon päringute logimiseks konsooli
  const logger = (req, res, next) => {
    // Väljastatakse konsooli päringu tegemise kuupäev ja päringu aadress (endpoint, millele päring tehti)
    console.log(new Date(), req.url);
    // Next funktsiooni käivitamine annab järjekorra üle järgmisele middleware'le
    next();
  }
  ```
  Selleks, et middleware't kasutada saaks, peab selle registreerima, seejuures on oluline see, et seda tuleb teha enne route'de defineerimist.
  ```javascript
  app.use(logger);

  app.get('/api/users', usersService.read);
  ```
  Skeemi peal näeb middleware kasutamine välja nii:
  ![Middleware](docs/images/Middleware.jpeg)
* Middleware kasutamine on näha siin videos: https://youtu.be/85WCggg575A
## Mida me ei jõudnud kolmandas loengus teha
* JSON Web Token - https://jwt.io/introduction/
  * JSON WEB TOKEN (JWT) on avatud standard, mis määratleb kompaktse ja iseseisva viisi teabe turvaliseks edastamiseks osapoolte vahel JSON-objektina. Seda teavet saab kontrollida ja usaldada, kuna see on digitaalselt allkirjastatud. JWT-sid saab allkirjastada parooliga või avaliku / privaatse võtmepaari abil RSA või ECDSA abil.
  * JWT struktuur
    * Header
      * Päis koosneb tavaliselt kahest osast: loa tüübist, milleks on JWT, ja kasutatavast allkirjastamise algoritmist, näiteks HMAC SHA256 või RSA.
    * Payload
      * Tokeni teine osa on kasulik koormus, mis sisaldab nõudeid.
    * Signature
      * Allkirjaosa loomiseks peate võtma kodeeritud päise, kodeeritud kasuliku koormuse, parooli, päises määratud algoritmi ja selle allkirjastama.
  * Millal JWT-d kasutada?
    * Autoriseerimine: see on kõige tavalisem stsenaarium JWT kasutamiseks. Kui kasutaja on sisse logitud, sisaldab iga järgmine taotlus JWT-d, mis võimaldab kasutajal juurde pääseda selle märgiga lubatud marsruutidele, teenustele ja ressurssidele.
    * Teabevahetus: JSON-i veebimärgid on hea viis turvaliselt osapoolte vahel teavet edastada. Kuna JWT-sid saab allkirjastada - näiteks kasutades avaliku / privaatse võtme paare -, võite olla kindel, et saatjad on need, kes nad end ütlevad. Lisaks, kuna allkiri arvutatakse päise ja kasuliku koormuse abil, saate ka kontrollida, kas sisu ei ole muudetud

  * Selleks, et saaksime API-s JWT-d kasutada, peame tegema järgmisi tegevusi:
    * Lisama oma API-le sisselogimise võimaluse
      * Kontroller: https://github.com/mrttlu/esimene/blob/main/api/controllers/authController.js
      * Teenus: https://github.com/mrttlu/esimene/blob/main/api/services/authService.js
      * Route:
      ```javascript
      app.post('/api/login', authController.login);
      ```
    * Sisse logimiseks saadab klient API-le oma kasutajanime (siin kasutusel e-mail) ja parooli.
    * API kontrollib, kas sellise e-mailiga kasutaja on olemas ja kas kasutaja poolt saadetud parool klapib andmebaasis oleva hashiga.
      ```javascript
      const user = await usersService.readByEmail(email);
      if (user) {
        const match = await hashService.compare(password, user.password);
        ...
      ```
      * Selleks kasutatakse Bcrypti match funktsiooni, mis võtab parooli ja võrdleb seda hashiga.
      ```javascript
      hashService.compare = async (password, hash) => {
        const match = await bcrypt.compare(password, hash);
        return match;
      }
      ```
      * Kui e-mail või parool ei sobi, saadetakse kliendile veateade.
    * Kui e-mail ja parool olid korrektsed, siis luuakse JWT token, mille payloadi lisatakse kasutaja andmebaasi id (selle abil saame hiljem andmebaasist päringuid teha) - token luuakse parooli abil, mida teab ainult API.
      ```javascript
      const token = jwt.sign({ id: user.id }, config.jwtSecret, { expiresIn: 60 * 60 });
      ```
    * Token saadetakse tagasi kliendile, et klient saaks selle lisada edaspidi päringuid tehes headerisse Authorization Bearer tokenina.
      ```javascript
      res.status(200).json({
        success: true,
        token: token
      });
      ```
    * Selle API vastus koos tokeniga näeb välja selline:
      ```javascript
      {
          "success": true,
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA2ODkxMjE5LCJleHAiOjE2MDY4OTQ4MTl9.ZE4XPyZhY2kJvktoIlDNowKvAdKHdxlKchrG_f_cABE"
      }
      ```
    * Kui kasutame API testimiseks Postmani, siis saab siit vastusest võtta tokeni ja kopeerida selle Postmani:
    ![Token Postmanis](docs/images/postmanToken.png)
    * Lisame API-le middleware isLoggedIn, mis registreeritakse enne neid endpointe, mille puhul kasutaja peab olema sisse logitud.
      ```javascript
      ...
      app.post('/api/login', authController.login);
      app.post('/api/users', usersController.create);

      app.use(isLoggedIn);

      app.get('/api/users', usersController.read);
      app.get('/api/users/:id', usersController.readById);
      ...
      ```
      * Enne kui request objekt jõuab kontrollerisse, kontrollib middleware:
        * Kas request objekti headeris on Authorization Bearer kirje
        * Kui on, siis võtab sealt tokeni, vastasel juhul tagastab kliendile veateate.
        * Kontrollib, kas token on korras (parooli abil, millega token on loodud).
        * Kui token on korras, siis võetakse tokeni payloadist kasutaja id ja lisatakse see request objektile ja antakse tegevus üle kontrollerile.
        * Kui token ei olnud korras, tagastatakse kliendile veateade.
    * ```javascript
      const isLoggedIn = (req, res, next) => {
        try {
          // Kontrollime kas token on headeris olemas
          const token = req.headers.authorization.substring(7);
          // Kontrollime kas token on valiidne
          const verified = jwt.verify(token, config.jwtSecret);
          if (verified) {
            // Kirjutame tokeni payloadis oleva id request objekti sisse
            req.user = verified.id;
            // Anname tegevuse üle järgmisele middlewarele (kontrollerile)
            next();
          }
        } catch (error) {
          // Lõpetame vea puhul request-response tsükli ja saadame kliendile veateate
          res.status(401).json({
            success: false,
            message: 'Invalid token'
          });
        }
      }
    ´´´
* JWT lisamine projektile on näha siin videos: https://youtu.be/dPuKKJcCGd8

# Neljanda loengu teemad (28. november)
* Kodutööde esitlemine
* Andmebaasiga liidestamine
  * Google Firestore https://firebase.google.com/docs/firestore/quickstart
  * NoSQL document database https://www.mongodb.com/nosql-explained

## Google Cloud Firestore andmebaasiga ühendumine
* Logi sisse Google Firestore konsooli: https://console.firebase.google.com/
* Sisselogimiseks võiks kasutada näiteks isiklikku Google kontot, sest vähemalt mul ei õnnestunud tlu.ee kontoga uut Firestore projekti luua.
* Lisa uus projekt vajutades 'Add project' nuppu.
  * Lisa projektile nimi.
  * Vali kas tahad kasutada Google Analyticsit.
  * Vajuta nuppu 'Create Project'.
  * Vajuta 'Continue'.
* Lisa projektile andmebaas.
  * Selleks tuleb valida vasakult menüüst 'Cloud Firestore' ja seejärel paremalt 'Create Database'.
  * Vali 'Start in production mode' või 'Test mode'. Mina valisin hetkel lihtsuse mõttes Test mode - selleks, et alustamine oleks võimalikult lihtne.
  * Vali asukoht, kus andmebaasi hoitakse.

* Kuna Firestore projektiga saab võtta ühendust erinevatest rakendustest korraga ja võib olla vaja neid ühendusi eristada, tuleb Firestore projektile registreerida iga rakendus eraldi. Selleks võtame vasakult menüüst hammasratta ikooni alt 'Project settings'.
* Avanenud lehe alumises osas on võimalik lisada erinevate rakenduste ühendusi. Nodega ühendumise seadistuse saamiseks on vaja vajutada '</>' nupule.
* Pane rakendusele nimi ja vajuta nuppu 'Register app'.
* Vajuta nuppu 'Continue to the console'.
* Nüüd on võimalik konsoolist saada vajalikud seadistused meie API jaoks. Selleks vajuta lehe ülaosas 'Service accounts'.
* Avanenud lehelt leiad seadistuse, mille saad kopeerida oma projekti (Soovitatavalt kuhugi eraldi faili, näiteks db.js).
```javascript
var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://homeworks-62d8f.firebaseio.com"
});
```

Lisame faili lõppu veel kaks rida, millega loome db objekti ja ekspordime selle:

```javascript
const db = admin.firestore();

module.exports = db;
```

* Nagu näha, siis on vaja veel kusagilt saada serviceAccountKey.json fail.
* Selle saab genereerida vajutades nupule 'Generate new private key', mille peale saab loodud json faili alla laadida.
* Faili sisu näeb välja umbes selline:

```javascript
{
  "type": "service_account",
  "project_id": "homeworks-62d8f",
  "private_key_id": "005b0f2c00c629c3dc7c93cec81b9d127b8f90c3",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCYpcph9wV/zxhU\nqdvWg/Qs8aeKV7HeEXqJf7w7LJe+2ChWpzhKqfSkJJu3du/RMLqPB3dOIdtm+pLo\n6+LddwS5ALr0nYB9WS4msvWEDgAfULVQcNzrk4tAAfBMl1nwZUabtFy4nCdaqZP4\njgl7tf/ze7qwM8c7L7GIXRR4CID5vgFWw+lOhT4TB8x4+xT+g9ZWbUj3cIIpXr/y\nEMfWGfXbq0dSZy11lqxEVbISR7PlJVBq6wG9vfKQt51c1gPAh+2ux6JTvrH2Adew\nNorqJrvyircZMvCjfbnqAs/0omMj8FiI6toFVihI0mrVCCu9vWOQQJw+YsNV50/S\nhsQ+5zL3AgMBAAECggEAGWYiAfbw6qPyL8mA6MqqoFJ9RsmcsOSbolv8sqPoLpBs\n9djRHFX3J4YShY5mt5oHZgZ0qtgmAkEt8fpTP00Ec3v+9PYYC8NWUzNyd/c/EfbY\nlHqTEnz0WJbPUw8unzoFa6GxI+PnsHAy9306xWOHzmMHXIuLr6TEl3oADpDrqkzZ\n5pcNlGH64t401R+Q34vZVmFmAxfOn8BG+tslqTN5jlliofUoM2DzlU98wfpWtSEc\ntdaBoHwfPo9mpSoi5ZfGDcsnwD87vynCwTlKtT7J2DTZFuMF3mx5HoDe3pD48fSX\nWxl3kY/IgL7t+DIlG88H1NxQyZhFSnjWF1mQetRA4QKBgQDWJiL1X5mZQkU+C5XB\nDJC+Zus4rfPuRJtoXgIj4w/YTi3YO8fegDVXQKKGYLBfpfroP8tDl5lfDH3aJixg\n5VnYul0Bq0QUFYdqDMBTvJL6hmAsXC3GAkuD+F6l6MviGYMZIHG5nexEQuz6L9hW\nMxMdUBHU8QYX2gOYpI3Weji9uQKBgQC2er5/YSJ4VOe/6kuhH9YeaNzYOuOBA3Lh\nP1YjAo3YlXMk2z+FmTeJnFEh7K2tkAmbSv3jE8ZVYetq7gZNlNRhOzE7LUC5fb+7\nXljHKxm7Z6h8GG8OxMMp1qzZeTmZx0u1ZBpYaN5kyQssRZbRKRhG0RMFtDm3bHhy\ni+afER5OLwKBgQC1sR2v+jCj66o7/jBM3pBgO4oPSOfRnLwOTNScBiaHa61R7Uai\n7TxUjy5VvOtn+7dqHdYjvxgNoNeWoxS8EVutmlEW/WyBbdK6k58KbNB3ZlNqz7q2\naXQQwEXtlhqF9wdX5kMXLXosYGwXyUhPun3ZPPokJWr6CatLczI0avaBYQKBgFNT\n87+pNJtscjOiIw0dw6I5UnfvVEpqr8AKMyRjmzCG9oCjGfvA/qp5Vlc+hATY3Hos\noYlbU1tUDrPSo9AzoVQROqcCQCc0NCS0raetl9+LM1YPtk8xLMnjPSVGBTai2oCn\niJxMrxmo8NAzqu4ybOKRwLT/GsgW4V21YwfKQmODAoGAK7FKO3a5c2wWBuW7NjMo\npTv3xmx47K+iGfNsaKMACmX6B6i7fV194KNo5N6WA6ZPnBu9NnSTPbx0mieOQ4o7\nUBJMGTeB8sxryH13eZmergGj/msEOkqVrbyTyd1nihSn56+5oBN13oQzhb80mc7K\n9wKzK5igPcqx/r41oOUN3KU=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-90drc@homeworks-62d8f.iam.gserviceaccount.com",
  "client_id": "105539293179568718139",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-90drc%40homeworks-62d8f.iam.gserviceaccount.com"
}
```

* Selleks, et saaksime oma projektist andmebaasiga ühendust võtta, on vaja paigaldada oma API-le 'firebase-admin' npm pakk.
* Selle saame lisada käsuga npm install firebase-admin.

* Kogu protsess on näha siin videos: https://youtu.be/GnufgZZeiCA


# Viienda loengu teemad (18. detsember)
* Kodutööde esitlemine
* Testimine
* Automaattestid
  * Jest
  * Supertest

# Eksam (9.jaanuar)
* Oma projekti esitlemine
* Küsimused / vastused
* Individuaalne tagasiside

