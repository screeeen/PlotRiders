import React from 'react';

export const WCSPrizeTable = () => {
  const streetPrizes = [3000, 1500, 800, 400, 200];
  const minirampPrizes = [2000, 1000, 500, 250, 150];

  const renderTable = (title, prizes) => (
    <div style={{ margin: '1rem', flex: '1 1' }}>
      <h3
        style={{
          display: 'flex',
          alignItems: 'end',
          justifyContent: 'flex-end',
          height: '4rem',
        }}
      >
        {title}
      </h3>
      <table
        style={{
          borderCollapse: 'collapse',
          width: '100%',
          // maxWidth: 400,
          margin: '0 auto',
        }}
      >
        <tbody>
          {prizes.map((amount, index) => (
            <tr key={index}>
              <td style={{ padding: '0.5rem', textAlign: 'right' }}>
                {index + 1}º
              </td>
              <td style={{ padding: '0.5rem', textAlign: 'left' }}>
                {amount}€
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const urlPrices = `${window.location.href}assets/promoimages/prizes.jpg`;

  return (
    <div id="wcsprizetable" style={{ textAlign: 'center' }}>
      <h2>
        €€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€ that you can
        win (if you are good at skateboarding)
      </h2>
      <img src={urlPrices} style={{ maxWidth: '100%' }} />

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginTop: '2rem',
        }}
      >
        {renderTable('WCS Street Men and Women', streetPrizes)}
        {renderTable('WCS Miniramp', minirampPrizes)}
      </div>
    </div>
  );
};
