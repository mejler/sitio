---
title: "Press Kit"
layout: "press"
type: "page"
url: "/press/"
noindex: true
---

<section class="press-s">
  <p class="press-sl"><span data-lang-en>Biography</span><span data-lang-es>Biografía</span></p>
  <div class="bio-vers">
    <button class="bio-btn active" data-bio="long">Full Bio</button>
    <button class="bio-btn" data-bio="short">Short Bio</button>
  </div>
  <div class="press-bio bio-long active">
    <p data-lang-en><strong>Julián Mekler</strong> is a bassist and composer based in Buenos Aires, working at the intersection of modern jazz, improvised music, and contemporary composition.</p>
    <p data-lang-es><strong>Julián Mekler</strong> es contrabajista y compositor radicado en Buenos Aires, trabajando en la intersección del jazz moderno, la música improvisada y la composición contemporánea.</p>
    <p data-lang-en>His third album, <em>Peripheral Vision</em> (2026), was recorded live at Sear Sound with a quartet. The record has received critical acclaim from DownBeat, The New York Times, JazzTimes, and All About Jazz.</p>
    <p data-lang-es>Su tercer álbum, <em>Peripheral Vision</em> (2026), fue grabado en vivo en Sear Sound con un cuarteto. El disco ha recibido elogios de DownBeat, The New York Times, JazzTimes y All About Jazz.</p>
  </div>
  <div class="press-bio bio-short">
    <p data-lang-en><strong>Julián Mekler</strong> is a New York-based guitarist and composer whose music bridges modern jazz, improvisation, and contemporary composition. He has released three albums as a leader, including the critically acclaimed <em>Peripheral Vision</em> (2026).</p>
    <p data-lang-es><strong>Marcus Vaine</strong> es un guitarrista y compositor radicado en Nueva York cuya música conecta el jazz moderno, la improvisación y la composición contemporánea. Ha lanzado tres discos como líder, incluyendo el aclamado <em>Peripheral Vision</em> (2026).</p>
  </div>
</section>

<section class="press-s">
  <p class="press-sl"><span data-lang-en>Selected Press</span><span data-lang-es>Prensa Seleccionada</span></p>
  <div class="press-quotes">
    <div class="pq"><p>"A guitarist with a singular voice — poised between the cerebral and the deeply lyrical."</p><cite>— DownBeat ★★★★</cite></div>
    <div class="pq"><p>"Peripheral Vision is a quietly radical record, full of spaces and unexpected textures."</p><cite>— The New York Times</cite></div>
    <div class="pq"><p>"One of the most compelling new voices on the guitar in years."</p><cite>— JazzTimes</cite></div>
  </div>
</section>

<section class="press-s">
  <p class="press-sl"><span data-lang-en>Hi-Resolution Photos</span><span data-lang-es>Fotos en Alta Resolución</span></p>
  <div class="press-photos">
    <div class="pp"><img src="/images/press/press-1.jpg" alt="Press photo 1" /><div class="pp-dl"><span>J. Bostrom</span><a href="/images/press/press-1-hires.jpg" download>Download ↓</a></div></div>
    <div class="pp"><img src="/images/press/press-2.jpg" alt="Press photo 2" /><div class="pp-dl"><span>J. Bostrom</span><a href="/images/press/press-2-hires.jpg" download>Download ↓</a></div></div>
    <div class="pp"><img src="/images/press/press-3.jpg" alt="Press photo 3" /><div class="pp-dl"><span>S. Montiglia</span><a href="/images/press/press-3-hires.jpg" download>Download ↓</a></div></div>
  </div>
</section>

<section class="press-s">
  <p class="press-sl"><span data-lang-en>Technical Information</span><span data-lang-es>Información Técnica</span></p>
  <div class="press-tech">
    <div class="pt"><h4>Julián Mekler Sexteto</h4><p>Julián Mekler — Contrabajo<br>Jeanette Nenezian — trompeta<br>Lucas Goicoechea — saxo tenor<br>Pía Hernández — piano<br>Pablo Cavalchini - Guitarra<br>Federico Isasti — batería</p></div>
    <div class="pt"><h4><span data-lang-en>Set Duration</span><span data-lang-es>Duración del set</span></h4><p>60–90 min</p></div>
    <div class="pt"><h4><span data-lang-en>Stage Requirements</span><span data-lang-es>Requerimientos de Escenario</span></h4><p data-lang-en>Standard sextet setup.</p><p data-lang-es>Setup estándar de sexteto de jazz.</p></div>
    <div class="pt"><h4>Booking</h4><p><a href="mailto:booking@julianmekler.com">booking@julianmekler.com</a></p></div>
  </div>
</section>

<script>
document.querySelectorAll('.bio-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.bio-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const t = btn.dataset.bio;
    document.querySelector('.bio-long').classList.toggle('active', t === 'long');
    document.querySelector('.bio-short').classList.toggle('active', t === 'short');
  });
});
</script>
