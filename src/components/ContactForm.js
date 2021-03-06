import React from "react";
import PropTypes from "prop-types";

import { GridContainer, Row, Cell } from "../components/foundation/Foundation";

const handleSubmit = (state, submitAction) => {
  console.log("ContactForm state: ", state);

  if (submitAction) {
    submitAction({});
  }
};

const ContactForm = ({ _id, labels, placeholders, submitAction }) => (
  <form onSubmit={handleSubmit(this.state, submitAction)}>
    <GridContainer id={`contactform-${_id}`}>
      <Row margin>
        <Cell large={6}>
          <label>
            {labels.name}
            <input id={`contactform-${_id}-name`} type="text" placeholder={placeholders.name} />
          </label>
        </Cell>
        <Cell large={6}>
          <label>
            {labels.email}
            <input id={`contactform-${_id}-email`} type="text" placeholder={placeholders.email} />
          </label>
        </Cell>
      </Row>
      <label>
        {labels.subject}
        <input id={`contactform-${_id}-Subject`} type="text" placeholder={placeholders.subject} />
      </label>
      <label>
        {labels.message}
        <textarea placeholder={placeholders.message} rows={4}></textarea>
      </label>
      <hr />
      <input type="submit" className="button" value={labels.buttonText} />
    </GridContainer>
  </form>
);

ContactForm.propTypes = {
  _id: PropTypes.string.isRequired,
  labels: PropTypes.object,
  placeholders: PropTypes.object,
  submitAction: PropTypes.func
};

export default ContactForm;