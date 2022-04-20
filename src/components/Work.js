import React, {Component} from "react";

export class Work extends Component{
    render() {
        return(
            <section>
                <h1>WORK EXPERIENCE</h1>
                <form>
                    <br /><input type="text" name="companyname" placeholder="Company Name" />
                    <br />
                    <input type="text" name="positiontitle" placeholder="Postion Title" />
                    <br />
                    <input type="textarea" name="maintasks" placeholder="Main Tasks"/>
                    <br />
                    <input type="date" name="begindate" placeholder="Begin Date" />
                    <br />
                    <input type="date" name="enddate" placeholder="End Date" />
                </form>
            </section>
        )
    }
}