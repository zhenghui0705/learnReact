require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
// 引入图片json数据
var imagesDatas = require('../data/images.json')

//利用自执行函数，将图片信息转换成URL路径信息
var imagesDatas = (function genImageURL(imageDataArr){
	for(var i = 0, j = imageDataArr.length;i < j; i++){
		var singleImageData = imageDataArr[i];
		singleImageData.imageURL = require('../images/' + singleImageData.fileName);
		imageDataArr[i] = singleImageData;
	}
	return imageDataArr
})(imagesDatas);

class AppComponent extends React.Component {
  render() {
    return (
		<section className="stage">
			<section className="img-sec">
			</section>
			<nav className="controller-nav">
			
			</nav>
		</section>
	
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
