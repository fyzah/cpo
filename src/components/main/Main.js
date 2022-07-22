import React, { useState, useEffect, useRef } from 'react';
import CharityCard from '../charityCard/CharityCard';
import Modal from '../modal/Modal';
import Search from '../search/Search';
import './Main.css';

export default function Main(props) {
    const { onAdd } = props;
    const inputRef = useRef(null);
    const [charityList, setCharityList] = useState();
    const [query, setQuery] = useState("");
    const [isShowModal, setIsShowModal] = useState(false);

    const getApiData = async () => {
        const response = await fetch(
            "https://charityph-website-content.s3.ap-southeast-1.amazonaws.com/contents/projects.json"
        ).then((response) => response.json());

        setCharityList(response);
    };

    useEffect(() => {
        getApiData();
    }, []);

    const handleAddProject = (project) => {
        const array = charityList;
        array.unshift(project);
        setCharityList(array);
    }

    return (
        <div>
            {isShowModal && <Modal handleClose={setIsShowModal} handleAddProject={handleAddProject} />}
            <div className="row">
                <div className="col-md-8 col-sm-6">
                    <Search inputRef={inputRef} setQuery={setQuery} />
                </div>
                <div className="col-md-4 col-sm-6">
                    <button type="button" className="btn btn-primary float-end" onClick={() => { setIsShowModal(true); console.log('here') }}>Add Project</button>
                </div>
            </div>
            <div id="main">

                {charityList && charityList.filter((charity) =>
                    charity.name.toLowerCase().includes(query) ||
                    charity.mainCause.toLowerCase().includes(query) ||
                    charity.charityDetails.name.toLowerCase().includes(query)
                ).map((charity) => (
                    <CharityCard key={charity.id} data={charity} onAdd={onAdd} />
                ))}
            </div>
        </div>
    );
};