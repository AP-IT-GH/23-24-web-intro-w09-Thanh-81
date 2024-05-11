/* In dit script plaats je de code om de kaart in de id apMap te tekenen, zodat de AP-Hogeschool met adres Ellermanstraat 33 gecentreerd staat.  
* Gebruik hiervoor de documentatie op https://leafletjs.com/ 
* Verander in de code online alle "var" in "let".
*/

/*
 - AP-Hogeschool ligt in de Ellermanstraat 33 op de coordinaten `[51.23009, 4.41616]`. Zet op deze plek een `marker`, zoom in op stand `17`.
 - Zorg ervoor dat de campus Ellerman wordt aangeduid met een *rood vierkant* op de kaart.
   **tip:** lees https://leafletjs.com/reference.html#rectangle  
    gebruik als bounds voor de rechthoek: `[51.23041, 4.4155]` en `[51.22991, 4.41675]`
*/


let map = L.map('apMap').setView([51.23009, 4.41616], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let polygon = L.rectangle([[51.23041, 4.4155], [51.22991, 4.41675]], { color: 'red', fillColor: 'red', fillOpacity: 0.5 }).addTo(map);

let marker = L.marker([51.23009, 4.41616]).addTo(map); marker.bindPopup("<b>AP-Hogeschool</b><br>Ellermanstraat 33").openPopup();










// bepaal de rechthoek rondom het gebouw van AP

// kleur de rechthoek in met de rode AP-kleur

// plaats een marker met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33"
