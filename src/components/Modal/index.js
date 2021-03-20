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
function Modal({ images, openModal, callbackType, callbackImg }) {
	const [displayModal, setDisplayModal] = useState('none');
	const [img, setImg] = useState('');

	const handleChangeBg = () => {
		setDisplayModal('none');
		callbackType('none');
		callbackImg(img);
	};

	useEffect(() => {
		setDisplayModal(openModal);
	}, [openModal]);

	return (
		<ModalContent display={displayModal}>
			<ModalBox>
				<ModaElement padding="16px 16px 0 16px">
					<ModalText>Change background</ModalText>
				</ModaElement>
				<ModaElement flex="1">
					{images &&
						images.map((item, index) => {
							return (
								<ModalImage
									onClick={() => setImg(item.img.default)}
									key={index}
									img={item.img.default}
								/>
							);
						})}
				</ModaElement>
				<ModaElement jsContent="flex-end">
					<ModalButton onClick={() => handleChangeBg()}>Change</ModalButton>
				</ModaElement>
			</ModalBox>
		</ModalContent>
	);
}

export default Modal;
