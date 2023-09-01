import "./newUser.css"

export default function NewUser() {
  return (
    <div className="newUser">
        <h1 className="newUserTitle">New User</h1>
        <form className="newUserForm">
          <div className="newUserItem">
            <label>User name</label>
            <input type="text" placeholder="Akare"/>
          </div>
          <div className="newUserItem">
            <label>Full name</label>
            <input type="text" placeholder="Akare Kaze"/>
          </div>
          <div className="newUserItem">
            <label>Email</label>
            <input type="email" placeholder="AkareKaze@gmail.com"/>
          </div>
          <div className="newUserItem">
            <label>Password</label>
            <input type="password" placeholder="Akutsang"/>
          </div>
          <div className="newUserItem">
            <label>Phone number</label>
            <input type="password" placeholder="+234-813-823-646"/>
          </div>
          <div className="newUserItem">
            <label>Address</label>
            <input type="password" placeholder="Lagos | Nigeria"/>
          </div>
          <div className="newUserItem">
            <label>Gender</label>
            <div className="newUserGender">
              <input type="radio" name="gender" id="Female" value="female"/>
              <label for="female">Female</label>
              <input type="radio" name="gender" id="male" value="male"/>
              <label for="male">Male</label>
            </div>
          </div>
          <div className="newUserItem">
            <label>Active</label>
            <select name="active" id="active" className="newUserSelect">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <button className="newUserButton">Create</button>
        </form>
    </div>
  )
}
