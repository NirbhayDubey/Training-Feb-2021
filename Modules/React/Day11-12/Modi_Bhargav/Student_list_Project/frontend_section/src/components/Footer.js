import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <footer className="footer mb-0">
          <div class="footer-copyright text-center text-white bg-primary py-3">
            All Rights Reserved 2020 @RadixWEb
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
