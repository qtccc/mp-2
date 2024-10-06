import { useState, useEffect } from 'react';  // Import React
import styled from 'styled-components';
import CurrencyList from './components/CurrencyList'; // Updated import
import { Currency } from './interfaces/Currencies'; // Import the interface

// Styled ParentDiv
const ParentDiv = styled.div`
  width: 80vw;
  margin: auto;
  border: 5px darkgoldenrod solid;
`;

const App = () => {
    const [currencies, setCurrencies] = useState<Currency[]>([]); // Explicitly type the state

    useEffect(() => {
        // Function to fetch currencies
        const fetchCurrencies = async () => {
            try {
                const response = await fetch('https://api.coinbase.com/v2/currencies');
                const data = await response.json();
                setCurrencies(data.data); // API data structure
            } catch (error) {
                console.error('Error fetching the currencies:', error);
            }
        };

        fetchCurrencies()  // Call the async function
            .then(() => console.log('Data fetched successfully'))  // Then block
            .catch((e: Error) => console.error('There was an error: ', e));  // Catch block
    }, []);  // Empty dependency array means it runs only once

    return (
        <ParentDiv>
            <h1>Global Currency Codes and Names</h1>
            <CurrencyList currencies={currencies} /> {/* Updated component usage */}
        </ParentDiv>
    );
};

export default App;
