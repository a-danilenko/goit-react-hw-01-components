import s from "./StatisticsList.module.css";
import PropTypes from "prop-types";

function StatisticsList({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>Upload stats</h2>}

      <ul className={s.statList}>
        {stats.map(({ id, label, percentage="0" }) => (
          <li key={id} className={s.listItem}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number,
    })
  ),
};

export default StatisticsList;
