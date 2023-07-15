import React, { useState, useEffect } from "react";
import { Header } from "../home/header";
import axios from "axios";
// import qs from "qs";

export const MyTask = () => {

    const [tasksList, showTasklists] = useState([]);
    // const [idleTask, deleteTask] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8081/getTaskList')
            .then((tasksList) => { showTasklists(tasksList.data) })
            .catch((err) => { console.log(err) })
    }, []);

    // const remove = () => {
    //     console.log('delete button is clicked')
    //     deleteTask(prev => !prev)
    // }
    return (
        <div>
            <Header />
            <div className="container">
                <div className="accordion my-4" id="accordionExample">
                    {tasksList.map((item, index) => {
                        return (
                            <div className="accordion-item my-5" key={index}>
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#task${index}`} aria-expanded="true" aria-controls="collapseOne">
                                        <span className="fs-3 text-dark">{item.title}</span>
                                    </button>
                                </h2>
                                <div id={`task${index}`} className="accordion-collapse collapse d-flex justify-content-between" style={{ height: 'auto' }} data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>{item.description}</strong>
                                    </div>
                                    <div className="d-flex">
                                        <div>
                                            <p className="accordion-body">SLA:&nbsp;<span>{item.sla}</span></p>
                                        </div>
                                        <div className="accordion-body">
                                            <p className="">Priority:&nbsp;<span>{item.priority}</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div>

                                    <button type='button' className="btn btn-danger ms-2" style={{ width: '80px' }} >Delete</button>

                                </div>
                            </div>
                        )
                    })}


                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>This is the second item's accordion body.</strong>
                                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}