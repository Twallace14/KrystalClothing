import React from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory-styles.scss';
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../redux/directory/directorySelector';

const DirectoryComp = ({sections}) => (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))
      }
    </div>
  );

 const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});


export default connect(mapStateToProps)(DirectoryComp);