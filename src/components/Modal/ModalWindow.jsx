// import { Button, Modal } from 'antd';


// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { EditOutlined } from '@ant-design/icons';
// import {  useDispatch } from 'react-redux'
// import { onSubmit } from '../../redux/slices/myProfileSlice';
// import UserEditContent from '../UserEditContent';


// const ModalWindow = () => {

//   const dispatch = useDispatch();

//   const {
//     register,
//     formState: { errors },
//     handleSubmit
//   } = useForm();

//   // const PutNewData = (data) => {
//   //   dispatch(onSubmit(data))
//   // }

//   const modalContent =
//   <UserEditContent
//     handleSubmit={handleSubmit}
//     // PutNewData={PutNewData}
//     register={register}
//     errors={errors} 
//     />

//   const [open, setOpen] = useState(false);
//   const [confirmLoading, setConfirmLoading] = useState(false);
//   const [modalText, setModalText] = useState(modalContent);
//   const [size] = useState('large');


//   const showModal = () => {
//     setOpen(true);
//     setModalText(modalContent)
//   };
//   const handleOk = () => {
//     setConfirmLoading(true);
//     setTimeout(() => {
//       setOpen(false);
//       setConfirmLoading(false);
//     }, 2000);
//   };
//   const handleCancel = () => {
//     setOpen(false);
//   };
//   return (
//     <>
//         <Button onClick={showModal} type="primary" shape="circle" icon={<EditOutlined />} size={size} />
//         <Modal
//             title="Редактирование профиля"
//             open={open}
//             onOk={handleOk}
//             confirmLoading={confirmLoading}
//             onCancel={handleCancel}
//             cancelText='Отмена'
//             okText="Сохранить">
//         <p>{modalText}</p>
//       </Modal>
//     </>
//   );
// };
// export default ModalWindow;


import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeModal, handleSave} from '../../redux/slices/modalSlice'
import { useForm } from 'react-hook-form';
import UserEditContent from '../UserEditContent/UserEditContent';
import styles from './ModalWindow.module.css'

function ModalWindow({children, header}) {


  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();


  const dispatch = useDispatch();
  const modalContent = <UserEditContent handleSubmit={handleSubmit} register={register} errors={errors} />
  const {isOpen, isSaving} = useSelector((state) => state.modalSlice)

  return (
    <>
      <button onClick={() => dispatch(openModal())}>{children}</button>

      {isOpen && (
        <div className={styles.modal} onClick={() => dispatch(closeModal())}>
          <div onClick={(e) => e.stopPropagation()} className={styles.modal_content}>
            <h2>{header}</h2>
            {modalContent}
            <div className="modal-buttons">
              <button onClick={() => dispatch(closeModal())}>Отмена</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalWindow;