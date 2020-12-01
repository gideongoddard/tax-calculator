import React from 'react';
import './Results.css';

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onReset();
    }

    render() {
        return (
            <div className="results" style={{ display: this.props.formSubmitted ? 'block' : 'none' }}>
                <div className="content-box key-results">
                    <div className="key-result">
                        <div className="label">Your salary</div>
                        <div className="key-data">{this.props.income.toLocaleString('en-GB', {style: 'currency', currency: 'GBP', maximumFractionDigits: 2})}</div>
                    </div>
                    <div  className="key-result">
                        <div className="label">Your icome tax</div>
                        <div className="key-data">{this.props.incomeTax.toLocaleString('en-GB', {style: 'currency', currency: 'GBP', maximumFractionDigits: 2})}</div>
                    </div>
                </div>
                <div className="content-box full-results">
                    <h3>Breakdown by tax band</h3>
                    <div style={{ display: this.props.scotland ? 'none' : 'block' }} className="breakdown">
                        <table>
                            <thead>
                                <tr>
                                    <th>Band</th>
                                    <th>Income</th>
                                    <th>Tax</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Personal allowance</td>
                                    <td>{this.props.taxBreakdown.personalAllowanceAmount.toLocaleString('en-GB', {style: 'currency', currency: 'GBP', maximumFractionDigits: 2})}</td>
                                    <td>{this.props.taxBreakdown.personalAllowanceTax.toLocaleString('en-GB', {style: 'currency', currency: 'GBP', maximumFractionDigits: 2})}</td>
                                </tr>
                                <tr>
                                    <td>Basic rate</td>
                                    <td>{this.props.taxBreakdown.basicAmount.toLocaleString('en-GB', {style: 'currency', currency: 'GBP', maximumFractionDigits: 2})}</td>
                                    <td>{this.props.taxBreakdown.basicTax.toLocaleString('en-GB', {style: 'currency', currency: 'GBP', maximumFractionDigits: 2})}</td>
                                </tr>
                                <tr>
                                    <td>Higher rate</td>
                                    <td>{this.props.taxBreakdown.higherAmount.toLocaleString('en-GB', {style: 'currency', currency: 'GBP', maximumFractionDigits: 2})}</td>
                                    <td>{this.props.taxBreakdown.higherTax.toLocaleString('en-GB', {style: 'currency', currency: 'GBP', maximumFractionDigits: 2})}</td>
                                </tr>
                                <tr>
                                    <td>Additional rate</td>
                                    <td>{this.props.taxBreakdown.additionalAmount.toLocaleString('en-GB', {style: 'currency', currency: 'GBP', maximumFractionDigits: 2})}</td>
                                    <td>{this.props.taxBreakdown.additionalTax.toLocaleString('en-GB', {style: 'currency', currency: 'GBP', maximumFractionDigits: 2})}</td>
                                </tr>
                                <tr>
                                    <td className="total">Total</td>
                                    <td className="total">{this.props.taxBreakdown.totalIncome.toLocaleString('en-GB', {style: 'currency', currency: 'GBP', maximumFractionDigits: 2})}</td>
                                    <td className="total">{this.props.taxBreakdown.totalTax.toLocaleString('en-GB', {style: 'currency', currency: 'GBP', maximumFractionDigits: 2})}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div style={{ display: this.props.scotland ? 'block' : 'none' }} className="breakdown">
                        <table>
                            <thead>
                                <tr>
                                    <th>Band</th>
                                    <th>Income</th>
                                    <th>Tax</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Personal allowance</td>
                                    <td>{this.props.taxBreakdown.scotPersonalAllowanceAmount.toLocaleString('en-GB', {style: 'currency', currency: 'GBP', maximumFractionDigits: 2})}</td>
                                    <td>{this.props.taxBreakdown.scotPersonalAllowanceTax.toLocaleString('en-GB', {style: 'currency', currency: 'GBP', maximumFractionDigits: 2})}</td>
                                </tr>
                                <tr>
                                    <td>Starter rate</td>
                                    <td>{this.props.taxBreakdown.scotStarterAmount.toLocaleString('en-GB', {style: 'currency', currency: 'GBP', maximumFractionDigits: 2})}</td>
                                    <td>{this.props.taxBreakdown.scotStarterTax.toLocaleString('en-GB', {style: 'currency', currency: 'GBP', maximumFractionDigits: 2})}</td>
                                </tr>
                                <tr>
                                    <td>Basic rate</td>
                                    <td>{this.props.taxBreakdown.scotBasicAmount.toLocaleString('en-GB', {style: 'currency', currency: 'GBP', maximumFractionDigits: 2})}</td>
                                    <td>{this.props.taxBreakdown.scotBasicTax.toLocaleString('en-GB', {style: 'currency', currency: 'GBP', maximumFractionDigits: 2})}</td>
                                </tr>
                                <tr>
                                    <td>Intermediate rate</td>
                                    <td>{this.props.taxBreakdown.scotIntermediateAmount.toLocaleString('en-GB', {style: 'currency', currency: 'GBP', maximumFractionDigits: 2})}</td>
                                    <td>{this.props.taxBreakdown.scotIntermediateTax.toLocaleString('en-GB', {style: 'currency', currency: 'GBP', maximumFractionDigits: 2})}</td>
                                </tr>
                                <tr>
                                    <td>Higher rate</td>
                                    <td>{this.props.taxBreakdown.scotHigherAmount.toLocaleString('en-GB', {style: 'currency', currency: 'GBP', maximumFractionDigits: 2})}</td>
                                    <td>{this.props.taxBreakdown.scotHigherTax.toLocaleString('en-GB', {style: 'currency', currency: 'GBP', maximumFractionDigits: 2})}</td>
                                </tr>
                                <tr>
                                    <td>Top rate</td>
                                    <td>{this.props.taxBreakdown.scotTopAmount.toLocaleString('en-GB', {style: 'currency', currency: 'GBP', maximumFractionDigits: 2})}</td>
                                    <td>{this.props.taxBreakdown.scotTopTax.toLocaleString('en-GB', {style: 'currency', currency: 'GBP', maximumFractionDigits: 2})}</td>
                                </tr>
                                <tr>
                                    <td className="total">Total</td>
                                    <td className="total">{this.props.taxBreakdown.scotTotalIncome.toLocaleString('en-GB', {style: 'currency', currency: 'GBP', maximumFractionDigits: 2})}</td>
                                    <td className="total">{this.props.taxBreakdown.scotTotalTax.toLocaleString('en-GB', {style: 'currency', currency: 'GBP', maximumFractionDigits: 2})}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="separator"></div>
                    <button onClick={this.handleClick}>Start again</button>
                </div>
            </div>
        )
    }
}

export default Results;