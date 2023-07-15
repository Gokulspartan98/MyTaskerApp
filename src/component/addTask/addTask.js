import React from "react";
import { useForm } from 'react-hook-form';
import axios from "axios";
import qs from 'qs'
import { Header } from "../home/header";

export const AddTask = () => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            taskTitle: '',
            taskDescription: '',
            taskSLA: '',
            priority: ''
        }
    });

    const onSubmit = (data) => {
        axios({
            url: "http://localhost:8081/addTask",
            method: "POST",
            headers: { "content-type": "application/x-www-form-urlencoded" },
            data: qs.stringify(data),
        }).then(data => console.log(data))
    }



    return (
        <div>
            <Header />
            <div className="container">
                <div className="my-5 text-center">
                    <h3 className="my-5">Create your Task Here</h3>
                    <form className="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="d-flex flex-column align-items-center">
                            <div style={{ width: '500px', height: '60px' }} className="form-floating mb-3">
                                <input type="text" {...register('taskTitle')} className="form-control" id="taskTitleInput" />
                                <label htmlFor="taskTitleInput">Task Title</label>
                            </div>
                            <div style={{ width: '500px', height: '75px' }} className="form-floating mb-3">
                                <textarea style={{ width: '500px', height: '80px' }} {...register('taskDescription')} className="form-control" id="taskDescriptionInput" />
                                <label htmlFor="taskDescriptionInput">Task Description</label>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="form-floating mb-3">
                                <input style={{ width: '250px', height: '60px' }} type="date" {...register('taskSLA')} className="form-control" id="taskSLA" />
                                <label htmlFor="taskSLA">SLA</label>
                            </div>
                            <div className="mb-3">
                                <select {...register('priority')} style={{ width: '250px', height: '60px' }} className="form-select text-bg-light p-3" aria-label="Default select example">
                                    <option selected > select Priority</option>
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                    <option value="very High">very High</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <button style={{ width: '150px', height: '60px' }} className="btn btn-success" type='submit'>Add Task</button>
                        </div>


                    </form>
                </div>

            </div >

        </div >
    )
}