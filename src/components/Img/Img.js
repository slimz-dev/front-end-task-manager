import { useState, useEffect } from 'react';

function Img({ src, alt, ...props }) {
	const [imgSrc, setImgSrc] = useState(src ? src : '/assets/img/avatars/user-default.png');
	useEffect(() => {
		setImgSrc(src);
	}, [src]);
	function handleError() {
		setImgSrc('/assets/img/avatars/user-default.png');
	}
	return <img onError={handleError} src={imgSrc} alt={alt ? alt : 'picture'} {...props} />;
}
//
export default Img;
