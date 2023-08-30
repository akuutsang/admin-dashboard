import { PermIdentity, Publish } from "@mui/icons-material"
import { CalendarToday } from "@mui/icons-material"
import { PhoneAndroid } from "@mui/icons-material"
import { MailOutline } from "@mui/icons-material"
import { LocationSearching } from "@mui/icons-material"
import image from "../../images/profilePicture.JPG"

import "./user.css"

export default function User() {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <button className="userAddButton">Create</button>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="./assets/topA.png" alt="" className="userShowImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUserName">Sandra Jacob</span>  
                        <span className="userShowUserTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account details</span>
                    <div className="userShowInfo">
                      <PermIdentity className="userShowIcon"/>
                      <span className="userShowInfoTitle">sandieJay4ever</span>
                    </div>  
                    <div className="userShowInfo">
                      <CalendarToday className="userShowIcon"/>
                      <span className="userShowInfoTitle">06.29.1999</span>  
                    </div> 
                    <span className="userShowTitle">Contact details</span> 
                    <div className="userShowInfo">
                      <PhoneAndroid className="userShowIcon"/>
                      <span className="userShowInfoTitle">+234 8032 1040 64</span>
                    </div>  
                    <div className="userShowInfo">
                      <MailOutline className="userShowIcon"/>
                      <span className="userShowInfoTitle">sandieJay4ever@gmail.com</span>
                    </div>  
                    <div className="userShowInfo">|
                      <LocationSearching className="userShowIcon"/>
                      <span className="userShowInfoTitle">Lagos | Nigeria</span>
                    </div> 
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>User name</label>
                            <input type="text" placeholder="sandieJay4ever" className="userUpdateInput"></input>
                        </div>
                        <div className="userUpdateItem">
                            <label>Full name</label>
                            <input type="text" placeholder="Sandra Jacob" className="userUpdateInput"></input>
                        </div>
                        <div className="userUpdateItem">
                            <label>Date of birth</label>
                            <input type="text" placeholder="06.29.1999" className="userUpdateInput"></input>
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="text" placeholder="sandieJay4ever@gmail.com" className="userUpdateInput"></input>
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone number</label>
                            <input type="text" placeholder="+234 8032 1040 64" className="userUpdateInput"></input>
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text" placeholder="Lagos | Nigeria" className="userUpdateInput"></input>
                        </div>

                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src={image} alt="" />
                            {/* <img className="userUpdateImg" src="https://www.istockphoto.com/photo/funny-kid-girl-playing-outdoor-surprised-emotional-child-in-sunglasses-3-years-old-gm1355723349-430118719" alt="" /> */}
                            <label htmlFor="file">
                                <Publish />
                            </label>
                            <input type="file" id="file"></input>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>
  )
}
