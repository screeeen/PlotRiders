import React from 'react';

export const VigoSkateCitySpots = () => {
  return (
    <div id="vigoskatecityspots">
      <h2>Vigo Skate City Spots and Some Geek Notes (and shitty pictures)</h2>

      {/* Pza de la Estrella */}
      <div>
        <h3>
          <a
            href="https://goo.gl/maps/NwxkiK6udJaRH8q3A"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pza de la Estrella
          </a>
        </h3>
        <p>
          Classic street spot known for appearing in skate videos for over two
          decades. Salabanzi may have been the first to hit it in Flip’s{' '}
          <em>Sorry</em>. Suciu, Silvas, Milou… all showed up in the latest
          Adidas edits.
        </p>
        <img
          src={`${window.location.href}assets/images/estrella.png`}
          alt="Pza de la Estrella"
          style={{ width: '100%', maxWidth: 600 }}
        />
        <img
          src={`${window.location.href}assets/images/estrella2.png`}
          alt="Pza de la Estrella"
          style={{ width: '100%', maxWidth: 600 }}
        />
      </div>

      {/* Náutico y Berbés */}
      <div>
        <h3>
          <a
            href="https://goo.gl/maps/btnVuJNrFzU35s1w8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Náutico y Berbés
          </a>
        </h3>
        <p>Blocks, stairs, infinite ledges... marble</p>
        <img
          src={`${window.location.href}assets/images/nautico.png`}
          alt="Náutico y Berbés"
          style={{ width: '100%', maxWidth: 600 }}
        />
        <img
          src={`${window.location.href}assets/images/bahia.jpg`}
          alt="Náutico y Berbés"
          style={{ width: '100%', maxWidth: 600 }}
        />
      </div>

      {/* Praza do Berbés */}
      <div>
        <h3>
          <a
            href="https://goo.gl/maps/xZDxf3MCdamAdJA87"
            target="_blank"
            rel="noopener noreferrer"
          >
            Praza do Berbés
          </a>
        </h3>
        <p>
          9 stairs and ledges. A classic evening jam spot. Levi Brown flipped
          the roundabout sculpture more than a decade ago — featured on a{' '}
          <a
            href="https://www.skateboarding.com/features/hot-off-the-press-levi-brown-december-2011"
            target="_blank"
            rel="noopener noreferrer"
          >
            Transworld cover
          </a>
          .
        </p>
        <img
          src={`${window.location.href}assets/images/berbes.png`}
          alt="Praza do Berbés"
          style={{ width: '100%', maxWidth: 600 }}
        />
      </div>

      {/* Skatepark de Vialia */}
      <div>
        <h3>
          <a
            href="https://goo.gl/maps/cYPvvHeEMqThv3Tn8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Skatepark de Vialia
          </a>
        </h3>
        <p>Cozy medium-size park with sea views.</p>
        <img
          src={`${window.location.href}assets/images/vialia.png`}
          alt="Skatepark de Vialia"
          style={{ width: '100%', maxWidth: 600 }}
        />
      </div>

      {/* Downhills Galore */}
      <div>
        <h3>Downhills Galore</h3>
        <p>
          Vigo is only 10% flat. If you're into downhills, this city is your
          playground — from mellow to insane slopes.
        </p>
        <ul>
          <li>
            <a
              href="https://goo.gl/maps/tCeTjvnD8uLEoZS97"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spot 1 – Downhill peak
            </a>
          </li>
          <li>
            <a
              href="https://goo.gl/maps/tGXK33ZsvqMAq1tbA"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spot 2 – Steep challenge
            </a>
          </li>
          <li>
            <a
              href="https://goo.gl/maps/ywsdcpLkZyDCS5qZ6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spot 3 – Scenic ride
            </a>
          </li>
          <li>
            <a
              href="https://goo.gl/maps/xEunnbVssMSQx55m9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spot 4 – Speed zone
            </a>
          </li>
        </ul>
        <img
          src={`${window.location.href}assets/images/vianorte.png`}
          alt="Downhill in Vigo"
          style={{ width: '100%', maxWidth: 600 }}
        />
        <img
          src={`${window.location.href}assets/images/granvia.png`}
          alt="Downhill in Vigo"
          style={{ width: '100%', maxWidth: 600 }}
        />
        <img
          src={`${window.location.href}assets/images/urzaiz.png`}
          alt="Downhill in Vigo"
          style={{ width: '100%', maxWidth: 600 }}
        />
        <img
          src={`${window.location.href}assets/images/spotGX.png`}
          alt="Downhill in Vigo"
          style={{ width: '100%', maxWidth: 600 }}
        />
      </div>
    </div>
  );
};
