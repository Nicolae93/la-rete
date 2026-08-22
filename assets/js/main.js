/* LA RETE · Orestea
   Le epigrafi entrano in scena quando arrivano a un quarto di viewport.
   Senza IntersectionObserver, o con il movimento ridotto, restano
   semplicemente visibili: il CSS le tiene a opacità 0 finché non c'è
   qualcuno che possa accenderle. */
(function () {
  'use strict';

  var epigrafi = document.querySelectorAll('.epigrafe');
  if (!epigrafi.length) return;

  function accendi(el) {
    el.classList.add('on');
  }

  var senzaMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (senzaMovimento || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(epigrafi, accendi);
    return;
  }

  var osservatore = new IntersectionObserver(function (voci) {
    voci.forEach(function (voce) {
      if (!voce.isIntersecting) return;
      accendi(voce.target);
      osservatore.unobserve(voce.target);
    });
  }, { threshold: 0.25 });

  Array.prototype.forEach.call(epigrafi, function (el) {
    osservatore.observe(el);
  });
})();
