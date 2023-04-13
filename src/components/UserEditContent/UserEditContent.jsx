import React, {useState, useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleSave } from '../../redux/slices/modalSlice';
import styles from './UserEditContent.module.css'




const UserEditContent = ({ handleSubmit, register, errors }) => {

    const dispatch = useDispatch();
    const [isSaving, setIsSaving] = useState (false)
    const userData = useSelector((state) => state.modalSlice.userData)
    const user = useRef(userData);
    console.log (user.current.name)



     async function PutNewData (data) {
       setIsSaving(true)
       const promise = new Promise(() => {
       setTimeout(() => {
            dispatch(handleSave(data))
        }, 2000);
    });
        await promise;
        setIsSaving(false)
    }


    return (
        <div className={styles.form}>
            <form onSubmit={handleSubmit(PutNewData)}>
                <label>
                    Имя:
                    <input defaultValue={userData.name}{...register('name', {
                        required: 'Поле обязательно к заполнению',
                        minLength: {
                            value: 3,
                            message: 'Минимум 3 символа'
                        },
                        maxLength: {
                            value: 12,
                            message: 'Максимум 12 символов'
                        },
                        pattern: {
                            value: /^[А-Яа-яЁё]+$/i,
                            message: 'Можно использовать только буквы русского алфавита'
                        }
                    })}
                    />
                </label>
                <div style={{ height: 20 }}>
                    {errors?.name && <p style={{fontSize:'15px'}}>{errors?.name?.message || 'Error'}</p>}
                </div>


                <label>
                    Фамилия:
                    <input defaultValue={userData.surName} {...register('surName', {
                        required: 'Поле обязательно к заполнению',
                        minLength: {
                            value: 5,
                            message: 'Минимум 5 символов'
                        },
                        maxLength: {
                            value: 12,
                            message: 'Максимум 12 символов'
                        },
                        pattern: {
                            value: /^[А-Яа-яЁё]+$/i,
                            message: 'Можно использовать только буквы русского алфавита'
                        }
                    })}
                    />
                </label>
                <div style={{ height: 20 }}>
                    {errors?.surName && <p style={{fontSize:'15px'}}>{errors?.surName?.message || 'Error'}</p>}
                </div>


                <label>
                    Пол:
                    <input name='gender' type='radio' value='мужской' {...register('gender', {
                        required: 'Поле обязательно к заполнению',
                    })}
                    /><span style={{fontWeight:'normal'}}>Мужской</span>
                    <input name='gender' type='radio' value='женский' {...register('gender', {
                        required: 'Поле обязательно к заполнению',
                    })}
                    /><span style={{fontWeight:'normal'}}>Женский</span>
                </label>
                <div style={{ height: 20 }}>
                    {errors?.gender && <p style={{fontSize:'15px'}}>{errors?.gender?.message || 'Error'}</p>}
                </div>


                <label>
                    Возраст:
                    <input type='number' defaultValue={userData.age} {...register('age', {
                        required: 'Поле обязательно к заполнению',
                        min: {
                            value: 1,
                            message: 'Значение должно быть от 1 до 99'
                        },
                        max: {
                            value: 99,
                            message: 'Значение должно быть от 1 до 99'
                        },
                        minLength: {
                            value: 1,
                            message: 'Значение должно быть от 1 до 99'
                        },
                        maxLength: {
                            value: 2,
                            message: 'Значение должно быть от 1 до 99'
                        }
                    })}
                    />
                </label>
                <div style={{ height: 20 }}>
                    {errors?.age && <p style={{fontSize:'15px'}}>{errors?.age?.message || 'Error'}</p>}
                </div>


                <label>
                    Страна:
                    <input defaultValue={userData.location.country} {...register('location.country', {
                        required: 'Поле обязательно к заполнению',
                        minLength: {
                            value: 4,
                            message: 'Минимум 5 символов'
                        },
                        maxLength: {
                            value: 12,
                            message: 'Максимум 12 символов'
                        },
                        pattern: {
                            value: /^[А-Яа-яЁё]+$/i,
                            message: 'Можно использовать только буквы русского алфавита'
                        }
                    })}
                    />
                </label>
                <div style={{ height: 20 }}>
                    {errors?.location?.country && <p style={{fontSize:'15px'}}>{errors?.location?.country?.message || 'Error'}</p>}
                </div>

                <label>
                    Город:
                    <input defaultValue={userData.location.state} {...register('location.state', {
                        required: 'Поле обязательно к заполнению',
                        minLength: {
                            value: 4,
                            message: 'Минимум 5 символов'
                        },
                        maxLength: {
                            value: 12,
                            message: 'Максимум 12 символов'
                        },
                        pattern: {
                            value: /^[А-Яа-яЁё\s]+$/,
                            message: 'Можно использовать только буквы русского алфавита'
                        }
                    })}
                    />
                </label>
                <div style={{ height: 20 }}>
                    {errors?.country && <p style={{fontSize:'15px'}}>{errors?.country?.message || 'Error'}</p>}
                </div>

                <label>
                    Улица:
                    <input defaultValue={userData.location.street} {...register('location.street', {
                        required: 'Поле обязательно к заполнению',
                        minLength: {
                            value: 4,
                            message: 'Минимум 4 символа'
                        },
                        maxLength: {
                            value: 25,
                            message: 'Максимум 25 символов'
                        },
                        pattern: {
                            value: /^[А-Яа-яЁё\s]+$/,
                            message: 'Можно использовать только буквы русского алфавита'
                        }
                    })}
                    />
                </label>
                <div style={{ height: 20 }}>
                    {errors?.street && <p style={{fontSize:'15px'}}>{errors?.street?.message || 'Error'}</p>}
                </div>


                <label>
                    Номер дома:
                    <input defaultValue={userData.location.homeNum} {...register('location.homeNum', {
                        required: 'Поле обязательно к заполнению',
                        min: {
                            value: 1,
                            message: 'Минимум 5 символов'
                        },
                        max: {
                            value: 999,
                            message: 'Значение должно быть от 1 до 999'
                        },
                        pattern: {
                            value: /^[0-9]+$/i,
                            message: 'Можно использовать только числа от 1 до 999'
                        }
                    })}
                    />
                </label>
                <div style={{ height: 20 }}>
                    {errors?.homeNum && <p style={{fontSize:'15px'}}>{errors?.homeNum?.message || 'Error'}</p>}
                </div>



                <label>
                    Почта:
                    <input defaultValue={userData.email} {...register('email', {
                        required: 'Поле обязательно к заполнению',
                        minLength: {
                            value: 5,
                            message: 'Минимум 5 символов'
                        },
                        maxLength: {
                            value: 25,
                            message: 'Максимум 25 символов'
                        },
                        pattern: {
                            value: /^([^ ]+@[^ ]+\.[a-z]{2,6}|)$/,
                            message: 'Можно использовать только буквы латинского алфавита'
                        }
                    })}
                    />
                </label>
                <div style={{ height: 20 }}>
                    {errors?.email && <p style={{fontSize:'15px'}}>{errors?.email?.message || 'Error'}</p>}
                </div>


                <label>
                    Телефон:
                    <input defaultValue={userData.phone} {...register('phone', {
                        required: 'Поле обязательно к заполнению',
                        minLength: {
                            value: 12,
                            message: 'Минимум 12 символов. Формат +7**********(11 цифр)'
                        },
                        maxLength: {
                            value: 12,
                            message: 'Максимум 12 символов. Формат +7**********(11 цифр)'
                        },
                        pattern: {
                            value: /\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}/,
                            message: 'Номер телефона должен быть форматом +7**********(11 цифр)'
                        }
                    })}
                    />
                </label>
                <div style={{ height: 20 }}>
                    {errors?.phone && <p style={{fontSize:'15px'}}>{errors?.phone?.message || 'Error'}</p>}
                </div>

                <button type='submit' disabled={isSaving}>
                {isSaving ? 'Сохранение...' : 'Сохранить'}
              </button> 
            </form>
        </div>
    )
}

export default UserEditContent;