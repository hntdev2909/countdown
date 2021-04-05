import React, { useState } from 'react';
import {
	ModalBox,
	ModalImage,
	ModalContent,
	ModaElement,
	ModalText,
} from './Modal.styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectBackground, changeBackground, openModal } from '../../redux';
import { Button } from 'antd';

function Modal() {
	const [selectImg, setSelectImg] = useState('red');

	const { isOpenModal, backgroundList } = useSelector(
		(state) => state.bgChoice
	);
	const dispatch = useDispatch();

	const handleChangeBg = () => {
		dispatch(openModal());
		dispatch(changeBackground());
	};

	return (
		<ModalContent display={isOpenModal ? 'flex' : 'none'}>
			<ModalBox>
				<ModaElement padding="16px 16px 0 16px">
					<ModalText>Change background</ModalText>
				</ModaElement>
				<ModaElement flex="1">
					{backgroundList &&
						backgroundList.map((item, index) => {
							return (
								<ModalImage
									onClick={() => dispatch(selectBackground(index))}
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
