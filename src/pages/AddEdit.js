import React, { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import "./AddEdit.css";
import { toast } from "react-toastify";
import { useDispatch,useSelector} from "react-redux";
import { addAction, getAction, updateAction } from "../redux/feature/contacteSlice";

const initialState = {
  name: "",
  email: "",
  phone: "",
  status: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const {contact} = useSelector((state) =>state.contact);
  const dispatch = useDispatch();
  const {id} = useParams();
  const history = useHistory()
  const { name, email, phone, status } = state;

  
useEffect(() =>{
  dispatch(getAction(id));
   setState({...contact});
   console.log(id);
},[id,contact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !status) {
      toast.error("Please provide value into each input field");
    } else {
      if (!id) {
        dispatch(addAction(state))
        toast.success("contact add successfully...!"); 
      }else{
        dispatch(updateAction(state))
        toast.success("contact update successfully...!"); 
      }
          setTimeout(() => {
             history.push("/")
          }, 500);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name ..."
          value={name || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email ..."
          value={email || ""}
          onChange={handleInputChange}
        />
       <label htmlFor="status">Status</label>
        <select
          className="dropdown"
          name="status"
          onChange={handleDropdownChange}
        >
          <option>Please Select Status</option>
          <option value="Active" selected={status === "Active" ? status : ""}>
            Active
          </option>
          <option
            value="Inactive"
            selected={status === "Inactive" ? status : ""}
          >
            Inactive
          </option>
        </select>  
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Your Contact No ..."
          value={phone || ""}
          onChange={handleInputChange}
        />
        <input type="submit" value={id?"Update":"Save"} />
        <Link to="/">
          <input type="button" value="Go Back" />
        </Link>
      </form>
    </div>
  );
};

export default AddEdit;