import React from "react";

export const Jumbotron = () => {
	return (
		<div className="container my-5">
            <div className="p-5 text-center bg-body-tertiary rounded-3">
                <h1 className="text-body-emphasis">A Warm Welcome!</h1>
                <p className="col-lg-8 mx-auto fs-5 text-muted">
                This is a custom jumbotron featuring an SVG image at the top, some longer text that wraps early thanks to a responsive <code>.col-*</code> class, and a customized call to action.
                </p>
                <div className="d-inline-flex gap-2 mb-5">
                <button className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" type="button">
                    Call to action
                </button>
                </div>
            </div>
        </div>
	);
};

