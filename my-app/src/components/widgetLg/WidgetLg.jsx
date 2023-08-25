import "./widgetLg.css"

export default function widgetLg() {
    const Button = ({type})=>{
      return <button className={"widgetLgButton " + type}>{type}</button>
    }
  return (
    <div className="widgetLg">
      <span className="widgetLgTitle">
        <h3 className="widgetLgTitle">
          Latest Transactions
        </h3>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
            <img src="./assets/Bobai.jpeg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Bobai Phil</span>
            </td>
            <td className="widgetLgDate">2 June 2021</td>
            <td className="widgetLgDate">$122.00</td>
            <td className="widgetLgDate"><Button type="Declined" /></td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
            <img src="./assets/Nathaniel.jpeg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Nathaniel</span>
            </td>
            <td className="widgetLgDate">2 June 2021</td>
            <td className="widgetLgDate">$122.00</td>
            <td className="widgetLgDate"><Button type="Declined" /></td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
            <img src="./assets/Bakueng.jpeg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Bakueng</span>
            </td>
            <td className="widgetLgDate">2 June 2021</td>
            <td className="widgetLgDate">$122.00</td>
            <td className="widgetLgDate"><Button type="Pending" /></td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
            <img src="./assets/Isaac.jpeg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Isaac </span>
            </td>
            <td className="widgetLgDate">2 June 2021</td>
            <td className="widgetLgDate">$122.00</td>
            <td className="widgetLgDate"><Button type="Approved" /></td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
            <img src="./assets/Akoke.jpeg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Akoke </span>
            </td>
            <td className="widgetLgDate">2 June 2021</td>
            <td className="widgetLgDate">$122.00</td>
            <td className="widgetLgDate"><Button type="Approved" /></td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
            <img src="./assets/Daniel.jpeg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Daniel </span>
            </td>
            <td className="widgetLgDate">2 June 2021</td>
            <td className="widgetLgDate">$122.00</td>
            <td className="widgetLgDate"><Button type="Declined" /></td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
            <img src="./assets/Zizoh.png" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Zizoh </span>
            </td>
            <td className="widgetLgDate">2 June 2021</td>
            <td className="widgetLgDate">$122.00</td>
            <td className="widgetLgDate"><Button type="Pending" /></td>
          </tr>
        </table>
      </span>
    </div>
  )
}
