import React from 'react';
import PropTypes from 'prop-types';
import { requestNewPaperOrder } from '../../services/alpacaOrders';
import { useSelector } from '../../state/AlpacaProvider';
import { getAllAlpaca } from '../../selectors/alpacaSelector';
import { useAccessToken } from '../../state/authProvider';
import { newSymbol, newQty } from '../../actions/alpacaActions';
import { useDispatch } from '../../state/AlpacaProvider';

// eslint-disable-next-line max-len
function AlpacaForm() {
  // eslint-disable-next-line max-len
  const dispatch = useDispatch();
  const alpacaData = useSelector(getAllAlpaca);
  console.log(alpacaData);
  const accessToken = useAccessToken();
  console.log(accessToken);
  const handleSubmit = (e) => {
    e.preventDefault();
    requestNewPaperOrder(accessToken, alpacaData);
  };

  return (
    <div>
      <form>
        <input onChange={(e) => dispatch(newSymbol(e.target.value))} placeholder="symbol" type="text" />
        <input onChange={(e) => dispatch(newQty(e.target.value))} placeholder="qty" type="number" />
        <select>
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
        </select>
        <select>
          <option value="market">Market</option>
          <option value="limit">Limit</option>
          <option value="stop">Stop</option>
        </select>
        <select>
          <option value="day">Day</option>
          <option value="gtc">Good Until Canceled</option>
          <option value="opg">Market On Open</option>
          <option value="cls">Market On Close</option>
          <option value="ioc">Immediate Or Cancel</option>
          <option value="fok">Fill Or Kill</option>
        </select>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

// AlpacaForm.propTypes = {
//   symbol: PropTypes.string.isRequired,
//   qty: PropTypes.number.isRequired,
//   side: PropTypes.string.isRequired,
//   order: PropTypes.string.isRequired,
//   timeInForce: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired
// };

export default AlpacaForm;
