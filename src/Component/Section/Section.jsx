import React from "react"
import PropTypes from "prop-types"
import style from './Section.module.css'

export default function Section({ title, children }) {
  return (
    <section className={style.container}>
      <h1 className={style.title}>{title}</h1>
      {children}
    </section>
  )
}

Section.defaultProps = {
  title: "Statistics",
}
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
}
