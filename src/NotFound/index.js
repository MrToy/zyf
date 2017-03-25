import React from 'react'
export default class NotFound extends React.Component {
	componentWillMount() {
		const { staticContext } = this.props;
		if (staticContext) {
			staticContext.status = 404
		}
	}
	render() {
		return <h1>对不起，您访问的页面不存在。</h1>
	}
}