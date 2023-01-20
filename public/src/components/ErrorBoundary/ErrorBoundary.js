import React from "react";
import ErrorLogo from "../../../src/images/error.svg";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container vh-100 d-flex flex-wrap align-content-center justify-content-center">
          <div className="row">
            <div className="col-lg-12 col-6">
              <img src={ErrorLogo} />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-6 d-flex align-items-center">
              <h2>Something went wrong...</h2>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
