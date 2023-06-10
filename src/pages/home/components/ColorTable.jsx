import './table.css';

export default function ColorTable() {
  return (
    <div>
      <p className='mb-6 text-large max-w-[972px] mx-auto text-center'>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit</p>
      <div className='container mx-auto overflow-auto'>
        <div className='color-table mx-auto w-full'>
          <table className='w-full'>
            <thead>
              <tr>
                {headers?.map((hd, i) => (
                  <th key={i}>{hd}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data?.map((da, i) => (
                <tr key={i}>
                  <td>{da.date || ''}</td>
                  <td>{da.users || ''}</td>
                  <td>
                    {!!da.week_0 && '$'} {da.week_0 || ''}
                  </td>
                  <td>
                    {!!da.week_1 && '$'} {da.week_1 || ''}
                  </td>
                  <td>
                    {!!da.week_2 && '$'} {da.week_2 || ''}
                  </td>
                  <td>
                    {!!da.week_3 && '$'} {da.week_3 || ''}
                  </td>
                  <td>
                    {!!da.week_4 && '$'} {da.week_4 || ''}
                  </td>
                  <td>
                    {!!da.week_5 && '$'} {da.week_5 || ''}
                  </td>
                  <td>
                    {!!da.week_6 && '$'} {da.week_6 || ''}
                  </td>
                  <td>
                    {!!da.week_7 && '$'} {da.week_7 || ''}
                  </td>
                  <td>
                    {!!da.week_8 && '$'} {da.week_8 || ''}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const headers = ['Date', 'Users', 'Week 0', 'Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'];

const data = [
  {
    id: 1,
    date: '06-17 - 06-23',
    users: 1476,
    week_0: 209,
    week_1: 219,
    week_2: 230,
    week_3: 242,
    week_4: 254,
    week_5: 267,
    week_6: 280,
    week_7: 294,
    week_8: 309,
  },
  {
    id: 2,
    date: '06-24 - 06-30',
    users: 1678,
    week_0: 212,
    week_1: 223,
    week_2: 234,
    week_3: 245,
    week_4: 258,
    week_5: 271,
    week_6: 284,
    week_7: 298,
    week_8: 0,
  },
  {
    id: 3,
    date: '06-31- 07-06',
    users: 1561,
    week_0: 210,
    week_1: 221,
    week_2: 232,
    week_3: 243,
    week_4: 255,
    week_5: 268,
    week_6: 281,
    week_7: 0,
    week_8: 0,
  },
  {
    id: 4,
    date: '07-07 - 07-14',
    users: 2678,
    week_0: 205,
    week_1: 215,
    week_2: 226,
    week_3: 237,
    week_4: 249,
    week_5: 262,
    week_6: 0,
    week_7: 0,
    week_8: 0,
  },
  {
    id: 5,
    date: '07-15 - 07-21',
    users: 1121,
    week_0: 211,
    week_1: 222,
    week_2: 233,
    week_3: 244,
    week_4: 256,
    week_5: 0,
    week_6: 0,
    week_7: 0,
    week_8: 0,
  },
  {
    id: 6,
    date: '07-22 - 07-28',
    users: 2210,
    week_0: 220,
    week_1: 231,
    week_2: 243,
    week_3: 255,
    week_4: 0,
    week_5: 0,
    week_6: 0,
    week_7: 0,
    week_8: 0,
  },
  {
    id: 7,
    date: '07-29 - 08-04',
    users: 1627,
    week_0: 225,
    week_1: 236,
    week_2: 248,
    week_3: 0,
    week_4: 0,
    week_5: 0,
    week_6: 0,
    week_7: 0,
    week_8: 0,
  },
];
