import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateName, updateEmail } from "../redux/actions";

const UserInfo = () => {
    const dispatch = useDispatch();

    const {name, email} = useSelector((state) => state);

    return(
        <div>
            <h1>User Information</h1>
            <div>
                <label>Name:</label>
                <input 
                    type="text"
                    value={name}
                    onChange={(e) => dispatch(updateName(e.target.value))}
                />
            </div>
            <div>
                <label>Email:</label>
                <input 
                    type="email"
                    value={email}
                    onChange={(e) => dispatch(updateEmail(e.target.value))}
                />
            </div>
            <p>Current values in store:</p>
            <div className="output">
                <p>Name - {name}</p>
                <p>Email - {email}</p>
            </div>
        </div>
    );
};

export default UserInfo;