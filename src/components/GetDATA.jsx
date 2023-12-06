import React, { useState } from "react";
// import DashboardLayout from "@/app/layouts/dashboard.layout";
import InputBoxComponent from "../components/InputBoxComponent.jsx"

import {
  ClipboardDocumentListIcon,
  HomeIcon,
  HomeModernIcon,
  PhoneIcon,
  PhotoIcon,
  Square3Stack3DIcon,
}

function GetDATA() {
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [area, setArea] = useState("");
  const [bed, setBed] = useState("");
  const [bath, setBath] = useState("");
  const [images, setImages] = useState("");

  const handleType = (e) => {
    setType(e.target.value);
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleLocation = (e) => {
    setLocation(e.target.value);
  };
  const handleArea = (e) => {
    setArea(e.target.value);
  };
  const handleBed = (e) => {
    setBed(e.target.value);
  };
  const handleBath = (e) => {
    setBath(e.target.value);
  };
  const handleImages = (e) => {
    setImages(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://api-dev.srmya.com/Property/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type,
            title,
            price,
            location,
            area,
            bed,
            bath,
            images,
          }),
        }
      );

      if (response.ok) {
        console.log("Property created successfully!");
      } else {
        console.error("Error creating property");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
      <div className="h-full">
        <div className="">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5 justify-center items-center">
              {/*Location And Purpose*/}
              <div className="flex gap-2 w-[800px] border-2 border-gray-100 shadow-sm p-6 rounded-md">
                <div className="flex">
                  <div className="text-sGrey flex flex-1 pl-4 pr-4 mt-3 p-2 w-40 flex-col">
                    <div className="h-8 w-8 bg-primary flex items-center justify-center">
                      <div className="h-6 w-6 text-secondary">
                        {" "}
                        <HomeIcon />{" "}
                      </div>
                    </div>
                    <div>Location And Purpose</div>
                  </div>
                  <div className="flex flex-col pl-4 pr-4 w-[600px] gap-4">
                    <div className="flex gap-2">
                      <InputBoxComponent
                        id="purpose"
                        name="purpose"
                        label="Purpose"
                        color="text-secondary"
                        inputType="select"
                        size="w-56 h-14 px-3 py-2 "
                        options={[
                          { name: "Sell", value: "sell" },
                          { name: "Rent", value: "sent" },
                        ]}
                      />
                      <InputBoxComponent
                        id="type"
                        name="type"
                        label="Property Type"
                        color="text-secondary"
                        inputType="select"
                        size="w-56 h-14 px-3 py-2 "
                        value={type}
                        onChange={handleType}
                        options={[
                          { name: "Plot File", value: "plot-file" },
                          {
                            name: "Plot",
                            value: "land",
                          },
                          { name: "Commercial", value: "commercial" },
                          { name: "Residential", value: "residential" },
                        ]}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <InputBoxComponent
                        id="city"
                        name="city"
                        label="City"
                        color="text-secondary"
                        inputType="text"
                        size="w-4/5 h-14 px-3 py-2 "
                      />
                      <InputBoxComponent
                        id="location"
                        name="location"
                        label="Location"
                        color="text-secondary"
                        inputType="text"
                        size="w-4/5 h-14 px-3 py-2 "
                        value={location}
                        onChange={handleLocation}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Price And Area */}
              <div className="flex gap-2 w-[800px] border-2 border-gray-100  shadow-sm p-6 rounded-md">
                <div className="flex">
                  <div className="text-sGrey flex flex-1 pl-4 pr-4 mt-2 p-2 w-40 flex-col">
                    <div className="h-8 w-8 bg-primary flex items-center justify-center">
                      <div className="h-6 w-6 text-secondary">
                        {" "}
                        <Square3Stack3DIcon />{" "}
                      </div>
                    </div>
                    <div>Price And Area</div>
                  </div>
                  <div className="flex flex-col pl-4 pr-4 w-[600px] gap-4">
                    <div className="flex gap-2">
                      <InputBoxComponent
                        id="area"
                        name="area"
                        label="Area"
                        color="text-secondary"
                        inputType="text"
                        size="w-80 h-14 px-3 py-2"
                        value={area}
                        onChange={handleArea}
                      />
                      <InputBoxComponent
                        id="area"
                        name="area"
                        label="Select Area"
                        color="text-secondary"
                        inputType="select"
                        size="w-28 h-14 px-3 py-2 "
                        options={[
                          { name: "Marla", value: "marla" },
                          {
                            name: "Sq.Ft",
                            value: "Sq.Ft",
                          },
                          { name: "Sq.M", value: "Sq.M" },
                          {
                            name: "Sq.Yd",
                            value: "Sq.Yd",
                          },
                          { name: "Kanal", value: "Kanal" },
                        ]}
                        // value={area}
                        // onChange={handleArea}
                      />
                    </div>
                    <div className="flex flex-row gap-2">
                      <InputBoxComponent
                        id="price"
                        name="price"
                        label="Price"
                        color="text-secondary"
                        inputType="text"
                        size="w-80 h-14 px-3 py-2 "
                        value={price}
                        onChange={handlePrice}
                      />
                      <InputBoxComponent
                        id="select"
                        name="select"
                        label="select"
                        color="text-secondary"
                        inputType="select"
                        size="w-28 h-14 px-3 py-2 "
                        options={[
                          { name: "PKR", value: "PKR" },
                          { name: "USD", value: "USD" },
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/*Feature*/}
              <div className="flex gap-2 w-[800px] border-2 border-gray-100 shadow-sm p-6 rounded-md">
                <div className="flex">
                  <div className="text-sGrey flex flex-1 pl-4 pr-4 mt-4 p-2 w-40 flex-col">
                    <div className="h-8 w-8 bg-primary flex items-center justify-center">
                      <div className="h-6 w-6 text-secondary">
                        {" "}
                        <HomeModernIcon />{" "}
                      </div>
                    </div>
                    <div>Feature And Amenities</div>
                  </div>
                  <div className="flex flex-col pl-4 pr-4 w-[600px] gap-4">
                    <div className="flex gap-2">
                      <InputBoxComponent
                        id="bed"
                        name="bed"
                        label="Beds"
                        color="text-secondary"
                        inputType="select"
                        size="w-56 h-14 px-3 py-2 "
                        options={[
                          { name: "Studio", value: "studio" },
                          {
                            name: "1",
                            value: "1",
                          },
                          { name: "2", value: "2" },
                          { name: "3", value: "3" },
                          {
                            name: "4",
                            value: "4",
                          },
                          { name: "5", value: "5" },
                          { name: "6", value: "6" },
                          {
                            name: "7",
                            value: "7",
                          },
                          { name: "8+", value: "8+" },
                        ]}
                        value={bed}
                        onChange={handleBed}
                      />
                      <InputBoxComponent
                        id="bath"
                        name="bath"
                        label="Baths"
                        color="text-secondary"
                        inputType="number"
                        size="w-56 h-14 px-3 py-2 "
                        value={bath}
                        onChange={handleBath}
                      />
                    </div>
                    <div className="mt-4 flex flex-col space-y-4">
                      {/*Features*/}
                      <h2 className="text-md text-secondary">Features</h2>
                      <div className="flex w-4/5 justify-between">
                        <label className="flex items-center text-xs font-semibold text-secondary">
                          Pet Friendly
                          <input
                            type="checkbox"
                            name="special_features[]"
                            value="Gate entry"
                            className="ml-2 form-checkbox"
                          />
                        </label>

                        <label className="flex items-center text-xs font-semibold  text-secondary">
                          Air conditioning
                          <input
                            type="checkbox"
                            name="special_features[]"
                            value="Night patrol"
                            className="ml-2 form-checkbox"
                          />
                        </label>

                        <label className="flex items-center text-xs font-semibold  text-secondary">
                          parking
                          <input
                            type="checkbox"
                            name="special_features[]"
                            value="Security Camera"
                            className=" ml-2 form-checkbox"
                          />
                        </label>
                      </div>
                      {/*Building Amenities*/}
                      <h2 className="text-md  text-secondary">
                        Building Amenities
                      </h2>
                      <div className="flex w-4/5 justify-between">
                        <label className="flex items-center text-xs font-semibold text-secondary">
                          Basket Ball
                          <input
                            type="checkbox"
                            name="Basketball court"
                            value="Basketball court"
                            className=" ml-2 form-checkbox"
                          />
                        </label>

                        <label className="flex items-center text-xs font-semibold  text-secondary">
                          Tennis Court
                          <input
                            type="checkbox"
                            name="building_amenities[]"
                            value="Tennis court"
                            className="ml-2 form-checkbox"
                          />
                        </label>

                        <label className="flex items-center text-xs font-semibold  text-secondary">
                          Football Ground
                          <input
                            type="checkbox"
                            name="building_amenities[]"
                            value="Football ground"
                            className="ml-2 form-checkbox"
                          />
                        </label>
                      </div>
                      {/*Security Features*/}
                      <h2 className="text-md text-secondary">
                        Security Features
                      </h2>
                      <div className="flex w-4/5 justify-between">
                        <label className="flex items-center text-xs font-semibold text-secondary">
                          Gate Entry
                          <input
                            type="checkbox"
                            name="security_features[]"
                            value="Gate entry"
                            className="ml-2 form-checkbox"
                          />
                        </label>

                        <label className="flex items-center text-xs font-semibold  text-secondary">
                          Night Petrol
                          <input
                            type="checkbox"
                            name="security_features[]"
                            value="Night patrol"
                            className="ml-2 form-checkbox"
                          />
                        </label>

                        <label className="flex items-center text-xs font-semibold  text-secondary">
                          Security Camera
                          <input
                            type="checkbox"
                            name="security_features[]"
                            value="Security Camera"
                            className=" ml-2 form-checkbox"
                          />
                        </label>
                      </div>
                      {/*Services*/}
                      <h2 className="text-md text-secondary">Services</h2>
                      <div className="flex w-4/5 justify-between">
                        <label className="flex items-center text-xs font-semibold text-secondary">
                          Online rent payment
                          <input
                            type="checkbox"
                            name="services[]"
                            value="Gate entry"
                            className="ml-2 form-checkbox"
                          />
                        </label>

                        <label className="flex items-center text-xs font-semibold  text-secondary">
                          Onsite management
                          <input
                            type="checkbox"
                            name="services[]"
                            value="Night patrol"
                            className="ml-2 form-checkbox"
                          />
                        </label>

                        <label className="flex items-center text-xs font-semibold  text-secondary">
                          Shared Laundry
                          <input
                            type="checkbox"
                            name="services[]"
                            value="Security Camera"
                            className=" ml-2 form-checkbox"
                          />
                        </label>
                      </div>
                      {/*Special Features*/}
                      <h2 className="text-md text-secondary">
                        Special Features
                      </h2>
                      <div className="flex w-4/5 justify-between">
                        <label className="flex items-center text-xs font-semibold text-secondary">
                          24 hours availability
                          <input
                            type="checkbox"
                            name="special_features[]"
                            value="Gate entry"
                            className="ml-2 form-checkbox"
                          />
                        </label>

                        <label className="flex items-center text-xs font-semibold  text-secondary">
                          BBQ/Pinic Area
                          <input
                            type="checkbox"
                            name="special_features[]"
                            value="Night patrol"
                            className="ml-2 form-checkbox"
                          />
                        </label>

                        <label className="flex items-center text-xs font-semibold  text-secondary">
                          Efficient Appliances
                          <input
                            type="checkbox"
                            name="special_features[]"
                            value="Security Camera"
                            className=" ml-2 form-checkbox"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Add Information*/}
              <div className="flex gap-2 w-[800px] border-2 border-gray-100 shadow-sm p-6 rounded-md">
                <div className="flex">
                  <div className="text-sGrey flex flex-1 pl-4 pr-4 mt-4 p-2 w-40 flex-col">
                    <div className="h-8 w-8 bg-primary flex items-center justify-center">
                      <div className="h-6 w-6 text-secondary">
                        {" "}
                        <ClipboardDocumentListIcon />{" "}
                      </div>
                    </div>
                    <div>Add Information</div>
                  </div>
                  <div className="flex flex-col pl-4 pr-4 w-[600px] gap-4">
                    <div className="">
                      <InputBoxComponent
                        id="title"
                        name="title"
                        label="Title"
                        color="text-secondary"
                        inputType="text"
                        size="w-4/5 h-14 px-3 py-2 "
                        value={title}
                        onChange={handleTitle}
                      />
                    </div>
                    <div className="flex flex-row gap-2">
                      <InputBoxComponent
                        id="description"
                        name="description"
                        label="Description"
                        color="text-secondary"
                        inputType="textarea"
                        size="w-4/5 px-3 py-2 "
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/*Property Images*/}
              <div className="flex gap-2 w-[800px] border-2 border-gray-100 shadow-sm p-6 rounded-md">
                <div className="flex">
                  <div className="text-sGrey flex flex-1 pl-4 pr-4 mt-1 p-2 w-40 flex-col">
                    <div className="h-8 w-8 bg-primary flex items-center justify-center">
                      <div className="h-6 w-6 text-secondary">
                        {" "}
                        <PhotoIcon />{" "}
                      </div>
                    </div>
                    <div>Property Images</div>
                  </div>
                  <div className="flex flex-col pl-4 pr-4 w-[600px]">
                    <div className="">
                      <InputBoxComponent
                        id="images"
                        name="images"
                        label="images"
                        color="text-secondary"
                        inputType="url"
                        size="w-4/5 h-14 px-3 py-2"
                        placeholder="https://image.com"
                        value={images}
                        onchange={handleImages}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/*Contact Information*/}
              <div className="flex gap-2 w-[800px] border-2 border-gray-100 shadow-sm p-6 rounded-md">
                <div className="flex">
                  <div className="text-sGrey flex flex-1 pl-4 pr-4 mt-4 p-2 w-40 flex-col">
                    <div className="h-8 w-8 bg-primary flex items-center justify-center">
                      <div className="h-6 w-6 text-secondary">
                        {" "}
                        <PhoneIcon />{" "}
                      </div>
                    </div>
                    <div>Contact Information</div>
                  </div>
                  <div className="flex flex-col pl-4 pr-4 w-[600px] gap-4">
                    <div className="">
                      <InputBoxComponent
                        id="email"
                        name="email"
                        label="Email"
                        color="text-secondary"
                        inputType="email"
                        size="w-4/5 h-14 px-3 py-2 "
                      />
                    </div>
                    <div className="flex flex-row gap-2">
                      <InputBoxComponent
                        id="mobile"
                        name="mobile"
                        label="Mobile"
                        color="text-secondary"
                        inputType="text"
                        size="w-56 h-14 px-3 py-2 "
                      />
                      <InputBoxComponent
                        id="landLine"
                        name="landLine"
                        label="Landline"
                        color="text-secondary"
                        inputType="text"
                        size="w-56 h-14 px-3 py-2 "
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/*button*/}
              <div className="flex justify-end w-[520px]">
                <button
                  type="submit"
                  className="px-4 py-2 bg-sBlue text-white rounded-lg hover:bg-secondary focus:outline-none"
                >
                  Create Property
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
  );
}


export default GetDATA