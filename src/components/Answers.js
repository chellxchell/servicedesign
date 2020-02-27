import React from 'react';
import '../App.scss';

class Answers extends React.Component {
    constructor(props) {
        super(props);
      }

      render() {
        let entries = [];
        for (let [key,value] of this.props.data.entries()){
            entries.push(
                <tr>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            )
        }
        return (
            <table>
                <tr>
                    <th>Question</th>
                    <th>Answer</th>
                </tr>
                <tbody>
                {entries}
                </tbody>
                
            </table>
        );
      }
}

export default Answers;