import { Email } from '@material-ui/icons';
import React, {Component} from 'react';

export default class GeneralInfo extends Component{
    render() {
        return(
            <section>
                <h1>GENERAL INFORMATION</h1>
                <form>
                    <br /><input type="text" name="name" placeholder='Name' />
                    <br />
                    <input type="text" name="email" placeholder='Email' />
                    <br />
                    <input type="number" name="phonenumber" placeholder='Phone Number' />
                </form>
            </section>
        )
    }
}