export const getTickers = () => {
  return fetch(
    `https://api.polygon.io/v1/meta/exchanges?&
    apiKey=xAwYuU4o13Zl6SYv1piHrpap_00ywWIE`
  )

    .then((res) => res.json())
    .then(({ tickers }) =>
      tickers.map((ticker) => ({
        id: ticker.id,
        type: ticker.type,
        market: ticker.market,
        name: ticker.name,
        mic: ticker.mic,
        tape: ticker.tape,
        code: ticker.code

      })));
};
