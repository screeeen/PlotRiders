import React from 'react';

export const VigoSkateCitySpots = () => {
  return (
    <div id="vigoskatecityspots">
      <h2>Vigo Skate City Spots and Some Geek Notes</h2>

      {/* Pza de la Estrella */}
      <div>
        <h3>Pza de la Estrella</h3>
        <p>
          Classic street spot known for shooting in several videos for the last
          two decades. Salabanzi could have been the first at Flip’s *Sorry*.
          Suciu, Silvas, Milou… latest clips for the Adidas reel.
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.312136125563!2d-8.72591562376508!3d42.23605697119717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2f6260b1593ba7%3A0xf3970b3a4e3971f3!2sPraza%20da%20Estrela!5e0!3m2!1sen!2ses!4v1717770000000"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <img
          src="assets/images/estrella.jpg"
          alt="Pza de la Estrella"
          style={{ width: '100%', maxWidth: 600 }}
        />
      </div>

      {/* Náutico y Berbés */}
      <div>
        <h3>Náutico y Berbés</h3>
        <p>Blocks!</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.3648536569243!2d-8.726867923765172!3d42.23488617119612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2f6260a749b695%3A0x263cba23000abbbc!2sN%C3%A1utico%20de%20Vigo!5e0!3m2!1sen!2ses!4v1717770000001"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <img
          src="assets/images/nautico.jpg"
          alt="Náutico y Berbés"
          style={{ width: '100%', maxWidth: 600 }}
        />
      </div>

      {/* Praza do Berbés */}
      <div>
        <h3>Praza do Berbés</h3>
        <p>
          9 stairs and ledges, a classic spot for evening jams. Levi Brown
          flipped the roundabout sculpture over a decade ago — got a
          <a
            href="https://www.skateboarding.com/features/hot-off-the-press-levi-brown-december-2011"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            Transworld cover.
          </a>
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.3039609057816!2d-8.727634523765091!3d42.236246171197195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2f6260a723e029%3A0x733eb3e5e1f155fb!2sPraza%20do%20Berb%C3%A9s!5e0!3m2!1sen!2ses!4v1717770000002"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <img
          src="assets/images/berbes.jpg"
          alt="Praza do Berbés"
          style={{ width: '100%', maxWidth: 600 }}
        />
      </div>

      {/* Skatepark de Vialia */}
      <div>
        <h3>Skatepark de Vialia</h3>
        <p>Cozy medium-size park with sea views.</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.192011837487!2d-8.713712923765014!3d42.23871707119939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2f626d1ff70a65%3A0x85e9b6e9f07e56db!2sVialia%20Centro%20Comercial%20Vigo!5e0!3m2!1sen!2ses!4v1717770000003"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <img
          src="assets/images/vialia.jpg"
          alt="Skatepark de Vialia"
          style={{ width: '100%', maxWidth: 600 }}
        />
      </div>

      {/* Downhills Galore */}
      <div>
        <h3>Downhills Galore</h3>
        <p>
          This is Vigo: 10% flat. If you like downhills, this is your place. All
          levels of insanity slopes.
        </p>
        {[
          'tCeTjvnD8uLEoZS97',
          'tGXK33ZsvqMAq1tbA',
          'ywsdcpLkZyDCS5qZ6',
          'xEunnbVssMSQx55m9',
        ].map((id, i) => (
          <iframe
            key={i}
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d0!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1splace_id:${id}!5e0!3m2!1sen!2ses!4v171777000000${4 + i}`}
            width="100%"
            height="300"
            style={{ border: 0, marginBottom: 20 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        ))}
        <img
          src="assets/images/downhill.jpg"
          alt="Downhill in Vigo"
          style={{ width: '100%', maxWidth: 600 }}
        />
      </div>
    </div>
  );
};
