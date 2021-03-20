import React from 'react';
import { LoadingContent, LoadingSpin } from './Loading.styles';
import { Spin } from 'antd';

function Loading({ imgUrl }) {
	return (
		<LoadingContent imgUrl={imgUrl}>
			<LoadingSpin>
				<Spin size="large"></Spin>
			</LoadingSpin>
		</LoadingContent>
	);
}

export default Loading;
