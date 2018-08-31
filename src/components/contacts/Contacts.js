import React, { Component } from 'react';
import Contact from './Contact';
// allow to connect with the contactReducer
import { connect } from 'react-redux';
// everithing from redux state (actions) is put into props
import PropTypes from 'prop-types';
import { getContacts } from '../../actions/contactActions';

class Contacts extends Component {
  componentDidMount() {
    // this will put contacts into the props
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  contacts: state.contact.contacts
});
// to access in props -> this.props.contacts

// in order to use connect it must wrap component
// first parameter everything we want to map from the redux state to the props in the component
// second parameter anything we want to dispatch (any action to dispatch)
export default connect(
  mapStateToProps,
  { getContacts }
)(Contacts);
