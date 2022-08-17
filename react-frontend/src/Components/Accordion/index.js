import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import PropTypes from 'prop-types';
import Badges from '../Badges';
import './index.css';

function AccordionComponent({ data }) {
  const getAccordionItemBody = (entityTextArr) => entityTextArr.map((entityText) => (
    <li key={Math.random()}>{entityText}</li>
  ));

  const getAccordionItems = () => {
    const nerKeys = Object.keys(data);
    return nerKeys.map((nerKey, index) => (
      <Accordion.Item key={Math.random()} eventKey={index}>
        <Accordion.Header>
          {nerKey}
          {' '}
          <Badges data={data[nerKey].length.toString()} />
        </Accordion.Header>
        <Accordion.Body>
          <ul>
            {getAccordionItemBody(data[nerKey])}
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    ));
  };

  return (
    <Accordion alwaysOpen>
      {getAccordionItems()}
    </Accordion>
  );
}

AccordionComponent.propTypes = {
  data: PropTypes.objectOf(Object).isRequired,
};

export default AccordionComponent;
