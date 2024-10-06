import styled from 'styled-components';
import { Currency } from '../interfaces/Currencies';

// Styled component for the overall list of currencies
const AllCurrenciesDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: #FAF9F6;
    padding: 20px;
`;

// Styled component for individual currency items
const SingleCurrencyDiv = styled.div<{ minSize: string }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: #fbf7f5;  // Soft beige background #f9e4c7
    color: #333;  // Darker color for text contrast
    border: 3px darkred solid;
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
    text-align: center;
`;



// CurrencyList component
const CurrencyList = (props: { currencies: Currency[] }) => {
    console.log('Currencies:', props.currencies); // Debugging
    return (
        <AllCurrenciesDiv>
            {props.currencies.map((currency: Currency) => (
                <SingleCurrencyDiv key={currency.id} minSize={currency.min_size}>
                    <h1>{currency.name} ({currency.id})</h1>
                    <p>Min Size: {currency.min_size}</p>
                </SingleCurrencyDiv>
            ))}
        </AllCurrenciesDiv>
    );
};


export default CurrencyList;
