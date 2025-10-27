import React from "react";
import Button from "../../components/Button";

const WhyChoose = () => {
  return (
    <section className=" container mx-auto max-w-screen-2xl py-6 px-4">
      <div className="my-24 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-center">
        <div>
          <h1 className="font-bold text-3xl">
            Why <br />
            Choosing Us
          </h1>
        </div>
        <div>
          <h1 className="font-bold text-2xl mb-2 md:mb-3">Luxury facilities</h1>
          <h5 className="text-gray-500">
            The advantage of hiring a worksh5ace with us is that givees you
            comfortable service and all-around facilities.
          </h5>

          <Button text="More info" />
        </div>
        <div>
          <h1 className="font-bold  mb-2 md:mb-3 text-2xl">Affordable Price</h1>
          <h5 className="text-gray-500">
            You can get a workspace of the highst quality at an affordable price
            and still enjoy the facilities that are oly here.
          </h5>

          <Button text="More info" />
        </div>
        <div>
          <h1 className="font-bold text-2xl  mb-2 md:mb-3">Many Choices</h1>
          <h5 className="text-gray-500">
            We provide many unique work space choices so that you can choose the
            workspace to your liking.
          </h5>

          <Button text="More info" />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
