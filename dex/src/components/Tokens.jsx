import "../Tokens.css";
import tokenList from "../tokenList.json";

function Tokens() {
  const styles = {
    wrap: {
      padding: "0 12px",
    },
    title: {
      margin: "0 0 12px 0",
    },
    list: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      borderRadius: "12px",
      overflow: "hidden",
    },
    rowBase: {
      display: "grid",
      alignItems: "center",
      // # | Token (icon+name) | Name (ticker) | Address
      gridTemplateColumns: "56px minmax(200px, 1.4fr) minmax(90px, 0.8fr) minmax(360px, 2fr)",
      gap: "12px",
      padding: "10px 14px",
      borderBottom: "1px solid #2a3550",
    },
    headerRow: {
      fontWeight: 600,
      color: "#c9d3ff",
      background: "rgba(89,129,243,0.05)",
      position: "sticky",
      top: 0,
      zIndex: 1,
    },
    cellNum: { textAlign: "right", opacity: 0.9 },
    tokenCell: { display: "flex", alignItems: "center", minWidth: 200 },
    logo: { width: 28, height: 28, borderRadius: "50%", marginRight: 10 },
    tokenName: { fontSize: 16, fontWeight: 600, whiteSpace: "nowrap" },
    ticker: { fontSize: 14, opacity: 0.85, minWidth: 90, whiteSpace: "nowrap" },
    address: {
      fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
      fontSize: 13,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    row: { color: "#e6ecff" },
    odd: { background: "rgba(14,17,27,0.6)" },
    even: { background: "rgba(14,17,27,0.4)" },
  };

  return (
    <div className="tokens" style={styles.wrap}>
      <h2 style={styles.title}>Token List</h2>

      <ul className="list-group" style={styles.list}>
        {/* Header */}
        <li className="list-group-info" style={{ ...styles.rowBase, ...styles.headerRow }}>
          <div style={styles.cellNum}>#</div>
          <div>Token</div>
          <div>Name</div>
          <div>Address</div>
        </li>

        {/* Rows */}
        {tokenList.map((token, index) => (
          <li key={index} style={{ ...styles.rowBase, ...styles.row, ...(index % 2 ? styles.odd : styles.even) }}>
            <div style={styles.cellNum}>{index + 1}</div>

            <div style={styles.tokenCell}>
              <img src={token.img} alt={token.ticker} style={styles.logo} />
              <span style={styles.tokenName}>{token.name}</span>
            </div>

            <div style={styles.ticker}>{token.ticker}</div>

            <div style={styles.address} title={token.address}>
              {token.address}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tokens;
