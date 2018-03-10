import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import DownloadComments from '../../components/DownloadComments/DownloadComments';

export default withRouter(connect(
  null,
)(DownloadComments));
