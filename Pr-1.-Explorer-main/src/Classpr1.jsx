import { Component } from "react";

class Classpr1 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <table border={2} width={900}>
                    <tr>
                        <td width={150}>grid</td>
                        <td width={150}>name</td>
                        <td width={150}>email</td>
                        <td width={150}>password</td>
                        <td width={150}>course</td>
                        <td width={150}>city</td>
                    </tr>
                    {
                        this.props.data.map((val) => {
                            return (
                                <tr>
                                    <td>{val.grid}</td>
                                    <td>{val.name}</td>
                                    <td>{val.email}</td>
                                    <td>{val.password}</td>
                                    <td>{val.course.map((c) => {
                                        return (
                                            <ul>
                                                <li>{c}</li>
                                            </ul>
                                        )
                                    })}</td>
                                    <td>{val.city}</td>

                                </tr>
                            )
                        })
                    }</table>
            </div>
        )
    }
}
export default Classpr1