import { SectionTitle } from '../SectionTitle/SectionTitle';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <div>
      <SectionTitle>Transactions</SectionTitle>
      <table className={css.transactionHistory}>
        <thead>
          <tr className={css.trHead}>
            <th className={css.th}>Type</th>
            <th className={css.th}>Amount</th>
            <th className={css.th}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <tr key={id} className={css.trBody}>
                <td className={css.td}>{type}</td>
                <td className={css.td}>{amount}</td>
                <td className={css.td}>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
