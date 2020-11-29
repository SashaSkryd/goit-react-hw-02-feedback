import React from "react"
import PropTypes from "prop-types"
import style from './FeedbackOptions.module.css'

export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div>
      <button type="button" name="good" onClick={onLeaveFeedback} className={style.btn}>
       <span className={style.btnText}> Good</span>
      </button>
      <button type="button" name="neutral" onClick={onLeaveFeedback} className={style.btn}>
       <span className={style.btnText}>Neutral</span> 
      </button>
      <button type="button" name="bad" onClick={onLeaveFeedback} className={style.btn}>
       <span className={style.btnText}>Bad</span> 
      </button>
    </div>
  )
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
}
