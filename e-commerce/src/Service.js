import React from 'react';
import Cards from './card.js';
import sdata from './sdata.js';
const Service = () => {
    return (
        <div>
            <h1 className="text-center">Our Services</h1>
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {
                            sdata.map((val, ind) => {
                                return <Cards key={ind}
                                    image={val.imgsrc}
                                    title={val.title} />
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Service;