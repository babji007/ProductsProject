import React from "react";
import content from "../components/mock/Mock";
import Container from "../components/Container";

class Sys extends React.Component {
  render() {
    return (
      <div >
        <Container.Products content={this.props.content} />
      
      </div>
    );
  }
}
Sys.defaultProps = {
  content: content,
};
export default Sys;
