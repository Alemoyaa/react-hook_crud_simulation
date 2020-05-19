import React from 'react'
import {useForm} from "react-hook-form";

const EditUserForm = props => {

    const {register, errors, handleSubmit, setValue} = useForm({
        defaultValues: props.currentUser
    });

    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.name);

    const onSubmit = (data, e) => {
        data.id = props.currentUser.id;
        e.target.reset()
        props.updateUser(props.currentUser.id, data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Nombre</label>
            <input type="text" name="name" ref={
                register({
                    required: {value: true, message: 'Campo Requerido'}
                })
            }/>
            <div>
                {errors?.name?.message}
            </div>
            <label>Nombre de usuario</label>
            <input type="text" name="username" ref={
                register({
                    required: {value: true, message: 'Campo Requerido'}
                })
            }/>
            <div>
                {errors?.username?.message}
            </div>
            <button>Edita usuario</button>
        </form>
    )
}
export default EditUserForm;