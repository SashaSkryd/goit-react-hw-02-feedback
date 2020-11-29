import React from "react"
import PropTypes from "prop-types"
import style from './Statistics.module.css'

export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div className={style.containerList}>
      <ul className={style.list}>
        <li className={style.listItem}>
          <p className={style.deskription}>Good:{good}</p>
        </li>
        <li className={style.listItem}>
          <p className={style.deskription}>Neutral:{neutral}</p>
        </li>
        <li className={style.listItem}>
          <p className={style.deskription}>Bad:{bad}</p>
        </li>
        <li className={style.listItem}>
          <p className={style.deskription}>Total:{total}</p>
        </li>
        <li className={style.listItem}>
          <p className={style.deskription}>Positive fedback:{positivePercentage}%</p>
        </li>
      </ul>
    </div>
  )
}

Statistics.propTypes = {
  Good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}
