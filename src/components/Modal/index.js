import React, { useState, useEffect } from 'react';
import {
	ModalBox,
	ModalButton,
	ModalClose,
	ModalImage,
	ModalContent,
	ModaElement,
	ModalText,
} from './Modal.styles';
import _ from 'lodash';

import { Button } from 'antd';

function Modal({ images, openModal, callbackType, callbackImg }) {
	const [displayModal, setDisplayModal] = useState('none');
	const [img, setImg] = useState('');
	const [listImages, setListImages] = useState(images);
	const [selectImg, setSelectImg] = useState('red');

	const handleChangeBg = () => {
		setDisplayModal('none');
		callbackType('none');
		callbackImg(img);
	};

	const handleSelectImg = (index) => {
		const tmpListImg = [...listImages];
		const image = tmpListImg[index].img.default;

		_.map(tmpListImg, (image) => (image.selected = false));

		tmpListImg[index].selected = true;
		setListImages(tmpListImg);
		setImg(image);
	};

	useEffect(() => {
		setDisplayModal(openModal);
	}, [openModal]);

	console.log(listImages);

	return (
		<ModalContent display={displayModal}>
			<ModalBox>
				<ModaElement padding="16px 16px 0 16px">
					<ModalText>Change background</ModalText>
				</ModaElement>
				<ModaElement flex="1">
					{listImages &&
						listImages.map((item, index) => {
							return (
								<ModalImage
									onClick={() => handleSelectImg(index)}
									key={index}
									img={item.img.default}
									border={item.selected && selectImg}
								/>
							);
						})}
				</ModaElement>
				<ModaElement jsContent="flex-end">
					<Button onClick={() => handleChangeBg()}>Change</Button>
				</ModaElement>
			</ModalBox>
		</ModalContent>
	);
}

export default Modal;
