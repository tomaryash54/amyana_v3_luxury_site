import React from "react"

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // Keep this log for production diagnostics until a remote logger is added.
    console.error("App crashed in ErrorBoundary", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container" style={{ padding: "56px 20px", textAlign: "center" }}>
          <h2>Something went wrong.</h2>
          <p>Please refresh this page and try again.</p>
        </div>
      )
    }

    return this.props.children
  }
}
