const tableHeaders = ['№', 'price', 'amount', 'date'];

import { formatDate } from 'helpers/formatDataTime';
import style from './CryptoHistory.module.css';

export const CryptoHistory = ({ items }) => {
  return (
    <>
      <table className={style.table}>
        <thead className={style.thead}>
          <tr>
            {tableHeaders.map(header => (
              <th key={header} className={style.th}>
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => (
            <tr key={item.id} className={style.tr}>
              <td className={style.td}>{index + 1}</td>
              <td className={style.td}>{item.price}</td>
              <td className={style.td}>{item.amount}</td>
              <td className={style.td}>{formatDate(item.date)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
