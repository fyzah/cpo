import React, { useState } from 'react';
import "./Modal.css";

export default function Modal(props) {
    const { handleClose, handleAddProject } = props;

    const [projectName, setProjectName] = useState("");
    const [charityName, setCharityName] = useState("");
    const [cause, setCause] = useState("");
    const [description, setDescription] = useState("");

    const [projectNameError, setProjectNameError] = useState("");
    const [charityNameError, setCharityNameError] = useState("");
    const [causeError, setCauseError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");

    const onSubmit = (e) => {
        const isValid = formValidation();
        if (isValid) {
            handleAddProject({
                name: projectName,
                charityDetails: {
                    name: charityName,
                },
                mainCause: cause,
                shortDescription: description
            });
            e.preventDefault();
            handleClose(false);
        }
    }

    const formValidation = () => {
        let isValid = true;
        if (projectName === "") {
            setProjectNameError("Project Name is required.");
            isValid = false;
        } else {
            setProjectNameError("");
        }

        if (charityName === "") {
            setCharityNameError("Charity Name is required.");
            isValid = false;
        } else {
            setCharityNameError("");
        }

        if (cause === "") {
            setCauseError("Cause is required.");
            isValid = false;
        } else {
            setCauseError("");
        }

        if (description === "") {
            setDescriptionError("Description is required.");
            isValid = false;
        } else {
            setDescriptionError("");
        }

        return isValid;
    };

    return (
        <React.Fragment>
            <div className="bg"></div>
            <div className="modalBg">
                <div className="modalContainer">
                    <div className="title">
                        <h3>Add Project</h3>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className="body">
                            <div className="form-group my-2">
                                <input className="form-control" type="text" placeholder="Project Name" onChange={(e) => { setProjectName(e.target.value) }} />
                                {projectNameError && <span className="fs-6" style={{ color: "red" }}>{projectNameError}</span>}
                            </div>
                            <div className="form-group my-2">
                                <input className="form-control" type="text" placeholder="Charity Name" onChange={(e) => { setCharityName(e.target.value) }} />
                                {charityNameError && <span className="fs-6" style={{ color: "red" }}>{charityNameError}</span>}
                            </div>
                            <div className="form-group my-2">
                                <input className="form-control" type="text" placeholder="Cause" onChange={(e) => { setCause(e.target.value) }} />
                                {causeError && <span className="fs-6" style={{ color: "red" }}>{causeError}</span>}
                            </div>
                            <div className="form-group my-2">
                                <textarea className="form-control" placeholder="Description" rows="3" onChange={(e) => { setDescription(e.target.value) }}></textarea>
                                {descriptionError && <span className="fs-6" style={{ color: "red" }}>{descriptionError}</span>}
                            </div>
                        </div>
                        <div className="footer">
                            <button type="button" className="btn btn-danger me-2" onClick={() => { handleClose(false) }}>Cancel</button>
                            <input type="submit" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};