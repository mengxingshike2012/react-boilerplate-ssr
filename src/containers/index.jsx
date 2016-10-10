import React, {
  PropTypes,
} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import css from 'react-css-modules';
import { fetchHotTopics } from 'actions/v2ex';

import styles from './index.scss';


@connect(
  state => ({
    data: state.v2ex.topics,
  })
)
@css(styles)
export default class V2exTopics extends React.Component {

  static propTypes = {
    data: PropTypes.array,
    dispatch: PropTypes.func,
  }

  static loadData(option) {
    if (option && option.store) {
      return option.store.dispatch(fetchHotTopics());
    } else {
      this.props.dispatch(fetchHotTopics());
    }
  }

  componentWillMount() {
    V2exTopics.loadData.call(this);
  }

  render() {
    const { data } = this.props;
    return (
      <div styleName="main">
        {data.map(topic =>
          <div styleName="topic" key={topic.id}>
            <Link to={`/topic/${topic.id}`}>{topic.title}</Link>
          </div>)}
      </div>
    );
  }
}
