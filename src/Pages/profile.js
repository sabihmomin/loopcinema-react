import React, { useEffect, useState } from "react";
import {
  deleteUserAccount,
  getLoggedInUserLocalStorage,
  setLoggedInUserLocalStorage,
  setLoginFlag,
  updateUserinLocalStorage,
} from "../Commons";
import MyReviews from "../Components/MyReviews";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import DeleteModal from "../Components/DeleteModal";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteAccount, findUserDetails, updateUserDetails } from "../Repository/userData";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getUserReviews } from "../Repository/reviewsData";
import MyTickets from "../Components/MyTickets";

const Profile = () => {
  const [isEdit, setIsEdit] = useState(true);
  const [userDetails, setUserDetails] = useState();
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const navigate = useNavigate();

  //modal open and close functions
  const onOpenModal = (type) => {
    setOpen(true);
    setModalType(type);
  };
  const onCloseModal = () => setOpen(false);

  useEffect(() => {
    //storing loggedin User details in state
    // setUserDetails(getLoggedInUserLocalStorage());
    const fetchUserDetails = async (e) => {
      const user = await findUserDetails(getLoggedInUserLocalStorage()?.userId);
      setUserDetails(user);
    };
    fetchUserDetails();
  }, []);

  //profile edit
  const editButtonClick = () => {
    setIsEdit(!isEdit);
  };

  //save edit changes
  const saveButtonClick = async () => {
    setIsEdit(!isEdit);
    const user = await updateUserDetails({
      userId: userDetails?.userId,
      name: userDetails?.name,
    });
    if (user) {
      setUserDetails(user);
      setLoggedInUserLocalStorage(user);
      toast.success("Successfully updated", {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        style: {
          marginTop: "60px",
        },
      });
    } else {
      toast.error("Error in updating details", {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        style: {
          marginTop: "60px",
        },
      });
    }
    // updateUserinLocalStorage(userDetails);
    // setLoggedInUserLocalStorage(userDetails);
  };

  //input handle change function
  const handleChange = (type, val) => {
    setUserDetails({
      ...userDetails,
      [type]: val,
    });
  };

  //delete user function
  const deleteUser = async() => {
    const deletAccount= await deleteAccount(userDetails?.userId);
    if(deletAccount){
      setLoginFlag(false);
  //setting loggedin user to null
  setLoggedInUserLocalStorage([]);
    navigate("/");
    toast.success("Your account has been deleted", {
      position: toast.POSITION.TOP_CENTER,

      hideProgressBar: true,

      style: {
        marginTop: "60px",
      },
    });
  }else{
    toast.error("Unable to delete account", {
          position: toast.POSITION.TOP_CENTER,
          hideProgressBar: true,
          style: {
            marginTop: "100px",
          },
        });
  }
  };
  return (
    <>
      <div className="flex ml-6 mt-10">
        <div className="flex justify-center text-white h-[50%]">
          <div className=" p-6 pt-0 bg-[#272121] rounded-2xl">
            <div className="flex justify-center mt-[-8%]">
              <div className=" w-20 h-20 rounded-full">
                <img src="assets/profile.png"></img>
              </div>
            </div>
            <h2 className="text-xl block text-center font-semibold p-4">
              {userDetails?.name?.toUpperCase()}
            </h2>
            <h2 className="block text-center font-semibold">
              Member Since : {userDetails?.joined}
            </h2>
            <div className="mt-10">
              <label for="username" className="block text-base mb-2">
                Name
              </label>
              <input
                value={userDetails?.name}
                onChange={(e) => handleChange("name", e.target.value)}
                type="text"
                id="username"
                className={`${
                  isEdit ? "border-b" : "border"
                } w-full text-base px-2 py-1  focus:outline-none focus:ring-0 focus:border-[#ff2e38] bg-transparent`}
                placeholder="Enter Name..."
                data-testid="name-edit"
                disabled={isEdit}
              />
            </div>
            <div className="mt-3">
              <label for="username" className="block text-base mb-2">
                Email
              </label>
              <input
                value={userDetails?.email}
                onChange={(e) => handleChange("email", e.target.value)}
                type="text"
                id="username"
                className="border-b w-full text-base px-2 py-1  focus:outline-none focus:ring-0 focus:border-[#ff2e38] bg-transparent"
                placeholder="Enter Email..."
                disabled={true}
              />
            </div>
            <div className="flex justify-evenly">
              {!isEdit ? (
                <div id="1 button" className="mt-7">
                  <button
                    onClick={(e) => {
                      saveButtonClick(e);
                    }}
                    className="border-2 border-[#ff2e38] bg-[#ff2e38] text-white py-1 w-full rounded-md hover:bg-transparent hover:text-[#ff2e38] font-semibold"
                  >
                    &nbsp;&nbsp;Save Changes
                  </button>
                </div>
              ) : (
                <>
                  <div id="2buttons" className="mt-7 ">
                    <button
                      onClick={(e) => {
                        editButtonClick(e);
                      }}
                      className=" m-2"
                      data-testid="edit"
                    >
                      <img
                        width={"25px"}
                        height={"25px"}
                        src="assets/edit.png"
                      />
                    </button>
                  </div>
                  <div className="mt-7">
                    <button
                      onClick={() => {
                        onOpenModal("delete");
                      }}
                      className="m-2"
                      data-testid="delete"
                    >
                      <img
                        width={"25px"}
                        height={"25px"}
                        src="assets/bin.png"
                      />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
          
        </div>
        <div className="ml-[10%] w-[60%] mt-5"> 
            <Tabs className="tabcolor">
              <TabList>
                <Tab>Reviews</Tab>
                <Tab>Tickets</Tab>
              </TabList>
              <TabPanel>
                <div className="w-[100%]">
                  <MyReviews />
                </div>
              </TabPanel>
              <TabPanel>
                <div className="w-[100%]">
                  <MyTickets />
                </div>
              </TabPanel>
            </Tabs>
          </div>
        <Modal
          open={open}
          onClose={onCloseModal}
          center
          classNames={{
            modal: "customDeleteModal",
          }}
        >
          <DeleteModal
            name="account"
            confirmClick={deleteUser}
            cancelClick={onCloseModal}
          />
        </Modal>
      </div>
    </>
  );
};

export default Profile;
