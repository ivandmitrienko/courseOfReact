import React from "react";
import PropTypes from 'prop-types';
import mobileEvents from "../../events";

import('./MobileCompany.css');

const defaultClient = {
    id: 1,
    FIO: {
      fam: '',
      im: '',
      otch: '',
    },
    balance: 0,
  }


class MobileCompany extends React.PureComponent {

    static propTypes = {
        name: PropTypes.string.isRequired,
        clients: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            FIO: PropTypes.shape({
              fam: PropTypes.string.isRequired,
              im: PropTypes.string.isRequired,
              otch: PropTypes.string.isRequired,
            }),
            balance: PropTypes.number.isRequired,
          })
        ),
    };

    state = {
        name: this.props.name,
        clients: this.props.clients,
        status: 0,
        editClient: defaultClient,
        isEditMode: false,
    };
    

}

export default MobileCompany;