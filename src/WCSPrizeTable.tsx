import React from 'react';

export const WCSPrizeTable = () => {
  const streetPrizes = [3000, 1500, 800, 400, 200];
  const minirampPrizes = [2000, 1000, 500, 250, 150];

  const renderTable = (title, prizes) => (
    <div style={{ marginBottom: '2rem' }}>
      <h3>{title}</h3>

      <table
        style={{ width: '100%', maxWidth: 400, borderCollapse: 'collapse' }}
      >
        {/* <thead>
          <tr style={{ backgroundColor: '#000' }}>
            <th style={{ padding: '0.5rem' }}>Position</th>
            <th style={{ padding: '0.5rem' }}>Prize</th>
          </tr>
        </thead> */}
        <tbody>
          {prizes.map((amount, index) => (
            <tr key={index}>
              <td style={{ padding: '0.5rem' }}>{index + 1}º</td>
              <td style={{ padding: '0.5rem' }}>{amount}€</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const urlPrices = `${window.location.href}assets/promoimages/prizes.jpg`;

  return (
    <div id="wcsprizetable">
      <h2 style={{ textAlign: 'left' }}>
        €€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€
        that you can win (if you are good at skateboarding)
      </h2>
      <img src={urlPrices} />
      {renderTable('WCS Street Men and Women', streetPrizes)}
      {renderTable('WCS Miniramp', minirampPrizes)}
    </div>
  );
};
