import React, { Component } from "react"
import Feedback from "../FeedbackOptions/FeedbackOptions.jsx"
import Statistics from "../Statistics/Statistics.jsx"
import Section from "../Section/Section.jsx"
import Notification from "../Notification/Notification.jsx"

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  toSetState = (e) => {
    this.setState((prevState) => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }))
  }

  countTotalFeedback = function () {
    return this.state.good + this.state.neutral + this.state.bad
  }

  countPositiveFeedbackPercentage = function () {
    return Math.floor((this.state.good * 100) / this.countTotalFeedback())
  }

  render() {
    const total = this.countTotalFeedback()
    return (
      <>
        <Section title="Please leave feedback">
          <Feedback onLeaveFeedback={this.toSetState} />
        </Section>
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section>
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </>
    )
  }
}
