# LA RETE · Orestea

Regolamento illustrato di **La Rete · Orestea**, un gioco da tavolo di fiducia,
bluff e giudizio per 8 giocatori, liberamente ispirato alla trilogia di Eschilo.

Il repository contiene il regolamento completo come singola pagina web statica:
nessun framework, nessuna build, nessuna dipendenza da installare.

- **8 giocatori** · **45–60 minuti** · nessun narratore, solo un timer
- Versione del regolamento: **1.0**

---

## Il gioco in breve

> Tutto avviene alla luce. Gli assassinî sono visti da tutti, i Timé sono
> pubblici, i pugnali si forgiano davanti al tavolo. Il segreto non sta mai in
> cosa succede: sta in *chi sei* e in *chi è caduto*.

Otto giocatori, due fazioni contrapposte:

| Fazione | Membri | Vince se… |
| --- | --- | --- |
| ⚔ **Casa di Atreo** | Agamennone, Oreste, Elettra, Il Coro | muore Clitennestra, per mano di chiunque |
| ✹ **La Rete** | Clitennestra, Egisto, Le Erinni, Crisotemide | muoiono Agamennone e Oreste |

Agamennone è scoperto dal primo istante. Ogni round un tribunale a tre teste
assegna gettoni **Timé** — onore pubblico, sempre visibile sul tavolo — e le
soglie di Timé sbloccano ispezioni e pugnali. Chi impugna il ferro perde la
voce in politica; chi colpisce lo fa davanti a tutti, ma senza sapere chi ha
ucciso: la vittima esce con la carta coperta e si scopre solo al **Giudizio**
finale, dove il Coro assegna la Corona d'Alloro giudicando la condotta e non la
fazione.

La partita si divide in due fasi — **Il Ritorno** e, dopo il regicidio, **La
Vendetta** — e si chiude appena una delle due condizioni di vittoria scatta.
Il Giudizio si tiene comunque.

Il regolamento completo — poteri, setup, soglie, tribunale, Doppio Dono,
Giudizio e la variante dell'Urna — è nella pagina: apri `index.html`.

## Contenuto del regolamento

Le dodici tavole, più il quaderno di playtest:

| | | | |
| --- | --- | --- | --- |
| Α΄ | Le squadre | Η΄ | Le fasi |
| Β΄ | I poteri | Θ΄ | Fine della partita |
| Γ΄ | Il setup | Ι΄ | Le vittorie |
| Δ΄ | Il Timé | ΙΑ΄ | Il Giudizio |
| Ε΄ | Il round | ΙΒ΄ | L'Urna (variante opzionale) |
| Ϝ΄ | Il colpo | ✧ | Il quaderno del primo playtest |
| Ζ΄ | Il Doppio Dono | | |

## Materiali per giocare

- 8 carte personaggio (una è l'Asso di Agamennone)
- Un secondo mazzo completo degli 8 ruoli, per le ispezioni
- Gettoni Timé in pool comune — ne bastano una dozzina
- 3–4 carte Pugnale
- Lo Scettro: un oggetto qualsiasi che passi di mano
- Il Manto Rosso: un pezzo di stoffa rossa per i morti
- Un telefono, per la registrazione del setup e per i timer
- Solo per la variante dell'Urna: un sacchetto opaco e gettoni bianchi, neri e neutri

## Struttura del repository

```
.
├── index.html          # il regolamento completo, una pagina sola
├── assets/
│   ├── css/style.css   # foglio di stile (token, componenti, responsive, stampa)
│   └── js/main.js      # entrata in scena delle epigrafi allo scroll
└── README.md
```

## Come consultarlo in locale

Non serve alcuna build. Basta aprire il file nel browser:

```sh
git clone https://github.com/Nicolae93/la-rete.git
cd la-rete
open index.html        # su macOS; altrove: xdg-open index.html
```

In alternativa, con un server statico qualsiasi:

```sh
python3 -m http.server 8000
# poi apri http://localhost:8000
```

I caratteri (Bodoni Moda, EB Garamond, Barlow Condensed) sono caricati da
Google Fonts: offline la pagina resta perfettamente leggibile con i fallback
serif e sans dichiarati nel CSS.

## Note tecniche

- HTML statico e semantico, in italiano (`lang="it"`), con landmark e
  `aria-labelledby` su ogni sezione.
- Tema scuro dichiarato via `color-scheme`; palette e misure sono definite come
  custom properties in cima a `style.css`.
- Il foglio di stile include un blocco per la **stampa**: il regolamento si può
  stampare o salvare in PDF dal browser.
- Le epigrafi si animano allo scroll tramite `IntersectionObserver`; con
  `prefers-reduced-motion: reduce`, o senza supporto all'API, restano
  semplicemente visibili.

## Contribuire

Le modifiche al regolamento sono benvenute, soprattutto se arrivano da un
playtest. Nel dubbio, apri prima una issue con i numeri del quaderno (in che
round è morto Agamennone, quanti pugnali entro il sesto, quante ispezioni per
fase) — sono più utili di qualsiasi opinione a tavolino.
