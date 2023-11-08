const Input = () => {
  return (
    <>
      <div className="my-5 flex justify-center align-middle">
        <input
          type="search"
          placeholder="Type movie name here"
          className="input   mx-3 w-full max-w-xs"
        />
        <select className=" select select-bordered">
          <option disabled selected>
            Select Catagory
          </option>
           <option>one</option>
        </select>
      </div>
    </>
  );
};

export default Input;
