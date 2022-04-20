import React, {Component} from 'react';

export class Education extends Component{
    render () {
        return(
            <section>
                <h1>EDUCATIONAL EXPERIENCE</h1><form>
                <br /><input type="text" name="schoolname" placeholder='School Name'/>
                <br />
                <input type="text" name="studytitle" placeholder='Title of Study' />
                <br />
                <input type="date" name="dateofstudy" placeholder='Date of Study' />
            </form>
            </section>            
        )
    }
}