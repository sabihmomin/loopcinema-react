import React from "react";

const DeleteModal=(props)=>{
const {name , confirmClick , cancelClick}=props;

    return(
        <>
        <div className="block text-center text-white font-bold text-2xl">Are you sure , you want to delete the {name}</div>
        <div className="m-14 mb-0 flex justify-evenly">
            <button onClick={confirmClick} className="bg-[#ff2e38] text-white w-[25%] p-2 rounded-md  border-2 border-[#ff2e38] hover:bg-transparent hover:text-[#ff2e38] font-semibold" data-testid="Delete-Yes">
                YES
            </button>
            <button onClick={cancelClick} className="bg-[#ff2e38] text-white w-[25%] p-1 rounded-md border-2 border-[#ff2e38] hover:bg-transparent hover:text-[#ff2e38] font-semibold" data-testid="Delete-No">
                NO
            </button >
        </div>
        </>
    )
}

export default DeleteModal;