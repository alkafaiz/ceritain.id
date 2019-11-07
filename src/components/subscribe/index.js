import React from "react";
import SubscribeForm from "./subscribe";

const SubscribeSec = props => {
  return (
    <div id="subscribe" className="row mt-sm-5">
      <div className="col-sm-9 mb-4 mb-sm-5 mx-auto text-center">
        <h4 className="h4 color-primary mb-3 mb-sm-4">
          Tertarik untuk bercerita?
        </h4>
        <SubscribeForm addClass={props.addClass} />
      </div>
    </div>
  );
};

export default SubscribeSec;
export { SubscribeForm };
