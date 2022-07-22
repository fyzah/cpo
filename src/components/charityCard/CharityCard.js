import React from 'react';

export default function CharityCard(props) {
    const { data, onAdd } = props;
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`https://charityph-website-content.s3.ap-southeast-1.amazonaws.com${data.mainImage}`} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-8 col-sm-6">
                                <h4 className="card-title">{data.name}</h4>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <h4>{data.mainCause}</h4>
                            </div>
                        </div>
                        <h5>By: {data.charityDetails.name}</h5>
                        <p className="card-text">{data.shortDescription}</p>
                        <button type="button" className="btn btn-primary float-end" onClick={() => { onAdd(data) }}>Donate</button>
                    </div>
                </div>
            </div>
        </div>
    );
};