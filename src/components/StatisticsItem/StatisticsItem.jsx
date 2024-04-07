import styled from './Statistics.module.css';

export const StatisticsItem = ({ title, total, icon: Icon }) => {
  return (
    <li className={styled.item}>
      <Icon size={30} color="red" />
      <span className={styled.counter}>{total}</span>
      <p className={styled.text}>{title}</p>
    </li>
  );
};
