import React from 'react';

export const EventSchedule = () => {
  const schedule = [
    {
      day: 'Thursday 7th August',
      events: [
        ['10:00 - 11:00', 'Check-in & Ramps Tuning'],
        ['11:00 - 16:00', 'Practice Street'],
        ['11:00 - 21:00', 'Practice Miniramp'],
        ['16:00 - 21:00', 'Open Street Men Pre-Qualifiers'],
        ['21:47', 'Sunset'],
      ],
    },
    {
      day: 'Friday 8th August',
      events: [
        ['10:00 - 11:00', 'Check-in & Ramps Tuning'],
        ['10:00 - 14:50', 'Practice Street'],
        ['10:00 - 11:20', 'Practice Miniramp'],
        ['11:30 - 14:30', 'Open Miniramp Qualifiers'],
        ['14:40 - 21:43', 'Practice Miniramp'],
        ['15:00 - 15:50', 'Adaptive Competition'],
        ['16:00 - 17:25', 'Open Women Street Qualifiers'],
        ['17:40 - 21:00', 'Open Street Men Qualifiers'],
        ['21:45', 'Sunset'],
      ],
    },
    {
      day: 'Saturday 9th August',
      events: [
        ['10:00 - 11:00', 'Check-in & Ramps Tuning'],
        ['10:00 - 13:15', 'Practice Street (Semifinalists only)'],
        ['10:00 - 11:00', 'Practice Miniramp (Semifinalists only)'],
        ['11:10 - 13:15', 'Miniramp Semifinal'],
        ['13:20 - 21:42', 'Practice Miniramp'],
        ['13:20 - 14:20', 'Adaptive Competition'],
        ['15:00 - 17:25', 'Open Women Street Semifinal'],
        ['17:30 - 21:00', 'Men Street Semifinal'],
        ['21:44', 'Sunset'],
      ],
    },
    {
      day: 'Sunday 10th August',
      events: [
        ['10:00 - 11:00', 'Check-in & Ramps Tuning'],
        ['11:00 - 12:35', 'Practice Street'],
        ['10:00 - 19:00', 'Miniramp Practice'],
        ['12:40 - 13:40', 'Adaptive Competition'],
        ['16:00 - 17:00', 'Women Street Final'],
        ['17:30 - 18:30', 'Men Street Final'],
        ['19:00 - 20:00', 'Miniramp Final'],
        ['20:00 - 20:15', 'Wat! Time (Drink water before the jam)'],
        ['20:15 - 20:45', 'Miniramp - Cash for Tricks!'],
        ['21:00 - 21:30', 'Awards Ceremony'],
        ['21:43', 'Sunset'],
      ],
    },
  ];

  return (
    <div id="eventschedule">
      <h2>Event Schedule</h2>
      <table
        style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}
      >
        <thead>
          <tr style={{ backgroundColor: '#eee' }}>
            <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Day</th>
            <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>
              Time
            </th>
            <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>
              Event
            </th>
          </tr>
        </thead>
        <tbody>
          {schedule.map(({ day, events }) =>
            events.map(([time, event], idx) => (
              <tr key={`${day}-${idx}`}>
                <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>
                  {idx === 0 ? <strong>{day}</strong> : ''}
                </td>
                <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>
                  {time}
                </td>
                <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>
                  {event}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
